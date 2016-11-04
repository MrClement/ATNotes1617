const mongoose = require('mongoose');

const User = require('./user.js');

mongoose.connect("mongodb://localhost/at16172", function(err) {
  if (err) {
    console.log("Connection unsuccessful")
    return;
  }
  console.log("Connected to DB!");
});

User.create({
  name: "Alex Clement",
  email: "aclement@kentdenver.org"
}, function(err, user) {
  if (err) throw err;
  console.log(user);
})
