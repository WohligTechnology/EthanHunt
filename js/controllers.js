angular.module('wohligController', ['templateservicemod', 'navigationservice'])

.controller('WohligCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
    })
    .controller('HomeCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.title = "Universe of Creativity";
        $scope.template.init();
        $scope.template.contentClass = false;
        $scope.template.menuheader = "";
        $scope.template.backurl = "img/social/back.png";
    })
    .controller('EnquiryCtrl', function($scope, TemplateService, NavigationService, $modal) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.title = "Enquiry";
        $scope.template.menuheader = "Enquiry";
        $scope.template.backurl = "img/social/back.png";
        $scope.animationsEnabled = true;
        $scope.form = {
            submit: false
        };
        $scope.formsubmit = function(data) {
            var isvalid = $('.validation').get(0).checkValidity();
            if (isvalid) {
                $scope.form.submit = true;
                NavigationService.submitform(data);
            }
        };

    })
    .controller('ReachusCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.title = "Reach us";
        $scope.template.contentClass = true;
        $scope.template.hideContent = true;
        $scope.template.menuheader = "Reach Us";
        $scope.template.backurl = "img/social/back.png";
    })
    .controller('AboutCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.title = "About";
        $scope.template.contentClass = true;
        $scope.template.backurl = "img/social/back2.png";
    })
    .controller('ClientsCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.title = "Clients";
        $scope.template.menuheader = "Clients";
        $scope.template.backurl = "img/social/back3.png";
    })
    .controller('PortfolioCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.nameFilter = "";
        //        $scope.template.menuheader = "Portfolio";
        $scope.template.backurl = "img/social/back.png";

        $scope.items = [{
            "id": 0,
            "picture": "img/portfolio/1.jpg",
            "type": "website",
            "name": "Lyla loves"
        }, {
            "id": 1,
            "picture": "img/portfolio/2.jpg",
            "type": "mobile",
            "name": "Magic mirror App"
        }, {
            "id": 2,
            "picture": "img/portfolio/3.jpg",
            "type": "website",
            "name": "Magic mirror"
        }, {
            "id": 3,
            "picture": "img/portfolio/4.jpg",
            "type": "mobile",
            "name": "Superu game"
        }, {
            "id": 4,
            "picture": "img/portfolio/5.jpg",
            "type": "website",
            "name": "Anima creative"
        }, {
            "id": 5,
            "picture": "img/portfolio/6.jpg",
            "type": "mobile",
            "name": "Stake App"
        }, {
            "id": 6,
            "picture": "img/portfolio/7.jpg",
            "type": "website",
            "name": "200 notout"
        }, {
            "id": 7,
            "picture": "img/portfolio/8.jpg",
            "type": "website",
            "name": "Reviu"
        }, {
            "id": 8,
            "picture": "img/portfolio/9.jpg",
            "type": "mobile",
            "name": "Lyla loves App"
        }, {
            "id": 9,
            "picture": "img/portfolio/10.jpg",
            "type": "website",
            "name": "Lodha group"
        }, {
            "id": 10,
            "picture": "img/portfolio/11.jpg",
            "type": "website",
            "name": "Reniscience"
        }, {
            "id": 11,
            "picture": "img/portfolio/12.jpg",
            "type": "mobile",
            "name": "Best deal Finance"
        }, {
            "id": 12,
            "picture": "img/portfolio/13.jpg",
            "type": "website",
            "name": "ziba collection"
        }, {
            "id": 13,
            "picture": "img/portfolio/14.jpg",
            "type": "website",
            "name": "XDC india"
        }, {
            "id": 14,
            "picture": "img/portfolio/15.jpg",
            "type": "website",
            "name": "world 7 mediacraft"
        }, {
            "id": 15,
            "picture": "img/portfolio/16.jpg",
            "type": "Mobile",
            "name": "91 street"
        }, {
            "id": 16,
            "picture": "img/portfolio/17.jpg",
            "type": "website",
            "name": "LBW Consult"
        }, {
            "id": 17,
            "picture": "img/portfolio/18.jpg",
            "type": "website",
            "name": "Furniceer"
        }, {
            "id": 18,
            "picture": "img/portfolio/19.jpg",
            "type": "mobile",
            "name": "Mypacco App"
        }, {
            "id": 19,
            "picture": "img/portfolio/20.jpg",
            "type": "website",
            "name": "Designers group"
        }];

        $scope.changefilter = function(filter) {
            $scope.nameFilter = filter;
            setTimeout(function() {
                $scope.portfolio.masonry("reloadItems");
                $scope.portfolio.masonry("layout");
            }, 10);


        };
    })
    .controller('TeamCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.title = "Portfolio";
        $scope.template.backurl = "img/social/back.png";
    })
    .controller('HeaderCtrl', function($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.template.init();
    });