(function () {
    'use strict';

    angular
        .module('app')
        .controller('firstnameLastnameCtrl', firstnameLastnameCtrl);

    firstnameLastnameCtrl.$inject = ['$location']; 

    function firstnameLastnameCtrl($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'firstnameLastnameCtrl';

        activate();

        function activate() { }
    }
})();
