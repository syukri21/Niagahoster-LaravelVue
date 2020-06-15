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
        colors: {
            secondary: {
                default: "#0090EF",
                lighter: '#00A2F3',
                dark: "3007FDE"
            },
            primary: {
                default: "#3A4166"
            },
            background: {
                primary: "#FFFFFF",
                secondary: "303030",
            },
            success: "#00B348",
        }
    },
    variants: {},
    plugins: [
        require('autoprefixer'),
        require('tailwindcss'),
    ],
}
