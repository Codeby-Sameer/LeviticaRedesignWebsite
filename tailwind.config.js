// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: 'class',
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       animation: {
//         'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//         'bounce-slow': 'bounce 2s infinite',
//         'spin-slow': 'spin 3s linear infinite',
//       },
//       backdropBlur: {
//         xs: '2px',
//       },
//       boxShadow: {
//         'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
//         'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
//       }
//     },
//   },
//   plugins: [],
// };
































/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
        'glow-light': '0 0 20px rgba(37, 99, 235, 0.2)',
      }
    },
  },
  plugins: [],
};