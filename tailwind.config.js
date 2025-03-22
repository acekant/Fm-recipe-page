/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        White: 'hsl(0, 0%, 100%)',
        Stone_100: 'hsl(30, 54%, 90%)',
        Stone_150: 'hsl(30, 18%, 87%)',
        Stone_600: 'hsl(30, 10%, 34%)',
        Stone_900: 'hsl(24, 5%, 18%)',
        Brown_800: 'hsl(14, 45%, 36%)',
        Rose_800: 'hsl(332, 51%, 32%)',
        Rose_50: 'hsl(330, 100%, 98%)',
        Wrapper_bg: "hsl(29, 53%, 90%)"
      },
      fontFamily:{
        youngSerif: ['"Young Serif"', 'serif'],
        outfit: ["Outfit", "sans-serif"]
      }
    },
  },
  plugins: [],
}

