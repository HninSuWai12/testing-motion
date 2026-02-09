/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
    plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-white': {
          '-webkit-text-stroke': '2px white',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke': '2px black',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       // This creates a custom utility
//     },
//   },
  // plugins: [
  //   function({ addUtilities }) {
  //     const newUtilities = {
  //       '.text-stroke-white': {
  //         '-webkit-text-stroke': '2px white',
  //       },
  //       '.text-stroke-black': {
  //         '-webkit-text-stroke': '2px black',
  //       },
  //     }
  //     addUtilities(newUtilities)
  //   }
  // ],
// }