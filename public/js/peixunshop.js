$(document).ready(function() {


    $('.choose .lei  a').on('click', function() {
        $(this).siblings('strong').show();
        $(this).addClass('show');
        $(this).siblings('a').hide();

    });

    $('.choose .lei  strong').on('click', function() {
        $(this).hide();
        $(this).siblings().removeClass('show');
        $(this).siblings('a').show();

    });


    $('.shanpin .title dd').on('click', function() {
        $(this).addClass('choose_ti').siblings().removeClass('choose_ti');
        var i = $('.shanpin .title dd').index($(this));
        if (i == 1) {
            $('.shanpin .shopmain .box1').hide().siblings('.box2,.box3').show();
        } else if (i == 2) {
            $('.shanpin .shopmain .box3').show().siblings('.box2,.box1').hide();

        } else {
            $('.shanpin .shopmain .new').show();
        }
    });


});