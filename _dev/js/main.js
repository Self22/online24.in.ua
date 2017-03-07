$(document).ready(function () {

    //accordeon__texts

    (function () {

        var flag = true;

        $('.nav__sidebar-title').on('click', function (e) {


            var
                $this = $(this),
                container = $this.closest('.sidebar__index'),
                item = $this.closest('.sidebar__nav-block'),
                currentContent = item.find('.nav__sidebar-law'),
                accIcon = item.find('.acc__icon'),
                duration = 500;

            if (flag) {
                flag = false;


                if (!item.hasClass('active')) {
                    item.addClass('active')
                        .find('.acc__icon')
                        .addClass('transparent')
                        .siblings()
                        .removeClass('active')
                        .find('.nav__sidebar-law')
                        .slideUp(duration);

                    currentContent.slideDown(duration, function () {
                        flag = true
                    });
                }
                else {
                    item.removeClass('active')
                        .find('.acc__icon')
                        .removeClass('transparent');
                    currentContent.slideUp(function () {
                        flag = true
                    });
                }

            }
        })
    })();

});

//slider

$('.bp-hs').bpHS(autoPlay = true, showButtons = true, showControls = true, showBullets = false);

//parallaz

$('.header').parallax({imageSrc: 'img/whiteblue_back606.png'});
// $('.footer').parallax({imageSrc: 'img/whiteblue_back602.png'});

//sticky header

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 350) {

            $('.nav__main').addClass('nav__fixed');
            $('.header__main').addClass('header__main-sticky');

        }

        else {

            $('.nav__main').removeClass('nav__fixed');
            $('.header__main').removeClass('header__main-sticky');
        }

    });

});

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 150) {
            $('.lmain__menu').addClass('lnav__fixed');
        }

        else {

            $('.lmain__menu').removeClass('lnav__fixed');
        }

    });

});

//button up

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() > 50) {

            $('.button__up').fadeIn();

        } else {

            $('.button__up').fadeOut();

        }

    });

    $('.button__up').click(function () {

        $('body,html').animate({scrollTop: 0}, 800);

    });

});