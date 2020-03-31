import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import appVariables from '../variables/app_variables'

// constant for Gulp Plugin
const gulpPlugin = gulpLoadPlugins()

const views = (cb) => {
  return (
    gulp
      .src('./src/views/pages/**/*')
      // processing
      .pipe(
        gulpPlugin.pug({
          pretty: false,
        })
      )

      // generating html files
      .pipe(gulp.dest(appVariables.distFolderAssets))
  )

  cb()
}

export default views
