"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

// The site changes pages without a full reload, so GTM's "All Pages" trigger only fires once.
// This pushes `dp_page_view` on every later route change, for tags that need it (HubSpot).
// GA4 doesn't need it: its enhanced measurement already tracks history changes.
export default function RouteTracker() {
  const pathname = usePathname();
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    track("dp_page_view", { page_path: pathname, page_location: window.location.href });
  }, [pathname]);
  return null;
}
