const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mrefg19', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports.user = require('./user')
module.exports.canvas = require('./canvas')
