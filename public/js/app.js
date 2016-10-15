
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.callServer=function() {
                $http.get("http://cse5335-ors1582.herokuapp.com/jsonfiles/chartData.json")
                        .then(function(response) {
                $scope.msg=response.data;
                //console.log(response);
    });
    }
    
});
    