const path = require('path')

module.exports = {
	// starting point of what we're bundling (imports things, which may import things, ..)
	entry: './src/ch0202/index.js',

	// resulting buntdle: ./dist/js/ch0202/bundle.js
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../../dist/js/ch0202')
	},

	// webpack-dev-server configuration
	devServer: {
		contentBase: path.join(__dirname, '../../'), 
		watchContentBase: true,
		publicPath: '/dist/js/ch0202',
		compress: false,
		port: 9000
	}
}
