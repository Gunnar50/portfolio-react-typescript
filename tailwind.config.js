/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "var(--border)",
				input: "var(--input)",
				ring: "var(--ring)",
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				"light-primary": {
					DEFAULT: "var(--light-primary)",
				},
				"dark-primary": {
					DEFAULT: "var(--dark-primary)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				destructive: {
					DEFAULT: "var(--destructive)",
					foreground: "var(--destructive-foreground)",
				},
				"neutral-primary": {
					DEFAULT: "var(--neutral-primary)",
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
				"light-accent": {
					DEFAULT: "var(--light-accent)",
				},
				"skills-bg": {
					DEFAULT: "var(--skills-bg)",
				},
				"project-bg": {
					DEFAULT: "var(--project-bg)",
				},
				"bright-pink": {
					DEFAULT: "var(--bright-pink)",
				},
				popover: {
					DEFAULT: "var(--popover)",
					foreground: "var(--popover-foreground)",
				},
				card: {
					DEFAULT: "var(--card)",
					foreground: "var(--card-foreground)",
				},
				linkedin: {
					DEFAULT: "rgb(90, 176, 247)",
				},
				youtube: {
					DEFAULT: "rgb(255, 44, 44)",
				},
				"header-bg": {
					DEFAULT: "#020A11",
				},
				"footer-bg": {
					DEFAULT: "#020A11",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			animationDelay: {
				0: "0s",
				2: "0.2s",
				4: "0.4s",
				6: "0.6s",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
				bounce: {
					from: { transform: "translateY(10px)" },
					to: { transform: "translateY(0)" },
				},
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				slideUp: {
					from: { transform: "translateY(100%)" },
					to: { transform: "translateY(0)" },
				},
				bounce: {
					from: { transform: "translateY(10px)" },
					to: { transform: "translateY(0)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				bounce:
					"bounce .5s cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite alternate ",
				slideUp: "slideUp 0.5s",
				slideUpEaseInOut: "slideUp 0.5s ease-in-out",
				slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
				fadeIn: "fadeIn 1.5s",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
