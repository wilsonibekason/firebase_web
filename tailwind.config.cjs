/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: "640px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        "2xdesktop": "1536px",
      },
    },
  },
  plugins: [],
};
