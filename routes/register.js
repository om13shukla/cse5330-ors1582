var express = require('express');
var router = express.Router();
var config=require('./config.json');
var request = require('request');
var chalk = require('chalk');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

router.post('/', function (req, res) {
    // register using api to maintain clean separation between layers
    console.log(chalk.yellow("register-post happns  here --> calling userControl next"));
    request.post({
        url: 'http://localhost:3000/api/users/register',
        form: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            console.log(chalk.yellow("Error occurd  here callback() for userControl"));
            return res.render('register', { error: 'An error occurred' });
        }

        if (response.statusCode !== 200) {
            return res.render('register', {
                error: response.body,
                username: req.body.username
                
            });
        }

        // return to login page with success message
        req.session.success = 'Registration successful';
        return res.redirect('/index');
    });
});


module.exports = router;
    