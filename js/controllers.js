angular.module('wohligController', ['templateservicemod', 'navigationservice', 'valdr'])

.controller('WohligCtrl', function($scope, TemplateService, NavigationService) {
    //Used to name the .html file
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})
.controller('HomeCtrl', function($scope, TemplateService, NavigationService) {
    //Used to name the .html file
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})
.controller('HeaderCtrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
});