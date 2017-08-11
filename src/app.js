const Server = require('./server.js')
const port = (process.env.PORT || 8080)
const app = Server.app()
console.log('Starting, environment set to ' + process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
  console.log('Starting server');
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('../webpack.config.js')
  const compiler = webpack(config)
  console.log('End of requires');
  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)