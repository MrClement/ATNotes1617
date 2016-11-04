const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  email: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
