(function() {
    'use strict';

    angular.module('app.service.data', [])

        .service('Data', Data);

    // Data.$inject = ['$http'];

    function Data() {

        var model = this;
        model.shape = 'square';

    }

})();
