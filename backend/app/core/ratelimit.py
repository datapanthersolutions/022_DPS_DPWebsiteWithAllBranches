import time


class FixedWindowLimiter:
    """Counts hits per key in fixed time windows, in memory.

    Good enough for a single API process. With several processes or servers each keeps its own count,
    so the real limit is multiplied; move the counts to Redis or Postgres if that matters.
    """

    def __init__(self, window_seconds: int, max_keys: int = 50_000):
        self.window = window_seconds
        self.max_keys = max_keys
        self._hits: dict[str, tuple[float, int]] = {}  # key -> (window start, count)

    def hit(self, key: str, limit: int) -> int | None:
        """Record one hit. Returns None if allowed, or the seconds to wait if over the limit."""
        now = time.monotonic()
        start, count = self._hits.get(key, (now, 0))
        if now - start >= self.window:
            start, count = now, 0
        if count >= limit:
            return max(1, int(self.window - (now - start)))
        if key not in self._hits and len(self._hits) >= self.max_keys:
            self._purge(now)
        self._hits[key] = (start, count + 1)
        return None

    def _purge(self, now: float) -> None:
        self._hits = {k: v for k, v in self._hits.items() if now - v[0] < self.window}
        if len(self._hits) >= self.max_keys:  # still full of live windows: drop the oldest half
            keep = sorted(self._hits.items(), key=lambda kv: kv[1][0])[len(self._hits) // 2 :]
            self._hits = dict(keep)

    def clear(self) -> None:
        self._hits.clear()
