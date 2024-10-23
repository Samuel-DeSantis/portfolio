const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'gunmetal': '#182825',
        'vanilla': '#C1BB9C',
        'prussian-blue': '#102B3F',
        'white-ish': '#EBEBEB',
        'salmon': '#D6876D'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

