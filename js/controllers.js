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
    })
    .controller('EnquiryCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.menuheader = "enquiry";
    })
    .controller('ReachusCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;

        $scope.template.init();
        $scope.template.contentClass = true;
        $scope.template.hideContent = true;
        $scope.template.menuheader = "reachus";
    })
    .controller('HeaderCtrl', function($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.template.init();
    });