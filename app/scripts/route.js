// "use strict";

var app = angular.module("foodChainPortal", ["ngResource", "ngRoute"])
  .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when("/", {
          templateUrl: "./templates/homepage.html",
          controller: "HomepageCtrl",
          controllerAs: "homepage"
        })
        .when("/login", {
          templateUrl: "./templates/login.html",
          controller: "LoginCtrl",
          controllerAs: "login"
        })
        .when("/register", {
          templateUrl: "./templates/register.html",
          controller: "RegisterCtrl",
          controllerAs: "register"
        })
        .otherwise({
          redirectTo: "/"
        });

        $locationProvider.html5Mode(true);
    });

    app.controller("LoginCtrl", function ($scope) {
      $scope.filename = "login";

    });

    app.controller("HomepageCtrl", function ($scope) {
      // $scope.rest_name = constants.RESTAURANT_NAME;
      // $scope.slogan = constants.RESTAURANT_SLOGAN;
      $scope.filename = "homepage";
    });

    app();
