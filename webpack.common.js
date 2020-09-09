const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['@babel/polyfill', __dirname + '/src/index.js'],
  module: {
    rules: [
      // Babel設定
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [[
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                }
              ]]
            }
          }
        ]
      },
      // SASS SCSS CSS設定
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    // スタイルをCSSファイルに分離する設定
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    // HTMLファイル出力
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    // 画像ファイル出力
    new CopyPlugin({
      patterns: [
        { from: 'src/images', to: 'images' },
      ],
    }),
    // jQuery
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ]
};
