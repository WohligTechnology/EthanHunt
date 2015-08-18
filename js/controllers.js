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
    })
    .controller('PortfolioCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        //        $scope.template.menuheader = "Portfolio";
        $scope.template.backurl = "img/social/back.png";

        $scope.items = [{
            "id": 0,
            "picture": "img/portfolio/download.jpg",
            "type": "Website",
            "name": "Mathews Goff"
        }, {
            "id": 1,
            "picture": "img/portfolio/download1.jpg",
            "type": "Website",
            "name": "Collins Alston"
        }, {
            "id": 2,
            "picture": "img/portfolio/download2.jpg",
            "type": "Website",
            "name": "Jasmine Rollins"
        }, {
            "id": 3,
            "picture": "img/portfolio/download3.jpg",
            "type": "mobile",
            "name": "Julie Jefferson"
        }, {
            "id": 4,
            "picture": "img/portfolio/download4.jpg",
            "type": "Website",
            "name": "Wilder King"
        }, {
            "id": 5,
            "picture": "img/portfolio/download5.jpg",
            "type": "mobile",
            "name": "Stanley Moore"
        }, {
            "id": 6,
            "picture": "img/portfolio/download6.jpg",
            "type": "Website",
            "name": "Reynolds Bishop"
        }, {
            "id": 7,
            "picture": "img/portfolio/download7.jpg",
            "type": "mobile",
            "name": "Reynolds Bishop"
        }, {
            "id": 8,
            "picture": "img/portfolio/download8.jpg",
            "type": "Website",
            "name": "Reynolds Bishop"
        }, {
            "id": 9,
            "picture": "img/portfolio/download9.jpg",
            "type": "Website",
            "name": "Reynolds Bishop"
        }, {
            "id": 10,
            "picture": "img/portfolio/download10.jpg",
            "type": "mobile",
            "name": "Reynolds Bishop"
        }, {
            "id": 11,
            "picture": "img/portfolio/download11.jpg",
            "type": "Website",
            "name": "Reynolds Bishop"
        }];
    })
    .controller('TeamCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.backurl = "img/social/back.png";
    })
    .controller('HeaderCtrl', function($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.template.init();
    });