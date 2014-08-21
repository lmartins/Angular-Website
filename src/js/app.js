'use strict';

// var angular = require('angular');
// require('angular-cookies');

var myApp = angular.module('myApp', ['ui.router']);

// CONFIG ----------------------------------------------------------------
require('./config');



// STATE1 ---------------------------------------------------------------------
require('./state1/state1Controller');

// STATE2 ---------------------------------------------------------------------
require('./state2/state2Controller');

// HELLO WORD -----------------------------------------------------------------
// require('./HelloWorld/controllers/helloWorldCtrl.js');


// DIRECTIVES -----------------------------------------------------------------
// require('./controllers/SampleDirectiveController');


// FILTERS --------------------------------------------------------------------
// require('./filters');


// SERVICES -------------------------------------------------------------------
// require('./services/calendarHelper');



// myApp.controller('MainCtrl',
//   function ($scope, $location, Data) {
//     $scope.data = Data;
//   }
// );
