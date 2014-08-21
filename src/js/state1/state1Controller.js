'use strict';

var myApp = angular.module('myApp');

myApp.controller('State1ListController', function ($scope) {
  $scope.items = ["A", "List", "of", "Items"];
});
