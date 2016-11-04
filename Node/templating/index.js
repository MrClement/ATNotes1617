const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');

const User = require('./user.js');

mongoose.connect("mongodb://localhost/at16172", function(err) {
  if (err) {
    console.log("Connection unsuccessful")
    return;
  }
  console.log("Connected to DB!");
})


//  yarn add express mongoose body-parser pug

const app = express();

app.use(parser.urlencoded({
  extended: false
}));
app.use(parser.json());
app.set('views', '.')
app.set('view engine', 'pug');

app.get("/users", function(req, res) {
  User.find({})
    .exec(function(err, users) {
      if (err) throw err;
      res.render('users', {
        title: "All users",
        users: users
      });
    })
});

app.post('/users', function(req, res) {
  User.create({
    name: req.body.name,
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;
    res.redirect('/users');
  })
});



app.listen(3000);
