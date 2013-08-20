'use strict';

angular.module('myFeeds')
	.controller('ApplicationCtrl', ['$scope', function($scope) {
        
        $scope.historyBack = function() {
             window.history.back();
        }
	}]);