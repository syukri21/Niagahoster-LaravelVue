const {
    colors
} = require('tailwindcss/defaultTheme')

module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            './public/**/*.html',
            './src/**/*.vue'
        ],
        options: {
            whitelistPatterns: [
                /-(leave|enter|appear)(|-(to|from|active))$/,
                /^(?!(|.*?:)cursor-move).+-move$/,
                /^router-link(|-exact)-active$/
            ],
        },
    },
    theme: {
        extend: {},
        fontFamily: {
            'roboto': ['Roboto Lt'],
            'mons': ['Montserrat'],
        },
        container: {
            padding: {
                default: "47px"
            },
            breakpoint: {
                xl: "1150px"
            },
        },
        colors: theme => {
            console.log("theme", theme("color"))

            return ({
                // ...theme('colors'),
                gray: {
                    ...colors.gray
                },
                secondary: {
                    default: "#0090EF",
                    light: '#00A2F3',
                    dark: "#007FDE"
                },
                primary: {
                    default: "#3A4166"
                },
                background: {
                    primary: "#FFFFFF",
                    secondary: "303030",
                },
                success: "#00B348",
            })
        },
    },
    variants: {},
    plugins: [
        require('autoprefixer'),
        require('tailwindcss'),
    ],
}
