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

app.use(passport.initialize());

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
  User.register(new User({
    name: req.body.name,
    username: req.body.username
  }), req.body.password, function(err, user) {
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

app.post('/admin', function(req, res) {
  passport.authenticate('local')(req, res, function() {
    return res.send("Permission granted!");
  });
});

app.get('/admin', function(req, res) {
  if (req.isAuthenticated()) {
    res.render('admin', {
      message: "You are an admin"
    })
  } else {
    res.render('admin', {
      message: "You are not an admin"
    });
  }
});

app.get('/api/users', function(req, res) {
  User.find({})
    .select('-_id -__v')
    .exec(function(err, users) {
      res.json(users);
    });
})

app.get('/api/users/:username', function(req, res) {
  User.findOne({
      username: req.params.username
    })
    .select('-_id -__v')
    .exec(function(err, user) {
      res.json(user);
    });
})


app.listen(3000);
