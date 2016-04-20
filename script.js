var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController'
        });
});

myApp.controller('mainController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});