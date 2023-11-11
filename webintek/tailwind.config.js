/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1140px",
      "2xl": "1466px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: "0.75",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-color-200": "var(--primary-color-200)",
        "primary-color-300": "var(--primary-color-300)",
        "primary-color-600": "var(--primary-color-600)",
        "primary-color-700": "var(--primary-color-700)",

        "secondary-color": "var(--secondary-color)",
        "secondary-color-600": "var(--secondary-color-600)",
        "secondary-color-700": "var(--secondary-color-700)",

        "third-color": "var(--third-color)",
        "third-color-200": "var(--third-color-200)",
        "third-color-300": "var(--third-color-300)",
        "third-color-600": "var(--third-color-600)",
        "third-color-700": "var(--third-color-700)",

        "white-color": "var(--white-color)",
      },
    },
  },
  plugins: [],
};
