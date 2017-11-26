$(document).ready(function() {

    $('.avtiv_no .ul .dd p').on('click', function() {
        console.log(this);
        $(this).parent().addClass("choose_on").siblings().removeClass('choose_on').hide();
        // var span = $('<span>✘</span>').css({
        //     width: "20px",
        //     height: '35px',
        //     position: "absolute",
        //     right: "0",
        //     bottom: "0",
        //     backgroundcolor: 'transparent'

        // });
        // $(this).append(span);

        $(this).siblings().show();

    });
    $('.avtiv_no .ul .dt p').on('click', function() {
        $(this).parent().addClass("choose_on").siblings().removeClass('choose_on').hide();
        $(this).siblings().show();

    });


    $('.avtiv_no .ul .dd span').on('click', function() {
        $(this).parent().siblings().show();
        $(this).parent().removeClass('choose_on');
        $('.avtiv_no .ul .dt').addClass('choose_on');
        $(this).hide();

    });

    $('.avtiv_no .ul .dt span').on('click', function() {
        $(this).parent().siblings().show();
        $(this).parent().removeClass('choose_on');
        $('.avtiv_no .ul .dt').addClass('choose_on');
        $(this).hide();

    })



});