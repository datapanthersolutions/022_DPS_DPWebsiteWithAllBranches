import { trackingContext } from "./analytics";

// FastAPI backend. Set NEXT_PUBLIC_API_URL at build time (see frontend/.env.example).
const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000").replace(/\/$/, "");

/** Send a website form to the backend, which forwards it to HubSpot. Throws if it wasn't accepted. */
export async function submitLead(kind: "contact" | "subscribe", data: Record<string, string>) {
  const res = await fetch(`${API_URL}/api/v1/leads/${kind}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, tracking: trackingContext() }),
  });
  if (!res.ok) throw new Error(`Lead submit failed: ${res.status}`);
}
