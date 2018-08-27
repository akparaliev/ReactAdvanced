import Config from 'webpack-config';

export default new Config().extend('configs/webpack.base.config.js').merge({
  output: {
    filename: 'bundle.js'
  }
});