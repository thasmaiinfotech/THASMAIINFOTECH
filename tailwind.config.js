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
      },
      keyframes: {
        // Dash periods used with this must divide 48 so the loop is seamless
        'dash-flow': {
          to: { strokeDashoffset: '-48' },
        },
        // Draws a path in from its start; the path needs pathLength="100" and strokeDasharray="100"
        'route-draw': {
          from: { strokeDashoffset: '100' },
          to: { strokeDashoffset: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'dash-flow': 'dash-flow 6s linear infinite',
        'route-draw': 'route-draw 1.2s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'fade-up': 'fade-up 0.45s ease-out both',
      }
    },
  },
  plugins: [],
}
