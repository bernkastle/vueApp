/**
 * Created by karlwang on 6/23/2017.
 */
const path = require('path');
const webpack = require('webpack');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "app/js"),
        publicPath: 'app/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                // options: {
                //     extractCSS: true
                // }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000&name=../img/[name].[ext]',
                    'img-loader'
                ]
            },
            // {
            //     test: /\.js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['env']
            //         }
            //     }
            // }
        ]
    },
    externals: {vue: "Vue", Router:'VueRouter'},
    plugins: [

        //new ExtractTextPlugin("style.css")
    ],
    node: {fs: 'empty'},
};