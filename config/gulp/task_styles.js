import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import cssnano from 'cssnano'
import fonts from './task_fonts'
import images from './task_images'
import appVariables from './../../config/variables/app_variables'

// constant for Gulp Plugin
const gulpPlugin = gulpLoadPlugins()

const taskStylesSass = (cb) => {
  // take original file
  return (
    gulp
      .src(appVariables.srcFileLayoutStylesheet)

      // processing ...
      .pipe(
        gulpPlugin
          .sass({
            outputStyle: 'compressed',
          })
          // just for error better message on log/CLI
          .on('error', gulpPlugin.sass.logError)
      )

      // prefixer
      .pipe(gulpPlugin.autoprefixer('last 3 versions'))

      // post css plugins (we use only css nano)
      .pipe(gulpPlugin.postcss([cssnano()]))

      // rename
      .pipe(gulpPlugin.rename(appVariables.distFileLayoutStylesheets))

      // set folder where put generated file
      .pipe(gulp.dest(appVariables.distFolderStylesheets))
  )

  // task callback
  cb()
}

const styles = gulp.series(fonts, images, taskStylesSass)

export default styles
