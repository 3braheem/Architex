import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,js,tsx,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display : ['CMU Serif'],
        body : ['MS Gothic']
      }
    },
  },
  plugins: [],
} satisfies Config

