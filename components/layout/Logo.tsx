import Link from "@/components/TLink";

// Uses the existing Data Panther mark; the wordmark is set in type so it stays crisp.
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Data Panther home">
      <img src="/img/dpfavicon.png" alt="" className={`h-9 w-9 object-contain transition-transform duration-500 group-hover:rotate-[-8deg] ${light ? "brightness-0 invert" : ""}`} />
      <span className="leading-none">
        <span className={`block font-display text-[19px] font-semibold tracking-tight ${light ? "text-white" : "text-ink"}`}>Data Panther</span>
        <span className={`mt-1 block text-[9px] font-medium uppercase tracking-[0.28em] ${light ? "text-white/60" : "text-ink-soft"}`}>From data to action</span>
      </span>
    </Link>
  );
}
