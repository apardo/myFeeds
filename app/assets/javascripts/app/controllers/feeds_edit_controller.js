'use strict';

angular.module('myFeeds')
	.controller('FeedsEditCtrl', ['$scope', '$routeParams', '$location', 'FeedFactory',
        function($scope, $routeParams, $location, FeedFactory) {
		
        $scope.feed = FeedFactory.get({id: $routeParams.id});

        $scope.update = function(feed) {
            // update the resource
            feed.$update();
            $location.path('/feeds');
        }

	}]);