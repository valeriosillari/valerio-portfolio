import dotenv from 'dotenv'
import path from 'path'
import shrinkRay from 'shrink-ray-current'
import express from 'express'
import createError from 'http-errors'
import routes from '../routes/routesList'
import appVariables from '../config/variables/app_variables'

// dotENV custom path keys file
const dotenvKeys = dotenv.config({
  path: appVariables.fileDotEnvKeys,
})

const app = express()

// serve compressed stuff (brotli / gzip as fallback). after start compression.
app.use(shrinkRay())

// url encoded to pass correct data from FE to server (contact form)
app.use(express.urlencoded({ extended: false }))

// view engine setup
// set pug src folder
app.set('views', appVariables.srcFolderViewsPages)
app.set('view engine', 'pug')

// assets folder (src files)
app.use(express.static(appVariables.distFolderAssets))

// use urls from routes file
app.use(routes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
