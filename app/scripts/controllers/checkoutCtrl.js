var app = angular.module("foodChainPortal", ["ngResource", "ngRoute"]);

app.controller("CheckoutCtrl", function ($scope, $http) {
  var x = window.location.search;
  var a = x.split(",");
  // console.log(a);
  $scope.subtotal = parseFloat(a[10].substring(9));
  // $scope.order = JSON.parse(x.substring(7, x.length - (a[10].length + 1)));
  $scope.service = $scope.subtotal * 0.12;
  $scope.taxes = $scope.subtotal * 0.13;
  $scope.delivery = 10;
  $scope.total = $scope.subtotal + $scope.service + $scope.taxes + $scope.delivery;

});
