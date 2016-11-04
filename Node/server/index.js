const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose')

var User = require('./user.js')

mongoose.connect('mongodb://localhost/at1617', function(err) {
  if (err) throw err;
  console.log("Database connection successful");
});

User.create({
  name: "Alex Clement",
  username: "aclement",
  age: 78,
  lengths_of_fingers: ["17 cm", "56 cm", "2 km", "1 fathom"]
}, function(err, newUser) {
  console.log(newUser);
})

//
// const app = express();
//
// var database = {};
//
// app.use(parser.json());
// app.use(parser.urlencoded({
//   extended: false
// }));
//
// app.get("/", function(req, res) {
//   res.send("Hello");
// });
//
// app.get('/mail', function(req, res) {
//   res.send(`
//   <h1>You don't have and will never have new mail.</h1>
//   `)
// });
//
// // Route parameter
// // marked and named with a colon, e.g. :id
// app.get('/users/:id', function(req, res) {
//   console.log(database[req.params.id]);
//   res.send("Info about user " + req.params.id + ":\n" +
//     JSON.stringify(database[req.params.id]));
// });
//
// app.post('/users', function(req, res) {
//   database[req.body.id] = req.body;
//   res.send("User " + req.body.id + "created!");
// })
//
// // Query string
// // follows the url and starts with a ?
// // https://www.google.com?name=Alex&cat=yes&hungry=true
// app.get('/candy', function(req, res) {
//   console.log(req.query);
//   res.send(req.query.name + " got some " + req.query.type);
// });
//
// // Body
// // Only exists in POST, PUT, DELETE, PATCH
// app.post('/candy', function(req, res) {
//   console.log(req.body);
//   res.send(req.body.firstName + " posted some candy");
// });
//
// app.delete
//
//
// app.listen(3000);
