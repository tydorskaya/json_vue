var path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        polyfills: path.resolve(__dirname, './public/scripts/polyfills.js'),
        vueUsers: path.resolve(__dirname, './public/scripts/main.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './public/scripts/bundle')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};