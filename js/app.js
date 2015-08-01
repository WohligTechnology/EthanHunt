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
        templateUrl: "views/template.html",
        controller: 'HomeCtrl'
    })
    
    $urlRouterProvider.otherwise("/wohlig/home");
});