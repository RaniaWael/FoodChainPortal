var app = angular.module("foodChainPortal", ["ngResource", "ngRoute"]);

app.controller("LoginCtrl", function ($scope, $http) {
  $scope.email = "";
  $scope.pass = "";

  $scope.execLogin = function(){
    $scope.base64 = btoa($scope.email + ":" + $scope.pass);
    $http.defaults.headers.common.Authorization = "Basic " + $scope.base64;

    $http.get("http://localhost:8080/chicken-fila/secure/login").then(function(response){
      window.location = "./menu.html";
    })
    .catch(function(response) {
      // console.log(response);
    });
  };

  $scope.goReg = function() {
    window.location = "./register.html";
  };
});
