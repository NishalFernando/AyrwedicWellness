/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F6B36',
        forest: '#124D2A',
        sage: '#EAF3E6',
        cream: '#f3e4c2ff',
        beige: '#EFE5D2',
        olive: '#7D9A4F',
        dark: '#2F2F2F',
        secondary: '#666666'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px'
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-up-delay-1': 'fade-in-up 0.8s ease-out 0.2s forwards',
        'fade-in-up-delay-2': 'fade-in-up 0.8s ease-out 0.4s forwards',
        'fade-in': 'fade-in 1.2s ease-out forwards',
      }
    },
  },
  plugins: [],
}
