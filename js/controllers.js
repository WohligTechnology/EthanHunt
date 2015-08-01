angular.module('wohligController', ['templateservicemod', 'navigationservice', 'valdr'])

.controller('WohligCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template=TemplateService;
})
.controller('HomeCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template=TemplateService;
})
.controller('EnquiryCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template=TemplateService;
})
.controller('HeaderCtrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
});
