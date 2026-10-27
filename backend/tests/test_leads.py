import json

import httpx2
import pytest
from fastapi.testclient import TestClient

from app.core.config import Settings, get_settings
from app.core.http import get_http
from app.main import app

CONFIGURED = Settings(
    environment="production",
    hubspot_portal_id="123",
    hubspot_access_token="pat-test",
    hubspot_contact_form_id="contact-guid",
    hubspot_newsletter_form_id="news-guid",
    hubspot_talent_form_id="talent-guid",
    ga4_measurement_id="G-TEST",
    ga4_api_secret="secret",
)


@pytest.fixture
def run():
    """Returns a helper that posts to the API with fake HubSpot/GA4 and records outbound calls."""
    calls: list[httpx2.Request] = []

    def make(settings: Settings = CONFIGURED, hubspot_status: int = 204):
        def handler(req: httpx2.Request) -> httpx2.Response:
            calls.append(req)
            return httpx2.Response(hubspot_status if "hsforms" in req.url.host else 204)

        fake = httpx2.AsyncClient(transport=httpx2.MockTransport(handler))
        app.dependency_overrides[get_settings] = lambda: settings
        app.dependency_overrides[get_http] = lambda: fake
        return TestClient(app), calls

    yield make
    app.dependency_overrides.clear()


CONTACT = {
    "full_name": "Ada Lovelace King",
    "email": "ada@example.com",
    "message": "Hello",
    "tracking": {
        "analytics_consent": True,
        "hutk": "abc",
        "ga_client_id": "111.222",
        "page_uri": "https://x/",
    },
}


def test_contact_goes_to_hubspot_and_ga4(run):
    client, calls = run()
    res = client.post("/api/v1/leads/contact", json=CONTACT, headers={"CF-Connecting-IP": "1.2.3.4"})
    assert res.status_code == 200

    hs, ga = calls
    assert str(hs.url) == "https://api.hsforms.com/submissions/v3/integration/secure/submit/123/contact-guid"
    assert hs.headers["authorization"] == "Bearer pat-test"
    body = json.loads(hs.content)
    assert {"name": "firstname", "value": "Ada"} in body["fields"]
    assert {"name": "lastname", "value": "Lovelace King"} in body["fields"]
    assert body["context"] == {"hutk": "abc", "pageUri": "https://x/", "ipAddress": "1.2.3.4"}

    assert ga.url.path == "/mp/collect"
    ga_body = json.loads(ga.content)
    assert ga_body["client_id"] == "111.222"
    assert ga_body["events"][0]["name"] == "generate_lead"


def test_no_ga4_without_consent(run):
    client, calls = run()
    lead = {**CONTACT, "tracking": {"analytics_consent": False}}
    assert client.post("/api/v1/leads/contact", json=lead).status_code == 200
    assert [c.url.host for c in calls] == ["api.hsforms.com"]


def test_subscribe_uses_list_form(run):
    client, calls = run()
    res = client.post("/api/v1/leads/subscribe", json={"email": "a@example.com", "list": "talent_community"})
    assert res.status_code == 200
    assert calls[0].url.path.endswith("/123/talent-guid")


def test_honeypot_is_dropped(run):
    client, calls = run()
    assert client.post("/api/v1/leads/contact", json={**CONTACT, "website": "spam"}).status_code == 200
    assert calls == []


def test_invalid_email_rejected(run):
    client, _ = run()
    assert client.post("/api/v1/leads/contact", json={**CONTACT, "email": "nope"}).status_code == 422


def test_hubspot_failure_returns_502(run):
    client, _ = run(hubspot_status=400)
    assert client.post("/api/v1/leads/contact", json=CONTACT).status_code == 502


def test_unconfigured(run):
    client, calls = run(Settings(environment="development"))
    assert client.post("/api/v1/leads/contact", json=CONTACT).status_code == 200  # dev: accepted, logged
    client, calls = run(Settings(environment="production"))
    assert client.post("/api/v1/leads/contact", json=CONTACT).status_code == 503
    assert calls == []
