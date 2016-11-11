const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
  name: String,
});

userSchema.plugin(plm);

const User = mongoose.model('User', userSchema);

module.exports = User;
