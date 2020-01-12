import gulp from 'gulp'
import criticalPkg from 'critical'
import appVariables from '../variables/app_variables'

const criticalCoreTask = pageName => {
  return criticalPkg.generate({
    inline: true,
    minify: true,
    // check folder with DIST files
    base: appVariables.distFolderAssets,
    src: `${pageName}.html`,
    css: './dist/assets/stylesheets/index.min.css',
    ignore: ['font-face'],
    dimensions: [
      {
        width: 320,
        height: 480,
      },
      {
        width: 768,
        height: 1024,
      },
      {
        width: 1280,
        height: 960,
      },
    ],
    dest: `${pageName}.html`,
  })
}

const critical = cb => {
  console.log(
    '====== critical START : we need a sync loop, one after eahc other ======'
  )
  appVariables.srcPagesFilenameArray.map(fileName => criticalCoreTask(fileName))

  console.log('====== critical END 001 ======')

  // task callback
  cb()
}

export default critical
