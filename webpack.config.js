var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: {
        index:  "./upgrade-build/index.js",
        script: "./upgrade-build/script.js",
          main: "./upgrade-build/main.js",
        redux: "./upgrade-build/redux.js"
    },
    output: {

        filename: "[name].js",
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
                //loader: 'style-loader!css-loader!autoprefixer-loader'
                use : ['style-loader', 'css-loader']
            }
        ]
    }
}

