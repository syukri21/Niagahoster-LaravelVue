const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .mix.copyDirectory('resources/fonts', 'public/fonts')
    .webpackConfig({
        module: {
            rules: [{
                test: /\.scss$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"]
            }]
        },
        resolve: {
            alias: {
                "@": path.resolve("resources/assets/sass")
            }
        }
    })
