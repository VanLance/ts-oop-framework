const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, 'dist'),
  //   },
  //   compress: true
  // },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    publicPath: 'dist',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}