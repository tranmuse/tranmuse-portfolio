const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./mdx-components.tsx",
		"content/**/*.mdx",
	],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
			fontFamily: {
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
				display: ["var(--font-calsans)"],
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"fade-in": "fade-in 3s ease-in-out forwards",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 3s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						"line-height": "100%",
						opacity: "100%",
					},
				},
			},
			colors: {
				primary: {
					black: '#000000',
					white: '#FFFFFF',
					pink: {
						DEFAULT: '#FF4F81',
						50: '#FFF0F4',
						100: '#FFE1E9',
						200: '#FFC3D4',
						300: '#FFA5BF',
						400: '#FF87AA',
						500: '#FF4F81', // Your base pink
						600: '#FF1C5C',
						700: '#E80042',
						800: '#B50033',
						900: '#820025',
					},
					blue: {
						DEFAULT: '#00A3E0',
						50: '#E6F6FC',
						100: '#CCE9F9',
						200: '#99D3F3',
						300: '#66BDED',
						400: '#33A7E7',
						500: '#00A3E0', // Your base blue
						600: '#0082B3',
						700: '#006286',
						800: '#004159',
						900: '#00202C',
					},
					yellow: {
						DEFAULT: '#F6EB61',
						50: '#FEFDF0',
						100: '#FDFBE1',
						200: '#FBF8C3',
						300: '#F9F4A5',
						400: '#F8F187',
						500: '#F6EB61', // Your base yellow
						600: '#F4E533',
						700: '#E7D60F',
						800: '#BAA90C',
						900: '#8C7D09',
					},
					purple: {
						DEFAULT: '#A45DBB',
						50: '#F5EDF8',
						100: '#EBDCF1',
						200: '#D7B9E3',
						300: '#C396D5',
						400: '#AF73C7',
						500: '#A45DBB', // Your base purple
						600: '#8B42A2',
						700: '#69327B',
						800: '#472154',
						900: '#25112D',
					},
					cyan: {
						DEFAULT: '#00B2A9',
						50: '#E6FAF9',
						100: '#CCF5F3',
						200: '#99EBE7',
						300: '#66E1DB',
						400: '#33D7CF',
						500: '#00B2A9', // Your base cyan
						600: '#008E87',
						700: '#006B65',
						800: '#004743',
						900: '#002422',
					},
					red: {
						DEFAULT: '#FF6F61',
						50: '#FFF1F0',
						100: '#FFE4E1',
						200: '#FFC9C3',
						300: '#FFAEA5',
						400: '#FF9387',
						500: '#FF6F61', // Your base red
						600: '#FF3E2B',
						700: '#F51800',
						800: '#BD1200',
						900: '#850D00',
					},
				}
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-debug-screens"),
	],
};
