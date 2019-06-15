const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

const webpack = require('webpack');
const hotMiddlewareScript =
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
  mode: 'development',
  entry: {
    main: ['./app/main.js', hotMiddlewareScript]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    overlay: true,
    hot: true,
    injectHot: true
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.html$/,
        exclude: /\index.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            attrs: ['img:src']
          }
        }]
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'images/[name]-[hash:8].[ext]',
            context: path.resolve(__dirname, './app/assets/')
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader?classPrefix'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: 'app/view/index.pug'
    }),
    new SVGSpritemapPlugin('app/view/img/svg/*.svg', {
      output: {
        filename: 'images/spritemap.svg'
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  }
};