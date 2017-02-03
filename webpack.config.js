var path = require('path');
module.exports = {
  entry: {
    app: ['./src']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
}
