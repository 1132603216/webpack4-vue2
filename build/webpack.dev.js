const { merge } = require("webpack-merge");
const config = require("./webpack.common.js");

const devConfig = {
  mode: "development",   // 开发环境
  devServer: {
    host: "localhost",
    port: 8888,
    open: true, // 自动打开一个浏览器窗口
    hot: false, // 不适用热重启，似乎会和vue-loader冲突
  },
};

module.exports = merge(config,devConfig);
