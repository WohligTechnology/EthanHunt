// JavaScript Document
var wohligapp = angular.module('wohligapp', [
    'wohligController',
    'templateservicemod',
    'navigationservice'
]);

wohligapp.config(function($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
    //Turn the spinner on or off
    cfpLoadingBarProvider.includeSpinner = false;

    $stateProvider

    .state('wohlig', {
        url: "/",
        templateUrl: "views/template.html",
        controller: 'WohligCtrl'
    })
    .state('wohlig.home', {
        url: "/home",
        controller: 'HomeCtrl'
    });
    
    $urlRouterProvider.otherwise("/");

});