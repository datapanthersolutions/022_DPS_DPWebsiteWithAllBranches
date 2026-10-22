export const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");
export const pad = (n: number) => String(n).padStart(2, "0");
