import gulp from 'gulp'
import appVariables from './../../config/variables/app_variables'

const fonts = cb => {
  gulp
    .src(appVariables.srcFileFonts)
    .pipe(gulp.dest(appVariables.distFolderFonts))

  // task callback
  cb()
}

export default fonts
