import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import appVariables from './../../config/variables/app_variables'

// constant for Gulp Plugin
const gulpPlugin = gulpLoadPlugins()

const images = cb => {
  gulp
    .src(appVariables.srcFileImages)

    // cache logic for image optmization
    .pipe(
      gulpPlugin.cache(
        // image optimization
        gulpPlugin.imagemin(
          // Set options
          [
            // gulpPlugin.imagemin.gifsicle({
            //   interlaced: true,
            // }),
            gulpPlugin.imagemin.mozjpeg({
              progressive: true,
            }),
            gulpPlugin.imagemin.optipng({
              optimizationLevel: 5,
            }),
          ],
          {
            verbose: true,
          }
          // end gulp imagemin
        ),

        // cache options
        {
          // Bucket to store favicons in cache.
          name: 'images',
        }

        // end gulp cache
      )

      // end pipe
    )

    // output
    .pipe(gulp.dest(appVariables.distFolderImages))

  // task callback
  cb()
}

export default images
