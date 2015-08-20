// JavaScript Document
var wohligapp = angular.module('wohligapp', [
    'ui.router',
    'wohligController',
    'templateservicemod',
    'navigationservice'
]);
wohligapp.config(function ($stateProvider, $urlRouterProvider) {
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
        .state('wohlig.about', {
            url: "/about",
            templateUrl: "views/content/about.html",
            controller: 'AboutCtrl'
        })
        .state('wohlig.clients', {
            url: "/clients",
            templateUrl: "views/content/clients.html",
            controller: 'ClientsCtrl'
        })
        .state('wohlig.portfolio', {
            url: "/portfolio",
            templateUrl: "views/content/portfolio.html",
            controller: 'PortfolioCtrl'
        })
        .state('wohlig.team', {
            url: "/team",
            templateUrl: "views/content/team.html",
            controller: 'TeamCtrl'
        })

    $urlRouterProvider.otherwise("/wohlig/home");
});

wohligapp.directive('labelHover', function ($document) {
    return {
        restrict: 'EA',
        replace: false,
        scope: {},
        templateUrl: "views/directive/comet.html",
        link: function ($scope, element, attr) {
            $scope.menuimage = attr.menuImage;
            var realwidth = $(window).width();
            if (realwidth < 1000) {
                realwidth = 1000;
            }
            $scope.label = attr.labelHover;
            $scope.shouldRotate = attr.addClass;
            if (attr.menuImage2) {
                $scope.menuimage2 = attr.menuImage2;
                $scope.otherClass = attr.addClass2;
            }

            var $element = $(element).children(".menuTop");
            var $menuImage = $element.children(".menuimage");
            var $comet = $element.children(".comet");

            $comet.css("left", realwidth * -1 + "px");

            $menuImage.hover(function () {
                $comet.stop();
                $comet.stop().css("left", realwidth * -1 + "px");
                $comet.stop().animate({
                    left: "50%"
                }, 600, function () {

                });
            }, function () {
                $comet.animate({
                    left: realwidth
                }, 600, function () {

                });
            });
        }
    }
});

var bcd = 0;

wohligapp.directive('masonry', function ($document) {
    return {
        restrict: 'EA',
        replace: false,
        templateUrl: "views/directive/portfolio.html",
        link: function ($scope, element, attr) {
            var $element = $(element);
            console.log(attr);
            setTimeout(function () {
                $element.children(".grid").children(".grid-item").children("a").children("img").load(function () {
                    $scope[attr.getMasonry].masonry("reloadItems");
                    $scope[attr.getMasonry].masonry("layout");
                });
                $scope[attr.getMasonry] = $('.grid').masonry({
                    itemSelector: '.grid-item',
                    columnWidth: 10,
                    transitionDuration: '0.8s'
                });
                $(".fancybox-thumb").fancybox({
                    prevEffect: 'none',
                    nextEffect: 'none',
                    helpers: {
                        title: {
                            type: 'outside'
                        },
                        thumbs: {
                            width: 50,
                            height: 50
                        }
                    }
                });

            }, 100);


        }
    }
});