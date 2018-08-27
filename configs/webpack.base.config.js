import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default new Config().merge({
  entry: './index.js',
  output: {
    path: __dirname + '/../public',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: "body"
    })]
});