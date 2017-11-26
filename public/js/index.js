$(document).ready(function() {
    $('.newandclass .left ul li').on('click', function() {
        var i = $('.newandclass .left li').index($(this));
        $(this).addClass('on').siblings().removeClass('on');
        var dll = $('.newandclass .left dl');
        $(dll[i]).show().siblings('dl').hide();
    });

    $('.newandclass .right ul li').on('click', function() {
        var i = $('.newandclass .right ul li').index($(this));
        var dll = $('.newandclass .right dl');
        $(this).addClass('choose').siblings().removeClass('choose');
        $(dll[i]).show().siblings('dl').hide();

    });

    $('.zhengshu .main .left .anniu').on('click', function() {
        var i = $('.zhengshu .main .left .anniu').index($(this));

        if (i == 0) {
            $(this).siblings('.show').children('.war').css({
                left: "0"
            });
        } else {
            $(this).siblings('.show').children('.war').css({
                left: "-800px"
            });
        }
    });

    $('.zhengshu .main .left .leftnew').hover(function() {
        console.log($(this).children('span'));
        $(this).children('span').addClass('span_on');
    }, function() {
        $(this).children('span').removeClass('span_on');
    });

    $('.company .cp_btn').on('click', function() {
        var i = $('.company .cp_btn').index($(this));
        if (i == 0) {
            $(this).siblings('div').children('dl').css({
                left: "0"
            });
        } else {
            $(this).siblings('div').children('dl').css({
                left: "-1120px"
            });
        }
    });

});