'use strict';

angular.module('myFeeds')
	.controller('FeedsShowCtrl', ['$scope', '$location', '$routeParams', 'FeedFactory',
        function($scope, $location, $routeParams, FeedFactory) {

        //Grab the feed from the server
        $scope.feed = FeedFactory.get({id: $routeParams.id});

        //Destroy method for deleting a feed
    	$scope.destroy = function() {
        	//Tell the server to remove the object
        	FeedFactory.remove({id: $scope.feed.id}, function() {
            	//If successful, remove it from our collection
            	$scope.feed = [];
                $location.path('/feeds');
        	});
    	}        
	}]);