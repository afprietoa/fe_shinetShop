const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const typescript = require('gulp-typescript');
const babel = require('gulp-babel');
//Images
const imagemin = require('gulp-imagemin')

function css(done){
    
    src('src/scss/style.scss')//Identify the main file
    .pipe(sass())//Compile SASS
    .pipe(dest('build/css'))//Export and save file in the location
    
    done();
}

function jsc(done){
    
    src('src/tsc/**/*.ts')//Identify the main file
    .pipe(typescript())//Compile SASS
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(dest('build/jsc'))//Export and save file in the location
    
    done();
}

function dev(){
    watch('src/scss/**/*.scss', css);
    watch('src/tsc/**/*.ts', jsc);
}

function images(done) {
    src('src/assets/images/**/*')
    .pipe(imagemin({optimizationLevel:3}))
    .pipe(dest('build/assets/images'))

    done();
}

exports.images = images;
exports.css = css;
exports.jsc = jsc;
exports.dev = dev;
exports.default = series(images, css, jsc,dev);