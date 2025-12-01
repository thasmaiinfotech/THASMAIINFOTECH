/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFFFFF", // White text for dark mode
          muted: "#9CA3AF",   // Gray-400
          dark: "#0B1020",    // Deep Navy Background
        },
        secondary: {
          DEFAULT: "#7B3FE4", // Electric Violet
          hover: "#6A32C9",
        },
        background: {
          DEFAULT: "#0B1020", // Deep Navy
          paper: "#111827",   // Darker Card (Gray-900)
          card: "#1F2937",    // Lighter Card (Gray-800)
        },
        accent: {
          teal: "#00C9A7",
          blue: "#007BFF",
          violet: "#845EC2",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}
