(function() {
    'use strict';

    angular.module('env', [])

        // prod || env
        .constant('CONFIG',{
          ENV: 'dev'
        })

    ;

})();
