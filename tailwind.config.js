// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexendDeca: ['var(--font-lexend-deca)'],
        bigShoulderDisplay: ['var(--font-bigShoulderDisplay)']
      },
      fontSize: {
        '15px': '15px'
      },
      colors: {
        brightOrange: 'hsl(31, 77%, 52%)',
        darkCyan: 'hsl(184, 100%, 22%)',
        veryDarkCyan: 'hsl(179, 100%, 13%)',
        transparentWhite: 'hsla(0, 0%, 100%, 0.75)',
        veryLightGray: 'hsl(0, 0%, 95%)',
      },
      width: {
        cardContainer: '59.5%'
      }
    },
  },
  plugins: [],
}