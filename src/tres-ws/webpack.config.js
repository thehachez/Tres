const WEBPACK = require('webpack');

module.exports = {
    devtool: 'source-map',
    debug: true,
    cache: true,
    watch: true,
    entry: './client/main.tsx',
    output: {
        filename: './wwwroot/builds/main.js'
    },
    plugins: [
        //new WEBPACK.optimize.OccurenceOrderPlugin(),
        //new WEBPACK.HotModuleReplacementPlugin(),
        //new WEBPACK.OldWatchingPlugin(),
        // new WEBPACK.NewWatchingPlugin(),
        // https://github.com/webpack/docs/wiki/optimization#deduplication
        //new WEBPACK.optimize.DedupePlugin(),
        new WEBPACK.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
          {
              test: /\.ts(x?)$/,
              loader: 'babel-loader!ts-loader',
              exclude: /node_modules/
          }
        ]
    }
}