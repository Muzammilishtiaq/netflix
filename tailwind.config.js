/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      height:{
        header:'560px',
        rate:'400px'
      },
      fontSize:{
        h1:'2.6rem',
        smal:'10px'
      },
      screens:{
        xs:'475px'
      },
      colors:{
        main:'#080A1A',
        submain:'#f20000',
        dry:'#0B0F29',
        star:'#FFB000',
        border:'#5b5563',
        dryGray:'#E0D5D5'
      },
      fontSize:{
        lfont:'2rem'
      },
      margin:{
        marneg:'-2rem'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
