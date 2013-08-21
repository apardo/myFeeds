'use strict';

angular.module('myFeeds')
	.controller('NewsCtrl', ['$scope', '$routeParams', 'ItemFactory', function($scope, $routeParams, ItemFactory) {

		$scope.items = ItemFactory.query();
	}]);