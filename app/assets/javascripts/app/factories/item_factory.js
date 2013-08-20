'use strict';

angular.module('myFeeds')
	.factory('ItemFactory', ['$resource', function($resource) {
		return $resource('/api/items/:id', {id: '@id'});
	}]);

