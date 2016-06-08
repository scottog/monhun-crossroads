'use strict';
(function(){

/* Controllers */

var mhxControllers = angular.module('mhx.controllers', []);

mhxControllers.controller('MHXController',
         ['$scope', '$window', '$route', '$routeParams', '$location',
             function($scope, $window, $route, $routeParams, $location)
{
    $scope.isChromeBrowser = !!window.chrome;
}]); // end Monster Hunter Xroads Controller
})();
