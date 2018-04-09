//parallax

$('.sm__fotoblock').parallax({imageSrc: '../img/sm__fotoblock.jpg'});
$('.deals__header-content').parallax({imageSrc: '../img/deals-header.jpg'});

//sticky header

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
                        var result = "<div = 'bg-success'>������� �� ������! �� ��� ����������!</div>"
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


/////////////////////////// Nav Landings: soft scroll

$('#nav-main').singlePageNav(
    {offset: 130, speed: 1000, threshold: 150}
);


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


// input range

"use strict";

// var tariffRange = document.querySelector(".tariff__range");
// var summDocuments = document.querySelector(".summ__documents");
// var summPlan = document.querySelector(".summ__plan");
// var singledocumentCost = document.querySelector(".singledocument__cost");
//
//
// console.log(tariffRange.value);
// tariffRange.addEventListener("change", function (event) {
//     if(tariffRange.value == 0){
//         summDocuments.innerText = 50;
//         summPlan.innerText = '0 грн.';
//         singledocumentCost.innerText = '0,0 грн';
//     }
//     console.log(tariffRange.value);
// });

function fun1() {
    var tariffRange = document.querySelector(".tariff__range");
    var summDocuments = document.querySelector(".summ__documents");
    var summPlan = document.querySelector(".summ__plan");
    var singledocumentCost = document.querySelector(".singledocument__cost");

    if (tariffRange.value == 0) {
        summDocuments.innerText = 50;
        summPlan.innerText = '0 грн.';
        singledocumentCost.innerText = '0,0 грн';
    }

    if (tariffRange.value == 1) {
        summDocuments.innerText = 100;
        summPlan.innerText = '200 грн.';
        singledocumentCost.innerText = '2,0 грн';
    }

    if (tariffRange.value == 2) {
        summDocuments.innerText = 500;
        summPlan.innerText = '900 грн.';
        singledocumentCost.innerText = '1.8 грн';
    }

    if (tariffRange.value == 3) {
        summDocuments.innerText = 1000;
        summPlan.innerText = '1600 грн.';
        singledocumentCost.innerText = '1.6 грн';
    }

    if (tariffRange.value == 4) {
        summDocuments.innerText = 2000;
        summPlan.innerText = '2800 грн.';
        singledocumentCost.innerText = '1.4 грн';
    }

    if (tariffRange.value == 5) {
        summDocuments.innerText = 5000;
        summPlan.innerText = '6000 грн.';
        singledocumentCost.innerText = '1.2 грн';
    }

    if (tariffRange.value == 6) {
        summDocuments.innerText = 1100;
        summPlan.innerText = '1100 грн.';
        singledocumentCost.innerText = '1,0 грн';
    }

    if (tariffRange.value == 7) {
        summDocuments.innerText = 50000;
        summPlan.innerText = '40000 грн.';
        singledocumentCost.innerText = '0.8 грн';
    }
}
