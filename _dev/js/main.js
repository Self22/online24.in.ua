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
$('.liga__header-content').parallax({imageSrc: 'img/liga_header.jpg'});
$('.liga__fotoblock').parallax({imageSrc: 'img/liga__block1.jpg'});


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

$(document).ready(function () {

    $("#loginform").validate({

        rules: {

            login: {
                required: true,
                minlength: 4,
                maxlength: 16,
            },

            pswd: {
                required: true,
                minlength: 6,
                maxlength: 16,
            },
        },

        messages: {

            login: {
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 16",
            },

            pswd: {
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен быть минимум 6 символа",
                maxlength: "Пароль должен быть максимум 16 символов",
            },

        }

    });

});

/////////////////// validation

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

