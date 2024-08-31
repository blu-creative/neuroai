/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        neutral: {
          25: "#F4F4F4",
          50: "#F7F7F7",
          500: "#676666",
          800: "#222222",
        },
        primary: {
          500: "#A11D21",
          700: "#610A0A",
          800: "#450B0B",
        },
      },
      fontFamily: {
        Roboto: ["Roboto-Flex"],
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },

    // fontSize: {
    //   xxs: ["0.625rem", "1.25rem"],
    //   xs: ["0.75rem", "1.25rem"],
    //   sm: ["0.875rem", "1.5rem"],
    //   md: ["1rem", "1.75rem"],
    //   lg: ["1.125rem", "2rem"],
    //   xl: ["1.25rem", "2.25rem"],
    // },
  },
  plugins: [],
};
