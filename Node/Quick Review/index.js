const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');

const User = require('./user.js');

mongoose.connect('mongodb://localhost/trashdb');

const app = express();

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
      response.render('base', {
        title: "Hello"
      })
    });
});

app.get('/create-user', function(req, res) {
  User.create({
      name: "Alex Or0" + Math.random(10000000)
    },
    function(err, user) {
      res.send(user);
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


app.listen(3000);
