/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable manual dark mode toggle
  theme: {
    extend: {
      fontFamily: {
        // Agency-grade typography: Inter for body, optional Display font for headers
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        // Brand: Trustworthy Deep Blue (Primary CTA)
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // Primary Brand Color
          700: '#1d4ed8', // Hover State
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Accent: Vibrant Teal/Green (Secondary Actions, Highlights)
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Secondary Accent
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        // Neutrals: Cool Grays for professional look
        gray: {
          50: '#f9fafb', // Backgrounds
          100: '#f3f4f6', // Light Borders
          200: '#e5e7eb', // Borders
          300: '#d1d5db',
          400: '#9ca3af', // Muted Text
          500: '#6b7280', // Body Text
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937', // Headings
          900: '#111827', // Strong Headings
          950: '#030712',
        }
      },
      borderRadius: {
        // Thrive-style: Slightly boxier, professional radius
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem', // Reserved for large containers only
        '3xl': '1.5rem',
        'full': '9999px',
      },
      boxShadow: {
        // Agency-grade shadows: Subtle, layered
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'glow': '0 0 15px rgba(37, 99, 235, 0.3)', // Custom glow for primary actions
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
    container: {
      center: true,
      padding: '1.5rem', // Increased padding for better mobile experience
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px', // Wider max-width for modern feel
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
