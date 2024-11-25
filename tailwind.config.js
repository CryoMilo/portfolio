/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				heading: "var(--font-heading)",
				body: "var(--font-body)",
				geistMono: "var(--font-geistMono)",
			},
			container: {
				center: true,
				padding: "3rem",
			},
			colors: {
				primary: {
					DEFAULT: "var(--color-primary)", // Violet
					light: "var(--color-primary-light)", // Light Violet
					dark: "var(--color-primary-dark)", // Dark Indigo
				},
				secondary: {
					DEFAULT: "var(--color-secondary)", // Soft Lavender
				},
				background: {
					DEFAULT: "var(--color-background)", // White
					dark: "var(--color-dark)", // Graphite
				},
				muted: "var(--color-muted)", // Subtle Gray
				light: "var(--color-light)", // Mist Gray
				soft: "var(--color-soft)", // Cloud White
				highlight: "var(--color-highlight)", // Lavender Highlight
				warning: "var(--color-warning)", // Coral for Alerts
				success: "var(--color-success)", // Lime Green
				info: "var(--color-info)", // Sky Blue
			},
			fontSize: {
				xs: ".75rem", // 12px
				sm: ".875rem", // 14px
				base: "1rem", // 16px
				lg: "1.125rem", // 18px
				xl: "1.25rem", // 20px
				"2xl": "1.5rem", // 24px
				"3xl": "1.875rem", // 30px
				"4xl": "2.25rem", // 36px
				"5xl": "3rem", // 48px
				"6xl": "4rem", // 64px
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "960px",
				xl: "1430px",
				xxl: "1600px",
			},
			backgroundImage: {
				"cup-sleeve-gradient":
					"linear-gradient(to right, #474747 0%, #737272 50.5%, #474747 100%)",
			},
			keyframes: {
				"spin-reverse": {
					from: { transform: "rotate(0deg)" },
					to: { transform: "rotate(-360deg)" },
				},
			},
			animation: {
				"spin-slow": "spin 30s linear infinite",
				"spin-slow-reverse": "spin-reverse 30s linear infinite",
			},
		},
	},
	plugins: [],
};
