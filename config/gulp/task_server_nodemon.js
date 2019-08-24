import gulpLoadPlugins from 'gulp-load-plugins'

// constant for Gulp Plugin
const gulpPlugin = gulpLoadPlugins()

const serverNodemon = cb => {
  const server = gulpPlugin.nodemon({
    // run nodemon with babel, so we can unleash ES6 syntax
    exec: 'babel-node',
    // run start script for server
    script: './server/start',
    // server watch specific files/folder and restart only when we got here changes
    watch: ['mailer/**/*', 'routes/**/*', 'server/**/*'],
  })

  // at start swith value and set timeout
  server.on('start', () => {
    cb()
  })
}

export default serverNodemon
