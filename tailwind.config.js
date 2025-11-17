/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(59,130,246,0.5), 0 0 20px rgba(59,130,246,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(59,130,246,0.7), 0 0 40px rgba(59,130,246,0.5)' },
        },
      },
      animation: {
        glow: 'glowPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
