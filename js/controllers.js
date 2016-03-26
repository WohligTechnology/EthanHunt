angular.module('wohligController', ['templateservicemod', 'navigationservice'])

.controller('WohligCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
    })
    .controller('HomeCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.title = "Universe of Creativity";
        $scope.template.init();
        $scope.template.contentClass = false;
        $scope.template.menuheader = "";
        $scope.template.backurl = "img/social/back.png";
        ga('send', 'pageview', {
            'title': 'Home Page'
        });
    })
    .controller('EnquiryCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.title = "Enquiry";
        $scope.template.menuheader = "Enquiry";
        $scope.template.backurl = "img/social/back.png";
        $scope.animationsEnabled = true;
        $scope.form = {
            submit: false
        };
        $scope.formsubmit = function (data) {
            var isvalid = $('.validation').get(0).checkValidity();
            if (isvalid) {
                $scope.form.submit = true;
                NavigationService.submitform(data);
            }
            ga('send', 'event', 'Enquiry', 'Submit');
        };
        ga('send', 'pageview', {
            'title': 'Enquiry Page'
        });
    })
    .controller('ReachusCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.title = "Reach us";
        $scope.template.contentClass = true;
        $scope.template.hideContent = true;
        $scope.template.menuheader = "Reach Us";
        $scope.template.backurl = "img/social/back.png";
        ga('send', 'pageview', {
            'title': 'Reach Us Page'
        });
    })
    .controller('AboutCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.title = "About";
        $scope.template.contentClass = true;
        $scope.template.backurl = "img/social/back2.png";
        ga('send', 'pageview', {
            'title': 'About Page'
        });
    })
    .controller('ClientsCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.title = "Clients";
        $scope.template.menuheader = "Clients";
        $scope.template.backurl = "img/social/back3.png";
        ga('send', 'pageview', {
            'title': 'Clients Page'
        });
    })
    .controller('PortfolioCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.nameFilter = "";
        //        $scope.template.menuheader = "Portfolio";
        $scope.template.backurl = "img/social/back.png";

        $scope.items = [
          {
              "id": 0,
              "picture": "img/portfolio/JPP1.jpg",
              "type": "mobile",
              "name": "Jaipur Pink Panthers"
      }, {
              "id": 1,
              "picture": "img/portfolio/tarun.jpg",
              "type": "mobile",
              "name": "Tarun Mitra Mandal"
      }, {
              "id": 2,
              "picture": "img/portfolio/noteshare.jpg",
              "type": "mobile",
              "name": "NoteShare"
      }, {
              "id": 3,
              "picture": "img/portfolio/sfa.jpg",
              "type": "website",
              "name": "SFA(Sports For All)",
              "link":"http://www.sfanow.in"

      },
          {
              "id": 4,
              "picture": "img/portfolio/td.jpg",
              "type": "website",
              "name": "Ting Digital",
              "link":"http://www.tingdigital.in"
      },
          {
              "id": 5,
              "picture": "img/portfolio/jpp.jpg",
              "type": "website",
              "name": "Jaipur Pink Panthers",
              "link":"http://www.jaipurpinkpanthers.com"
      }, {
              "id": 6,
              "picture": "img/portfolio/simi.jpg",
              "type": "website",
              "name": "Simi Events",
              "link":"http://www.simievents.com"

      },
          {
              "id": 7,
              "picture": "img/portfolio/access.jpg",
              "type": "website",
              "name": "Access World",
              "link":"http://accessworld.in"

      }, {
              "id": 8,
              "picture": "img/portfolio/aura.jpg",
              "type": "website",
              "name": "Auraart",
              "link":"http://www.auraart.in/"

      }, {
              "id": 9,
              "picture": "img/portfolio/ngu.jpg",
              "type": "website",
              "name": "WillNeverGrowUp",
              "link":"http://www.willnevergrowup.com"

      }, {
              "id": 10,
              "picture": "img/portfolio/HQ.jpg",
              "type": "website",
              "name": "Happiness Quotient",
              "link":"http://happynessquotient.com"

      }, {
              "id": 11,
              "picture": "img/portfolio/adya.jpg",
              "type": "website",
              "name": "Adya",
              "link":"http://adyadairy.com"

      }, {
              "id": 12,
              "picture": "img/portfolio/euro.jpg",
              "type": "website",
              "name": "Europratik",
              "link":"http://www.europratik.com"

      }, {
              "id": 13,
              "picture": "img/portfolio/fynx.jpg",
              "type": "website",
              "name": "My Fynx",
              "link":"http://myfynx.in"

      }, {
              "id": 14,
              "picture": "img/portfolio/selfcare.jpg",
              "type": "website",
              "name": "SelfCare",
              "link":"http://www.selfcareindia.com"

      },
            {
                "id": 15,
                "picture": "img/portfolio/bappa.jpg",
                "type": "mobile",
                "name": "Times Bappa"
        }, {
                "id": 16,
                "picture": "img/portfolio/bussiness.jpg",
                "type": "mobile",
                "name": "Bussiness App"
        }, {
                "id": 17,
                "picture": "img/portfolio/selig.jpg",
                "type": "mobile",
                "name": "Selig"
        }, {
                "id": 18,
                "picture": "img/portfolio/moview.jpg",
                "type": "mobile",
                "name": "Moviews"
        },
            {
                "id": 19,
                "picture": "img/portfolio/12.jpg",
                "type": "mobile",
                "name": "Best deal Finance"
        },
            {
                "id": 21,
                "picture": "img/portfolio/powerforone.jpg",
                "type": "website",
                "name": "Power For One",
                "link":"http://www.powerforone.org"

        }, {
                "id": 22,
                "picture": "img/portfolio/7.jpg",
                "type": "website",
                "name": "200 notout",
                "link":"http://www.200notout.in"
        }, {
                "id": 23,
                "picture": "img/portfolio/bpft.jpg",
                "type": "website",
                "name": "Blenders Pride",
                "link":"http://www.bpft.in"

        }, {
                "id": 24,
                "picture": "img/portfolio/bherpo1.jpg",
                "type": "mobile",
                "name": "Bherpo"
        }, {
                "id": 25,
                "picture": "img/portfolio/4.jpg",
                "type": "mobile",
                "name": "Superu game"
        }, {
                "id": 26,
                "picture": "img/portfolio/One-Stop-Barter.jpg",
                "type": "mobile",
                "name": "One Stop Barter"
        }, {
                "id": 27,
                "picture": "img/portfolio/5.jpg",
                "type": "website",
                "name": "Anima creative",
                "link":"http://www.animacreatives.com"

        }, {
                "id": 28,
                "picture": "img/portfolio/6.jpg",
                "type": "mobile",
                "name": "Stake App"
        }, {
                "id": 29,
                "picture": "img/portfolio/toykraft.jpg",
                "type": "mobile",
                "name": "Toy Kraft Puzzle"
        }, {
                "id": 30,
                "picture": "img/portfolio/predicto.jpg",
                "type": "mobile",
                "name": "Predicto"
        }, {
                "id": 31,
                "picture": "img/portfolio/8.jpg",
                "type": "website",
                "name": "Reviu",
                "link":""

        },  {
                "id": 32,
                "picture": "img/portfolio/10.jpg",
                "type": "website",
                "name": "Lodha group",
                "link":"http://www.palava.in"

        }, {
                "id": 33,
                "picture": "img/portfolio/11.jpg",
                "type": "website",
                "name": "Reniscience",
                "link":""

        }, {
                "id": 34,
                "picture": "img/portfolio/facade.jpg",
                "type": "website",
                "name": "Facade Testing",
                "link":"http://www.facadetesting.com"

        }, {
                "id": 35,
                "picture": "img/portfolio/13.jpg",
                "type": "website",
                "name": "Ziba collection",
                "link":"http://zibacollections.co.uk"

        }, {
                "id": 36,
                "picture": "img/portfolio/14.jpg",
                "type": "website",
                "name": "XDC india",
                "link":""
        }, {
                "id": 37,
                "picture": "img/portfolio/15.jpg",
                "type": "website",
                "name": "world 7 mediacraft",
                "link":"http://www.world7mediacraft.com"

        }, {
                "id": 38,
                "picture": "img/portfolio/16.jpg",
                "type": "mobile",
                "name": "91 street"
        }, {
                "id": 39,
                "picture": "img/portfolio/17.jpg",
                "type": "website",
                "name": "LBW Consult",
                "link":"http://www.consultlbw.com"

        }, {
                "id": 40,
                "picture": "img/portfolio/18.jpg",
                "type": "website",
                "name": "Furnicheer",
                "link":"http://furnicheer.com"

        }, {
                "id": 41,
                "picture": "img/portfolio/19.jpg",
                "type": "mobile",
                "name": "Mypacco App"
        }, {
                "id": 42,
                "picture": "img/portfolio/orangestone.jpg",
                "type": "website",
                "name": "Orangestone",
                "link":"http://www.orangestone.co.uk"

        },{
                "id": 43,
                "picture": "img/portfolio/20.jpg",
                "type": "website",
                "name": "Designers group",
                "link":"http://www.designers-group.com"

        }, {
                "id": 44,
                "picture": "img/portfolio/1.jpg",
                "type": "website",
                "name": "Lyla loves",
                "link":""

        }, {
                "id": 45,
                "picture": "img/portfolio/9.jpg",
                "type": "mobile",
                "name": "Lyla loves App"
        }, {
                "id": 46,
                "picture": "img/portfolio/2.jpg",
                "type": "mobile",
                "name": "Magic mirror App"
        }, {
                "id": 47,
                "picture": "img/portfolio/3.jpg",
                "type": "website",
                "name": "Magic mirror",
                "link":"http://magicmirror.in"
        }
        ];

        $scope.changefilter = function (filter) {
            $scope.nameFilter = filter;
            setTimeout(function () {
                $scope.portfolio.masonry("reloadItems");
                $scope.portfolio.masonry("layout");
            }, 10);
        };
        $scope.showfancybox = function (img, name) {
            $.fancybox.open(img, {
                padding: 0,
                closeBtn: false
            });
            ga('send', 'event', 'Portfolio Page', name);
        };
        ga('send', 'pageview', {
            'title': 'Portfolio Page'
        });
    })
    .controller('TeamCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template.init();
        $scope.template.title = "Team";
        $scope.template.backurl = "img/social/back.png";
        ga('send', 'pageview', {
            'title': 'Team Page'
        });
    })
    .controller('HeaderCtrl', function ($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.template.init();
    });
