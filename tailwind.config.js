/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Primary - Magenta
        primary: {
          50: '#fff0ff',
          100: '#ffe0ff',
          200: '#ffbfff',
          300: '#ff8fff',
          400: '#ff40ff',
          500: '#ff00ff',
          600: '#cc00cc',
          700: '#990099',
          800: '#660066',
          900: '#330033',
          950: '#1a001a',
        },
        // Secondary - Muted Teal
        secondary: {
          50: '#f0fdfc',
          100: '#cbfef8',
          200: '#97faef',
          300: '#5aeee1',
          400: '#2edad0',
          500: '#14b9b0',
          600: '#0a9490',
          700: '#0c7575',
          800: '#0e5e5e',
          900: '#114e4e',
          950: '#022c2e',
        },
        // Accent - Golden
        accent: {
          50: '#fffceb',
          100: '#fff6c7',
          200: '#feeb8f',
          300: '#fdd84b',
          400: '#fbc318',
          500: '#eaa308',
          600: '#cb7d04',
          700: '#a65a07',
          800: '#87460d',
          900: '#723a10',
          950: '#431e07',
        },
        // Success - Green
        success: {
          50: '#eefdf4',
          100: '#d6fbe5',
          200: '#b0f5cb',
          300: '#79eba8',
          400: '#41d67c',
          500: '#1cba5c',
          600: '#109649',
          700: '#0e783e',
          800: '#105f34',
          900: '#0e4e2c',
          950: '#042b17',
        },
        // Warning - Orange
        warning: {
          50: '#fff8ed',
          100: '#ffeed4',
          200: '#ffd8a9',
          300: '#ffba71',
          400: '#ff9538',
          500: '#ff7410',
          600: '#ed5b07',
          700: '#c44008',
          800: '#9c320f',
          900: '#7d2b0f',
          950: '#441406',
        },
        // Error - Red
        error: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        // Neutral - Gray
        neutral: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          950: '#0f1214',
        },
      },
      borderRadius: {
        '4xl': '2rem', 
        '5xl': '2.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-lg': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'glass-xl': '0 30px 60px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};