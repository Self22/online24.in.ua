//parallax


$('.liga__header-content').parallax({imageSrc: '../img/liga__back1.jpg'});
$('.liga__fotoblock').parallax({imageSrc: '../img/liga__block1.jpg'});
$('.ca__header-content').parallax({imageSrc: '../img/ca_header1.jpg'});
$('.ib__header-content').parallax({imageSrc: '../img/ib_header3.jpg'});
$('.ca__fotoblock').parallax({imageSrc: '../img/ca_photoblock.jpg'});
$('.ib__fotoblock').parallax({imageSrc: '../img/ib__photoblock.jpg'});
$('.oc__header-content').parallax({imageSrc: '../img/1c-header.jpg'});
$('.oc__fotoblock').parallax({imageSrc: '../img/oc-fotoblock.jpg'});
$('.urs__header-content').parallax({imageSrc: '../img/urs-header.jpg'});
$('.urs__fotoblock').parallax({imageSrc: '../img/uds-fotoblock.jpg'});
$('.sota__header-content').parallax({imageSrc: '../img/sota-header.jpg'});
$('.vchasno__fotoblock').parallax({imageSrc: '../img/vchasno-fotoblock.jpg'});
$('.sota__fotoblock').parallax({imageSrc: '../img/sota-fotoblock.jpg'});
$('.sd__fotoblock').parallax({imageSrc: '../img/sd-fotoblock.jpg'});
$('.oa__header-content').parallax({imageSrc: '../img/oa-header.jpg'});
$('.oa__fotoblock').parallax({imageSrc: '../img/telephons_bg-2.jpg'});
$('.report__header-content').parallax({imageSrc: '../img/report-main.jpg'});
$('.report__fotoblock').parallax({imageSrc: '../img/report_fotoblock.jpg'});
$('.office__header-content').parallax({imageSrc: '../img/office__header.jpg'});
$('.office__fotoblock').parallax({imageSrc: '../img/office365__fotoblock.jpg'});
$('.sm__header-content').parallax({imageSrc: '../img/sm__header.jpg'});
$('.sm__fotoblock').parallax({imageSrc: '../img/sm__fotoblock.jpg'});





//sticky header

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 450) {

            $('.nav__main').addClass('nav__fixed');
            $('.header__main').addClass('header__main-sticky');
            $('.logomain').css('display', 'block');

        }

        else {

            $('.nav__main').removeClass('nav__fixed');
            $('.header__main').removeClass('header__main-sticky');
            $('.logomain').css('display', 'none');
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
                url: '../contact-form/contact_process.php',
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

////////////////// validation test__form

(function () {

    var app = {

        initialize: function () {
            this.setUpListeners();
        },

        setUpListeners: function () {
            $('#popupform-test').on('submit', app.submitForm);
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
                url: '../contact-form/contact_process.php',
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

////////////////// validation order__form

(function () {

    var app = {

        initialize: function () {
            this.setUpListeners();
        },

        setUpListeners: function () {
            $('#popupform-order').on('submit', app.submitForm);
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
                url: '../contact-form/contact_process.php',
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
    $('.footer__form-tel').mask('+38 (000) 000-00-00');
    $('.order__tel-input').mask('+38 (000) 000-00-00');
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

////////////////////////////////////////////// tabs sms-mayak tariffs

$(document).ready(function () {

    //tabs

    var flag = true;

    $('.tariff__name-link').on('click', function (e) {
        e.preventDefault();

        var
            $this = $(this),
            item = $this.closest('.tariff__name'),
            container = $this.closest('.tab__container'),
            content = container.find('.tarif__item'),
            ndx = item.index(),
            reqItem = content.eq(ndx),
            activeItem = content.filter('.tarif__item-active');

        if (flag) {
            flag = false;


            item.addClass('tariff__name-active')
                .removeClass('hvr-back-pulse')
                .siblings()
                .removeClass('tariff__name-active')
                .addClass('hvr-back-pulse');

            activeItem.fadeOut(500, function () {
                reqItem.fadeIn(500, function () {
                    $(this).addClass('tarif__item-active')
                        .siblings()
                        .removeClass('tarif__item-active');
                    flag = true
                });
            });

        }

    })

});

/////////////////////////// Nav Landings: soft scroll

$('#nav-main').singlePageNav(
    {offset: 130, speed: 1000, threshold: 150}
);

///////////////////////// Udalenniy Office - Ticker
$(document).ready(function () {
    $('.target__list').bxSlider({

        minSlides: 2,
        maxSlides: 8,
        slideWidth: 370,
        slideMargin: 10,
        ticker: true,
        speed: 58000


    });
});

$(document).ready(function () {
    $('.bxslider').bxSlider({
        auto: true,
        pager: false,
        controls: false
    });
});

$(document).ready(function () {
    $('.module__list').bxSlider({
        ticker: true,
        slideWidth: 350,
        minSlides: 1,
        maxSlides: 8,
        speed: 150000
    });
});
//////////////////////////////////// Mobile Menu Close Tap

$('main').on('click', function (e) {
    $('.navbar-collapse').removeClass('show');
});

/////////////////////// slow popup

$('.l__testbtn').on('click', function (e) {
    e.preventDefault();
    $('.overlay').fadeIn(800);
    $('.popup__form-test').fadeIn(800);
});

$('.vchasno__reg').on('click', function (e) {
    e.preventDefault();
    $('.overlay').fadeIn(800);
    $('.popup__form-test').fadeIn(800);
});


$('.bye__button').on('click', function (e) {
    e.preventDefault();
    $('.overlay').fadeIn(800);
    $('.popup__form-order').fadeIn(800);
});

$('.tariff__button').on('click', function (e) {
    e.preventDefault();
    $('.overlay').fadeIn(800);
    $('.popup__form-order').fadeIn(800);
});

$('.order__l').on('click', function (e) {
    e.preventDefault();
    $('.overlay').fadeIn(800);
    $('.popup__form-order').fadeIn(800);
});


$('.overlay').on('click', function (e) {
    $('.overlay').fadeOut(800);
    $('.popup__form-order').fadeOut(800);
    $('.popup__form-test').fadeOut(800);
})

$('.close__popup').on('click', function (e) {
    $('.overlay').fadeOut(800);
    $('.popup__form-order').fadeOut(800);
    $('.popup__form-test').fadeOut(800);

})

///// accordeon oa
$(document).ready(function () {

    //���������
    (function () {

        var flag = true;

        $('.channel-acco__trigger-link').on('click', function (e) {
            e.preventDefault();

            var
                $this = $(this),
                container = $this.closest('.channels__list'),
                item = $this.closest('.channel__item'),
                currentContent = item.find('.channel-acco__descr'),
                accIcon = item.find('.acc__icon-oa'),
                duration = 500;

            if (flag) {
                flag = false;


                if (!item.hasClass('active__oa')) {
                    item.addClass('active__oa')
                        .find('.acc__icon-oa')
                        .addClass('transparent')
                        .siblings()
                        .removeClass('active__oa')
                        .find('.channel-acco__descr')
                        .slideUp(duration);

                    currentContent.slideDown(duration, function () {
                        flag = true
                    });
                }
                else {
                    item.removeClass('active__oa')
                        .find('.acc__icon-oa')
                        .removeClass('transparent');
                    currentContent.slideUp(function () {
                        flag = true
                    });
                }

            }
        })
    })();


});


/////////// slider inlife

$(document).ready(function () {
    $('.inlife__list').bxSlider({
        speed: 3000,
        pause: 12000,
        auto: true
    });
});


/////


//# sourceMappingURL=land.js.map
