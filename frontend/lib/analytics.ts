// Browser side of tracking: Google Tag Manager, consent, and the dataLayer.
// Every third-party tag (GA4, LinkedIn, HubSpot, Apollo) is loaded by GTM, not by this code.
// Docs: docs/integrations/README.md

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";
const CONSENT_KEY = "dp-cookie-consent"; // "accepted" | "rejected", set by the cookie banner

const GRANTED = { ad_storage: "granted", ad_user_data: "granted", ad_personalization: "granted", analytics_storage: "granted" };
const DENIED = { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied" };

// Runs in <head> before GTM: everything denied until the visitor accepts (Google Consent Mode v2).
// A returning visitor who already accepted is granted straight away.
export const consentDefaultsScript = `
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',${JSON.stringify({ ...DENIED, functionality_storage: "granted", security_storage: "granted", wait_for_update: 500 })});
try{if(localStorage.getItem('${CONSENT_KEY}')==='accepted'){gtag('consent','update',${JSON.stringify(GRANTED)});}}catch(e){}`;

export const gtmScript = (id: string) => `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`;

/** Push an event to GTM. Event names and params are listed in docs/integrations/gtm.md. */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  (window.dataLayer ||= []).push({ event, ...params });
}

// gtag() must push the `arguments` object itself; Consent Mode ignores plain arrays.
function gtag(..._args: unknown[]) {
  // eslint-disable-next-line prefer-rest-params
  (window.dataLayer ||= []).push(arguments);
}

export function hasConsent(): boolean | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === null ? null : v === "accepted";
  } catch {
    return null;
  }
}

/** Called by the cookie banner. Updates Consent Mode and tells GTM to fire the tags that were waiting. */
export function setConsent(granted: boolean) {
  try { localStorage.setItem(CONSENT_KEY, granted ? "accepted" : "rejected"); } catch {}
  gtag("consent", "update", granted ? GRANTED : DENIED);
  track("consent_update", { consent: granted ? "granted" : "denied" });
}

function readCookie(name: string) {
  const m = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/[.$?*|{}()[\]\\/+^]/g, "\\$&") + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : undefined;
}

// _ga = "GA1.1.<client id>"; _ga_<stream> = "GS1.1.<session id>.…" or "GS2.1.s<session id>$…"
function gaIds() {
  const ga = readCookie("_ga");
  const clientId = ga?.split(".").slice(2).join(".") || undefined;
  const sess = document.cookie.split("; ").find((c) => c.startsWith("_ga_"))?.split("=")[1];
  const sessionId = sess?.startsWith("GS2") ? sess.match(/[.$]s(\d+)/)?.[1] : sess?.split(".")[2];
  return { clientId, sessionId };
}

/** Sent with every form so HubSpot and GA4 can join the lead to the visit. Cookies only with consent. */
export function trackingContext() {
  const consent = hasConsent() === true;
  const { clientId, sessionId } = consent ? gaIds() : { clientId: undefined, sessionId: undefined };
  return {
    analytics_consent: consent,
    hutk: consent ? readCookie("hubspotutk") : undefined,
    ga_client_id: clientId,
    ga_session_id: sessionId,
    page_uri: window.location.href,
    page_name: document.title,
  };
}
