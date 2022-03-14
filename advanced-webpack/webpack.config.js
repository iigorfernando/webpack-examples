const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    target: "web",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].chunk.js",
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ['@loadable/babel-plugin']
                    },
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new LoadablePlugin({ filename: 'stats.json', writeToDisk: true }),
        new HtmlWebpackPlugin({
            template: "/public/index.html"
        })
    ],
    devServer: {
        historyApiFallback: true,
        host: 'localhost',
        port: 3000,
        open: true
    }
}

