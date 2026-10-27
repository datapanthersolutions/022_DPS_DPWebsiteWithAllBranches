from typing import Literal

from pydantic import BaseModel, EmailStr, Field


class Tracking(BaseModel):
    """Browser context sent with every form, so CRM and analytics can join the visit to the lead.

    The website only fills hutk / ga_* when the visitor accepted cookies.
    """

    analytics_consent: bool = False
    hutk: str | None = Field(default=None, max_length=100)  # hubspotutk cookie
    ga_client_id: str | None = Field(default=None, max_length=100)  # from the _ga cookie
    ga_session_id: str | None = Field(default=None, max_length=100)  # from the _ga_<id> cookie
    page_uri: str | None = Field(default=None, max_length=2000)
    page_name: str | None = Field(default=None, max_length=300)


class ContactLead(BaseModel):
    full_name: str = Field(min_length=1, max_length=200)
    email: EmailStr
    message: str = Field(min_length=1, max_length=5000)
    website: str = ""  # honeypot: hidden on the form, so only bots fill it
    tracking: Tracking = Tracking()


class Subscription(BaseModel):
    email: EmailStr
    list: Literal["newsletter", "talent_community"]
    website: str = ""  # honeypot
    tracking: Tracking = Tracking()


class LeadAccepted(BaseModel):
    status: Literal["ok"] = "ok"
