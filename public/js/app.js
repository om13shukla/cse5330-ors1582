
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.callServer=function() {
                $http.get("http://localhost:3000/jsonfiles/chartData.json")
                        .then(function(response) {
                $scope.msg=response.data;
                //console.log(response);
    });
    }
    
});
    