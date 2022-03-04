const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: ['babel-polyfill','./client/index.js'],
    output : {
        path: path.resolve(__dirname,'bundle'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js','.jsx'],
    },
    module : {
        rules : [
            {
                test: /\.jsx?/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Development',
            template: 'index.html'
        }),
    ],
    devServer : {
        static: path.resolve(__dirname,'bundle'),
        port:8080,
        hot: true,
        proxy : {
            '/sneakers' : 'http://localhost:3000',
            '/sneakers/Jordan' : 'http://localhost:3000',
            '/sneakers/adidas' : 'http://localhost:3000',
            '/sneakers/Nike' : 'http://localhost:3000',
            '/sneakers/Converse' : 'http://localhost:3000'
        }
    }
}