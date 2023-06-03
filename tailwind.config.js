/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      height: {
        "97": "26rem",
        "100": "31.2rem",
        "124": "31.5rem",
        "128": "32rem",
        "130": "42rem",
        "135": "45rem",
        "138": "60rem",
        "140": "80rem",
        "150": "100rem",
      },

      variants: {
        fill: ['hover', 'focus'],
        stroke: ['hover', 'focus'],
      },
      colors:{
        'sea': '#1e1e1e',
        'dbbb': '#ea4c89',
        'lkn': '#0072b1',
        'twttr': '#00acee',
        'gray-950': '#101010',
      },
      gridTemplateColumns: {
        "grid-cols-1fr-5fr" : "1fr minmax(0,5fr)",
      },
      "from-gray-950": {
        "--tw-gradient-from": "#101010",
        "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to,hsla(0,0%,6%,0))",
      },

      dropShadow: {
        "gold": "drop-shadow(0 0 6px rgb(255 255 255/30%))",
      },
      boxShadow: {
        "highlight": "inset 0 1px 0 0 rgb(255 255 255/5%)",
      },
    },
  },
  plugins: [],
}
