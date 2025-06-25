/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // เพิ่ม path อื่นถ้ามี
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Prompt', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'Roboto', "'Helvetica Neue'", 'Arial', "'Noto Sans'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}