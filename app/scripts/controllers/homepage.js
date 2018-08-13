// const constants = require("./constants/constants.js");
// var app = angular.module("foodChainPortal", []);
// app.controller("HomepageCtrl", function ($scope) {
  // $scope.rest_name = constants.RESTAURANT_NAME;
  // $scope.slogan = constants.RESTAURANT_SLOGAN;
//   $scope.filename = "homepage";
// });



var app = angular.module("foodChainPortal", ["ui.router"]);

// app.config(function($stateProvider, $urlRouterProvider) {
//   $stateProvider.
// });

app.controller("HomepageCtrl", function ($scope) {
  $scope.goLogin = function() {

  };
  // $scope.goMenu = function(){
  //
  // };
});
