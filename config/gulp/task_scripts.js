import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import webpackStream from 'webpack-stream'
import webpackConfig from './../../config/webpack/webpack.config'
import appVariables from './../../config/variables/app_variables'

// constant for Gulp Plugin
const gulpPlugin = gulpLoadPlugins()

const scripts = cb => {
  return (
    gulp
      .src(appVariables.srcFileLayoutJavascript)
      // webpack processing ...
      // call webpack config file with all options
      .pipe(webpackStream(webpackConfig))

      // uglify code
      .pipe(gulpPlugin.uglify())

      // set folder where put generated file
      .pipe(gulp.dest(appVariables.distFolderJavascripts))
  )

  // task callback
  cb()
}

export default scripts
