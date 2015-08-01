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
        url: "/home",
        templateUrl: "views/template.html",
        controller: 'WohligCtrl'
    })
    $urlRouterProvider.otherwise("/home");
});