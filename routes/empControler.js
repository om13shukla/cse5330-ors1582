var express = require('express');
var router = express.Router();
var empService = require('./empService');
var config = require('./config.json');
var chalk = require('chalk');



// routes
router.post('/findOne', findOne);
router.post('/createEmp', createEmp);


module.exports = router;

function createEmp(req, res) {
    console.log(chalk.yellow("routed to empContrlr in createEmp() -- calling empService.create()"));
    console.log(chalk.yellow(req.body));
    empService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function findOne(req, res) {
    console.log(chalk.yellow("routed to empContrlr findOne() -- calling empService.findOne()"));
    //console.log(chalk.red(req.body.empno));
    empService.findOne(req.body.empno)
        .then(function (emp) {
            if (emp) {
                res.send(emp);  
                console.log(chalk.yellow("empControler ---->emp sent"));
            } else {
                res.sendStatus(404);   console.log(chalk.red("Error sent"));
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}