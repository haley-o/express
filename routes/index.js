var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: "I'm having so much fun" }); //getting our index and running data into it, we are making stuff up and adding it through????
});

module.exports = router;
