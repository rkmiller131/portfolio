const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'client', 'src', 'index.jsx'),
  output:{
    path: path.join(__dirname, 'client', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.?js|jsx$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        use: 'file-loader'
      },
    ]
  }
}