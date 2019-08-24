import gulp from 'gulp'
import styles from './task_styles.js'
import scripts from './task_scripts.js'
import browserSync from 'browser-sync'
import appVariables from './../../config/variables/app_variables'

const startBrowserSync = cb => {
  browserSync.init({
    // where we got the app running via nodemon | source
    proxy: `http://localhost:${appVariables.defaultAppPort}`,
    // set new port for using gulp and browser sync on DEV mode
    port: appVariables.servingAppPort,
    // check changes into these folders
    files: [
      `${appVariables.srcFolderViews}/**/*`,
      `${appVariables.distFolderAssets}/**/*`,
    ],
    // browser notify box at corner
    notify: true,
    // stop the browser from automatically opening at start
    open: false,
  })

  // watch changes on assets
  gulp.watch(`${appVariables.srcFolderStylesheets}/**/*`, gulp.series('styles'))
  gulp.watch(
    `${appVariables.srcFolderJavascripts}/**/*`,
    gulp.series('scripts')
  )

  // task callback
  cb()
}

export default startBrowserSync
