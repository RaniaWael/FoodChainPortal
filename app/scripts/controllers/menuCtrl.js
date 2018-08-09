var app = angular.module("foodChainPortal", []);

app.controller("MenuCtrl", function ($scope) {
  $scope.sand = {
    "sand":[
      {
        "item_id": 1,
        "item_name": "Fried Chicken Sandwich",
        "desc": "Tomato, cheese, etc",
        "price": "30 LE"
      },
      {
        "item_id": 2,
        "item_name": "Chicken BBQ Sandwich",
        "desc": "BBQ, tomato, etc",
        "price": "35 LE"
      }
    ]
  };
  $scope.sides = {
    "sides": [
      {
        "item_id": 1,
        "item_name": "Fries",
        "desc": "Potato",
        "price": "15 LE"
      },
      {
        "item_id": 2,
        "item_name": "Mozarella Sticks",
        "desc": "Cheese",
        "price": "20 LE"
      }
    ]
  };
  $scope.drinks = {
    "drinks": [
      {
        "item_id": 1,
        "item_name": "Milkshake",
        "desc": "Strawberry, Vanilla and Chocolate",
        "price": "10 LE"
      },
      {
        "item_id": 2,
        "item_name": "Fresh Juice",
        "desc": "Orange and Mango",
        "price": "15 LE"
      }
    ]
  };

  $scope.order = 0;

  // $scope.order = {
  //   [
  //     "item_id":
  //     "count":
  //   ]
  // };

  $scope.addItem = function(item_id) {

  };
});
