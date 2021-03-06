'use strict';

angular.module('myFeeds')
	.controller('ItemsShowCtrl', ['$scope', '$routeParams', 'ItemFactory',
        function($scope, $routeParams, ItemFactory) {

        //Grab the item from the server
        var getItem = ItemFactory.get({id: $routeParams.id}, function(result) {

        	$scope.item = result;
            getFacebookData();
            getTwitterData();

        });

        function getFacebookData() {
            // get number of facebook shares
            var feedUrl = encodeURIComponent($scope.item.url);
            $.ajax({
                type: 'GET',
                url: 'http://graph.facebook.com/',
                data: 'id=' + feedUrl,
                success: function(data) {
                    $scope.fbdata = data.shares;
                    $scope.$apply();
                },
                error: function() {
                    console.log("ERROR");
                }
            });
        }

        function getTwitterData() {
            // get number of twitter shares
            var feedUrl = encodeURIComponent($scope.item.url);
            $.ajax({
                type: 'GET',
                url: 'https://cdn.api.twitter.com/1/urls/count.json?callback=?&url='+feedUrl,
                dataType: 'json',
                success: function(data) {
                    $scope.twdata = data.count;
                    $scope.$apply();
                },
                error: function(data) {
                    console.log("ERROR");
                }
            });
        }


	}]);