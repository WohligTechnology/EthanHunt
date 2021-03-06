var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "Home",
        classis: "active",
        link: "#/home",
        subnav: []
    }, {
        name: "Features",
        active: "",
        link: "#/feature",
        classis: "active",
        subnav: []
    }, {
        name: "Infinite Scroll",
        active: "",
        link: "#/infinite",
        classis: "active",
        subnav: []
    }];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        submitform: function(data) {
            $http.post("./mandrill/mailsend.php",data);
        }

    };
});
