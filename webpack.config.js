const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        }
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.(js|jsx)$/, // transpile all files that end in .js
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
                // use: [
                //     {
                //         loader: 'url-loader',
                //         options: {
                //             limit: 8192
                //         }
                //     }
                // ]
            },
            // {
            //     test: /\.html$/,
            //     use: {
            //         loader: 'html-loader',
            //         options: {
            //             sources: {
            //                 list: [
            //                     {
            //                         tag: "source",
            //                         attribute: "src",
            //                         type: "src"
            //                     }
            //                 ]
            //             }
            //         }
            //     }
            // },
            // {
            //     test: /\.(mov|mp4)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]'
            //             }
            //         }
            //     ]
            // }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
