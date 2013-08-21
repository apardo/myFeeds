'use strict';

angular.module('myFeeds')
	.controller('FeedsShowCtrl', ['$scope', '$location', '$route', '$routeParams', '$http', 'FeedFactory', 'ItemFactory',
        function($scope, $location, $route, $routeParams, $http, FeedFactory, ItemFactory) {

        //Grab the feed from the server
        $scope.feed = FeedFactory.get({id: $routeParams.id});
        // Gram the items from the feed
        $scope.items = ItemFactory.query({feedId: $routeParams.id});

        //Destroy method for deleting a feed
    	$scope.destroy = function() {
        	//Tell the server to remove the object
        	FeedFactory.remove({id: $scope.feed.id}, function() {
            	//If successful, remove it from our collection
            	$scope.feed = [];
                $location.path('/feeds');
        	});
    	}   

        $scope.fetchFeed = function(feed) {
            parseRSS(feed.feedurl, function(rss) {
                $http({
                    method: 'POST',
                    url: 'api/items',
                    //data: rss,
                    data: [feed.id, rss],
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).success(function(data, status, headers, config) {
                    $route.reload();
                }).error(function(data, status, headers, config) {
                    console.log("ERROR");
                });                
            });
        }

        function parseRSS(url, callback) {
            $.ajax({
                url: '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q='
                    + encodeURIComponent(url),
                dataType: 'json',
                success: function(data) {
                    callback(data.responseData.feed);
                }
            });
        }     
	}]);