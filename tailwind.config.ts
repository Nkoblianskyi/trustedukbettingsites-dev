import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-barlow)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        navy: {
          DEFAULT: "hsl(var(--navy))",
          surface: "hsl(var(--navy-surface))",
          panel: "hsl(var(--navy-panel))",
          raised: "hsl(var(--navy-raised))",
          border: "hsl(var(--navy-border))",
          line: "hsl(var(--navy-line))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          bright: "hsl(var(--gold-bright))",
          muted: "hsl(var(--gold-muted))",
        },
      },
      borderRadius: {
        "2xl": "0",
        xl: "0",
        lg: "0",
        md: "0",
        sm: "0",
      },
      boxShadow: {
        card: "0 2px 10px hsl(218 65% 16% / 0.08)",
        "card-hover": "0 6px 28px hsl(218 65% 16% / 0.14)",
        soft: "0 1px 6px hsl(218 65% 16% / 0.06)",
        modal: "0 24px 64px hsl(218 65% 9% / 0.22)",
      },
      maxWidth: {
        site: "1150px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
