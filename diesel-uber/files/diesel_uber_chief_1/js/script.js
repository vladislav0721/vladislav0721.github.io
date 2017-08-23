function cyclerstart() {
    var now = new Date();
    var cycler = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 99);
    var totalRemains = (cycler.getTime() - now.getTime());
    if (totalRemains > 0) {
        var RemainsSec = (parseInt(totalRemains / 1000));
        var RemainsFullDays = (parseInt(RemainsSec / (24 * 60 * 60)));
        if (RemainsFullDays < 10) {
            RemainsFullDays = "0" + RemainsFullDays
        };
        var secInLastDay = RemainsSec - RemainsFullDays * 24 * 3600;
        var RemainsFullHours = (parseInt(secInLastDay / 3600));
        if (RemainsFullHours < 10) {
            RemainsFullHours = "0" + RemainsFullHours
        };
        var secInLastHour = secInLastDay - RemainsFullHours * 3600;
        var RemainsMinutes = (parseInt(secInLastHour / 60));
        if (RemainsMinutes < 10) {
            RemainsMinutes = "0" + RemainsMinutes
        };
        var lastSec = secInLastHour - RemainsMinutes * 60;
        if (lastSec < 10) {
            lastSec = "0" + lastSec
        };
        var mcend = Date.parse(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
        var mcnow = now.getTime();
        var mc = ((mcend - mcnow) / 10).toFixed(0).substr(8);
        var cyclers = document.getElementsByClassName('cycler');
        var cyclerhours = document.getElementsByClassName('cyclerhours');
        var cyclerminutes = document.getElementsByClassName('cyclerminutes');
        var cyclerseconds = document.getElementsByClassName('cyclerseconds');
        var i;
        for (i = 0; i < cyclers.length; i++) {
            cyclerhours[i].innerHTML = RemainsFullHours;
            cyclerminutes[i].innerHTML = RemainsMinutes;
            cyclerseconds[i].innerHTML = lastSec;
        }
        setTimeout("cyclerstart()", 10);
    } else {}
}

$(document).ready(function() {
    cyclerstart();

    $("#pamphletu16634 img").click(function() {
        val =  $(this).attr("src").substr(0, $(this).attr("src").length - 5) +'s.jpeg'; 
        $("#u16971_img").attr("src", val);
    });

    $('.scrollTo').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
});