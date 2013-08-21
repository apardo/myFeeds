'use strict';

angular.module('myFeeds')
	.factory('FeedFactory', ['$resource', function($resource) {

		return $resource('/api/feeds/:id', {id: '@id'},
			{
				update: {
					method: 'PUT'
				}
			});
	}]);