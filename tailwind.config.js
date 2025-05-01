/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#06101F',
        'space-blue': '#0A192F',
        'space-light': '#1E2D48',
        'cyber-orange': '#FF8C00',
        'cyber-green': '#00FF9D',
        'cyber-teal': '#64FFDA',
        'cyber-purple': '#7B61FF',
        'cyber-yellow': '#FFD700',
        'dark-card': '#112240',
        'space-border': '#2D3748',
        'neon-pink': '#FF1493',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        body: ['"Roboto"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-right': 'slideRight 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 2px rgba(255, 140, 0, 0.5))' },
          '50%': { filter: 'drop-shadow(0 0 15px rgba(255, 140, 0, 0.8))' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      backgroundImage: {
        'star-pattern': "url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'pixel-grid': "url('https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }
    },
  },
  plugins: [],
}
