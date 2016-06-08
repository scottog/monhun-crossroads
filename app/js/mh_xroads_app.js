'use strict';

/* App Module */
angular.module('mhx.app', [
    'ngRoute',
    'mhx.version',
    'mhx.controllers'
])

// Rough. Let's put these into a proper service+json file
.config(function(){

})

.constant('version', '0.0.1');