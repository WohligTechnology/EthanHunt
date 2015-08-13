angular.module('wohligController', ['templateservicemod', 'navigationservice', 'valdr'])

.controller('WohligCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
    })
    .controller('HomeCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.contentClass = false;
        $scope.template.menuheader = "";
        $scope.template.backurl = "img/social/back.png";
    })
    .controller('EnquiryCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.menuheader = "Enquiry";
        $scope.template.backurl = "img/social/back.png";
    })
    .controller('ReachusCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.contentClass = true;
        $scope.template.hideContent = true;
        $scope.template.menuheader = "Reach Us";
        $scope.template.backurl = "img/social/back.png";
    })
    .controller('AboutCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.contentClass = true;
        //        $scope.template.hideContent = true;
//        $scope.template.menuheader = "About";
        $scope.template.backurl = "img/social/back2.png";
    })
    .controller('ClientsCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.menuheader = "Clients";
        $scope.template.backurl = "img/social/back3.png";

        $scope.slides = [
            'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
        ];

    })
    .controller('PortfolioCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.menuheader = "Portfolio";
        $scope.template.backurl = "img/social/back.png";
    })
    .controller('TeamCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.menuheader = "Team";
        $scope.template.backurl = "img/social/back.png";
    })
    .controller('HeaderCtrl', function($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.template.init();
    });