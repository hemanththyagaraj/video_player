const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        port: 3000
    },
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] }
        ]
    }
})