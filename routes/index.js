var express = require('express');
var router = express.Router();

var users = [
  {"name": "Oscar",
  "email": "oscar@noob.tk",
  "phone": "123456789"},
  {"name": "Bob",
  "email": "bobo@bob.bob",
  "phone": "987654321"},
  {"name": "Alice",
  "email": "po@pod.dk",
  "phone": "123456789"}
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brugere i systemet', users });
});

module.exports = router;
