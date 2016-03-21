/// <binding BeforeBuild='webpack' ProjectOpened='webpack, sass' />
"use strict";
var gulp = require("gulp");
var gutil = require("gulp-util");
var gulpSass = require('gulp-sass');
var gulpNotify = require('gulp-notify');
var webpack = require("webpack");
var browserSync = require('browser-sync').create();

var webroot = "./wwwroot/";
var config = {
    url: "localhost",
    port: 58603,
    sassFilesEntry: webroot + "stylesheets/main.scss",
    sassFilesOutput: webroot + "builds"
};

var WEBPACKCONF = {
    devtool: 'source-map',
    debug: true,
    entry: './client/main.tsx',
    output: {
        filename: './wwwroot/builds/main.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.OldWatchingPlugin(),
        // new WEBPACK.NewWatchingPlugin(),
        // https://github.com/webpack/docs/wiki/optimization#deduplication
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin()
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
};

gulp.task('init', function () {
    browserSync.init({
        proxy: config.url + ":" + config.port
    });
    return gulp.start(['webpack', 'sass']);
});

gulp.task("webpack", function() {
    webpack(WEBPACKCONF, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        browserSync.reload();
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        // callback();
    });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    gulp.src(config.sassFilesEntry)
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest(config.sassFilesOutput))
        //.pipe(browserSync.stream())
        .pipe(gulpNotify({
            message: 'sass compiled: <%= file.relative %>',
            sound: false
        }));
});

