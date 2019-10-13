/**
 * Dependencies
 * -----------------------------------------------------------------------------
 */

/**
 * If 'npm install' not working!
 * npm install babel-core babel-preset-env del gulp gulp-autoprefixer gulp-babel gulp-cssmin gulp-if gulp-imagemin gulp-include gulp-plumber gulp-prettify gulp-pug gulp-rename gulp-sass gulp-uglify gulp-util live-server run-sequence --save-dev
 * -----------------------------------------------------------------------------
 */

/* ========================= Gulp ========================= */
const gulp = require('gulp')
/* ========================= Sass ========================= */
sass = require('gulp-sass')
autoprefixer = require('gulp-autoprefixer')
cssmin = require('gulp-cssmin')

/* ========================= Babel ========================= */
babel = require('gulp-babel')
/* ========================= Image ========================= */
imagemin = require('gulp-imagemin')
/* ========================= File Name & Includes ========================= */
rename = require('gulp-rename')
include = require('gulp-include')
/* ========================= Eror Reporting ========================= */
del = require('del')
/* ========================= Compaile & Server ========================= */
gulpif = require('gulp-if')
sequence = require('run-sequence')
liveServer = require("live-server")

/*
 * Output Css & Js File Name and Set Paths
 * -----------------------------------------------------------------------------
 */

demo = false, //Minified file include
    ThemeName = 'theme',
    path = {
        base: './',
        developmentDir: 'resources',
        productionDir: ThemeName.charAt(0).toUpperCase() + ThemeName.slice(1) + ' HTML'
    };

 /**
 * Include html file
 * -----------------------------------------------------------------------------
 */
gulp.task('include', function () {
    gulp.src(path.developmentDir + '/html/**')
        .pipe(include({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(path.base + path.productionDir));
});

/**
 * Build styles with Style SCSS
 * -----------------------------------------------------------------------------
 */

gulp.task('sass', function () {
    //Select files
    return gulp.src(path.developmentDir + '/sass/**')
        //Compile Sass
        .pipe(sass({
            outputStyle: 'expanded'
        }))

        //Add vendor prefixes
        .pipe(autoprefixer({
            browsers: ['last 4 version'],
            cascade: false
        }))
        //Save unminified file
        .pipe(gulpif(!demo, gulp.dest(path.base + path.productionDir + '/assets/css')))
        //Optimize and minify
        .pipe(cssmin())
        //Append suffix
        .pipe(rename({
            suffix: '.min'
        }))
        //Save minified file
        .pipe(gulp.dest(path.base + path.productionDir + '/assets/css'));
});
/**
 * Build styles with Bootstrap
 * -----------------------------------------------------------------------------
 */

gulp.task('bootstrap', function () {
    //Select files
    return gulp.src(path.developmentDir + '/include/bootstrap/*')
        //Compile Sass
        .pipe(sass({

            outputStyle: 'expanded'

        }))
        //Add vendor prefixes
        .pipe(autoprefixer({
            browsers: ['last 4 version'],
            cascade: false
        }))
        //Save unminified file
        .pipe(gulpif(!demo, gulp.dest(path.base + path.productionDir + '/assets/css')))
        //Optimize and minify
        .pipe(cssmin())
        //Append suffix
        .pipe(rename({
            suffix: '.min'
        }))
        //Save minified file
        .pipe(gulp.dest(path.base + path.productionDir + '/assets/css'));
});

/**
 * Build styles with Plugins
 * -----------------------------------------------------------------------------
 */

gulp.task('plugins', function () {
    //Select files
    return gulp.src(path.developmentDir + '/include/plugins-bundle.scss')
        //Compile Sass
        .pipe(sass({

            outputStyle: 'expanded'

        }))
        //Add vendor prefixes
        .pipe(autoprefixer({
            browsers: ['last 4 version'],
            cascade: false
        }))
        //Save unminified file
        .pipe(gulpif(!demo, gulp.dest(path.base + path.productionDir + '/assets/css')))
        //Optimize and minify
        .pipe(cssmin())
        //Append suffix
        .pipe(rename({
            suffix: '.min'
        }))
        //Save minified file
        .pipe(gulp.dest(path.base + path.productionDir + '/assets/css'));
});


/**
 * Build styles with icofont
 * -----------------------------------------------------------------------------
 */

gulp.task('icofont', function () {
    //Select files
    return gulp.src(path.developmentDir + '/include/icofont.scss')
        //Compile Sass
        .pipe(sass({

            outputStyle: 'expanded'

        }))
        //Add vendor prefixes
        .pipe(autoprefixer({
            browsers: ['last 4 version'],
            cascade: false
        }))
        //Save unminified file
        .pipe(gulpif(!demo, gulp.dest(path.base + path.productionDir + '/assets/css')))
        //Optimize and minify
        .pipe(cssmin())
        //Append suffix
        .pipe(rename({
            suffix: '.min'
        }))
        //Save minified file
        .pipe(gulp.dest(path.base + path.productionDir + '/assets/css'));
});

/**
 * Build scripts with ES6/Babel
 * -----------------------------------------------------------------------------
 */
 

gulp.task('pluginsJS', function () {
    //Select files
    return gulp.src(path.developmentDir + '/babel/**')
        //Concatenate includes
        .pipe(include())
        //Transpile
        .pipe(babel({
            presets: [
                ['env', {
                    loose: true,
                    modules: false
                }]
            ] //'use-strict' deleted
        }))
        //Save unminified file
        .pipe(gulpif(!demo, gulp.dest(path.base + path.productionDir + '/assets/js')))
        //Optimize and minify

        //Append suffix
        .pipe(rename({
            suffix: '.min'
        }))
        //Save minified file
        .pipe(gulp.dest(path.base + path.productionDir + '/assets/js'));
});


/**
 * Build scripts with ES6/Babel Bootstrap JS
 * -----------------------------------------------------------------------------
 */

gulp.task('bootstrapJS', function () {
    //Select files
    return gulp.src(path.developmentDir + '/babel/bootstrap.js')
        //Concatenate includes
        .pipe(include())
        //Transpile
        .pipe(babel({
            presets: [
                ['env', {
                    loose: true,
                    modules: false
                }]
            ] //'use-strict' deleted
        }))
        //Save unminified file
        .pipe(gulpif(!demo, gulp.dest(path.base + path.productionDir + '/assets/js')))
        //Optimize and minify

        //Append suffix
        .pipe(rename({
            suffix: '.min'
        }))
        //Save minified file
        .pipe(gulp.dest(path.base + path.productionDir + '/assets/js'));
});

/**
 * Delete Production files
 * -----------------------------------------------------------------------------
 */
gulp.task('delete', function () {
    return del([path.base + path.productionDir + '/lib',
        path.base + path.productionDir + '/lib/footer',
        path.base + path.productionDir + '/lib/header',
        path.base + path.productionDir + '/lib/modals',
        path.base + path.productionDir + '/lib/product',
        path.base + path.productionDir + '/lib/css.html',
        path.base + path.productionDir + '/lib/script.html',
        path.base + path.productionDir + '/assets/css/.min',
        path.base + path.productionDir + '/assets/css/colors.css',
        path.base + path.productionDir + '/assets/css/colors.min.css',
        path.base + path.productionDir + '/assets/css/variables.css',
        path.base + path.productionDir + '/assets/css/variables.min.css'

    ], {
        force: true
    });
});


/**
 * Copy image files
 * -----------------------------------------------------------------------------
 */
gulp.task('images', function () {
    //Select files
    return gulp.src(demo ? path.developmentDir + '/images/sample/**/*' : path.developmentDir + '/images/prod/**/*')
        //ImageMin
        .pipe(imagemin())
        //Save files
        .pipe(gulp.dest(demo ? path.base + path.productionDir + '/assets/img/sample' : path.base + path.productionDir + '/assets/img'))
});

/**
 * Copy vendors files
 * -----------------------------------------------------------------------------
 */

gulp.task('vendors', function () {
    //Select files
    return gulp.src(path.developmentDir + '/vendors/**/*')
        //Save files
        .pipe(gulp.dest(path.base + path.productionDir + '/assets/vendors'));
});

/**
 * Server
 * -----------------------------------------------------------------------------
 */

gulp.task('server', function () {

    //Create and initialize local server
    liveServer.start({
        port: 3000,
        host: "127.0.0.1",
        root: path.base + path.productionDir,
        file: "index.html"
    });
});

//Watch for source changes and execute associated tasks
gulp.watch(path.developmentDir + '/html/**', ['include']);
gulp.watch(path.developmentDir + '/sass/*', ['sass']);
gulp.watch(path.developmentDir + '/include/bootstrap/*', ['bootstrap']);
gulp.watch(path.developmentDir + '/include/plugins-bundle.scss', ['plugins']);
gulp.watch(path.developmentDir + '/include/icofont.scss', ['icofont']);
gulp.watch(path.developmentDir + '/babel/*', ['pluginsJS']);
gulp.watch(path.developmentDir + '/babel/bootstrap.js', ['bootstrapJS']);
gulp.watch(path.developmentDir + '/images/**/*', ['images']);
gulp.watch(path.developmentDir + '/vendors/**/*', ['vendors']);

/**
 * Default Task
 * -----------------------------------------------------------------------------
 */

gulp.task('default', function (callback) {
    return sequence(
        ['include'],
        ['sass'],
        ['bootstrap'],
        ['plugins'],
        ['icofont'],
        ['bootstrapJS'],
        ['pluginsJS'],
        ['images'],
        ['vendors'],
        ['delete'],
        ['server'],
        callback);
});