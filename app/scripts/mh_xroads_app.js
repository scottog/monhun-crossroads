'use strict';

/* App Module */
angular.module('mhx.app', [
    'ngRoute',
    'pascalprecht.translate', //translation function lib
    'ngSanitize',
    'ngResource',
    'ngAnimate',
    'ui.bootstrap', // Not needed?
    'mhx.version',
    'mhx.controllers'
])

// Rough. Let's put these into a proper service+json file
.config(['$translateProvider', function($translateProvider){
    // Adding a translation table for the English language
    $translateProvider.translations('en', {
    "FROM"  : "To"
    });
    // Adding a translation table for the German language
    $translateProvider.translations('ge', {
    "FROM"  : "vom"
    });
    // Adding a translation table for the Japanese language
    $translateProvider.translations('jp', {
    "FROM"  : "FROM, BUT IN JAPANESE"
    });


    // Tell the module what language to use by default
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escaped');
}])

.constant('version', '0.0.1');