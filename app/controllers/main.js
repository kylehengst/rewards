(function() {
    'use strict';

    angular.module('app.controllers')

        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$state','$stateParams', '$http', 'Data'];

    function MainCtrl($state, $stateParams, $http, Data) {

        var mainvm = this;
        mainvm.selectedShape = Data.shape;

        activate();

        function activate()
        {
            // toastr.info('Main Controller');
        }

    }


})();
