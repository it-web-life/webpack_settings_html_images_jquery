const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const merged = merge(common, {
  mode: 'development',
  output: {
    path: __dirname + '/dist/',
    filename: 'bandle.js',
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    contentBase: __dirname + '/dist/'
  },
  devtool: 'inline-source-map'
});

// 確認用
console.log(merged);

module.exports = merged;
