$(document).ready(function () {
    "use strict";

    $(".nav_mobile_top_btn").click(function() {
        $(this).toggleClass("active");
        $(".nav_mobile_drop").toggleClass("active");
    });

    $(".blog_content_item_content_read_btn").click(function(){
        $(this).parent().parent().parent().parent().addClass("active");
    });

    $('.main_slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        prevArrow: $('.main_prev'),
        nextArrow: $('.main_next')
    });

    $('.first_slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        prevArrow: $('.first_top_right_prev'),
        nextArrow: $('.first_top_right_next')
    });

    $('input[type="tel"]').inputmask("+7(999)999-99-99");


});