/*!
 * AngularWebsite
 * 0.1.0:1408617068622 [development build]
 */
webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// var angular = require('angular');
	// require('angular-cookies');
	
	var myApp = angular.module('myApp', ['ui.router']);
	
	// CONFIG ----------------------------------------------------------------
	__webpack_require__(1);
	
	
	
	// STATE1 ---------------------------------------------------------------------
	__webpack_require__(2);
	
	// STATE2 ---------------------------------------------------------------------
	__webpack_require__(3);
	
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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var myApp = angular.module('myApp');
	
	myApp.controller('State1ListController', function ($scope) {
	  $scope.items = ["A", "List", "of", "Items"];
	});


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var myApp = angular.module('myApp');
	
	myApp.controller('State1ListController', function ($scope) {
	  $scope.items = ["A", "Set", "of", "Things"];
	});


/***/ }
]);
//# sourceMappingURL=main.bundle.js.map