# Data Panther — API (FastAPI)

Python 3.13 · FastAPI · Uvicorn · pydantic-settings. Currently just a health check; features get added under `app/api/routes/`.

## Run with Docker (recommended)
From the repo root:
```bash
cp backend/.env.example backend/.env   # optional
docker compose up --build
```
API: http://localhost:8000/api/v1/health · Docs: http://localhost:8000/docs

## Run without Docker
```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements-dev.txt
uvicorn app.main:app --reload
```

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
