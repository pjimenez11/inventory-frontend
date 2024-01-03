/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    colors: {
      'oxford-blue': {
        '50': '#f6f7f9',
        '100': '#ebecf3',
        '200': '#d3d6e4',
        '300': '#adb3cc',
        '400': '#818baf',
        '500': '#616b96',
        '600': '#4d557c',
        '700': '#3f4665',
        '800': '#373d55',
        '900': '#2a2d3e',
        '950': '#212330',
      },
      'rhino': {
        '50': '#f5f7fa',
        '100': '#eaedf4',
        '200': '#d0d8e7',
        '300': '#a6b8d3',
        '400': '#7691ba',
        '500': '#5573a2',
        '600': '#415b88',
        '700': '#36496e',
        '800': '#30405c',
        '900': '#2d3951',
        '950': '#1d2434',
      },
      'blue': {
        '50': '#eef8ff',
        '100': '#d9efff',
        '200': '#bce4ff',
        '300': '#8ed5ff',
        '400': '#59bbff',
        '500': '#44a5ff',
        '600': '#1b7df5',
        '700': '#1467e1',
        '800': '#1752b6',
        '900': '#19478f',
        '950': '#142c57',
      },
      ...require("tailwindcss/colors"),

    },
    extend: {},
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}

