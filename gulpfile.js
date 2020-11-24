// Node Packages
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const connect = require('gulp-connect-php');
const gulp = require('gulp');
const gulpBabel = require('gulp-babel');
const gulpPostcss = require('gulp-postcss');
const gulpSass = require('gulp-sass');
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
const exportPath = './website/dist/**/*';
const srcPath = (file, watch = false) => {
  if (file === 'scss' && watch === false) {
    console.log(file, 'false');
    return './website/src/scss/index.scss';
  }
  if (file === 'scss' && watch === true) {
    console.log(file, 'true');
    return './website/src/scss/**/*.scss';
  }
  if (file === 'js' && watch === false) {
    return entryArray;
  }
  if (file === 'js' && watch === true) {
    return './website/src/js/**/*.js';
  }
  if (file === 'php') {
    return './website/dist/**/*.php';
  }
  if (file === 'webfonts') {
    return './node_modules/@fortawesome/fontawesome-free/webfonts/**/*.{eot,ttf,woff,woff2,eof,svg}';
  }
  console.error('Unsupported file type entered into Gulp Task Runner for Source Path');
};
const distPath = (file, serve = false) => {
  if (['css', 'js'].includes(file)) {
    return `./website/dist/${file}`;
  }
  if (file === 'php' && serve === false) {
    return './website/dist/**/*.php';
  }
  if (file === 'php' && serve === true) {
    return './website/dist';
  }
  if (file === 'webfonts') {
    return './website/dist/webfonts';
  }
  console.error('Unsupported file type entered into Gulp Task Runner for Dist Path');
};

/**
 * Building Tasks
 */

// Build Styles Task
const buildStyles = (mode) => (done) => {
  const postcssPlugins = [
    autoprefixer({
      cascade: false,
    }),
  ];
  let outputStyle;
  if (mode === 'development') {
    outputStyle = 'nested';
  } else if (mode === 'production') {
    outputStyle = 'compressed';
  } else {
    outputStyle = undefined;
  }
  ['development', 'production'].includes(mode) ? pump([
    gulp.src(srcPath('scss'), { allowEmpty: true }),
    gulpSourcemaps.init({ loadMaps: true }),
    gulpSass({ outputStyle }),
    gulpPostcss(postcssPlugins),
    gulpSourcemaps.write('./'),
    gulp.dest(distPath('css')),
    browserSync.stream(),
  ], done()) : undefined;
};

// Build Scripts Task
const buildScripts = (mode) => (done) => {
  let streamMode;
  if (mode === 'development') {
    streamMode = require('./webpack/config.development.js');
  } else if (mode === 'production') {
    streamMode = require('./webpack/config.production.js');
  } else {
    streamMode = undefined;
  }
  
  ['development', 'production'].includes(mode) ? pump([
    gulp.src(srcPath('js')),
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

// Copy Fonts Task
const copyFonts = (mode) => (done) => {
  ['development', 'production'].includes(mode) ? pump([
    gulp.src(srcPath('webfonts')),
    gulp.dest(distPath('webfonts')),
  ], done()) : undefined;
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
    Object.assign(copyFonts(mode), { displayName: `Booting Copy Fonts Task: Build - ${modeName}` }),
    Object.assign(buildStyles(mode), { displayName: `Booting Styles Task: Build - ${modeName}` }),
    Object.assign(buildScripts(mode), { displayName: `Booting Scripts Task: Build - ${modeName}` }),
  ];
  
  // Browser Loading & Watching
  const browserLoadingWatching = (done) => {
    connect.server({
      base: distPath('php', true),
      port: 8010,
      keepalive: true,
    });
    browserSync.init({
      proxy: '127.0.0.1:8010',
      port,
    });
    
    // Watch - Styles
    gulp.watch(srcPath('php', true))
      .on('all', browserSync.reload);
    
    // Watch - Styles
    gulp.watch(srcPath('scss', true))
      .on('all', gulp.series(
        Object.assign(buildStyles(mode), { displayName: `Watching Styles Task: Build - ${modeName}` }),
      ), browserSync.reload);
    
    // Watch - Scripts
    gulp.watch(srcPath('js', true))
      .on('all', gulp.series(
        Object.assign(buildScripts(mode), { displayName: `Watching Scripts Task: Build - ${modeName}` }),
      ), browserSync.reload);
  };
  
  // Exporting Zip
  const exportingZip = (done) => {
    pump([
      gulp.src(exportPath),
      gulpZip('./website.zip'),
      gulp.dest('./'),
    ], done);
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
      ...allBootingTasks,
      Object.assign(exportingZip, { displayName: `Exporting Zip Task - ${modeName}` }),
    ];
  }
  
  // No Side-Effects Please
  return undefined;
};

/**
 * Main Gulp Build/Export Tasks that are inserted within `package.json`
 */

// Default (`npm start` or `yarn start`) => Production
gulp.task('default', gulp.series(...genericTask('production', 'building')));

// Dev (`npm run dev` or `yarn run dev`) => Development
gulp.task('dev', gulp.series(...genericTask('development', 'building')));

// Export (`npm run export` or `yarn run export`)
gulp.task('export', gulp.series(...genericTask('production', 'exporting')));
