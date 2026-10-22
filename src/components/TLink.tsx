"use client";
import NextLink from "next/link";
import { forwardRef, type AnchorHTMLAttributes } from "react";
import { usePageTransition } from "./transition/TransitionProvider";

// Link that plays the page transition before navigating to another internal page.
type P = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
const TLink = forwardRef<HTMLAnchorElement, P>(function TLink({ href, onClick, ...rest }, ref) {
  const { navigate } = usePageTransition();
  return (
    <NextLink ref={ref} href={href} {...rest} onClick={(e) => {
      onClick?.(e);
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      if (!href.startsWith("/") || rest.target === "_blank") return;
      e.preventDefault();
      navigate(href);
    }} />
  );
});
export default TLink;
