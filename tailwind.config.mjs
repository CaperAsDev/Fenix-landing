/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				accent: "var(--color-accent)",
			},
			keyframes: {
				carousel: {
					'0%': { transform: 'translateX(0%)'},
					'10%': { transform: 'translateX(0%)'},
					'90%': { transform: 'translateX(-100%)'},
					'100%': { transform: 'translateX(-100%)'}
				}
			},
			animation: {
				carousel: 'carousel 10s linear alternate infinite'
			}
		},
	},
	plugins: [],
}
