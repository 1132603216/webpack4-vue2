const config = require("./webpack.common.js")
const {merge} = require("webpack-merge")

const prodConfig ={
    mode: "production",
    output:{
        clean: true
    }
}

module.exports = merge(prodConfig, config)
