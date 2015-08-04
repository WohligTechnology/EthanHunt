angular.module('wohligController', ['templateservicemod', 'navigationservice', 'valdr'])

.controller('WohligCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
    })
    .controller('HomeCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.contentClass = false;
        $scope.template.menuheader = "";
    })
    .controller('EnquiryCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.menuheader = "Enquiry";
    })
    .controller('ReachusCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;

        $scope.template.init();
        $scope.template.contentClass = true;
        $scope.template.hideContent = true;
        $scope.template.menuheader = "Reach Us";
    })
    .controller('AboutCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.contentClass = true;
        $scope.template.hideContent = true;
        $scope.template.menuheader = "About";

    })
    .controller('ClientsCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.menuheader = "Clients";

    })
    .controller('PortfolioCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.menuheader = "Portfolio";

    })
    .controller('TeamCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.menuheader = "Team";

    })
    .controller('HeaderCtrl', function ($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.template.init();
    });