import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["var(--font-avenir-next)"],
      },
      rotate: {
        'y-180': '180deg',
      },
      backgroundImage: {
        "blue-vertical": "linear-gradient(180deg, hsl(var(--brand-cyan)) 0%, hsl(var(--brand-blue)) 100%)",
        "blue-horizontal": "linear-gradient(90deg, hsl(var(--brand-cyan)) 0%, hsl(var(--brand-blue)) 100%)",
        "hero-gradient": "linear-gradient(180deg, hsl(var(--brand-dark-blue)) 0%, 28%, #00A1FF 49%, 100%)",
        "line-gradient": "linear-gradient(180deg, #00D5FF 0%, #00A1FF 50%, #001531 100%)",
        "seperator-gradient-dark": "linear-gradient(90deg, #101010 0%, #00D5FF 25%, #00A1FF 50%, #00D5FF 75%, #101010 100%)",
        "seperator-gradient-light": "linear-gradient(90deg, #FFFFFF 0%, #00D5FF 25%, #00A1FF 50%, #00D5FF 75%, #FFFFFF 100%)",
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        rainbow: "rainbow var(--speed, 2s) infinite linear",
        gradient: "gradient 3s ease infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0%)' },
          to: { transform: 'translateY(-100%)' },
        },
      },
      colors: {
        // Brand colors
        brand: {
          indigo: "rgba(164, 197, 240, .2)",
          blue: "hsl(var(--brand-blue))",
          'dark-blue': "hsl(var(--brand-dark-blue))",
          cyan: "hsl(var(--brand-cyan))",
          white: "hsl(var(--brand-white))",
        },
        // Existing semantic colors
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          green: "#4ADE80",
          orange: "#FB923C",
          red: "#F87171",
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        'footer-dark': "#232323",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    animate,
    function ({ addBase }) {
      addBase({
        ':root': {
          '--brand-blue': '213 83% 43%',
          '--brand-dark-blue': '213 100% 10%',
          '--brand-cyan': '194 100% 53%',
          '--brand-white': '0 0% 100%',
        },
      })
    }
  ],
};