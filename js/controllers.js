angular.module('wohligController', ['templateservicemod', 'navigationservice', 'valdr'])

.controller('WohligCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template=TemplateService;
    console.log("Wohlig Technology");
})
.controller('HomeCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template=TemplateService;
    console.log("Home Wohlig");
})
.controller('HeaderCtrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
});

console.log("change");