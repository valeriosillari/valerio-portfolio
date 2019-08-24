import gulp from 'gulp'
import appVariables from './../../config/variables/app_variables'

const staticFiles = cb => {
  gulp
    .src(appVariables.srcFileStaticFiles)
    .pipe(gulp.dest(appVariables.distFolderAssets))

  // task callback
  cb()
}

export default staticFiles
