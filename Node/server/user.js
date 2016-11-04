const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  username: String,
  age: Number,
  lengths_of_fingers: Array,
});

var User = mongoose.model('User', userSchema);

module.exports = User;
