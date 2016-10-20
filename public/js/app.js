
var app = angular.module('myApp', []);
app.controller('myCtrl1', function($scope, $http) {
    $scope.preMsg="Click the button atleast !!";
    $scope.callServer=function() {
                $http.get("http://localhost:3000/jsonfiles/userinfo.json")
                        .then(function(response) {
                $scope.ujson=response.data;
                $scope.preMsg="";    
                //console.log(response);
    });
    }
    
});

app.controller('myCtrl2', function($scope, $http) {
    $scope.preMsg="Click the button atleast !!";
    $scope.callServer=function() {
                $http.get("http://localhost:3000/jsonfiles/chartData.json")
                        .then(function(response) {
                $scope.msg=response.data;
                $scope.preMsg="";    
                //console.log(response);
    });
    }
    
});
    