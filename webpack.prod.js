const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: "production",
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].bundle.css'
        }),
        new OptimizeCssAssetsPlugin(),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] }
        ]
    }  
})