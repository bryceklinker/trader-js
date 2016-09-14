var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function make(env) {
    return {
        devtool: isProd(env) ? 'cheap-module-source-map' : 'source-map',
        entry: getEntry(env),
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'js/[name].js',
            sourceMapFilename: '[file].map'
        },
        resolve: {
            extensions: ['', '.ts', '.js', '.scss', '.css', '.html']
        },
        module: {
            loaders: [
                { test: /\.ts$/, loader: 'ts!angular2-template', exclude: /node_modules/ },
                { test: /\.css$/, loader: 'to-string!css' },
                { test: /\.scss$/, loader: 'to-string!css!sass' },
                { test: /\.html$/, loader: 'html?-minimize' },
                { test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' },
                { test: /\.(woff2?|svg)$/, loader: 'url?name=fonts/[name].[ext]&limit=10000' },
                { test: /\.(ttf|eot)$/, loader: 'file?name=fonts/[name].[ext]' }
            ]
        },
        plugins: getPlugins(env)
    };
}

function getPlugins(env) {
    var plugins = [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            process: {
                env: {
                    ENV: JSON.stringify(env)
                }
            }
        })
    ];

    if (isProd(env)) {
        plugins.push(new CopyWebpackPlugin([
            { from: 'config.prod.json', to: 'config.json' }
        ]));
    } else {
        plugins.push(new CopyWebpackPlugin([
            { from: 'config.local.json', to: 'config.json' }
        ]))
    }

    if (isTest(env))
        return plugins;

    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.OccurenceOrderPlugin());
    plugins.push(new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
    }));

    if (isProd(env))
        plugins.push(new webpack.optimize.UglifyJsPlugin({
            mangle: false
        }));

    return plugins;
}

function getEntry(env) {
    if (isTest(env))
        return undefined;

    return {
        vendor: './src/vendor.ts',
        app: './src/main.ts'
    };
}

function isProd(env) {
    return env === 'prod';
}

function isTest(env) {
    return env === 'test';
}