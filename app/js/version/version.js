'use strict';

var module = angular.module('mhx.version', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text('v '+version);
  };
}])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/%VERSION\%/mg, 'v' + version);
  };
}]);
