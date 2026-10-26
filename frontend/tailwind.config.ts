import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0B1220", 2: "#111927", soft: "#4D5761" },
        night: { DEFAULT: "#040038", 2: "#0A0656", 3: "#120C6E" },
        electric: { DEFAULT: "#001AFF", 2: "#3348FF", soft: "#5D8FFF", mist: "#DDE8FF" },
        violet: { DEFAULT: "#7341AD", soft: "#C68FFF", deep: "#2E0068" },
        mint: { DEFAULT: "#22C36F", deep: "#116238", bg: "#EEF8F2" },
        ember: "#F47A48",
        sun: "#FED340",
        paper: { DEFAULT: "#FFFFFF", warm: "#F7F5F0", cool: "#F4F6FF" },
        line: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter Tight", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: { site: "1360px" },
      borderRadius: { "4xl": "2rem" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        spinslow: { to: { transform: "rotate(360deg)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        shimmer: { from: { backgroundPosition: "200% 0" }, to: { backgroundPosition: "-200% 0" } },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        spinslow: "spinslow 22s linear infinite",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
