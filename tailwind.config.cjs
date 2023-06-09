/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			"poppins": ["Poppins"]
		},
		extend: {
			colors: {
				'orangered': '#ff4500',
			  },
			margin: {
				'12px': '0.95%',
			}
		},
	},
	plugins: [],
}
