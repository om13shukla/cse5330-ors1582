var express = require('express');
var router = express.Router();

/* GET home page. After login.. Supposedly.!!! */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'My Store' });
});


module.exports = router;