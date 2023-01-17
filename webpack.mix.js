const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 const VueLoaderPlugin = require('vue-loader/lib/plugin');
 mix.webpackConfig({
    module: {
       rules: [
          {
             test: /\.vue$/,
             use: 'vue-loader'
          },
          {
             test: /\.css$/,
             use: ['vue-style-loader', 'css-loader']
          },
          {
             test: /\.html$/,
             use: 'vue-template-loader'
          },
          {
            test: /.(eot|svg|ttf|woff|woff2)(?S*)?$/,
            loader: 'file-loader'
        }
       ]
    },
    plugins: [
       new VueLoaderPlugin()
    ]
 });

mix.js('resources/js/app.js', 'public/js').vue()
    .postCss('resources/css/app.css', 'public/css');
