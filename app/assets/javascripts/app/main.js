'use strict';

angular.module('myFeeds', ['ngResource'])
	.config(["$httpProvider", "$routeProvider", function($httpProvider, $routeProvider) {
		var authToken = $("meta[name=\"csrf-token\"]").attr("content");
		$httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;

		$routeProvider
			.when('/', {
				templateUrl: '/assets/app/views/pages/index.html',
				controller: 'HomeCtrl'
			})
			.when('/news', {
				templateUrl: '/assets/app/views/pages/news.html',
				controller: 'NewsCtrl'
			})
			.when('/feeds', {
				templateUrl: '/assets/app/views/feeds/index.html',
				controller: 'FeedsCtrl'
			})
			.when('/feeds/new', {
				templateUrl: '/assets/app/views/feeds/new.html',
				controller: 'FeedsNewCtrl'
			})
			.when('/feeds/:id/edit', {
				templateUrl: '/assets/app/views/feeds/edit.html',
				controller: 'FeedsEditCtrl'
			})
			.when('/feeds/:id', {
				templateUrl: '/assets/app/views/feeds/show.html',
				controller: 'FeedsShowCtrl'
			})
			.when('/items/:id', {
				templateUrl: '/assets/app/views/items/show.html',
				controller: 'ItemsShowCtrl'
			})
			.when('/contact', {
				templateUrl: '/assets/app/views/pages/contact.html',
				controller: 'ContactCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);

