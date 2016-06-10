'use strict';

/* App Module */
angular.module('mhx.app', [
    'ngMaterial',
    'ngRoute',
    'mhx.version',
    'mhx.app.controller',
    'mhx.data'
])

// Rough. Let's put these into a proper service+json file
.config(function(){

})

.constant('version', '0.0.1');