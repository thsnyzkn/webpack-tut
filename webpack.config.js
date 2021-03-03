const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5')

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: [
        './src/main.js'
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    module: {

        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"]
            },

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].scss",
            chunkFilename: "[id].scss"
        }),
        new VueLoaderPlugin()
    ]
}