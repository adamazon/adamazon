let webpack = require('webpack');
let path = require('path');
let uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
let CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    path.resolve(__dirname, 'app/main.js'),
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!resolve-url-loader!sass-loader?sourceMap'
          }
        }
      },
      { test: /\.(png|jpe?g|gif|svg|ttf|woff2?|eot|ico)(\?.*)?$/, loader: 'url-loader', query: { limit: 10000, name: 'assets/[name].[ext]'}}
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      vue: 'vue/dist/vue.min'
    }
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new CopyWebpackPlugin([
      { from: './app/index.html', to: 'index.html' }
    ]),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: path.join(__dirname, 'src'),
        output: {
          path: path.join(__dirname, 'www')
        }
      }
    })
  ]
};
