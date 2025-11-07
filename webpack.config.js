const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = [
    {
        name: 'server',
        entry: './src/server/index.js',
        target: 'node',
        output: {
            path: path.resolve(__dirname, 'dist/server'),
            filename: 'bundle.js',
        },
        mode: isProduction ? 'production' : 'development',
        externals: {
            express: 'commonjs express', // Exclude express from the bundle
        },
    },
    {
        name: 'client',
        entry: './src/client/index.js',
        // target: 'web', // by default
        output: {
            path: path.resolve(__dirname, 'dist/client'),
            filename: 'bundle.js',
        },
        mode: isProduction ? 'production' : 'development',
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html',
            }),
            isProduction && new WorkboxWebpackPlugin.GenerateSW(),
        ].filter(Boolean), // Filter out falsey values
        module: {
            rules: [
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                    type: 'asset',
                },
                {
                    test: /\.html$/i,
                    use: ['html-loader'],
                },
                {
                    test: /\.(s[ac]|c)ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
            ],
        },
    }
];
