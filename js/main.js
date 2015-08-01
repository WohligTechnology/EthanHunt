$(document).ready(function() {
    getSection();
    $(window).resize(function() {
        getSection();
    });
});


function getSection() {
    var height = $(window).height()
    $("head .sectioncss").html(".section {min-height: " + height + "px;}");
}
var lastmousemove = {};
var changeRatio = 0.1;
$(window).mousemove(function(event) {
    var mousemove = {
        x: event.pageX,
        y: event.pageY
    };
    if (lastmousemove.x) {
        var curBackX = parseFloat($(".stars").css("backgroundPositionX"));
        var curBackY = parseFloat($(".stars").css("backgroundPositionY"));
        var changeX = curBackX + ((lastmousemove.x - mousemove.x) * changeRatio);
        var changeY = curBackY + ((lastmousemove.y - mousemove.y) * changeRatio);
        $(".stars").css("backgroundPositionX", changeX);
        $(".stars").css("backgroundPositionY", changeY);

    }
    lastmousemove = mousemove;
});