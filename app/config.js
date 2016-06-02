export default (ngModule, Angular) => {
    ngModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateProvider: ['$q', function ($q) {
                let deferred = $q.defer();
                require.ensure(['./home/home.html'], function () {
                    let template = require('./home/home.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: 'HomeController',
            controllerAs: 'test',
            resolve: {
                foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    let deferred = $q.defer();
                    require.ensure([], function () {
                        let module = require('./home/homeModule.js')();
                        $ocLazyLoad.load({
                            name: 'homeApp'
                        });
                        deferred.resolve(module);
                    });

                    return deferred.promise;
                }]
            }
        });
    }]);

}