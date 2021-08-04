const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const gulpPHP = require('gulp-connect-php');
const cssnano = require('cssnano');
const del = require('del');
const gulp = require('gulp');
const gulpBabel = require('gulp-babel');
const gulpPostcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpUglify = require('gulp-uglify');
const gulpZip = require('gulp-zip');
const pump = require('pump');
const through2 = require('through2');
const vinylNamed = require('vinyl-named');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

// Entry point retreive from webpack
const entry = require('./webpack/entry');

// Transform Entry point into an Array for defining in gulp file
const entryArray = Object.values(entry);

// Paths for reuse
const exportPath = './web/**/*';

const srcPath = (file, watch = false) => {
  if (file === 'scss' && watch === false) {
    return './src/scss/index.scss';
  }
  if (file === 'scss' && watch === true) {
    return './src/scss/**/*.scss';
  }
  if (file === 'js' && watch === false) {
    return entryArray;
  }
  if (file === 'js' && watch === true) {
    return './src/js/**/*.js';
  }
  if (file === 'php') {
    return './web/**/*.php';
  }
  if (file === 'img') {
    return './web/img/**/*';
  }
  console.error('Unsupported file type entered into Gulp Task Runner for Source Path');
};

const distPath = (file, serve = false) => {
  if (['css', 'js', 'img'].includes(file)) {
    return `./web/${file}`;
  }
  
  if (file === 'php' && serve === false) {
    return './web/**/*.php';
  }
  if (file === 'php' && serve === true) {
    return './web';
  }
  console.error('Unsupported file type entered into Gulp Task Runner for Dist Path');
};

// Clean the zip file
// Clean the zip file
// Clean the zip file
const cleanExport = (mode) => () => {
  return ['development', 'production'].includes(mode) ? del(['./zip'], { force: true }) : undefined;
};

// Build Styles Task
// Build Styles Task
// Build Styles Task
const buildStyles = (mode) => (done) => {
  let postcssPlugins;
  if (mode === 'development') {
    postcssPlugins = [
      autoprefixer(),
    ];
  } else if (mode === 'production') {
    postcssPlugins = [
      cssnano(),
      autoprefixer(),
    ];
  }
  
  ['development', 'production'].includes(mode) ? pump([
    gulp.src(srcPath('scss')),
    gulpSourcemaps.init({ loadMaps: true }),
    sass().on('error', sass.logError),
    gulpPostcss(postcssPlugins),
    gulpSourcemaps.write('./'),
    gulp.dest(distPath('css')),
    browserSync.stream(),
  ], done()) : undefined;
};

// Build Scripts Task
// Build Scripts Task
// Build Scripts Task
const buildScripts = (mode) => (done) => {
  let streamMode;
  if (mode === 'development') {
    streamMode = require('./webpack/config.development');
  } else if (mode === 'production') {
    streamMode = require('./webpack/config.production');
  } else {
    streamMode = undefined;
  }
  
  ['development', 'production'].includes(mode) ? pump([
    gulp.src(srcPath('js'), { allowEmpty: true }),
    vinylNamed(),
    webpackStream(streamMode, webpack),
    gulpSourcemaps.init({ loadMaps: true }),
    through2.obj(function (file, enc, cb) {
      const isSourceMap = /\.map$/.test(file.path);
      if (!isSourceMap) {
        this.push(file);
      }
      cb();
    }),
    gulpBabel({
      presets: ['@babel/preset-env'],
    }),
    ...((mode === 'production') ? [gulpUglify()] : []),
    gulpSourcemaps.write('./'),
    gulp.dest(distPath('js')),
    browserSync.stream(),
  ], done) : undefined;
};

// Generic Task
const genericTask = (mode, context = 'building') => {
  let port;
  let modeName;
  
  if (mode === 'development') {
    port = '3000';
    modeName = 'Development Mode';
  } else if (mode === 'production') {
    port = '8000';
    modeName = 'Production Mode';
  } else {
    port = undefined;
    modeName = undefined;
  }
  
  // Combine all booting tasks into one array!
  const allBootingTasks = [
    Object.assign(buildStyles(mode), { displayName: `Build styles - ${modeName}` }),
    Object.assign(buildScripts(mode), { displayName: `Build scripts - ${modeName}` }),
  ];
  
  // Browser Loading & Watching
  const browserLoadingWatching = (done) => {
    gulpPHP.server({
      base: distPath('php', true),
      port: 8010,
      keepalive: true,
    });
    browserSync.init({
      proxy: '127.0.0.1:8010',
      port,
    });
    done();
    
    // Watch - php
    gulp.watch(srcPath('php', true)).on('change', () => {
      browserSync.reload();
    });
    done();
    
    // Watch - Styles
    gulp.watch(srcPath('scss', true)).on('all', gulp.series(
      Object.assign(buildStyles(mode), { displayName: `Watching Styles Task: Build - ${modeName}` }),
      browserSync.stream,
    ));
    done();
    
    // Watch - Scripts
    gulp.watch(srcPath('js', true), { allowEmpty: true }).on('all', gulp.series(
      Object.assign(buildScripts(mode), { displayName: `Watching Scripts Task: Build - ${modeName}` }),
      browserSync.reload,
    ));
    done();
    
    // Watch - images
    gulp.watch(srcPath('img', true)).on('change', () => {
      browserSync.reload();
    });
    done();
  };
  
  // Exporting Zip
  const exportingZip = (done) => {
    pump([
      gulp.src(exportPath),
      gulpZip('./website.zip'),
      gulp.dest('./'),
    ], done());
  };
  
  // Returning Tasks based on Building Context
  if (context === 'building') {
    return [
      ...allBootingTasks,
      Object.assign(browserLoadingWatching, { displayName: `Browser Loading & Watching Task - ${modeName}` }),
    ];
  }
  
  // Returning Tasks based on Exporting Context
  if (context === 'exporting') {
    return [
      cleanExport(mode),
      Object.assign(exportingZip, { displayName: `Exporting Zip Task - ${modeName}` }),
    ];
  }
  
  return undefined;
};

gulp.task('default', gulp.series(...genericTask('development', 'building')));
gulp.task('dev', gulp.series(...genericTask('development', 'building')));
gulp.task('prod', gulp.series(...genericTask('production', 'building')));
gulp.task('export', gulp.series(...genericTask('production', 'exporting')));
