$(document).ready(function () {
    getSection();
    $(window).resize(function () {
        getSection();
    });
});


function getSection() {
    var height = $(window).height()
    $("head .sectioncss").html(".section {min-height: " + height+"px;}");
}
