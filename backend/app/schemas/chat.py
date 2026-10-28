from typing import Literal

from pydantic import BaseModel, Field, field_validator


class ChatMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str = Field(min_length=1, max_length=20_000)  # visitor messages are capped lower in the route

    @field_validator("content")
    @classmethod
    def not_blank(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("message is empty")
        return v


class ChatRequest(BaseModel):
    """The conversation so far, oldest first, ending with the visitor's new message.

    The API keeps no state: the website holds the conversation and sends it every turn.
    """

    messages: list[ChatMessage] = Field(min_length=1, max_length=100)
    # Path of the page the visitor is on, e.g. "/AIOps/". Lets the assistant resolve "this service".
    page: str | None = Field(default=None, max_length=300, pattern=r"^/[A-Za-z0-9/_\-.]*$")

    @field_validator("messages")
    @classmethod
    def ends_with_user(cls, v: list[ChatMessage]) -> list[ChatMessage]:
        if v[-1].role != "user":
            raise ValueError("the last message must be from the user")
        return v
