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
        }
    },
    variants: {},
    plugins: [
        require('autoprefixer'),
        require('tailwindcss'),
    ],
}
