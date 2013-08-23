'use strict';

angular.module('myFeeds')
  .controller('MainNavCtrl', ['$scope', function ($scope) {

  	$scope.removeLink = function() {
  		$("#mainNav > li").removeClass("active");
  	}
  	
  	$scope.setLink = function(item) {
  		$("#mainNav > li").removeClass("active");
  		$("#" + item).addClass("active");
  	}

    // login  with mozilla persona
    $scope.login = function() {
        navigator.id.request();
    } 

    // logout
    $scope.logout = function() {
        navigator.id.logout();
    }

  }]);

