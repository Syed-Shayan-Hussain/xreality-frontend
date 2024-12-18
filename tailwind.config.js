

/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  
  content: ["./src/**/*.{html,js,jsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        custom1: ['Josefin Sans', 'sans-serif'],
        custom2: ['Manrope', 'serif'],
        custom3: ['Teachers', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #06BEE7 100%, #BDDEF4 100%, #FFFFFF 0%)',
      },
      scrollbar: {
        hide: 'none',
      },
      colors:{
        primary:'#7534FF'
      }
    },
  },
  plugins: [flowbite.plugin()],
}

