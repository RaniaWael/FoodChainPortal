var app = angular.module("foodChainPortal", ["ngResource"]);

app.controller("RegisterCtrl", function ($scope, $http) {
  // $scope.filename = "register";
  // $scope.goMenu = function() {
  //   $http.get("http://localhost:8080/chicken-fila/secure/login").then(function(response){
  //     window.location = "./menu.html";
  //   });
  // };
  $scope.email = "";
  $scope.pass = "";
  $scope.confPass = "";
  $scope.mob = "";
  $scope.addr = "";


  $scope.execReg = function(){
    if($scope.pass === $scope.confPass && $scope.pass != ""){
      $scope.userData = {
        "email": $scope.email,
        "password": $scope.pass,
        "mobile": $scope.mob,
        "addr": $scope.addr,
        "addr2": ""
      };
      $http.post("http://localhost:8080/chicken-fila/newUser", $scope.userData).then(function(response){
        $scope.base64 = btoa($scope.email + ":" + $scope.pass);
        window.location = "./menu.html?" + $scope.base64;
      })
      .catch(function (response) {
        console.log(response);
      });
    }
  };
  // $scope.addAddr = function(){
  //
  // };
});
