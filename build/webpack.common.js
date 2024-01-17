const HtmlWebpackPlugin = require("html-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname,"../src/main.js"),    // 注意，此时的src目录在 ../ 路径是按配置文件来算
  module: {
    rules: [
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
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
          },
        },
        generator: {
          filename: "static/img/[name][ext]",
        },
      },
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader","less-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/public/index.html"), //注意，此时的src目录在 ../
    }),
    new VueLoaderPlugin(),
  ],
};
