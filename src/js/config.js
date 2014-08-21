'use strict';

var myApp = angular.module('myApp');

myApp.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/state1");

  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
      controller: 'State1ListController'
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "partials/state2.list.html",
      controller: 'State2ListController'
    });
    
});
