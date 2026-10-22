import { forwardRef, type AnchorHTMLAttributes } from "react";
import { useRouter } from "./router";

// next/link stand-in for the single-file preview build.
type P = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
const Link = forwardRef<HTMLAnchorElement, P>(function Link({ href, onClick, target, ...rest }, ref) {
  const { push } = useRouter();
  const internal = href.startsWith("/") || href.startsWith("#");
  return (
    <a ref={ref} href={internal ? "#" : href} target={internal ? undefined : target ?? "_blank"} rel={internal ? undefined : "noopener noreferrer"}
      onClick={(e) => {
        onClick?.(e);
        if (!internal || e.defaultPrevented) return;
        e.preventDefault();
        push(href);
      }} {...rest} />
  );
});
export default Link;
