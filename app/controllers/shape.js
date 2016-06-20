(function() {
    'use strict';

    angular.module('app.controllers')

        .controller('ShapeCtrl', ShapeCtrl);

    ShapeCtrl.$inject = ['$state','$stateParams', '$http', 'Data'];

    function ShapeCtrl($state, $stateParams, $http, Data) {

        var mainvm = this;
        shapevm.selectedShape = Data.shape;

        activate();

        function activate()
        {
            // toastr.info('Main Controller');
        }

    }


})();
