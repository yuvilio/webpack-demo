// webpack.config.04.js
const path = require('path')

module.exports = {
    // code splitting example .
  entry: {
    app: './src/ch0204/index.js'
  },
  output: {
    // we'll output
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../../dist/js/ch0204'),

  },


  // run some js through babel
  module: {
    rules: [
      {
        test: /\.js/, // test condition (it's a js file)
        exclude: /(node_modules|bower_components)/,  // skip these directories when encounering them
        use: {
          loader: 'babel-loader', // run the .js file you found through the babel transpiler
          options: {
            babelrc: true
          }
        }
      }
    ]
  },

  // webpack-dev-server configuration
  devServer: {
    contentBase: path.join(__dirname, '../../'),
    watchContentBase: true,
    publicPath: '/dist/js/ch0204',
    compress: false,
    port: 9000
  }
}
