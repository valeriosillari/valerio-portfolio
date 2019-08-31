import gulp from 'gulp'
import criticalPkg from 'critical'
import appVariables from '../variables/app_variables'

const critical = cb => {
  console.log('====== critical START ======')

  criticalPkg.generate({
    inline: true,
    minify: true,
    // check folder with DIST files
    base: appVariables.distFolderAssets,
    src: 'index.html',
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
    dest: `index.html`,
  })

  console.log('====== critical END ======')

  // task callback
  cb()
}

export default critical
