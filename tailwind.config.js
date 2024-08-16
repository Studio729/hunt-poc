/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-black': '#222324',
        white: '#f5f8fa',
        'primary-gray': '#f5f8fa',
        'primary-blue': '#056af9',
        'primary-green': '#00f49c',
        'primary-green-light': '#00f5a6',
        'primary-sea-green': '#00f5a6',
        'off-white': '#f4f4f4',
        'red-code': '#d40f5d',
        'dark-gray': '#272829',
        'primary-teal': '#01c5d1',
      },
    },
  },
  plugins: [],
}
