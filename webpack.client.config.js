var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpack = require('webpack');

module.exports = {
  entry: {
    index: './app/client.js'
  },
  output: {
    path: './dist/client-bundle/',
    filename: 'client.js',
    sourceMapFilename: '[file].map'
  },
  node : {
    __filename: true
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /(\.less$)|(\.css$)/,
        loader: ExtractTextPlugin.extract('style', 'css!less')
      },
      {
        test: /(\.png$)|(\.jpg$)/,
        loader: 'file'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    root: __dirname,
    alias : {
      COMPONENTS: 'app/client/UIcomponents',
      STYLE: 'app/styles',
      ENTITIES: 'app/client/UIcomponents/Entities',
      REDUX: 'app/client/redux',
      REQUEST: 'app/client/requests',
      FAKE: 'app/fake-server'
    }
  }
}
