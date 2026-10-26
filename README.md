# Data Panther

| Folder | What | Docs |
|---|---|---|
| [`frontend/`](frontend/) | Website: Next.js 14 static export, deployed to cPanel | [frontend/README.md](frontend/README.md) |
| [`backend/`](backend/) | API: FastAPI in Docker | [backend/README.md](backend/README.md) |

## Quick start
```bash
# Website: http://localhost:3000
cd frontend && npm install && npm run dev

# API: http://localhost:8000/docs
docker compose up --build
```

## Branches
- `DP-July-2026` is the main branch and the one that gets deployed.
- Work on a feature branch and open a pull request into `DP-July-2026`.
- GitHub Actions (`.github/workflows/ci.yml`) checks both apps on every push and PR. Frontend: lint, type check, build. Backend: ruff, pytest, Docker build.
