/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                luxury: {
                    black: '#050505',
                    charcoal: '#0a0a0a',
                    gold: '#D4AF37',
                    goldDim: '#aa8c2c',
                    white: '#FAFAFA',
                    jade: '#059669',
                    jadeDim: '#047857',
                    glass: 'rgba(255, 255, 255, 0.05)',
                    glassDark: 'rgba(0, 0, 0, 0.3)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            backgroundImage: {
                'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #D4AF37 100%)',
                'gradient-jade': 'linear-gradient(135deg, #059669 0%, #34D399 50%, #059669 100%)',
            }
        },
    },
    plugins: [],
}
