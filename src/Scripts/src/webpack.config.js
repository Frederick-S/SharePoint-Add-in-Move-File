﻿module.exports = {
    entry: './index.ts',
    output: {
        filename: '../app.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    devtool: 'source-map'
};