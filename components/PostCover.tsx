import { cn } from "@/lib/utils";

const palettes = [
  "from-electric via-electric-2 to-violet-soft", "from-night via-violet-deep to-electric", "from-mint-deep via-[#0E7A4A] to-electric-soft",
  "from-[#842C09] via-ember to-violet", "from-violet-deep via-violet to-electric-soft",
];

// Image, or a generated abstract cover for posts that don't have one.
export default function PostCover({ image, title, index = 0, className, label }: { image?: string; title: string; index?: number; className?: string; label?: string }) {
  if (image) return <img src={image} alt={title} loading="lazy" className={cn("h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105", className)} />;
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-gradient-to-br", palettes[index % palettes.length], className)}>
      <div className="grid-bg-dark absolute inset-0 opacity-80" />
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/25 transition-transform duration-700 group-hover:scale-125" />
      <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full border border-white/10" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
      {label && <span className="absolute bottom-6 left-6 max-w-[80%] font-serif text-3xl italic leading-tight text-white/90">{label}</span>}
    </div>
  );
}
