# Data Panther — API (FastAPI)

Python 3.13 · FastAPI · Uvicorn · pydantic-settings. Currently just a health check; features get added under `app/api/routes/`.

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
