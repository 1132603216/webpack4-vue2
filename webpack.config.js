const HtmlWebpackPlugin = require("html-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader");
const path = require("path");

module.exports = {
  mode: "development", // 开发模式
  entry: path.resolve("./src/main.js"),
  module: {
    rules: [
      // 解析导入的css文件
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      //   解析vue文件
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/public/index.html"), //模板文件
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    host: "localhost",
    port: 8888,
    open: true, // 自动打开一个浏览器窗口
    hot: false, // 不适用热重启，似乎会和vue-loader冲突
  },
};
