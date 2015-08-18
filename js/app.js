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

wohligapp.directive('labelHover', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        scope: {},
        templateUrl: "views/directive/comet.html",
        link: function($scope, element, attr) {
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

            $menuImage.hover(function() {
                $comet.stop();
                $comet.stop().css("left", realwidth * -1 + "px");
                $comet.stop().animate({
                    left: "50%"
                }, 600, function() {

                });
            }, function() {
                $comet.animate({
                    left: realwidth
                }, 600, function() {

                });
            });
        }
    }
})

.directive("masonry", function() {
    var NGREPEAT_SOURCE_RE = '<!-- ngRepeat: ((.*) in ((.*?)( track by (.*))?)) -->';
    return {
        compile: function(element, attrs) {
            // auto add animation to brick element
            var animation = attrs.ngAnimate || "'masonry'";
            var $brick = element.children();
            $brick.attr("ng-animate", animation);

            // generate item selector (exclude leaving items)
            var type = $brick.prop('tagName');
            var itemSelector = type + ":not([class$='-leave-active'])";

            return function(scope, element, attrs) {
                var options = angular.extend({
                    itemSelector: itemSelector
                }, scope.$eval(attrs.masonry));

                // try to infer model from ngRepeat
                if (!options.model) {
                    var ngRepeatMatch = element.html().match(NGREPEAT_SOURCE_RE);
                    if (ngRepeatMatch) {
                        options.model = ngRepeatMatch[4];
                    }
                }

                // initial animation
                element.addClass('masonry');

                // Wait inside directives to render
                setTimeout(function() {
                    element.masonry(options);

                    element.on("$destroy", function() {
                        element.masonry('destroy')
                    });

                    if (options.model) {
                        scope.$apply(function() {
                            scope.$watchCollection(options.model, function(_new, _old) {
                                if (_new == _old) return;

                                // Wait inside directives to render
                                setTimeout(function() {
                                    element.masonry("reload");
                                });
                            });
                        });
                    }
                });
            };
        }
    };
});
