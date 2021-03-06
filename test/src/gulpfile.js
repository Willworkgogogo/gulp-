'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var fs = require('fs')
var path = require('path')
var tsify = require('tsify')
var uglify = require('gulp-uglify')

function resolve(src) {
  return path.resolve(__dirname, src)
}

// 在这里添加自定义 browserify 选项
var customOpts = {
  entries: [resolve('ts/dom.ts')],
  debug: true,
  cache: {},
  packageCache: {}
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts).plugin(tsify));

// 在这里加入变换操作
// 比如： b.transform(coffeeify);

gulp.task('js', bundle); // 这样你就可以运行 `gulp js` 来编译文件了
b.on('update', bundle); // 当任何依赖发生改变的时候，运行打包工具
b.on('log', gutil.log); // 输出编译日志到终端

function bundle() {
  return b.bundle()

    // 如果有错误发生，记录这些错误
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(uglify())
    // 可选项，如果你不需要缓存文件内容，就删除
    // .pipe(buffer())
    // 可选项，如果你不需要 sourcemaps，就删除
    // .pipe(sourcemaps.init({loadMaps: false})) // 从 browserify 文件载入 map
    // 在这里将变换操作加入管道
    // .pipe(sourcemaps.write('./')) // 写入 .map 文件
    .pipe(gulp.dest('./dist'));
}