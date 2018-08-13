var app = angular.module("foodChainPortal", []);

app.controller("HomepageCtrl", function ($scope) {
  $scope.goLogin = function() {
    window.location = "./login.html";
  };
  $scope.goReg = function(){
    window.location = "./register.html";
  };
});
