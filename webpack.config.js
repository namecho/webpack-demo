const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
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
  // 入口
  entry: __dirname + '/src/index.js',
  // 出口
  output: {
    path: __dirname + '/dist',
    filename: 'bundle-[hash].js'
  },
  // 生成 source-map，用于调试
  // devtool: 'source-map',
  // 打包模式 development production
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    // 复制 public 静态资源
    new CopyWebpackPlugin({
      patterns: [{ from: __dirname + "/public", to: __dirname + "/dist" }]
    }),
    new webpack.BannerPlugin('版权所有'),
    // 前端模板
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html'
    }),
    // 清空文件
    new CleanWebpackPlugin(),
  ]
}

