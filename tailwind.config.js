/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
			backgroundImage: {
				land: "url(./assets/image.png)",
			},
			colors: {
				g: "#00B73E",
			},
		},
	},
	plugins: [],
};
