var express = require('express');
var router = express.Router();
var request = require('request');
var chalk = require('chalk');

/* GET home page. */
router.get('/', function(req, res, next) {
    delete req.session.token;
    
    var viewData = { success: req.session.success };
    delete req.session.success;
  res.render('index', viewData);
});

router.post('/', function (req, res) {
    // authenticate using api to maintain clean separation between layers
    console.log(chalk.yellow("index-post happns  here --> calling userControl next"));
    request.post({
        url: 'http://localhost:3000/api/users/authenticate',
        form: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            console.log(chalk.yellow("Error occurd  here callback() for userControl"));
            console.log(error);
            return res.render('index', { error: 'An error occurred' });
        }

        if (!body.token) {
            return res.render('index', { error: body, username: req.body.username });
        }

        // save JWT token in the session to make it available to the angular app
        req.session.token = body.token;

        // redirect to returnUrl
        var returnUrl = req.query.returnUrl && decodeURIComponent(req.query.returnUrl) || '/';
        res.redirect(returnUrl);
    });
});

module.exports = router;
