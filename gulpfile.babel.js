import gulp from 'gulp'
import fonts from './config/gulp/task_fonts'
import staticFiles from './config/gulp/task_static_files'
import images from './config/gulp/task_images'
import styles from './config/gulp/task_styles'
import modernizr from './config/gulp/task_modernizr'
import scripts from './config/gulp/task_scripts'
import views from './config/gulp/task_views'
import assets from './config/gulp/task_assets'
import serverNodemon from './config/gulp/task_server_nodemon'
import startBrowserSync from './config/gulp/task_browser_sync'

// -----------
// sub tasks (ready to call manually and separately)
exports.fonts = fonts

exports.staticFiles = staticFiles

exports.images = images

exports.styles = styles

exports.modernizr = modernizr

exports.scripts = scripts

exports.views = views

exports.assets = assets

exports.serverNodemon = serverNodemon

exports.startBrowserSync = startBrowserSync

// -----------
// serve task | Dev Mode
exports.serve = gulp.series(assets, serverNodemon, startBrowserSync)

// -----------
// deploy task | Prod Mode
exports.build = gulp.series(assets, views)

// -----------
// default task | compile all assets
export default assets
