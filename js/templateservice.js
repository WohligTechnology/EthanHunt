var templateservicemod = angular.module('templateservicemod', []);
templateservicemod.service('TemplateService', function() {
    this.title = "Universe of Creativity";
    this.meta = "Wohlig,Wohlig Technology,Creative Agency,Development Firm,NodeJS,MongoDB,Web Development,Android,iOS,iPhone,iPad,iWatch,Selig,Web Designing,ionic";
    this.metadesc = "Software development firm who have carved a niche in founding in the field of Web,  App development, Ionic Development as well as Native Development. Projects that we've developed mainly show our creativity and excellence, we've made ourselves adaptable to the latest technology and we've developed a name in integrating various services on one platform with simplicity. ";

    var d = new Date();
    this.year = d.getFullYear();

    this.init = function() {
        this.header = "./views/header.html";
        this.content = "./views/content/home.html";
        this.footer = "./views/footer.html";
        this.hideContent = false;
        this.contentClass = "blurHome";
    };

    this.changecontent = function(page) {
        this.init();
        var data = this;
        data.content = "./views/content/" + page + ".html";
        return data;
    };

    this.init();

});