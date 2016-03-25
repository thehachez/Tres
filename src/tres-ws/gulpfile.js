"use strict";
var gulp = require("gulp");
var gutil = require("gulp-util");
var gulpSass = require('gulp-sass');
var gulpNotify = require('gulp-notify');
var gulpRename = require("gulp-rename");
var webpack = require("webpack");
var gulpWwebpack = require("webpack-stream");
var browserSync = require('browser-sync').create();
var path = require("path");
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var webroot = "./client/";
var webrootOut = "./wwwroot/";

var dev = true;

var config = {
    url: "localhost",
    port: 58603,
    sassFilesPath: webroot + "stylesheets/modules/**/*.scss",
    sassFilesEntry: webroot + "stylesheets/main.scss",
    sassFilesOutput: webrootOut + "stylesheets",
    sassfileName: dev ? 'main_dev.css' : 'main.css'
};

var WEBPACKCONF = {
    devtool: 'cheap-eval-source-map',
    /*target: webworker - node - electron - async-node - node-webkit */
    target: "web",
    debug: true,
    cache: true,
    watch: true,
    output: {
        filename: 'main.js'
    },
    plugins: [
        /* PRODUCTION PLUGINS */
        //new StatsWriterPlugin({
        //     filename: "'./wwwroot/builds/stats.json"
        //}),
        //new webpack.optimize.CommonsChunkPlugin({
        //    names: 'common',
        //    minChunks: 2
        //}),
        /* DEV PLUGINS */
        new webpack.NoErrorsPlugin(),
        new webpack.NewWatchingPlugin()
    ],
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [{
            test: /\.ts(x?)$/,
            loader: 'babel-loader!ts-loader',
            exclude: /node_modules/
        }],
        noParse: [pathToReact]
    }
};

gulp.task('init', function () {
    browserSync.init({
        proxy: config.url + ":" + config.port
        //middleware: function (req, res, next) {
        //    console.dir(req)
        //}
    });
    gulp.watch(config.sassFilesPath, ['sass']);
    return gulp.start(['webpack', 'sass']);
});

gulp.task("webpack", function (done) {
    return gulp.src('./client/main.tsx')
   .pipe(gulpWwebpack(WEBPACKCONF, webpack, function (err, stats) {
       if (err)
           gutil.PluginError("webpack-dev-server", err);
    
       Object.keys(stats.compilation.assets).forEach(function (key) {
           gutil.log('Webpack: output: ', gutil.colors.green(key));
       });

       gutil.log('Webpack: ', gutil.colors.blue('finished ', stats.compilation.name));
       browserSync.reload();

   }))
   .pipe(gulp.dest('./wwwroot/builds/dev/'))
   .pipe(gulpNotify({
       message: 'Webpack compiled: <%= file.relative %>',
       sound: false
   }));
});


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    gulp.src(config.sassFilesEntry)
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulpRename(config.sassfileName))
        .pipe(gulp.dest(config.sassFilesOutput))
        .pipe(browserSync.stream())
        .pipe(gulpNotify({
            message: 'sass compiled: <%= file.relative %>',
            sound: false
        }));
});


