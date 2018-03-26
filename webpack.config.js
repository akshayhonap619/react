var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: "./upgrade-build/index.js",
    output: {

        filename: "bundle.js",
        path: path.resolve(__dirname, 'public')

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["env", "react"]
                }
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: "json-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            }
        ]
    }
}

