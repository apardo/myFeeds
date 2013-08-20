'use strict';

angular.module('myFeeds')
	.controller('ItemsShowCtrl', ['$scope', '$routeParams', 'ItemFactory',
        function($scope, $routeParams, ItemFactory) {

        //Grab the item from the server
        $scope.item = ItemFactory.get({id: $routeParams.id});
        console.log($scope.item);
    
	}]);