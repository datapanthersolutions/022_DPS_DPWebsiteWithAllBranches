"use client";
import { useEffect } from "react";

// Static hosts match URLs case-sensitively, so /aboutus/ 404s even though /AboutUs/ exists.
// Rendered on the 404 page: if the URL matches a real page apart from letter case
// (or a missing trailing slash), send the visitor there instead.
export default function CaseRedirect({ routes }: { routes: string[] }) {
  useEffect(() => {
    const { pathname, search, hash } = window.location;
    const wanted = (pathname.endsWith("/") ? pathname : pathname + "/").toLowerCase();
    const match = routes.find((r) => r.toLowerCase() === wanted);
    if (match && match !== pathname) window.location.replace(match + search + hash);
  }, [routes]);
  return null;
}
