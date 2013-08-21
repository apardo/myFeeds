'use strict';

angular.module('myFeeds')
	.controller('ItemsShowCtrl', ['$scope', '$routeParams', 'ItemFactory',
        function($scope, $routeParams, ItemFactory) {

        //Grab the item from the server
        var getItem = ItemFactory.get({id: $routeParams.id}, function(result) {

        	$scope.item = result;
        	var feedUrl = encodeURIComponent($scope.item.url);

        	$.ajax({
        		type: 'GET',
        		url: 'http://graph.facebook.com/',
        		data: 'id=' + feedUrl,
        		success: function(data) {
        			console.log(data);
        		},
        		error: function() {
        			console.log("ERROR");
        		}
        	});
        });

    
	}]);