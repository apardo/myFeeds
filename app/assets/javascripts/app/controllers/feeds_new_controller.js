'use strict';

angular.module('myFeeds')
	.controller('FeedsNewCtrl', ['$scope', '$location', 'FeedFactory', function($scope, $location, FeedFactory) {
		
		$scope.create = function() {
			
		    // Create the feed object to send to the back-end
            var feed = new FeedFactory($scope.feed);

            //Save the forum object
            feed.$save(function() {
        	   // Redirect back to /feeds
        	   $location.path('/feeds');
            }, function(response) {
        	   //Post response objects to the view
        	   $scope.errors = response.data.errors;
            });
	    }


	}]);