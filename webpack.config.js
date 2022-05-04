const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/firebase/firebase.js',
  output: {
    path: path.resolve(__dirname, 'src/firebase'),
    filename: 'bundle.js'
  },
  watch: true
}