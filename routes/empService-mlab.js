
var _   = require('lodash');
var jwt = require('jsonwebtoken');
var Q   = require('q');
var mongoose = require('mongoose');
var chalk    = require('chalk');

var options  = { server: { socketOptions: { keepAlive: 300000 } }, 
                replset: { socketOptions: { keepAlive: 300000 } } };

var mlab = 'mongodb://heroku_t8303vsz:2koj2ceu8u8l0l1dpabmu6g9ig@ds111718.mlab.com:11718/heroku_t8303vsz'

mongoose.connect(mlab);

var db = mongoose.connection;



db.on('error', console.error.bind(console, 'connection error:'));

/*db.once('open', function callback () {
    
    
    console.log(chalk.green("Connected to mongolab.--- Connection is now open"));
    var empSchema = mongoose.Schema({
   empno: Number,
   Name: String,
   employees: Number,
   long: Number,
   lat: Number,
   no1: Number,
   region: String,
   field: String,
   avg: Number
  });

var Emp = mongoose.model('emps', empSchema);

});
*/
var Emp = db.collection('emps');

var service = {};


service.findOne = findOne;
service.create = create;
service.update = update;
service.delete = _delete;



module.exports = service;


function findOne(fparams){
    
    console.log(chalk.green("REACHED in findOne() --> empService: fparam: "+fparams));      //for debugging
    var deferred = Q.defer();

    
    var promise =Emp.findOne({"empno":fparams});  /*, function (err, emp) {
        if(err){ deferred.reject(err.name + ': ' + err.message);
                console.log(chalk.red("Logging Error"));
                console.log(err)
              }
        
        if(emp) {
                console.log(chalk.blue("Logging EMP:  ----No ERROR"));
                console.log(emp);
                var emp1=emp;
                //return emp1;
                //deferred.resolve(emp);
        } else {
                // emp not found
                deferred.resolve();
        }
        return deferred.promise;
   
        //return emp;
    });
    
    */
    return promise;
   
}


function create(eparams){
    console.log(chalk.green("REACHED in create() --> empService"));      //for debugging
    console.log(chalk.green("creating: ------------------------------- " +eparams.empno+" "+eparams.Name));      //for debugging
    
    /* var newEmp =  new Emp(eparams);
    newEmp.save(function (err, emp) {
            if (err) return console.error(err);
            concat.log(chalk.brown("just Inserted EMP--"+ emp.empno));    
        });
        */
    
    
    var promise = Emp.insert(eparams);
    return promise;
}

function update(){}

function _delete(){}
