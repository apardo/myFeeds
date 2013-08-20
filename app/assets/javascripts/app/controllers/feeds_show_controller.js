'use strict';

angular.module('myFeeds')
	.controller('FeedsShowCtrl', ['$scope', '$routeParams', 'FeedFactory', function($scope, $routeParams, FeedFactory) {

        //Grab the feed from the server
        $scope.feed = FeedFactory.get({id: $routeParams.id});
        
	}]);