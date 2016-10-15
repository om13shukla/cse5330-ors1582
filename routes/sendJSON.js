var express = require('express');
var router = express.Router();
var request = require('request');
var chalk = require('chalk');
var longJSON=require('./longJ.json');
var uinfoJSON=require('./uinfo.json');
var chartData= require('./chartData.json')

/* GET home page. */
router.get('/frndsinfo.json', function(req, res, next) {
    console.log(chalk.red("in get() in sendJSON.js - sending json file"));
    
    res.contentType('application/json');

 //var frndJSON = JSON.stringify(longJSON);        //Debug Purposes
 res.send(longJSON);
    
});

router.get('/userinfo.json', function(req, res, next) {
    console.log(chalk.red("in get() in sendJSON.js - sending json file"));
    
    res.contentType('application/json');    

 //var infoJSON = JSON.stringify(uinfoJSON);            //Debug Purposes
 res.send(uinfoJSON);
    
});

router.get('/chartData.json', function(req, res, next) {
    console.log(chalk.red("in get() in sendJSON.js - sending json file"));
    
    res.contentType('application/json');    

 //var infoJSON = JSON.stringify(uinfoJSON);            //Debug Purposes
 res.send(chartData);
    
});




module.exports = router;