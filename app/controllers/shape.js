(function() {
    'use strict';

    angular.module('app.controllers')

        .controller('ShapeCtrl', ShapeCtrl);

    ShapeCtrl.$inject = ['$state','$stateParams', '$http', 'Data'];

    function ShapeCtrl($state, $stateParams, $http, Data) {

        Data.shape = $stateParams.shape;

        var shapevm = this;
        shapevm.size = 100;
        shapevm.updateSize = updateSize;
        shapevm.dimension = Data.getDimension();
        shapevm.selectedShape = Data.shape;
        shapevm.renderShape = renderShape;
        shapevm.inputType = 'text';

        activate();

        function activate()
        {
            renderShape();
        }

        function renderShape()
        {
            DrawShape(shapevm.selectedShape, {size:shapevm.size});
        }

        function updateSize(size)
        {
            shapevm.size = size ? size : 100;
            renderShape();
        }

    }


})();
