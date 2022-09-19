/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*,{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: "640px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        Xdesktop: "1536px",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        playfair: ["Playfair", "sans-serif"],
        helvitica: ["HelveticaNeueHv", "sans-serif"],
        helviticaTin: ["HelveticaNeueTin", "sans-serif"],
        helveticaNeueBlack: ["HelveticaNeueBlack", "sans-serif"],
        robotoCondensed: ["RobotoCondensed", "sans-serif"],
      },
      fontSize: {
        xss: "12px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
