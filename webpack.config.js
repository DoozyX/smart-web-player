const path = require('path');

module.exports = {
  entry: './src/video_js.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // libraryExport: 'default',
    libraryTarget: 'umd',
    library: undefined,
  },
};
