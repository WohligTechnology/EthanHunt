// JavaScript Document
var wohligapp = angular.module('wohligapp', [
    'ui.router',
    'wohligController',
    'templateservicemod',
    'navigationservice'
]);
wohligapp.config(function ($stateProvider, $urlRouterProvider) {
    //Turn the spinner on or off
    $stateProvider
        .state('wohlig', {
            url: "/wohlig",
            abstract: true,
            templateUrl: "./views/template.html",
            controller: 'WohligCtrl'
        })
        .state('wohlig.home', {
            url: "/home",
            controller: 'HomeCtrl'
        })
        .state('wohlig.enquiry', {
            url: "/enquiry",
            templateUrl: "./views/content/enquiry.html",
            controller: 'EnquiryCtrl'
        })
        .state('wohlig.reachus', {
            url: "/reachus",
            templateUrl: "./views/content/reachus.html",
            controller: 'ReachusCtrl'
        })
        .state('wohlig.about', {
            url: "/about",
            templateUrl: "./views/content/about.html",
            controller: 'AboutCtrl'
        })
        .state('wohlig.clients', {
            url: "/clients",
            templateUrl: "./views/content/clients.html",
            controller: 'ClientsCtrl'
        })
        .state('wohlig.portfolio', {
            url: "/portfolio",
            templateUrl: "./views/content/portfolio.html",
            controller: 'PortfolioCtrl'
        })
        .state('wohlig.team', {
            url: "/team",
            templateUrl: "./views/content/team.html",
            controller: 'TeamCtrl'
        })

    $urlRouterProvider.otherwise("/wohlig/home");
});

wohligapp.directive('labelHover', function ($document) {
    return {
        restrict: 'EA',
        replace: false,
        scope: {},
        templateUrl: "./views/directive/comet.html",
        link: function ($scope, element, attr) {
            $scope.menuimage = attr.menuImage;
            var realwidth = $(window).width();
            if (realwidth < 1000) {
                realwidth = 1000;
            }
            $scope.label = attr.labelHover;
            $scope.shouldRotate = attr.addClass;
            if (attr.menuImage2) {
                $scope.menuimage2 = attr.menuImage2;
                $scope.otherClass = attr.addClass2;
            }

            var $element = $(element).children(".menuTop");
            var $menuImage = $element.children(".menuimage");
            var $comet = $element.children(".comet");

            $comet.css("left", realwidth * -1 + "px");

            $menuImage.hover(function () {
                $comet.stop();
                $comet.stop().css("left", realwidth * -1 + "px");
                $comet.stop().animate({
                    left: "50%"
                }, 600, function () {

                });
            }, function () {
                $comet.animate({
                    left: realwidth
                }, 600, function () {

                });
            });
        }
    }
});

var bcd = 0; 

wohligapp.directive('masonry', function ($document) {
    return {
        restrict: 'EA',
        replace: false,
        templateUrl: "./views/directive/portfolio.html",
        link: function ($scope, element, attr) {
            var $element = $(element);
            console.log(attr);
            setTimeout(function () {
                $element.children(".grid").children(".grid-item").children("a").children("img").load(function () {
                    $scope[attr.getMasonry].masonry("reloadItems");
                    $scope[attr.getMasonry].masonry("layout");
                });
                $scope[attr.getMasonry] = $('.grid').masonry({
                    itemSelector: '.grid-item',
                    columnWidth: 10,
                    transitionDuration: '0.8s'
                });
                $(".fancybox-thumb").fancybox({
                    prevEffect: 'none',
                    nextEffect: 'none',
                    helpers: {
                        title: {
                            type: 'outside'
                        },
                        thumbs: {
                            width: 50,
                            height: 50
                        }
                    }
                });

            }, 100);


        }
    }
});
wohligapp.run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./views/footer.html',
    "<div class=\"footer\">\r" +
    "\n" +
    "    <p>Handcrafted with <span class=\"heart\">&hearts;</span> by Wohlig Technology</p>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('./views/header.html',
    "<header>\r" +
    "\n" +
    "    <div class=\"back-nav\" ng-show=\"template.contentClass\">\r" +
    "\n" +
    "        <img ng-src=\"{{template.backurl}}\" ui-sref=\"wohlig.home\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"head\">\r" +
    "\n" +
    "        <h1>{{template.menuheader}}</h1>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</header>\r" +
    "\n"
  );


  $templateCache.put('./views/template.html',
    "<div ng-include=\"template.header\"></div>\r" +
    "\n" +
    "<div ng-include=\"template.content\"  ng-class=\"{blurHome:template.contentClass}\" class=\"stars\"></div>\r" +
    "\n" +
    "<div  ui-view>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div ng-include=\"template.footer\"></div>"
  );

}]);
wohligapp.run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./views/content/about.html',
    "<div class=\"disableBackgroundabt\"></div>\r" +
    "\n" +
    "<!--\r" +
    "\n" +
    "   <div class=\"back-nav\" ng-show=\"template.contentClass\">\r" +
    "\n" +
    "        <img src=\"img/social/back2.png\" ui-sref=\"wohlig.home\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "-->\r" +
    "\n" +
    "<div class=\"section\">\r" +
    "\n" +
    "    <div class=\"abt\">\r" +
    "\n" +
    "        <div class=\"abtcontent\">\r" +
    "\n" +
    "           <h2>about</h2>\r" +
    "\n" +
    "            <p class=\"margin\">\r" +
    "\n" +
    "              Hello earthlings, it’s been long since we have been watching you guys. But we are here to give you a \r" +
    "\n" +
    "\r" +
    "\n" +
    "service to develop ideas and products related to technology which will make you feel out of the world. \r" +
    "\n" +
    "\r" +
    "\n" +
    "But before that, let me tell you guys a little about us.\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "             <p class=\"margin\">\r" +
    "\n" +
    "             We are aliens from planet Wohlig. Just like earth we are round and full of people. We love computers \r" +
    "\n" +
    "\r" +
    "\n" +
    "and technology and since we came to know that so do you, we decided to mingle and create some \r" +
    "\n" +
    "\r" +
    "\n" +
    "amazing stuff for you.\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "             <p class=\"margin\">\r" +
    "\n" +
    "            The services offered by the aliens from Wohlig include development of web-based\r" +
    "\n" +
    "\r" +
    "\n" +
    "electronic businesses and social network services. With the improvement of technologies in your planet \r" +
    "\n" +
    "\r" +
    "\n" +
    "and ours, we have managed to build dynamic, interactive and design oriented applications, systems and \r" +
    "\n" +
    "\r" +
    "\n" +
    "websites for other earthlings as well.\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "            <h4>mission</h4>\r" +
    "\n" +
    "            <p class=\"margin-bot\">\r" +
    "\n" +
    "                we believe to change it and with that simplify complexity in information technology in all sectors. \r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "             <h4>vision</h4>\r" +
    "\n" +
    "            <p class=\"\">\r" +
    "\n" +
    "              to innovate and create softwares which have the capability to change the service industry drastically. \r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "             <div class=\"qoute\">\r" +
    "\n" +
    "        <h3>“When a team outgrows individual performance and learns team confidence, \r" +
    "\n" +
    "excellence becomes a reality.”</h3>\r" +
    "\n" +
    "        <p>- Joe Paterno.</p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"abtlogo\">\r" +
    "\n" +
    "            <!--        <img src=\"img/logo.png\" title=\"Wohlig Technology\" alt=\"Wohlig Technology\">-->\r" +
    "\n" +
    "            <img src=\"img/planet/about-sun.png\" alt=\"Wohlig Technology\" title=\"Wohlig Technology\" class=\"sun rotate30\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('./views/content/clients.html',
    "<div class=\"disableBackgroundclient\">\r" +
    "\n" +
    "    <div class=\"backstar\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"clients1\">\r" +
    "\n" +
    "       <figure>\r" +
    "\n" +
    "        <img src=\"img/glowstar.gif\" alt=\"Blenders Pride\" title=\"Blenders Pride\">\r" +
    "\n" +
    "        <figcaption alt=\"Blenders Pride\" title=\"Blenders Pride\">Blenders Pride</figcaption>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "       <div class=\"clients2\">\r" +
    "\n" +
    "       <figure>\r" +
    "\n" +
    "        <img src=\"img/glowstar.gif\" alt=\"LBW\" title=\"LBW\">\r" +
    "\n" +
    "        <figcaption alt=\"LBW\" title=\"LBW\">LBW</figcaption>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div>  \r" +
    "\n" +
    "      <div class=\"clients3\">\r" +
    "\n" +
    "       <figure>\r" +
    "\n" +
    "        <img src=\"img/whitewonderstar.gif\" alt=\"Magic Mirror\" title=\"Magic Mirror\">\r" +
    "\n" +
    "        <figcaption alt=\"Magic Mirror\" title=\"Magic Mirror\">Magic Mirror</figcaption>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div>   \r" +
    "\n" +
    "       <div class=\"clients4\">\r" +
    "\n" +
    "       <figure>\r" +
    "\n" +
    "        <img src=\"img/alite.gif\" alt=\"Sanofi\" title=\"Sanofi\">\r" +
    "\n" +
    "        <figcaption alt=\"Sanofi\" title=\"Sanofi\">Sanofi</figcaption >\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div> \r" +
    "\n" +
    "        <div class=\"clients5\">\r" +
    "\n" +
    "       <figure>\r" +
    "\n" +
    "        <img src=\"img/glowstar.gif\" alt=\"best deal finance\" title=\"best deal finance\">\r" +
    "\n" +
    "        <figcaption alt=\"best deal finance\" title=\"best deal finance\">best deal finance</figcaption>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div> \r" +
    "\n" +
    "      <div class=\"clients6\">\r" +
    "\n" +
    "       <figure>\r" +
    "\n" +
    "        <img src=\"img/glowstar2.gif\" alt=\"lyla loves\" title=\"lyla loves\" >\r" +
    "\n" +
    "        <figcaption alt=\"lyla loves\" title=\"lyla loves\">lyla loves</figcaption >\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "       <div class=\"clients7\">\r" +
    "\n" +
    "       <figure>\r" +
    "\n" +
    "        <img src=\"img/glowstar.gif\" alt=\"aura arts\" title=\"aura arts\">\r" +
    "\n" +
    "        <figcaption alt=\"aura arts\" title=\"aura arts\">aura arts</figcaption>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div> \r" +
    "\n" +
    "      <div class=\"clients8\">\r" +
    "\n" +
    "       <figure>\r" +
    "\n" +
    "        <img src=\"img/whitewonderstar.gif\" alt=\"dell compasador\" title=\"dell compasador\">\r" +
    "\n" +
    "        <figcaption alt=\"dell compasador\" title=\"dell compasador\">dell compasador</figcaption>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "      <div class=\"clients9\">\r" +
    "\n" +
    "       <figure>\r" +
    "\n" +
    "        <img src=\"img/glowstar2.gif\" alt=\"lodha palava\" title=\"lodha palava\">\r" +
    "\n" +
    "        <figcaption alt=\"lodha palava\" title=\"lodha palava\">lodha palava</figcaption>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div> \r" +
    "\n" +
    "      <div class=\"clients10\">\r" +
    "\n" +
    "       <figure>\r" +
    "\n" +
    "        <img src=\"img/whitewonderstar.gif\" alt=\"lashkaria\" title=\"lashkaria\">\r" +
    "\n" +
    "        <figcaption alt=\"lashkaria\" title=\"lashkaria\">lashkaria</figcaption>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div> \r" +
    "\n" +
    "      <div class=\"clients11\">\r" +
    "\n" +
    "       <figure>\r" +
    "\n" +
    "        <img src=\"img/glowstar.gif\" alt=\"designers group\" title=\"designers group\">\r" +
    "\n" +
    "        <figcaption alt=\"designers group\" title=\"designers group\">designers group</figcaption>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "       <div class=\"clients12\">\r" +
    "\n" +
    "       <figure>\r" +
    "\n" +
    "        <img src=\"img/alite.gif\" alt=\"somaiya\" title=\"somaiya\">\r" +
    "\n" +
    "        <figcaption alt=\"somaiya\" title=\"somaiya\">somaiya</figcaption>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "        <div class=\"clients13\">\r" +
    "\n" +
    "       <figure>\r" +
    "\n" +
    "        <img src=\"img/whitewonderstar.gif\" alt=\"world 7 mediacraft\" title=\"world 7 mediacraft\">\r" +
    "\n" +
    "        <figcaption alt=\"world 7 mediacraft\" title=\"world 7 mediacraft\">world 7 mediacraft</figcaption>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "        <div class=\"clients14\">\r" +
    "\n" +
    "       <figure>\r" +
    "\n" +
    "        <img src=\"img/glowstar2.gif\" alt=\"toy-kraft\" title=\"toy-kraft\">\r" +
    "\n" +
    "        <figcaption alt=\"toy-kraft\" title=\"toy-kraft\">toy-kraft</figcaption>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "        <div class=\"clients15\">\r" +
    "\n" +
    "       <figure>\r" +
    "\n" +
    "        <img src=\"img/whitewonderstar.gif\" alt=\"200notout\" title=\"200notout\">\r" +
    "\n" +
    "        <figcaption alt=\"200notout\" title=\"200notout\">200notout</figcaption>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('./views/content/enquiry.html',
    "<div class=\"disableBackground\"></div>\r" +
    "\n" +
    "<section class=\"enquiry\">\r" +
    "\n" +
    "    <div class=\"section\">\r" +
    "\n" +
    "        <div class=\"enquiry magic\">\r" +
    "\n" +
    "            <div class=\"alienrocks\">\r" +
    "\n" +
    "                <div class=\"aliens\">\r" +
    "\n" +
    "                    <img class=\"alien1 alienall\" src=\"img/alien/alien1.png\" title=\"Bug Lightyear\">\r" +
    "\n" +
    "                    <img class=\"alien2 alienall\" src=\"img/alien/alien2.png\" title=\"Bo Peep\">\r" +
    "\n" +
    "                    <div class=\"form-main-holder alienall alien3 \">\r" +
    "\n" +
    "                        <div class=\"formholder\">\r" +
    "\n" +
    "                            <div class=\"forms-query\">\r" +
    "\n" +
    "                                <div class=\"backfront\">\r" +
    "\n" +
    "                                    <div class=\"full-form\">\r" +
    "\n" +
    "                                        <div class=\"text-feedback\">\r" +
    "\n" +
    "                                            <p class=\"text-color\">\r" +
    "\n" +
    "                                                Thank you for interest in Wohlig Technology. Please provide the following information. You should response within 48 hours.\r" +
    "\n" +
    "                                            </p>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"form\" ng-hide=\"form.submit\">\r" +
    "\n" +
    "                                            <form class=\"validation\" action=\"javascript:0\">\r" +
    "\n" +
    "                                                <input type=\"text\" ng-model=\"form.name\" required placeholder=\"Name\">\r" +
    "\n" +
    "                                                <input type=\"email\" ng-model=\"form.email\" placeholder=\"Email\">\r" +
    "\n" +
    "                                                <input type=\"tel\" ng-model=\"form.tel\" placeholder=\"Mobile\">\r" +
    "\n" +
    "                                                <textarea placeholder=\"Query\" ng-model=\"form.query\" required></textarea>\r" +
    "\n" +
    "                                                <input type=\"submit\" value=\"Submit\" ng-click=\"formsubmit(form)\" class=\"button\">\r" +
    "\n" +
    "                                            </form>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div ng-show=\"form.submit\" class=\"text-feedback \">\r" +
    "\n" +
    "                                           <p class=\"text-color feedback2\">Your enquiry has been successfully sent.</p>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"backback\">\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <img src=\"img/alien/alien3.png\" title=\"Hamm\">\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"rock\">\r" +
    "\n" +
    "                    <img src=\"img/component/rock.png\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('./views/content/home.html',
    "<div class=\"section\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"logo\">\r" +
    "\n" +
    "        <img src=\"img/logo.png\" title=\"Wohlig Technology\" alt=\"Wohlig Technology\">\r" +
    "\n" +
    "        <img src=\"img/planet/earth.png\" alt=\"Wohlig Technology\" title=\"Wohlig Technology\" class=\"earth rotate10\">\r" +
    "\n" +
    "        <div class=\"astro\">\r" +
    "\n" +
    "            <img src=\"img/component/astro.png\" title=\"You've got to learn to let go.\" alt=\"You've got to learn to let go.\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"social \">\r" +
    "\n" +
    "        <div class=\"icon rotate60\">\r" +
    "\n" +
    "            <img src=\"img/social/facebook.png\" alt=\"Facebook\" title=\"Facebook\" class=\"facebook rotate10\">\r" +
    "\n" +
    "            <img src=\"img/social/twitter.png\" alt=\"Twitter\" title=\"Twitter\" class=\"twitter rotate20\">\r" +
    "\n" +
    "            <img src=\"img/social/tumblr.png\" alt=\"Tumblr\" title=\"Tumblr\" class=\"tumblr rotate30\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"sun\" label-hover=\"About\" menu-image=\"img/planet/sun.png\" add-class=\"rotate60\" ui-sref=\"wohlig.about\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"moon\" label-hover=\"Clients\" menu-image=\"img/planet/moon.png\" add-class=\"rotate20\"  ui-sref=\"wohlig.clients\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"rocket\" label-hover=\"Reach us\" menu-image=\"img/component/rocket.png\" add-class=\"animatedRocket\"  ui-sref=\"wohlig.reachus\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"satelite\" label-hover=\"Enquiry\" menu-image=\"img/component/satelite.png\" add-class=\"rotate120\" ui-sref=\"wohlig.enquiry\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"saucer\" label-hover=\"Team\" menu-image=\"img/component/saucer.png\" add-class=\"animatedSauser\"  ui-sref=\"wohlig.team\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"saturn\" label-hover=\"Portfolio\" menu-image=\"img/planet/blueplanet.png\" add-class=\"rotate30\" menu-image2=\"img/planet/planetring.png\" add-class2=\"animatedRing\"  ui-sref=\"wohlig.portfolio\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"comets\">\r" +
    "\n" +
    "        <div class=\"comets1\">\r" +
    "\n" +
    "            <img src=\"img/component/comet1.png\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"comets2\">\r" +
    "\n" +
    "            <img src=\"img/component/comet1.png\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"comets3\">\r" +
    "\n" +
    "            <img src=\"img/component/comet1.png\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('./views/content/myModalContent.html',
    "<div ng-controller=\"ModalDemoCtrl\">\r" +
    "\n" +
    "    <script type=\"text/ng-template\" id=\"myModalContent.html\">\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title\">I'm a modal!</h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li ng-repeat=\"item in items\">\r" +
    "\n" +
    "                    <a href=\"#\" ng-click=\"$event.preventDefault(); selected.item = item\">{{ item }}</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "            Selected: <b>{{ selected.item }}</b>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-footer\">\r" +
    "\n" +
    "            <button class=\"btn btn-primary\" type=\"button\" ng-click=\"ok()\">OK</button>\r" +
    "\n" +
    "            <button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancel()\">Cancel</button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"open()\">Open me!</button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"open('lg')\">Large modal</button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"open('sm')\">Small modal</button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"toggleAnimation()\">Toggle Animation ({{ animationsEnabled }})</button>\r" +
    "\n" +
    "    <div ng-show=\"selected\">Selection from a modal: {{ selected }}</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('./views/content/portfolio.html',
    "<div class=\"disableBackgroundblue\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"port\">\r" +
    "\n" +
    "    <h1>portfolio</h1>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"portimg\">\r" +
    "\n" +
    "    <img src=\"img/planet/port.png\" alt=\"website\" title=\"website\"> \r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"portimag\">\r" +
    "\n" +
    "    <div class=\"img-holdr scrollbar\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--        <masonry get-masonry='portfolio'></masonry>-->\r" +
    "\n" +
    "           \r" +
    "\n" +
    "              \r" +
    "\n" +
    "\t\t\t\t\t\t <masonry get-masonry='portfolio'></masonry>\r" +
    "\n" +
    "\t\t\t\t\t\r" +
    "\n" +
    "           \r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"filter-section\" ng-init=\"nameFilter = ''\">\r" +
    "\n" +
    "        <ul>\r" +
    "\n" +
    "            <li ng-click=\"changefilter('');\">\r" +
    "\n" +
    "                <img src=\"img/portfolio/all.png\" alt=\"all\" title=\"all\">\r" +
    "\n" +
    "                <img src=\"img/portfolio/ring.png\" class=\"ring animatedRing\" ng-show=\"nameFilter=='';\">\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li ng-click=\"changefilter('website')\">\r" +
    "\n" +
    "                <img src=\"img/portfolio/website.png\" alt=\"website\" title=\"website\">\r" +
    "\n" +
    "                <img src=\"img/portfolio/ring.png\" class=\"ring animatedRing\" ng-show=\"nameFilter=='website';\">\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li ng-click=\"changefilter('mobile');\">\r" +
    "\n" +
    "                <img src=\"img/portfolio/mobile.png\" alt=\"mobile\" title=\"mobile\">\r" +
    "\n" +
    "                <img  src=\"img/portfolio/ring.png\" class=\"ring animatedRing\" ng-show=\"nameFilter=='mobile';\">\r" +
    "\n" +
    "                \r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"portdetail\">\r" +
    "\n" +
    "    <div class=\"portback\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('./views/content/reachus.html',
    "<section class=\"enquiry\">\r" +
    "\n" +
    "    <div class=\"section\">\r" +
    "\n" +
    "        <div class=\"rockets\" label-hover=\"reach us\" menu-image=\"img/component/rocket.png\" add-class=\"animatedRocket\" ui-sref=\"wohlig.reachus\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"googlemap\">\r" +
    "\n" +
    "            <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15086.174908888928!2d72.8599335!3d19.0398171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf2cc4000001%3A0xc683a42662527334!2sSadhana+English+Primary+School!5e0!3m2!1sen!2sin!4v1438506413750\" width=\"300\" height=\"250\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"addresses\">\r" +
    "\n" +
    "            <p>\r" +
    "\n" +
    "                <span>Address</span> : Plot no. 3, Flat no. A/30 Laxmi Nivas , 3rd Floor , Near Sadhana School , Sion (W) , Mumbai 400022.\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "            <p>\r" +
    "\n" +
    "                <span>Tel</span> : +91 98200 45678 / +91 9819222221\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "            <p>\r" +
    "\n" +
    "                <span>Email</span> : info@wohlig.com\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"reachss\">\r" +
    "\n" +
    "            <div class=\"astro\">\r" +
    "\n" +
    "                <img src=\"img/component/astro.png\" alt=\"Matt Kowalski\" title=\"Matt Kowalski\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('./views/content/team.html',
    "<div class=\"disableBackground\"></div>\r" +
    "\n" +
    "<div class=\"section\">\r" +
    "\n" +
    "    <div class=\"teamrock\">\r" +
    "\n" +
    "        <!--        <div class=\"teamed\">-->\r" +
    "\n" +
    "        <div class=\"teamarrival\">\r" +
    "\n" +
    "            <img src=\"img/component/saucer.png\" title=\"Red Pearl\" alt=\"Red Pearl\" />\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"teamland\">\r" +
    "\n" +
    "            <img src=\"img/component/rock3.png\" alt=\"Wohlig Technology\" title=\"Wohlig Technology\" class=\"land\" />\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"teamaliens\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <img class=\"alien11 alienalls\" src=\"img/alien/alien6.png\" title=\"Fungos\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <img class=\"alien22 alienalls\" src=\"img/alien/alien5.png\" title=\"Mike Wazowski\">\r" +
    "\n" +
    "            <img class=\"alien44 alienalls\" src=\"img/alien/alien7.png\" title=\"Bloat\">\r" +
    "\n" +
    "            <img class=\"alien55 alienalls\" src=\"img/alien/alien8.png\" title=\"Viper\">\r" +
    "\n" +
    "            <img class=\"alien33 alienalls\" src=\"img/alien/alien4.png\" title=\"Boggs\">\r" +
    "\n" +
    "            <!--                <img class=\"alien34 alienalls\" src=\"img/alien/alienhand.png\">-->\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"teamdata\">\r" +
    "\n" +
    "    <h2>team</h2>\r" +
    "\n" +
    "    <p>\r" +
    "\n" +
    "        The team of Wohlig Technology has developers, designers and creative developers with immense \r" +
    "\n" +
    "\r" +
    "\n" +
    "experience in the world of technology. \r" +
    "\n" +
    "\r" +
    "\n" +
    "With a portfolio budding with creative applications, websites and systems, the team is able to grasp the \r" +
    "\n" +
    "\r" +
    "\n" +
    "needs of the clients and the users.\r" +
    "\n" +
    "    </p>\r" +
    "\n" +
    "    <p>\r" +
    "\n" +
    "        The technology used by the team is cutting edge and at its best, they follow international coding \r" +
    "\n" +
    "\r" +
    "\n" +
    "standards to make sure each idea is professional and unique. \r" +
    "\n" +
    "\r" +
    "\n" +
    "The design, development and integration team as a whole create and develop websites and applications \r" +
    "\n" +
    "\r" +
    "\n" +
    "giving them a strategically strong and creatively refreshing twist.\r" +
    "\n" +
    "    </p>\r" +
    "\n" +
    "    <div class=\"qoute\">\r" +
    "\n" +
    "        <h3>“When a team outgrows individual performance and learns team confidence, \r" +
    "\n" +
    "excellence becomes a reality.”</h3>\r" +
    "\n" +
    "        <p>- Joe Paterno.</p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('./views/content/thoughtleadership.html',
    ""
  );

}]);
wohligapp.run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./views/directive/comet.html',
    "<div class=\"menuTop\">\r" +
    "\n" +
    "    <div class=\"menuimage\">\r" +
    "\n" +
    "        <img ng-src=\"{{menuimage}}\" ng-class=\"shouldRotate\" alt=\"{{label}}\" title=\"{{label}}\" >\r" +
    "\n" +
    "        <img ng-src=\"{{menuimage2}}\" ng-if=\"menuimage2\" ng-class=\"otherClass\" alt=\"{{label}}\" title=\"{{label}}\" class=\"image2\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"comet\">\r" +
    "\n" +
    "        <div class=\"cometInner\">\r" +
    "\n" +
    "            <img src=\"img/component/comet.png\" alt=\"\">\r" +
    "\n" +
    "            <span class=\"label\">{{label}}</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('./views/directive/portfolio.html',
    "<div class=\"grid cs-style-3\">\r" +
    "\n" +
    "    <div class=\"grid-item\" ng-repeat=\"item in items | filter: { type: nameFilter }\" title=\"{{image.picture}}\">\r" +
    "\n" +
    "        <a class=\"fancybox-thumb\" rel=\"fancybox-thumb\" href=\"{{item.picture}}\" alt=\"{{item.name}}\" title=\"{{item.name}}\">\r" +
    "\n" +
    "           \r" +
    "\n" +
    "                <img ng-src=\"{{item.picture}}\">\r" +
    "\n" +
    "                <figcaption>\r" +
    "\n" +
    "                    <h3>{{item.name}}</h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </figcaption>\r" +
    "\n" +
    "          \r" +
    "\n" +
    "\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );

}]);

