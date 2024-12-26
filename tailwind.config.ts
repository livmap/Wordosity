import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backblue: "#000e34",
        lightbackblue: "#1b2f70",
        babyblue: "#60b4f9"
      },

      fontFamily: {
        'display': 'Montserrat',
      }
    },
  },
  plugins: [],
} satisfies Config;
