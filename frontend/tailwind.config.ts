import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0a0a0a",
          50: "#1a1a1a",
          100: "#141414",
          200: "#111111",
          300: "#0d0d0d",
        },
        accent: {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          dark: "#6366f1",
        },
        surface: {
          DEFAULT: "#111111",
          elevated: "#1a1a1a",
          border: "#222222",
        },
        muted: "#666666",
        secondary: "#a0a0a0",
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
      },
    },
  },
  plugins: [],
} satisfies Config;
