// !!!
// This file not watch on DEV mode.
// If you change this file please stop and restart server manually

const appVariables = {

  // =====================
  // Server

  // local port for nodemon/server
  defaultAppPort: 5000,

  // local port for gulp browser sync
  servingAppPort: 9000,

  // =====================
  // Assets

  // src folders
  srcFolderViews            : './src/views',
  srcFolderViewsPages       : './src/views/pages',
  srcFolderStylesheets      : './src/assets/stylesheets',
  srcFolderJavascripts      : './src/assets/javascripts',

  // src files
  srcFileStaticFiles        : './static/**/*',
  srcFileFavicons           : './src/assets/favicons/**/*',
  srcFileFonts              : './src/assets/fonts/**/*',
  srcFileImages             : './src/assets/images/**/*',
  srcFileLayoutStylesheet   : './src/assets/stylesheets/layouts/index.sass',
  srcFileLayoutJavascript   : './src/assets/javascripts/layouts/index.js',

  // generated folders/files
  generatedFolderModernizr  : './src/assets/generated',

  // dist folders
  distFolderAssets          : './dist',
  distFolderFonts           : './dist/assets/fonts',
  distFolderImages          : './dist/assets/images',
  distFolderStylesheets     : './dist/assets/stylesheets',
  distFolderJavascripts     : './dist/assets/javascripts',

  // dist files name
  distFileLayoutStylesheets : 'index.min.css',
  distFileLayoutJavascripts : 'index.min.js',
}

export default appVariables
