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
                    white: '#FAFAFA',
                    jade: '#1A936F',
                    jadeDim: '#137A5A',
                    gold: '#F0A500',
                    goldDim: '#C28800',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
