import type {Config} from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: [
        "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontSize: {
            xs: ['0.75rem', {lineHeight: '1rem'}],
            sm: ['0.875rem', {lineHeight: '1.5rem'}],
            base: ['1rem', {lineHeight: '1.75rem'}],
            lg: ['1.125rem', {lineHeight: '1.75rem'}],
            xl: ['1.25rem', {lineHeight: '2rem'}],
            '2xl': ['1.5rem', {lineHeight: '2.25rem'}],
            '3xl': ['1.75rem', {lineHeight: '2.25rem'}],
            '4xl': ['2rem', {lineHeight: '2.5rem'}],
            '5xl': ['2.5rem', {lineHeight: '3rem'}],
            '6xl': ['3rem', {lineHeight: '3.5rem'}],
            '7xl': ['4rem', {lineHeight: '4.5rem'}],
        },
        extend: {
            colors: {
                primary: {
                    '50': '#fefbec',
                    '100': '#fbf3ca',
                    '200': '#f6e691',
                    '300': '#f0d14d',
                    '400': '#edc132',
                    '500': '#e6a31a',
                    '600': '#cc7e13',
                    '700': '#a95b14',
                    '800': '#8a4716',
                    '900': '#713b16',
                    '950': '#411e07',
                },
            },
            fontFamily: {
                sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
                display: [
                    ['Mona Sans', ...defaultTheme.fontFamily.sans],
                    {fontVariationSettings: '"wdth" 125'},
                ],
            },
        },
    },
    plugins: [],
} satisfies Config;