import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0f172a",
        slate: {
          950: "#020617",
          900: "#0f172a",
        },
        accent: {
          teal: "#06b6d4",
          blue: "#3b82f6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-assistant)", "system-ui", "sans-serif"],
        hebrew: ["var(--font-assistant)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "glass": "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
      },
      boxShadow: {
        "glow": "0 0 20px rgba(6, 182, 212, 0.3)",
        "glow-strong": "0 0 30px rgba(6, 182, 212, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
