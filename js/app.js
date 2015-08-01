// JavaScript Document
var wohligapp = angular.module('wohligapp', [
    'ui.router',
    'wohligController',
    'templateservicemod',
    'navigationservice'
]);

wohligapp.config(function($stateProvider, $urlRouterProvider) {
    //Turn the spinner on or off
    $stateProvider
        .state('wohlig', {
            url: "/wohlig",
            abstract: true,
            templateUrl: "views/template.html",
            controller: 'WohligCtrl'
        })
        .state('wohlig.home', {
            url: "/home",
            templateUrl: "views/content/home.html",
            controller: 'HomeCtrl'
        })
        .state('wohlig.enquiry', {
            url: "/enquiry",
            templateUrl: "views/content/enquiry.html",
            controller: 'HomeCtrl'
        })

    $urlRouterProvider.otherwise("/wohlig/home");
});

wohligapp.directive('labelHover', function($document) {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            game: '='
        },
        link: function(scope, element, attr) {


            console.log("Changes");

        }

    }
});