import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
export default <Partial<Config>>{
  darkMode: 'media',
  theme: {
    container: {
      center: true,
    },
    colors: {
      primary: '#000',
      secondary: '#ebebeb',
      error: '#ff0000',
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
    },
    fontSize: {
      xs: '.55rem',
      sm: '.875rem',
      base: '1rem',
      md: '1.25rem',
      lg: '1.5rem',
      xl: '1.875rem',
    },
    // fontFamily: {
    //   sans: ['Akzidenz-Grotesk Pro', 'sans-serif'],
    //   gothic: ['Engravers Gothic', 'sans-serif'],
    // },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
  ],
}
