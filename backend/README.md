# Data Panther — API (FastAPI)

Python 3.13 · FastAPI · Uvicorn · pydantic-settings · Anthropic SDK. Serves the website's chat assistant (`POST /api/v1/chat`) and a health check; features get added under `app/api/routes/`.

## Run locally
All commands run from this `backend/` folder.
```bash
cp .env.example .env
docker compose up -d                     # starts Postgres on localhost:5432

python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements-dev.txt
uvicorn app.main:app --reload            # API on localhost:8000
```
API: http://localhost:8000/api/v1/health · Docs: http://localhost:8000/docs

## Database
`docker-compose.yml` runs only Postgres 17, for local development. Data is kept in the `pgdata` volume between restarts.
- Stop it: `docker compose down`
- Wipe the data: `docker compose down -v`
- Connect: `docker compose exec db psql -U datapanther`

The API reads the connection string from `DATABASE_URL` (see `.env.example`). No database driver is installed yet; add one when the first feature needs it.

## Chat assistant
Optional: the website's chat works without AI by default (see `frontend/README.md`). When AI is switched on (`NEXT_PUBLIC_CHAT_AI=true` on the website), the chat widget sends typed questions to `POST /api/v1/chat`, which asks Claude and streams the reply back as Server-Sent Events.

**Setup:** put an Anthropic API key in `.env` as `ANTHROPIC_API_KEY` (create one at platform.claude.com under Settings > API keys). Without a key the endpoint answers 503 and the website falls back to its no-AI answers.

**How it answers:** the whole website (every page, case study, blog post and article) is in `app/chat/knowledge.md`, which goes into the system prompt and is prompt-cached, so follow-up requests read it at a tenth of the normal input price. The instructions (tone, scope, contact details, what not to invent) are in `app/chat/prompt.py`. The file is generated from `frontend/content`; after changing site content run `npm run content:knowledge` in `frontend/` and commit the result. CI fails if you forget.

**Request:** `{"messages": [{"role": "user", "content": "..."}, ...], "page": "/AIOps/"}`, oldest first, ending with the visitor's message. The API stores nothing; the browser holds the conversation and sends it each turn. Only the newest `CHAT_MAX_MESSAGES` messages are used.

**Response:** `text/event-stream` with `delta` events (`{"text": "..."}`), then exactly one of:
- `done` (`{"truncated": bool}`)
- `refusal` (`{"message": "..."}`): the model declined; the widget replaces the partial reply with this message
- `error` (`{"code": "busy" | "unavailable", "message": "..."}`)

Before streaming starts it can also answer 422 (invalid request), 413 (message too long), 429 (rate limit, with `Retry-After`) or 503 (no API key).

**Safeguards:**
- Rate limits per visitor IP: `CHAT_RATE_PER_MINUTE` and `CHAT_RATE_PER_DAY`. They are kept in memory, so with several API processes each counts separately; move them to Redis if you scale out.
- Message length (`CHAT_MAX_MESSAGE_CHARS`), conversation length and reply length (`CHAT_MAX_OUTPUT_TOKENS`) are capped.
- The model is told to answer only about Data Panther and related topics, not to invent details, and to ignore visitor attempts to change its rules.
- If Claude's safety classifiers decline a request, the API retries it on Anthropic's recommended fallback model in the same stream (`fallbacks="default"`).
- Logs record token counts and timing per reply, never message text.

**Model and cost:** `CHAT_MODEL` (default `claude-opus-5-5`) at `CHAT_EFFORT=low`, which keeps replies quick. Each reply reads about 40K tokens of site content from the cache, plus the conversation and the reply. To lower cost, try `CHAT_MODEL=claude-sonnet-5-5` or `claude-haiku-5-5` and check answer quality on a few real questions first.

**Privacy:** visitor messages are sent to Anthropic to generate replies. Mention this in the privacy policy before going live.

## Checks
```bash
pytest               # tests
ruff check .         # lint
ruff format .        # format
```

## Layout
| What | Where |
|---|---|
| App setup (CORS, routers) | `app/main.py` |
| Settings from env vars | `app/core/config.py` |
| Local Postgres | `docker-compose.yml` |
| Route registry | `app/api/router.py` |
| Endpoints | `app/api/routes/*.py` |
| Chat assistant: prompt, Claude call, site knowledge | `app/chat/` |
| Request/response models | `app/schemas/` |
| Rate limiter | `app/core/ratelimit.py` |
| Tests | `tests/` |

## Adding an endpoint
1. Create `app/api/routes/<name>.py` with an `APIRouter`.
2. Register it in `app/api/router.py`.
3. Add a test in `tests/`.

## Configuration
All settings come from environment variables (see `.env.example`). `ENVIRONMENT=production` hides `/docs`. `CORS_ORIGINS` controls which websites can call the API from a browser.

## Production image
`Dockerfile` builds a slim, non-root image that serves on port 8000 and has a built-in health check:
```bash
docker build -t datapanther-api backend
docker run -p 8000:8000 -e ENVIRONMENT=production datapanther-api
```
