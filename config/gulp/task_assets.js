import gulp from 'gulp'
import staticFiles from './task_static_files'
import styles from './task_styles'
import modernizr from './task_modernizr'
import scripts from './task_scripts'

const assets = gulp.series(staticFiles, styles, modernizr, scripts)

export default assets
