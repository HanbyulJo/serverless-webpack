const path = require('path');

module.exports = {
  entry: {
    first: ['./first.js'],
    second: ['./second.js']
  },
  target: 'node',
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: __dirname,
      exclude: /node_modules/,
    }]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name]'
  }
};
