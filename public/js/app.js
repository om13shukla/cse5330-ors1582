
var app = angular.module('myApp', ['uiGmapgoogle-maps']).config(
    ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
        GoogleMapApiProviders.configure({
            key:'AIzaSyAhp6ud3AmXvLbMNuiL8J_z4uI94kkCQSk',
            china: true
        });
    }]
);;

app.controller('myCtrl1', function($scope, $http) {
    $scope.preMsg="Click the button atleast !!";
    $scope.callServer=function() {
                $http.get("http://cse5335-ors1582.herokuapp.com/jsonfiles/userinfo.json")
                        .then(function(response) {
                $scope.ujson=response.data;
                $scope.preMsg="";
                $scope.details=true;
                $scope.active=" not active";
                var st=$scope.ujson.linked.users[0].isActive;    
                    if(st)                                      //Evaluating User is Active or Not
                        $scope.active="active";
                console.log(st);
                  
                //console.log(response);
    });
    }
    
    
});

app.controller('myCtrl2', function($scope, $http, uiGmapIsReady) {
    $scope.preMsg="Click the button atleast !!";
    $scope.callServer=function() {
                $http.get("http://cse5335-ors1582.herokuapp.com/jsonfiles/frndsinfo.json")
                        .then(function(response) {
                $scope.longj=response.data;
                $scope.preMsg="";
                $scope.details=true;
                $scope.markers={
                    "id":0,
                    "coords":{
                            "latitude":32.740757,
                            "longitude":-97.088242
                        }
                    
                };
                $scope.map = { center: { latitude: 32.729182, longitude: -97.115219 }, zoom: 10 };   
                    
                //console.log(response);
    });
    }
    
});

app.controller('myCtrl3', function($scope, $http) {
    $scope.preMsg="Click the button atleast !!";
    $scope.callServer=function() {
                $http.get("http://cse5335-ors1582.herokuapp.com/jsonfiles/chartData.json")
                        .then(function(response) {
                $scope.msg=response.data;
                $scope.preMsg="";
                $scope.details=true;    
                //console.log(response);
    });
    }
    
});
    