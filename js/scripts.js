$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('opened');
        $('nav').toggleClass('active');
    });

    $('.menu').click(function () {
        $('.menu-bg').css('display', 'flex');
    });
    $('.menu-modal-close').click(function () {
        $('.menu-bg').css('display', 'none');
    });
});