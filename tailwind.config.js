/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Young Gymnast 101 Brand Colors
        'ygm-blue': '#00AEEF',      // Bright Blue - Headers, buttons, accents
        'ygm-orange': '#FF7F00',    // Energetic Orange - CTAs, highlights
        'ygm-green': '#4CAF50',     // Playful Green - Borders, icons
        'ygm-white': '#FFFFFF',     // Soft White - Clean backgrounds
        'ygm-light-gray': '#F5F5F5', // Light Gray - Readable backgrounds
        'ygm-dark-gray': '#333333', // Dark Gray - Body text
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'], // Playful headings
        'body': ['Open Sans', 'sans-serif'],  // Clean body text
      },
      animation: {
        'bounce-gentle': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
