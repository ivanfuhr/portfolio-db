import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        supermolot: ['var(--font-supermolot)', ...fontFamily.sans],
      },
      "colors": {
        "darkBlue": {
          "default": "#201f53",
          "variant1": "#4a48e3",
          "variant2": "#c8d5fd"
        },
        "pink": {
          "default": "#ed177d",
          "variant1": "#ffcbeb",
          "variant2": "#ff65bc"
        },
        "red": {
          "default": "#ef4c56",
          "variant1": "#fccfcf",
          "variant2": "#f7757a"
        },
        "yellow": {
          "default": "#eab53d",
          "variant1": "#f5df93",
          "variant2": "#f9f0c8"
        },
        "green": {
          "default": "#4cbf98",
          "variant1": "#d6f5e6",
          "variant2": "#7ed7b6"
        },
        "blue": {
          "default": "#14b6ef",
          "variant1": "#bee7f9",
          "variant2": "#85d4f4"
        },
        "gray": {
          "light": "#f1f3f0",
          "medium": "#d8d9d7",
          "dark": "#5d5a5b"
        },
        "white": "#ffffff",
        "black": "#292929",
        "status": {
          "success": "#07a24c",
          "warning": "#f9b700",
          "error": "#d70c2f"
        }
      },      
      fontSize: {
        xs: "0.625rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.5rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.25rem"
      }
    },
  },
  plugins: [],
};
export default config;
