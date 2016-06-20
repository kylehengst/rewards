(function() {
    'use strict';

    angular.module('app', [

        'ngTouch',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ui.bootstrap.tooltip',

        'env',

        'app.routes',
        'app.filters',

        // 'app.directives',
        // 'app.service.data',

        'app.controllers'

    ]);

})();
