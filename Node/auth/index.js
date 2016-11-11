const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const locStrat = require('passport-local')
  .Strategy;

const User = require('./user.js');

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new locStrat(User.authenticate()));


mongoose.connect('mongodb://localhost/trashdb');

const app = express();

app.use(parser.urlencoded({
  extended: false
}));
app.use(parser.json());

app.use(express.static('static'));
app.set('view engine', 'pug');
app.set('views', '.');

app.get('/users', function(request, response) {
  //do something
  User.find({})
    .limit(10)
    .sort({
      name: -1
    })
    .exec(function(err, users) {
      console.log(users);
      response.render('base', {
        title: "Meow",
        users: users
      })
    });
});

app.post('/users', function(req, res) {
  User.create({
      name: req.body.name,
      password: req.body.password
    },
    function(err, user) {
      res.redirect('/users');
    });
});

app.get('/change-oro', function(req, res) {
  User.findOne({})
    .exec(function(err, user) {
      user.name = "Bob";
      user.save(function(err, u) {
        res.send(u);
      });
    })
})

app.get('/admin',
  passport.authenticate('local', {
    failureRedirect: "/users"
  }),
  function(req, res) {
    return res.send("Permission granted!");
  });


app.listen(3000);
