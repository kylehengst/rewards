(function() {
    'use strict';

    angular.module('app')

        .service('Data', Data);

    // Data.$inject = ['$http'];

    function Data() {

        var model = this;
        model.shape = 'square';
        model.getDimension = getDimension;

        function getDimension()
        {
            if(model.shape=='square') return 'Size';
            if(model.shape=='circle') return 'Radius';
            if(model.shape=='triangle') return 'Radius';
        }

    }

})();
