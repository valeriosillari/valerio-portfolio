import gulp from 'gulp'
import criticalPkg from 'critical'
import appVariables from '../variables/app_variables'

const critical = cb => {
  console.log('====== critical START ======')

  // task callback
  cb()
}

export default critical
