angular.module('wohligController', ['templateservicemod', 'navigationservice', 'valdr'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})
.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
})

;