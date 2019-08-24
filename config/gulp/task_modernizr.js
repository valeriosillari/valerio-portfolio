import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import appVariables from './../../config/variables/app_variables'

// js file path for webpack
// import jsPaths from './../gulp_js_file_paths.js'

// constant for Gulp Plugin
const gulpPlugin = gulpLoadPlugins()

const modernizr = cb => {
  gulp
    // inputs
    .src([appVariables.srcFileLayoutJavascript])

    // processing ...
    .pipe(
      gulpPlugin.modernizr({
        // custom options
        options: [
          'setClasses',
          'addTest',
          'html5printshiv',
          'testProp',
          'fnBind',
        ],
        // Define any tests you want to explicitly include
        tests: [
          // check if device is touch event. automatically add class to html tag
          // Touch device YES >> class "touchevents"
          // Touch device NO  >> class "no-touchevents"
          'touchevents',
        ],
      })
    )

    // output
    .pipe(gulp.dest(appVariables.generatedFolderModernizr))

  // task callback
  cb()
}

export default modernizr
