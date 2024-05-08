const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primarycolor: '#2563eb',
        primarytext: '#061C3D',
        secundarycolor: '#407BFF',
        bgsecundary: '#F7F7FB',
        colorgreen: '#01C29E'
      },
      fontFamily: {
        'dmsans': ['"DM Sans", sans-serif']
      },
      keyframes: {
        spinIn: {
          to: { transform: 'rotate(18deg)'}
        },
        spinOut: {
          to: { transform: 'rotate(360deg)'}
        }
      },
      animation: {
        spinIn: 'spinIn 30s linear infinite',
        spinout: 'spinIn 10s linear infinite',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("tailwindcss-animate")
  ],
})

