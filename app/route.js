'use strict';

//'ngResource',

app = angular.module('foodChainPortal', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider) {
  console.log("hereeee");
    $routeProvider
      .when('/', {
        templateUrl: './templates/homepage.html',
        controller: 'HomepageCtrl',
        controllerAs: 'homepage'
      })
      .when('/login', {
        templateUrl: './templates/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: './templates/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  // .controller('app', function($scope, $http) {
  //   // $http.get("index.html");
  //   $scope.name = "Rania";
  // });
