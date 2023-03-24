const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1000px',
      xl: '1280px',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '2.9rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'light-blue': '#5CE1E6',
      'main': '#0057FF',
      'black': '#000000',
      'white': '#ffffff',
    },
    extend: {
      fontFamily: {
        serif: ['var(--font-ibm_plex_mono)', ...fontFamily.serif],
        sans: ['var(--font-catamaran)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
