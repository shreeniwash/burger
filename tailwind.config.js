/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px"
    },
    extend: {
      colors:{
primaryColor: '#010a5e',
primaryColorLight: "#010d78",
secondaryColor: '#FFCC0e',
paragraphColor: '#c0c0ce',
whiteColor: '#fff',
blackColor: "#000",
greenColor: "#007936",
redColor: "#cc3433",
darkColor: '#000',
darkColorLight: "#171717",

      },
    keyframes:{
        move:{
          "50%":{transformer: 'translateY(-1rem)'}
        }
      },
      animation:{
        'movingY': 'move 2s linear infinite',
      }
    },
    container:{  
      padding:{
        DEFAULT:'1rem',
        sm: '1.5rem'
      }
    },
    fontFamily:{
      oswald:['Oswald','san-serif'],
      dmsans:['DM Sans','sans-serif']
    }
  },
  plugins: [],
}
