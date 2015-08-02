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
            controller: 'HomeCtrl'
        })
        .state('wohlig.enquiry', {
            url: "/enquiry",
            templateUrl: "views/content/enquiry.html",
            controller: 'EnquiryCtrl'
        }) 
        .state('wohlig.reachus', {
            url: "/reachus",
            templateUrl: "views/content/reachus.html",
            controller: 'ReachusCtrl'
        })

    $urlRouterProvider.otherwise("/wohlig/home");
});

wohligapp.directive('labelHover', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        scope: {},
        templateUrl: "views/directive/comet.html",
        link: function($scope, element, attr) {
            $scope.menuimage = attr.menuImage;
            $scope.label = attr.labelHover;
            $scope.shouldRotate = attr.addClass;

            var $element = $(element).children(".menuTop");
            var $menuImage = $element.children(".menuimage");
            var $comet = $element.children(".comet");


            $menuImage.hover(function() {
                $comet.addClass("notransition");
                $comet.removeClass("active");
                $comet.removeClass("leave");
                $comet.removeClass("notransition");
                $comet.addClass("active");
            }, function() {
                $comet.addClass("leave");
                setTimeout(function() {
                    $comet.addClass("notransition");
                    $comet.removeClass("active");
                    $comet.removeClass("leave");
                    setTimeout(function() {
                        $comet.removeClass("notransition");
                    }, 100);
                }, 400);

            });


        }

    }
});