const webpack = require('webpack');
const PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
     entry: ['babel-polyfill','./src/index.js'],
     output: {
         path: 'dist/',
         publicPath: "dist/",
         filename: PROD ? 'generic-search.min.js' : 'generic-search.js' 
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }],
         query: {
             presets: ['latest', 'react'],
             plugins: ['transform-async-to-generator','transform-object-rest-spread']
         }
     },
     devServer: { inline: true },
     plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true,
            },
            output: {
                comments: false,
            },
        }),
    ] : []
 };
