let path = require('path')

module.exports = {
    context: path.join(__dirname, "src"),
    entry: "./client/index.js",
    mode: "development",
    module: {
        rules: [{
            enforce: "pre",
            test: /\.js$/,
            loader: "standard-loader",
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["env", "react"]
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader?modules,localIdentName=[hash:base64:6]-[name]-[local]"
        }]
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    }
}