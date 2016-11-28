
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var Q = require('q');
var mongo = require('mongoskin');
var chalk = require('chalk');

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };  

var db = mongo.db(" mongodb://heroku_t8303vsz:2koj2ceu8u8l0l1dpabmu6g9ig@ds111718.mlab.com:11718/heroku_t8303vsz", { native_parser: true });
db.bind('emps');

var service = {};


service.findOne = findOne;
service.create = create;
service.update = update;
service.delete = _delete;



module.exports = service;


function findOne(fparams){
    
    console.log(chalk.green("REACHED in findOne() --> empService: fparam: "+fparams));      //for debugging
    var deferred = Q.defer();

    db.emps.findOne({empno:fparams}, function (err, emp) {
        if (err){ deferred.reject(err.name + ': ' + err.message);
                console.log(err)
                }

        if (emp) {
                
                console.log(emp);
            deferred.resolve(emp);
        } else {
            // emp not found
            deferred.resolve();
        }
    });

    return deferred.promise;
   
}


function create(eparams){
    console.log(chalk.green("REACHED in create() --> empService"));      //for debugging
    db.emps.insert(
            eparams,
            function (err, doc) {
                if (err) 
                    return err;
                console.log(chalk.yellow(doc));      //for debugging
            });
}

function update(){}

function _delete(){}
