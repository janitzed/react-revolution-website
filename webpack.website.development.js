const path = require('path');

const WRITE_DIR = path.resolve(__dirname, './public/');

const APP_DIR = path.resolve(__dirname, './website.jsx');

module.exports = {
    devtool: false,
    resolve: {
        extensions: [ '.js', '.jsx' ],
    },
    cache: false,
    mode: 'development',
    entry: ['babel-polyfill', APP_DIR],
    output: {
        path: WRITE_DIR,
        publicPath: WRITE_DIR,
        filename: 'app.js',
        pathinfo: false
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
        ]
    }
};