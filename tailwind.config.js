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
          50:  '#f0faf9',
          100: '#d0f1ef',
          200: '#a2e3df',
          300: '#6dcfca',
          400: '#3eb5af',
          500: '#1e9d96',
          600: '#0e7d78',
          700: '#0d6460',
          800: '#0e504d',
          900: '#0e4240',
        },
        accent: {
          400: '#f97316',
          500: '#ea6c0b',
          600: '#c2550a',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        display: ["'Playfair Display'", 'Georgia', 'serif'],
        body: ["'DM Sans'", 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(14,125,120,0.08)',
        hover: '0 8px 40px rgba(14,125,120,0.16)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
