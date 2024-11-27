/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    container: {
      center: true,
      screens: {
        default: '354px',
        md: '750px',
        lg: '1000px',
        xl: '1280px'
      }
    },
    extend: {
      fontFamily :{
        Poppins : ['Poppins' , 'sans-serif'],
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
   darkMode: "class"
}