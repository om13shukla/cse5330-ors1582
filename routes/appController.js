var express = require('express');
var router = express.Router();
var chalk = require('chalk');

// use session auth to secure the angular app files
router.use('/', function (req, res, next) {
    if (req.path !== '/index' && !req.session.token) {
        console.log(chalk.yellow("redirecting to login --> appController"));
        return res.redirect('/index?returnUrl=' + encodeURIComponent('/app' + req.path));
    }

    next();
});

// make JWT token available to angular app
router.get('/token', function (req, res) {
    res.send(req.session.token);
});

// serve angular app files from the '/app' route
router.use('/', express.static('app'));

module.exports = router;