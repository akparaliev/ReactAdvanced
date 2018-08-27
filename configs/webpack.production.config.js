import Config from 'webpack-config';
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

export default new Config().extend('configs/webpack.base.config.js').merge({
  output: {
    filename: 'bundle.min.js'
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        beautify: false,
        ecma: 6,
        compress: true,
        comments: false,
        mangle: false
      }
    })
  ]
});