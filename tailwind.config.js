/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{html,js,jsx}',
		'./components/**/*.{html,js,jsx}',
		'./sections/**/*.{html,js,jsx}',
		'./styles/**/*.{js,jsx}'
	],
	theme: {
		extend: {
			colors: {
				'primary-black': '#1A232E',
				'secondary-white': '#c7c7c7'
			},
			transitionTimingFunction: {
				'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)'
			}
		},
		screens: {
			xx: '300px',
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
			'2xl': '1800px'
		}
	},
	plugins: []
};
