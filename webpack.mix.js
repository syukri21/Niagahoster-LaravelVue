const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

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
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")],
        enableCssModules: true,
        vue: {
            esModule: true
        }
    })
    .copyDirectory("resources/fonts", "public/fonts")
    .copyDirectory("resources/css/font.css", "public/css")
    .webpackConfig({
        module: {
            rules: [
                //  {
                //      test: /\.scss$/,
                //      use: ["vue-style-loader", "css-loader", "sass-loader"]
                //  },
                {
                    test: /\.css$/,
                    loaders: [{
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[local]_[hash:base64:8]"
                        }
                    }]
                }
            ]
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "resources", "js")
            }
        }
    });
