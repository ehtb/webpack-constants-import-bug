const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const config = require('./webpack.config.js')
config.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/')

const compiler = webpack(config)
const server = new WebpackDevServer(compiler, {contentBase: 'build/'})

server.listen(8080)
