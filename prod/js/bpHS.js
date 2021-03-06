/*
 * Boompx jQuery Hero Slider Plugin v0.1.0
 * Demo    : http://codepen.io/boompx/full/wBmeQb/
 * Github  : https://github.com/boompx/bpHS
 * Vendors : https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * Author  : boompx.com - @boom_px
 * Licensed under the MIT license
 */
!function (e, t, n) {
    "use strict";
    e.fn.bpHS = function (s) {
        var i = {
                activate: 0,
                touchSwipe: !0,
                nextText: null,
                prevText: null,
                showControls: !1,
                showButtons: 0,
                showBullets: !1,
                arrowKeys: !1,
                autoPlay: 1,
                duration: 5e3
            },
            s = e.extend({}, i, s);
        return this.each(function () {
            function i(e, t, s) {
                var i = n.createElement("button");
                return i.innerHTML = e, i.setAttribute("type", t), i.className = s, i
            }

            var a = e(this),
                l = a.find(".bp-hs_inner"),
                r = l.find(".bp-hs_inner__item"),
                u = r.length,
                c = function () {
                    l.css({
                        width: r.width() * u
                    })
                };
            c();
            var o = function () {
                c()
            };
            t.onresize = o;
            var d = n.createElement("div");
            d.className = "bp-hs_control", a.append(d);
            var b = [i(s.prevText, "button", "bp-btn bp-hs_control__prev"), i(s.nextText, "button", "bp-btn bp-hs_control__next")],
                p = n.createDocumentFragment();
            if (s.showButtons)
                for (var _ = 0; _ < b.length; _++) p.appendChild(b[_]);
            if (u > 1) {
                if (s.showBullets)
                    for (a.find(".bp-hs_control").append('<div class="bp-bullets">'), _ = 0; u > _; _++) a.find(".bp-bullets").append('<i class="bp-bullets_bullet">');
                s.showControls && d.appendChild(p)
            }
            r.eq(s.activate).addClass("is-active"), a.find(".bp-bullets_bullet").eq(s.activate).addClass("current");
            var v = function () {
                    l.find(".bp-hs_inner__item.is-active").prev().length && (l.find(".bp-hs_inner__item.is-active").removeClass("is-active").prev().addClass("is-active"), a.find(".bp-bullets_bullet.current").removeClass("current").prev().addClass("current"))
                },
                f = function () {
                    l.find(".bp-hs_inner__item.is-active").next().length ? (l.find(".bp-hs_inner__item.is-active").removeClass("is-active").next().addClass("is-active"), a.find(".bp-bullets_bullet.current").removeClass("current").next().addClass("current")) : (l.find(".bp-hs_inner__item.is-active").removeClass("is-active"), a.find(".bp-bullets_bullet.current").removeClass("current"), l.find(".bp-hs_inner__item").eq(0).addClass("is-active"), a.find(".bp-bullets_bullet").eq(0).addClass("current"))
                };
            a.find(".bp-btn").on("click", function () {
                var t = e(this);
                t.hasClass("bp-hs_control__next") ? f() : v()
            }), a.find(".bp-bullets_bullet").on("click", function () {
                e(".bp-bullets").find(".bp-bullets_bullet").removeClass("current"), e(".bp-hs_inner__item").removeClass("is-active"), e(this).addClass("current"), l.find(".bp-hs_inner__item").eq(e(this).index()).addClass("is-active")
            }), s.touchSwipe && (a.addClass("has-touchSwipe"), a.swipe({
                swipeRight: function () {
                    v()
                },
                swipeLeft: function () {
                    f()
                }
            })), s.arrowKeys && e(n).keydown(function (e) {
                switch (e.which) {
                    case 37:
                        v();
                        break;
                    case 39:
                        f();
                        break;
                    default:
                        return
                }
                e.preventDefault()
            });
            var h = !1;
            a.mouseenter(function () {
                h = !0
            }).mouseleave(function () {
                h = !1
            }), s.autoPlay && setInterval(function () {
                h || f()
            }, s.duration)
        })
    }
}(jQuery, window, document);
//# sourceMappingURL=bpHS.js.map
