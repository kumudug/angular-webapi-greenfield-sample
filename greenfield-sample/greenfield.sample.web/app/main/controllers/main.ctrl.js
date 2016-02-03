(function () {
    'use strict';

    angular
        .module('mainApp')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = [];

    function mainCtrl() {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'mainCtrl';
        vm.testFunc = testFunc;
        
        function testFunc() {

        }
    }
})();
