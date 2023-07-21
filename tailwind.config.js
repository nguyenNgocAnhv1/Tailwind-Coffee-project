/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				coffee: {
					50: "#E8E6D0",
					200: "#C89F94",
					400: "#A25F4B",
					600: "#744838",
				},
			},
			fontFamily: {
				Karla: ["Karla", "sans-serif"],
			},
			keyframes: {
				slideDown: {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(-0%)" },
				},
				fadeIn: {
					"0%": { transform: "translate(-50%,30%)"},
					"100%": { transform:"translate(-50%,0)" },
				},
			},
			animation: {
				slideDown: "slideDown .4s ease-in ",
				fadeIn: "fadeIn .5s ease-in-out forwards ",
			},
			screens: {
				tablet: "640px",
				// => @media (min-width: 640px) { ... }
			},
			backgroundImage: {
				"slider-bg": "url('./img/slider-bg.jpeg')",
			},
			screens:{
				'xs':"480px"
			}
		},
	},
	plugins: [],
};
