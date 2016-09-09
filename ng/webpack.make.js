var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function make(env) {
    return {
        devtool: 'source-map',
        entry: getEntry(env),
        ouptut: {
            path: path.join(__dirname, 'dist'),
            filename: 'js/[name].js',
            sourceMapFilename: '[file].map'
        },
        resolve:{
            extensions: ['', '.ts', '.js', '.html', '.css', '.scss']
        },
        plugins: getPlugins(env),
        module: {
            loaders: [
                { test: /\.ts$/, loader: 'ts' },
                { test: /\.scss$/, loader: 'style!css!sass' },
                { test: /\.css$/, loader: 'style!css' },
                { test: /\.html$/, loader: 'html' }
            ]
        }
    }
};

function getEntry(env) {
    if (isTest(env))
        return undefined;

    return {
        app: './src/main.ts',
        vendor: './src/vendor.ts'
    }
}

function getPlugins(env) {
    var plugins = [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            filename: 'index.html'
        })
    ];

    if (isTest(env))
        return plugins;

    plugins.push(new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor']
    }));

    if (isProd(env)){
        plugins.push(new webpack.optimize.DedupePlugin());
        plugins.push(new webpack.optimize.OccurenceOrderPlugin());
        plugins.push(new webpack.optimize.UglifyJsPlugin())
    }

    return plugins;
}

function isProd(env) {
    return env === 'prod';
}

function isTest(env) {
    return env === 'test';
}