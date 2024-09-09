import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "card-xl":
          "0 4px 4px -4px rgba(30,33,44, 0.05), 0 12px 10px -6px rgba(154,156,165, 0.08), 0 30px 24px -10px rgba(154,156,165, 0.1), 0 80px 80px -20px rgba(154,156,165, 0.16)",
        "payment-card":
          "0px 4px 4px -4px #1E212C08, 0px 12px 10px -6px #9A9CA50A, 0px 30px 24px -10px #9A9CA50D, 0px 80px 80px -20px #9A9CA514",
      },
      colors: {
        primary: "#17696A",
        danger: "#FF4242",
        success: "#03CEA4",
        warning: "#F89828",
        info: "#5A87FC",
      },
    },
    screens: {
      xs: "375px",
      mini: "520px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "20px",
        lg: "40px",
        xl: "120px",
        "2xl": "345px",
      },
    },
  },
  plugins: [],
};
export default config;
