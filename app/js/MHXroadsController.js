'use strict';
(function(){

angular.module('mhx.app.controller', [])

.controller('mhxroadsController',
     ['$scope', 'monsterService', '$window', '$route', '$routeParams', '$location', MHXroadsController]);

function MHXroadsController($scope, monsterService, $window, $route, $routeParams, $location) {
    this.isChromeBrowser = !!window.chrome;

    var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam nunc, gravida non purus sit amet, \
        porta ullamcorper enim. Donec auctor facilisis mauris eget sagittis. Quisque lacinia faucibus nulla ac \
    placerat. Vivamus id convallis quam, a facilisis quam. Maecenas varius tortor nec ultricies sagittis. \
        In efficitur condimentum dapibus. Nullam eleifend gravida nisi, et ullamcorper elit commodo vehicula.";

    this.sections = [{title: 'Monsters', ligature:'bug_report', desc: lorem},
        {title: 'Armor Skills', ligature:'healing', desc: lorem},
        {title: 'Armor Sets', ligature:'pool', desc: lorem},
        {title:'Weapons', ligature:'flash_on', desc: lorem},
        {title:'Items', ligature:'hot_tub', desc: lorem}
    ];
}
})();
