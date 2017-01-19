const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/dist/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

const port = process.env.PORT || 8080;
module.exports = app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}, LET ME OUT! Ctrl+C to stop`)
})
