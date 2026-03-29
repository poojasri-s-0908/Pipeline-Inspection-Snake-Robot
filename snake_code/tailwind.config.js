/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'serpent-dark': '#0a0f0d',
                'serpent-deep': '#060a08',
                'serpent-neon': '#00ff66',
                'serpent-cyan': '#00f0ff',
                'serpent-emerald': '#50C878',
            },
            boxShadow: {
                'neon-glow': '0 0 15px rgba(0, 255, 102, 0.4)',
                'emerald-glow': '0 0 20px rgba(80, 200, 120, 0.5)',
            }
        },
    },
    plugins: [],
}