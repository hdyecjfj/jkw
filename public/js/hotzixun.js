$(document).ready(function() {
    $('.content .body_left .new_left').hover(function() {
        $(this).children('a').css({
            right: '0'
        });
        console.log($(this).children('a'));
    }, function() {
        $('.content .body_left .new_left a').css({
            right: '-11110000px'
        });
    });
});