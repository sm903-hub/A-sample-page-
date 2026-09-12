/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: "#0B0F19",
          900: "#1E293B",
          800: "#334155",
          accent: "#4F46E5",
          teal: "#06B6D4"
        }
      }
    },
  },
  plugins: [],
}
