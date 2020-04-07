const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './example/index.js',
    devtool: '(none)',
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: "fonts",
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sass local fonts example'
        }),
        new MiniCssExtractPlugin()
    ]
}
