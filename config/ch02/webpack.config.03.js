// webpack.config.03.js
const path = require('path')

module.exports = {
  entry: './src/ch0203/index.js',

  // resulting buntdle: ./dist/js/ch0202/bundle.js
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist/js/ch0203')
  },

  // new section. let's add a loader, babel-loader, so we can run our js through it
  // see .babelrc in this folder for additional configuration
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
    contentBase: path.join(__dirname, '../../'), // which filesystem directory is considered web root /
    watchContentBase: true,
    publicPath: '/dist/js/ch0203', // webpack-dev-server doesn't write to disk. what's what webpack does.  It serves the result from memory . so indicate in what server path you want it to be found
    compress: false,
    port: 9000
  }
}
