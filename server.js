var path = require('path');
var browserSync = require('browser-sync');

var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackConfig = require('./webpack.config')

var app = new (require('express'))()
var port = 5000

var compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath }))

app.use(webpackHotMiddleware(compiler))

app.use(function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    // console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync({
    server: {
	baseDir: __dirname,

	routes: {
	    '/lib': path.join(__dirname, './node_modules')
	},

	middleware: [
	    webpackDevMiddleware(compiler, {
		// IMPORTANT: dev middleware can't access config, so we should
		// provide publicPath by ourselves
		publicPath: webpackConfig.output.publicPath,

		// pretty colored output
		stats: {colors: true}

		// for other settings see
		// http://webpack.github.io/docs/webpack-dev-middleware.html
	    }),

	    // compiler should be the same as above
	    webpackHotMiddleware(compiler)
	]
    },

    // no need to watch '*.js' here, webpack will take care of it for us,
    // including full page reloads if HMR won't work
    files: [
	'**/*.html'
    ]
});
