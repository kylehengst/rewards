(function() {
    'use strict';

    angular.module('app.routes', [])

        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider

                .state('app', {
                    url: '',
                    resolve:{},
                    templateUrl: 'app/views/index.html',
                    controller: 'MainCtrl',
                    controllerAs: 'mainvm'
                })
                .state('app.shape',{
                  url: '/:shape',
                  templateUrl: 'app/views/shape.html',
                  controller: 'ShapeCtrl',
                  controllerAs: 'shapevm'
                })

            ;

            $urlRouterProvider.otherwise('/');

        })

        .run(function($rootScope, CONFIG){
            $rootScope.ENV = CONFIG.ENV;
        })

    ;

})();