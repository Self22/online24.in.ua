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

//parallax

$('.header').parallax({imageSrc: 'img/whiteblue_back606.png'});
$('.liga__header-content').parallax({imageSrc: '../img/liga_header.jpg'});
$('.liga__fotoblock').parallax({imageSrc: '../img/liga__block1.jpg'});
$('.ca__header-content').parallax({imageSrc: '../img/ca_header.jpg'});
$('.ib__header-content').parallax({imageSrc: '../img/ib_header2.jpg'});
$('.ca__fotoblock').parallax({imageSrc: '../img/ca_photoblock.jpg'});
$('.ib__fotoblock').parallax({imageSrc: '../img/ib__photoblock.jpg'});

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


/////////////////// validation footer__form

(function () {

    var app = {

        initialize: function () {
            this.setUpListeners();
        },

        setUpListeners: function () {
            $('#footerform').on('submit', app.submitForm);
        },

        submitForm: function (e) {
            e.preventDefault();

            var form = $(this),
                submitBtn = form.find('button[type="submit"]');

            if (app.validateForm(form) === false) return false;

            submitBtn.attr('disabled', 'disabled');

            console.log('Form__post!');
            var str = form.serialize();

            $.ajax({
                url: 'contact-form/contact_process.php',
                type: 'POST',
                data: str
            })
                .done(function (msg) {
                    if (msg === "OK") {
                        var result = "<div = 'bg-success'>Спасибо за заявку! Мы вам перезвоним!</div>"
                        form.html(result);
                    } else {
                        form.html(msg);
                    }
                })
                .always(function () {
                    submitBtn.removeAttr('disabled');
                });

        },

        validateForm: function (form) {
            var inputs = form.find('input'),
                valid = true;


            $.each(inputs, function (index, val) {
                var input = $(val),
                    val = input.val(),
                    formGroup = input.parents('.form-group');


                if (val.length === 0) {
                    formGroup.addClass('has-warning').removeClass('has-success');
                    input.addClass('form-control-warning').removeClass('form-control-success');
                    valid = false;
                } else {
                    formGroup.addClass('has-success').removeClass('has-warning');
                    input.addClass('form-control-success').removeClass('form-control-warning');
                }
            });

            return valid;
        },


    }

    app.initialize();

}());

/////////////// mask
$(document).ready(function () {
    $('.footer__form-tel').mask('+38(000) 000-00-00');
});

////// slow scroll

$(document).ready(function () {

    var container = $('.liga__header');

    $(".lmain__menu").on("click", ".menu__inner", function (event) {
        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 100;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".navbar-toggleable-sm").on("click", ".menu__inner", function (event) {
        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
        setTimeout(container.removeClass("in"), 500);
    });

    $(".navbar-toggleable-sm").on("tap", ".menu__inner", function (event) {
        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
    
});


$(document).ready(function () {

    var container = $('.ib__header');

    $(".lmain__menu").on("click", ".lmain__menu", function (event) {
        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 100;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".navbar-toggleable-sm").on("click", ".menu__inner", function (event) {
        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
        setTimeout(container.removeClass("in"), 500);
    });

    $(".navbar-toggleable-sm").on("tap", ".menu__inner", function (event) {
        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

});







///////////////////////////////////// tabs contragent tariffs

$(document).ready(function () {

    //tabs

    var flag = true;

    $('.tariff__item-link').on('click', function (e) {
        e.preventDefault();

        var
            $this = $(this),
            item = $this.closest('.tariff__item'),
            container = $this.closest('.ca__tariff-tabs'),
            content = container.find('.tariff__descr-item'),
            ndx = item.index(),
            reqItem = content.eq(ndx),
            activeItem = content.filter('.tariff__descr-item-active');

        if (flag) {
            flag = false;


            item.addClass('tariff__item-active')
                .siblings()
                .removeClass('tariff__item-active');

            activeItem.fadeOut(500, function () {
                reqItem.fadeIn(500, function () {
                    $(this).addClass('tariff__descr-item-active')
                        .siblings()
                        .removeClass('tariff__descr-item-active');
                    flag = true
                });
            });

        }

    })

});
