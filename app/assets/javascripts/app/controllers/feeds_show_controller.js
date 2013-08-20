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

        $scope.fetchFeed = function(feed) {
            parseRSS(feed.feedurl, function(rss) {
                //var baseItems = Restangular.all('items');
                //baseItems.post(rss.entries);
                console.log(rss);
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