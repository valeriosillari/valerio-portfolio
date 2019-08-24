import webpack from 'webpack'
import dotEnv from 'dotenv-webpack'
import path from 'path'
import pathJsAlias from './../variables/webpack_javascript_aliases'
import appVariables from './../variables/app_variables'

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },

  resolve: {
    modules: [
      // folders where looking js files
      path.resolve('./node_modules'),
      path.resolve(appVariables.generatedFolderModernizr),
      path.resolve(appVariables.srcFolderJavascripts),
    ],
    // set alias name, so we can set just naming in the imported files
    alias: pathJsAlias.paths,
  },

  plugins: [
    // inject dotEnv keys into js files via webpack
    new dotEnv({
      // load this env file instead of the default one '.env' into root
      path: path.resolve(appVariables.fileDotEnvKeys),
      // set true for having them on deploy server
      systemvars: true,
    }),

    // shimming logic
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],

  // output file (min js naming)
  output: {
    filename: appVariables.distFileLayoutJavascripts,
  },

  mode: 'development',
}
