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



