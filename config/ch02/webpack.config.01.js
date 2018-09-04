const path = require('path')

module.exports = {
	// starting point of what we're bundling (imports things, which may import things, ..)
	entry: './src/ch0201/index.js',

	// resulting buntdle: ./dist/js/ch0202/bundle.js
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../../dist/js/ch0201')
	}
}
