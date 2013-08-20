'use strict';

angular.module('myFeeds')
	.factory('ItemFactory', ['$resource', function($resource) {
		return $resource('/api/feeds/:feedId/items/:id', {feedId: '@feedId', id: '@id'});
	}]);

