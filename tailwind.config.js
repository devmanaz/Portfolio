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
                    blue: "#2563eb",
                    red: "#dc2626",
                    neon: "#39ff14"
                }
            }
        },
    },
    plugins: [],
}
