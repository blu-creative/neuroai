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
        white: "#FFFFFFF",
        neutral: {
          25: "#F9F9F9",
          50: "#F7F7F7",
          500: "#858585",
          800: "#383838",
        },
        primary: {
          500: "#3366FF",
          800: "#1F4693",
          900: "#001957",
        },
        secondary: {
          500: "#383838",
          700: "#FF3366",
          800: "#FF3366",
          900: "#FF3366",
        },
      },
      fontFamily: {
        Roboto: ["Roboto-Flex"],
        Exo: ["Exo"],
        CerebriSansPro: ["CerebriSansPro"],
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
