const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    // 入口
    entry: __dirname + '/src/render.js',
    // 出口
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    // 生成 source-map，用于调试
    // devtool: 'source-map',
    // 打包模式 development production
    mode: 'development',
    // 热刷新配置
    devServer: {
        // 静态目录
        contentBase: __dirname + '/public',
        // 端口
        port: '8080',
        // 是否开启热刷新
        inline: true,
        // 单页应用所有跳转指向 index.html
        historyApiFallback: true
    },
    plugins: [
        new webpack.BannerPlugin('版权所有'),
        new HtmlWebpackPlugin({
            title: 'NC',
            template: __dirname + '/public/index.html'
        })
    ]
}