'use strict';

angular.module('myFeeds')
	.controller('FeedsCtrl', ['$scope', 'FeedFactory', function($scope, FeedFactory) {

		// Traer todos los feeds
		$scope.feeds = FeedFactory.query();
	}]);