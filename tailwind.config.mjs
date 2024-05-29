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
			}
		},
	},
	plugins: [],
}
