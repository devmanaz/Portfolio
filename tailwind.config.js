/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#050505",
                accent: {
                    cyan: "#00f3ff",
                    purple: "#bc13fe",
                    neon: "#39ff14"
                }
            }
        },
    },
    plugins: [],
}
