/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {
					DEFAULT: colors.indigo['600'],
					...colors.indigo,
				},
			},
		},
	},
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
