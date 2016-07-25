var app = angular.module('routingModule', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/view1', {
            controller: 'SimpleController',
            templateUrl: 'partials/view1.html'
        })
        .when('/view2', {
            controller: 'SimpleController',
            templateUrl: 'partials/view2.html'
        })
        .when('/view3', {
            controller: 'SimpleController',
            templateUrl: 'partials/view3.html'
        })
        .when('/view4', {
            controller: 'SimpleController',
            templateUrl: 'partials/view4.html'
        })
        .when('/view5', {
            controller: 'SimpleController',
            templateUrl: 'partials/view5.html'
        })
        .otherwise({
            reirectTo: '/'
        });
});
