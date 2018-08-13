var app = angular.module("foodChainPortal", ["ngResource"]);

app.controller("MenuCtrl", function ($scope, $http) {

  $http.defaults.headers.common.Authorization = "Basic cmFuaWFAZ21haWwuY29tOjEyMzQ=";

  $http.get("http://localhost:8080/chicken-fila/secure/menu").then(function(response){
    $scope.menu = response.data;

    for (i = 0; i < $scope.menu.sandwiches.length; i++){
      $scope.menu.sandwiches[i].order = 0;
      $scope.menu.sandwiches[i].type = "SAND";
    }

    for (i = 0; i < $scope.menu.sides.length; i++){
      $scope.menu.sides[i].order = 0;
      $scope.menu.sides[i].type = "SIDE";
    }

    for (i = 0; i < $scope.menu.drinks.length; i++){
      $scope.menu.drinks[i].order = 0;
      $scope.menu.drinks[i].type = "DRINK";
    }

  })
  .catch(function(response){
    console.log(response);
  });

  $scope.order = {
    "order_items": []
  };

  $scope.sub = function(order) {
    if(order > 0){
      return order - 1;
    }
    return 0;
  };

  $scope.addItem = function(item_id, quantity, type, price) {
    if(quantity >= 0){
      var newItem = true;
      $scope.order.order_items.some(function(order){
        if (order.id.item_id == item_id && order.id.type === type){
          // Change the values here
          order.quantity = quantity;
          newItem = false;

          // Breaks out of the loop
          return true;
        }
      });

      // Change priceHelper
      if (!newItem){
        $scope.priceHelper.some(function(order){
          if (order.item_id == item_id && order.type === type){
            // Change the values here
            order.quantity = quantity;
            order.price = price;

            // Breaks out of the loop
            return true;
          }
        });
      }

      if(newItem){
        $scope.order.order_items.push({
          "id": {
            "item_id": item_id,
            //"order_id":,
            "type": type
          },
          "quantity": quantity
        });

        $scope.priceHelper.push({
          "item_id": item_id,
          "quantity": quantity,
          "type": type,
          "price": price
        });
      }
      $scope.getTotal();
    }
  };

  $scope.priceHelper = [];

  $scope.total = 0;

  $scope.getTotal = function(){
    $scope.total = 0;
    $scope.priceHelper.some(function(order){
      $scope.total = $scope.total + (order.quantity * order.price);
    });
  };

  $scope.goCheckout = function(){

  };
});
