function rotateWords(n) {
    for (var r, i, u, t = 0; t < n.length; t++) u = $("." + n[t] + " .word-rotate-wrapper .rotate-word").length, r = $("." + n[t] + " .word-rotate-wrapper .rotate-word.show"), i = r.index() + 1, r.removeClass("show"), i == u ? (i = 1, $("." + n[t] + " .word-rotate-wrapper .rotate-word:nth-child(" + i + ")").addClass("show")) : $("." + n[t] + " .word-rotate-wrapper .rotate-word:nth-child(" + (i + 1) + ")").addClass("show")
}

function shuffle(n) {
    for (var t = n.length, r, i; 0 !== t;) i = Math.floor(Math.random() * t), t -= 1, r = n[t], n[t] = n[i], n[i] = r;
    return n
}

function ShowMarker(n) {
    for (var i = $("." + n), f = i.length, e = 1, r = ",", u = 0, t; u < e;) t = Math.floor(Math.random() * f), r.indexOf("," + t + ",") < 0 && (r += t + ",", $(i.eq(t)).find(".tamt").html("(Rs." + randomIntFromInterval(100, 3e3) + ")"), i.eq(t).attr("style", "opacity:1;visibility: visible;"), setTimeout(function() {
        i.eq(t).attr("style", "opacity:0")
    }, 2e3), ++u)
}

function RandomizeArray() {
    var n = ["Zone1", "Zone2", "Zone3", "Zone4"],
        t;
    n = shuffle(n), setTimeout(function() {
        ShowMarker(n[t])
    }, 1e3), setTimeout(function() {
        ShowMarker(n[1])
    }, 2e3), setTimeout(function() {
        ShowMarker(n[2])
    }, 3e3), setTimeout(function() {
        ShowMarker(n[3])
    }, 4e3)
}

function randomIntFromInterval(n, t) {
    return Math.floor(Math.random() * (t - n + 1) + n)
}
var _gsScope, timer;
(function(n) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports != "undefined" ? module.exports = n(require("jquery")) : n(jQuery)
})(function(n) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function i(i, r) {
            var u = this,
                f;
            u.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: n(i),
                appendDots: n(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous<\/button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next<\/button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, i) {
                    return n('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, u.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, n.extend(u, u.initials), u.activeBreakpoint = null, u.animType = null, u.animProp = null, u.breakpoints = [], u.breakpointSettings = [], u.cssTransitions = !1, u.focussed = !1, u.interrupted = !1, u.hidden = "hidden", u.paused = !0, u.positionProp = null, u.respondTo = null, u.rowCount = 1, u.shouldClick = !0, u.$slider = n(i), u.$slidesCache = null, u.transformType = null, u.transitionType = null, u.visibilityChange = "visibilitychange", u.windowWidth = 0, u.windowTimer = null, f = n(i).data("slick") || {}, u.options = n.extend({}, u.defaults, r, f), u.currentSlide = u.options.initialSlide, u.originalSettings = u.options, typeof document.mozHidden != "undefined" ? (u.hidden = "mozHidden", u.visibilityChange = "mozvisibilitychange") : typeof document.webkitHidden != "undefined" && (u.hidden = "webkitHidden", u.visibilityChange = "webkitvisibilitychange"), u.autoPlay = n.proxy(u.autoPlay, u), u.autoPlayClear = n.proxy(u.autoPlayClear, u), u.autoPlayIterator = n.proxy(u.autoPlayIterator, u), u.changeSlide = n.proxy(u.changeSlide, u), u.clickHandler = n.proxy(u.clickHandler, u), u.selectHandler = n.proxy(u.selectHandler, u), u.setPosition = n.proxy(u.setPosition, u), u.swipeHandler = n.proxy(u.swipeHandler, u), u.dragHandler = n.proxy(u.dragHandler, u), u.keyHandler = n.proxy(u.keyHandler, u), u.instanceUid = t++, u.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, u.registerBreakpoints(), u.init(!0)
        }
        var t = 0;
        return i
    }(), t.prototype.activateADA = function() {
        var n = this;
        n.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, r) {
        var u = this;
        if (typeof i == "boolean") r = i, i = null;
        else if (i < 0 || i >= u.slideCount) return !1;
        u.unload(), typeof i == "number" ? i === 0 && u.$slides.length === 0 ? n(t).appendTo(u.$slideTrack) : r ? n(t).insertBefore(u.$slides.eq(i)) : n(t).insertAfter(u.$slides.eq(i)) : r === !0 ? n(t).prependTo(u.$slideTrack) : n(t).appendTo(u.$slideTrack), u.$slides = u.$slideTrack.children(this.options.slide), u.$slideTrack.children(this.options.slide).detach(), u.$slideTrack.append(u.$slides), u.$slides.each(function(t, i) {
            n(i).attr("data-slick-index", t)
        }), u.$slidesCache = u.$slides, u.reinit()
    }, t.prototype.animateHeight = function() {
        var n = this,
            t;
        n.options.slidesToShow === 1 && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.animate({
            height: t
        }, n.options.speed))
    }, t.prototype.animateSlide = function(t, i) {
        var u = {},
            r = this;
        r.animateHeight(), r.options.rtl === !0 && r.options.vertical === !1 && (t = -t), r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
            left: t
        }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
            top: t
        }, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), n({
            animStart: r.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: r.options.speed,
            easing: r.options.easing,
            step: function(n) {
                n = Math.ceil(n), r.options.vertical === !1 ? (u[r.animType] = "translate(" + n + "px, 0px)", r.$slideTrack.css(u)) : (u[r.animType] = "translate(0px," + n + "px)", r.$slideTrack.css(u))
            },
            complete: function() {
                i && i.call()
            }
        })) : (r.applyTransition(), t = Math.ceil(t), u[r.animType] = r.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(u), i && setTimeout(function() {
            r.disableTransition(), i.call()
        }, r.options.speed))
    }, t.prototype.getNavTarget = function() {
        var i = this,
            t = i.options.asNavFor;
        return t && t !== null && (t = n(t).not(i.$slider)), t
    }, t.prototype.asNavFor = function(t) {
        var r = this,
            i = r.getNavTarget();
        i !== null && typeof i == "object" && i.each(function() {
            var i = n(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function(n) {
        var t = this,
            i = {};
        i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    }, t.prototype.autoPlay = function() {
        var n = this;
        n.autoPlayClear(), n.slideCount > n.options.slidesToShow && (n.autoPlayTimer = setInterval(n.autoPlayIterator, n.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
        var n = this,
            t = n.currentSlide + n.options.slidesToScroll;
        n.paused || n.interrupted || n.focussed || (n.options.infinite === !1 && (n.direction === 1 && n.currentSlide + 1 === n.slideCount - 1 ? n.direction = 0 : n.direction === 0 && (t = n.currentSlide - n.options.slidesToScroll, n.currentSlide - 1 == 0 && (n.direction = 1))), n.slideHandler(t))
    }, t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && (t.$prevArrow = n(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = n(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function() {
        var t = this,
            i, r;
        if (t.options.dots === !0) {
            for (t.$slider.addClass("slick-dotted"), r = n("<ul />").addClass(t.options.dotsClass), i = 0; i <= t.getDotCount(); i += 1) r.append(n("<li />").append(t.options.customPaging.call(this, t, i)));
            t.$dots = r.appendTo(t.options.appendDots), t.$dots.find("li").first().addClass("slick-active")
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
            n(i).attr("data-slick-index", t).data("originalStyling", n(i).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = t.slideCount === 0 ? n('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), n("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses(typeof t.currentSlide == "number" ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
        var n = this,
            t, i, r, f, c, u, e, o, s, h;
        if (f = document.createDocumentFragment(), u = n.$slider.children(), n.options.rows > 1) {
            for (e = n.options.slidesPerRow * n.options.rows, c = Math.ceil(u.length / e), t = 0; t < c; t++) {
                for (o = document.createElement("div"), i = 0; i < n.options.rows; i++) {
                    for (s = document.createElement("div"), r = 0; r < n.options.slidesPerRow; r++) h = t * e + (i * n.options.slidesPerRow + r), u.get(h) && s.appendChild(u.get(h));
                    o.appendChild(s)
                }
                f.appendChild(o)
            }
            n.$slider.empty().append(f), n.$slider.children().children().children().css({
                width: 100 / n.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function(t, i) {
        var r = this,
            f, u, e, o = !1,
            s = r.$slider.width(),
            h = window.innerWidth || n(window).width();
        if (r.respondTo === "window" ? e = h : r.respondTo === "slider" ? e = s : r.respondTo === "min" && (e = Math.min(h, s)), r.options.responsive && r.options.responsive.length && r.options.responsive !== null) {
            u = null;
            for (f in r.breakpoints) r.breakpoints.hasOwnProperty(f) && (r.originalSettings.mobileFirst === !1 ? e < r.breakpoints[f] && (u = r.breakpoints[f]) : e > r.breakpoints[f] && (u = r.breakpoints[f]));
            u !== null ? r.activeBreakpoint !== null ? (u !== r.activeBreakpoint || i) && (r.activeBreakpoint = u, r.breakpointSettings[u] === "unslick" ? r.unslick(u) : (r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = u) : (r.activeBreakpoint = u, r.breakpointSettings[u] === "unslick" ? r.unslick(u) : (r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = u) : r.activeBreakpoint !== null && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t), o = u), t || o === !1 || r.$slider.trigger("breakpoint", [r, o])
        }
    }, t.prototype.changeSlide = function(t, i) {
        var r = this,
            u = n(t.currentTarget),
            f, e, o, s;
        u.is("a") && t.preventDefault(), u.is("li") || (u = u.closest("li")), o = r.slideCount % r.options.slidesToScroll != 0, f = o ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll;
        switch (t.data.message) {
            case "previous":
                e = f === 0 ? r.options.slidesToScroll : r.options.slidesToShow - f, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - e, !1, i);
                break;
            case "next":
                e = f === 0 ? r.options.slidesToScroll : f, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + e, !1, i);
                break;
            case "index":
                s = t.data.index === 0 ? 0 : t.data.index || u.index() * r.options.slidesToScroll, r.slideHandler(r.checkNavigable(s), !1, i), u.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function(n) {
        var u = this,
            t, i, r;
        if (t = u.getNavigableIndexes(), i = 0, n > t[t.length - 1]) n = t[t.length - 1];
        else
            for (r in t) {
                if (n < t[r]) {
                    n = i;
                    break
                }
                i = t[r]
            }
        return n
    }, t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && t.$dots !== null && (n("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", n.proxy(t.interrupt, t, !0)).off("mouseleave.slick", n.proxy(t.interrupt, t, !1)), t.options.accessibility === !0 && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), t.options.accessibility === !0 && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), n(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && n(t.$slideTrack).children().off("click.slick", t.selectHandler), n(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), n(window).off("resize.slick.slick-" + t.instanceUid, t.resize), n("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), n(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", n.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", n.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function() {
        var n = this,
            t;
        n.options.rows > 1 && (t = n.$slides.children().children(), t.removeAttr("style"), n.$slider.empty().append(t))
    }, t.prototype.clickHandler = function(n) {
        var t = this;
        t.shouldClick === !1 && (n.stopImmediatePropagation(), n.stopPropagation(), n.preventDefault())
    }, t.prototype.destroy = function(t) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), n(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            n(this).attr("style", n(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
    }, t.prototype.disableTransition = function(n) {
        var t = this,
            i = {};
        i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    }, t.prototype.fadeSlide = function(n, t) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(n).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(n).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(n), i.$slides.eq(n).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function() {
            i.disableTransition(n), t.call()
        }, i.options.speed))
    }, t.prototype.fadeSlideOut = function(n) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(n).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(n), t.$slides.eq(n).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(n) {
        var t = this;
        n !== null && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(n).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
            i.stopImmediatePropagation();
            var r = n(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = r.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        var n = this;
        return n.currentSlide
    }, t.prototype.getDotCount = function() {
        var n = this,
            i = 0,
            r = 0,
            t = 0;
        if (n.options.infinite === !0)
            if (n.slideCount <= n.options.slidesToShow) ++t;
            else
                while (i < n.slideCount) ++t, i = r + n.options.slidesToScroll, r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        else if (n.options.centerMode === !0) t = n.slideCount;
        else if (n.options.asNavFor)
            while (i < n.slideCount) ++t, i = r + n.options.slidesToScroll, r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        else t = 1 + Math.ceil((n.slideCount - n.options.slidesToShow) / n.options.slidesToScroll);
        return t - 1
    }, t.prototype.getLeft = function(n) {
        var t = this,
            r, u, f = 0,
            i, e;
        return t.slideOffset = 0, u = t.$slides.first().outerHeight(!0), t.options.infinite === !0 ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = t.slideWidth * t.options.slidesToShow * -1, e = -1, t.options.vertical === !0 && t.options.centerMode === !0 && (t.options.slidesToShow === 2 ? e = -1.5 : t.options.slidesToShow === 1 && (e = -2)), f = u * t.options.slidesToShow * e), t.slideCount % t.options.slidesToScroll != 0 && n + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (n > t.slideCount ? (t.slideOffset = (t.options.slidesToShow - (n - t.slideCount)) * t.slideWidth * -1, f = (t.options.slidesToShow - (n - t.slideCount)) * u * -1) : (t.slideOffset = t.slideCount % t.options.slidesToScroll * t.slideWidth * -1, f = t.slideCount % t.options.slidesToScroll * u * -1))) : n + t.options.slidesToShow > t.slideCount && (t.slideOffset = (n + t.options.slidesToShow - t.slideCount) * t.slideWidth, f = (n + t.options.slidesToShow - t.slideCount) * u), t.slideCount <= t.options.slidesToShow && (t.slideOffset = 0, f = 0), t.options.centerMode === !0 && t.slideCount <= t.options.slidesToShow ? t.slideOffset = t.slideWidth * Math.floor(t.options.slidesToShow) / 2 - t.slideWidth * t.slideCount / 2 : t.options.centerMode === !0 && t.options.infinite === !0 ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : t.options.centerMode === !0 && (t.slideOffset = 0, t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)), r = t.options.vertical === !1 ? n * t.slideWidth * -1 + t.slideOffset : n * u * -1 + f, t.options.variableWidth === !0 && (i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow), r = t.options.rtl === !0 ? i[0] ? (t.$slideTrack.width() - i[0].offsetLeft - i.width()) * -1 : 0 : i[0] ? i[0].offsetLeft * -1 : 0, t.options.centerMode === !0 && (i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow + 1), r = t.options.rtl === !0 ? i[0] ? (t.$slideTrack.width() - i[0].offsetLeft - i.width()) * -1 : 0 : i[0] ? i[0].offsetLeft * -1 : 0, r += (t.$list.width() - i.outerWidth()) / 2)), r
    }, t.prototype.getOption = t.prototype.slickGetOption = function(n) {
        var t = this;
        return t.options[n]
    }, t.prototype.getNavigableIndexes = function() {
        var n = this,
            t = 0,
            i = 0,
            u = [],
            r;
        for (n.options.infinite === !1 ? r = n.slideCount : (t = n.options.slidesToScroll * -1, i = n.options.slidesToScroll * -1, r = n.slideCount * 2); t < r;) u.push(t), t = i + n.options.slidesToScroll, i += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        return u
    }, t.prototype.getSlick = function() {
        return this
    }, t.prototype.getSlideCount = function() {
        var t = this,
            i, r, u;
        return u = t.options.centerMode === !0 ? t.slideWidth * Math.floor(t.options.slidesToShow / 2) : 0, t.options.swipeToSlide === !0 ? (t.$slideTrack.find(".slick-slide").each(function(i, f) {
            if (f.offsetLeft - u + n(f).outerWidth() / 2 > t.swipeLeft * -1) return r = f, !1
        }), i = Math.abs(n(r).attr("data-slick-index") - t.currentSlide) || 1) : t.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(n, t) {
        var i = this;
        i.changeSlide({
            data: {
                message: "index",
                index: parseInt(n)
            }
        }, t)
    }, t.prototype.init = function(t) {
        var i = this;
        n(i.$slider).hasClass("slick-initialized") || (n(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, t.prototype.initADA = function() {
        var t = this,
            f = Math.ceil(t.slideCount / t.options.slidesToShow),
            r = t.getNavigableIndexes().filter(function(n) {
                return n >= 0 && n < t.slideCount
            }),
            i, u;
        for (t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), t.$dots !== null && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
                var u = r.indexOf(i);
                n(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + t.instanceUid + i,
                    tabindex: -1
                }), u !== -1 && n(this).attr({
                    "aria-describedby": "slick-slide-control" + t.instanceUid + u
                })
            }), t.$dots.attr("role", "tablist").find("li").each(function(i) {
                var u = r[i];
                n(this).attr({
                    role: "presentation"
                }), n(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + i,
                    "aria-controls": "slick-slide" + t.instanceUid + u,
                    "aria-label": i + 1 + " of " + f,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(t.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end()), i = t.currentSlide, u = i + t.options.slidesToShow; i < u; i++) t.$slides.eq(i).attr("tabindex", 0);
        t.activateADA()
    }, t.prototype.initArrowEvents = function() {
        var n = this;
        if (n.options.arrows === !0 && n.slideCount > n.options.slidesToShow) {
            n.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, n.changeSlide);
            n.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, n.changeSlide);
            if (n.options.accessibility === !0) {
                n.$prevArrow.on("keydown.slick", n.keyHandler);
                n.$nextArrow.on("keydown.slick", n.keyHandler)
            }
        }
    }, t.prototype.initDotEvents = function() {
        var t = this;
        if (t.options.dots === !0) {
            n("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide);
            if (t.options.accessibility === !0) t.$dots.on("keydown.slick", t.keyHandler)
        }
        if (t.options.dots === !0 && t.options.pauseOnDotsHover === !0) n("li", t.$dots).on("mouseenter.slick", n.proxy(t.interrupt, t, !0)).on("mouseleave.slick", n.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function() {
        var t = this;
        if (t.options.pauseOnHover) {
            t.$list.on("mouseenter.slick", n.proxy(t.interrupt, t, !0));
            t.$list.on("mouseleave.slick", n.proxy(t.interrupt, t, !1))
        }
    }, t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents();
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler);
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler);
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler);
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler);
        t.$list.on("click.slick", t.clickHandler);
        n(document).on(t.visibilityChange, n.proxy(t.visibility, t));
        if (t.options.accessibility === !0) t.$list.on("keydown.slick", t.keyHandler);
        if (t.options.focusOnSelect === !0) n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        n(window).on("orientationchange.slick.slick-" + t.instanceUid, n.proxy(t.orientationChange, t));
        n(window).on("resize.slick.slick-" + t.instanceUid, n.proxy(t.resize, t));
        n("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault);
        n(window).on("load.slick.slick-" + t.instanceUid, t.setPosition);
        n(t.setPosition)
    }, t.prototype.initUI = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.show(), n.$nextArrow.show()), n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.show()
    }, t.prototype.keyHandler = function(n) {
        var t = this;
        n.target.tagName.match("TEXTAREA|INPUT|SELECT") || (n.keyCode === 37 && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: t.options.rtl === !0 ? "next" : "previous"
            }
        }) : n.keyCode === 39 && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: t.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, t.prototype.lazyLoad = function() {
        function e(i) {
            n("img[data-lazy]", i).each(function() {
                var i = n(this),
                    r = n(this).attr("data-lazy"),
                    f = n(this).attr("data-srcset"),
                    e = n(this).attr("data-sizes") || t.$slider.attr("data-sizes"),
                    u = document.createElement("img");
                u.onload = function() {
                    i.animate({
                        opacity: 0
                    }, 100, function() {
                        f && (i.attr("srcset", f), e && i.attr("sizes", e)), i.attr("src", r).animate({
                            opacity: 1
                        }, 200, function() {
                            i.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), t.$slider.trigger("lazyLoaded", [t, i, r])
                    })
                }, u.onerror = function() {
                    i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), t.$slider.trigger("lazyLoadError", [t, i, r])
                }, u.src = r
            })
        }
        var t = this,
            u, f, i, r, s;
        if (t.options.centerMode === !0 ? t.options.infinite === !0 ? (i = t.currentSlide + (t.options.slidesToShow / 2 + 1), r = i + t.options.slidesToShow + 2) : (i = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1)), r = 2 + (t.options.slidesToShow / 2 + 1) + t.currentSlide) : (i = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide, r = Math.ceil(i + t.options.slidesToShow), t.options.fade === !0 && (i > 0 && i--, r <= t.slideCount && r++)), u = t.$slider.find(".slick-slide").slice(i, r), t.options.lazyLoad === "anticipated") {
            var o = i - 1,
                h = r,
                c = t.$slider.find(".slick-slide");
            for (s = 0; s < t.options.slidesToScroll; s++) o < 0 && (o = t.slideCount - 1), u = u.add(c.eq(o)), u = u.add(c.eq(h)), o--, h++
        }
        e(u), t.slideCount <= t.options.slidesToShow ? (f = t.$slider.find(".slick-slide"), e(f)) : t.currentSlide >= t.slideCount - t.options.slidesToShow ? (f = t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow), e(f)) : t.currentSlide === 0 && (f = t.$slider.find(".slick-cloned").slice(t.options.slidesToShow * -1), e(f))
    }, t.prototype.loadSlider = function() {
        var n = this;
        n.setPosition(), n.$slideTrack.css({
            opacity: 1
        }), n.$slider.removeClass("slick-loading"), n.initUI(), n.options.lazyLoad === "progressive" && n.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
        var n = this;
        n.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function() {
        var n = this;
        n.checkResponsive(), n.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
        var n = this;
        n.autoPlayClear(), n.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
        var n = this;
        n.autoPlay(), n.options.autoplay = !0, n.paused = !1, n.focussed = !1, n.interrupted = !1
    }, t.prototype.postSlide = function(t) {
        var i = this,
            r;
        i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), i.options.accessibility === !0 && (i.initADA(), i.options.focusOnChange && (r = n(i.$slides.get(i.currentSlide)), r.attr("tabindex", 0).focus())))
    }, t.prototype.prev = t.prototype.slickPrev = function() {
        var n = this;
        n.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function(n) {
        n.preventDefault()
    }, t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var i = this,
            s = n("img[data-lazy]", i.$slider),
            r, u, e, o, f;
        s.length ? (r = s.first(), u = r.attr("data-lazy"), e = r.attr("data-srcset"), o = r.attr("data-sizes") || i.$slider.attr("data-sizes"), f = document.createElement("img"), f.onload = function() {
            e && (r.attr("srcset", e), o && r.attr("sizes", o)), r.attr("src", u).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), i.options.adaptiveHeight === !0 && i.setPosition(), i.$slider.trigger("lazyLoaded", [i, r, u]), i.progressiveLazyLoad()
        }, f.onerror = function() {
            t < 3 ? setTimeout(function() {
                i.progressiveLazyLoad(t + 1)
            }, 500) : (r.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), i.$slider.trigger("lazyLoadError", [i, r, u]), i.progressiveLazyLoad())
        }, f.src = u) : i.$slider.trigger("allImagesLoaded", [i])
    }, t.prototype.refresh = function(t) {
        var i = this,
            r, u;
        u = i.slideCount - i.options.slidesToShow, !i.options.infinite && i.currentSlide > u && (i.currentSlide = u), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), r = i.currentSlide, i.destroy(!0), n.extend(i, i.initials, {
            currentSlide: r
        }), i.init(), t || i.changeSlide({
            data: {
                message: "index",
                index: r
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function() {
        var t = this,
            u, f, i, r = t.options.responsive || null;
        if (n.type(r) === "array" && r.length) {
            t.respondTo = t.options.respondTo || "window";
            for (u in r)
                if (i = t.breakpoints.length - 1, r.hasOwnProperty(u)) {
                    for (f = r[u].breakpoint; i >= 0;) t.breakpoints[i] && t.breakpoints[i] === f && t.breakpoints.splice(i, 1), i--;
                    t.breakpoints.push(f), t.breakpointSettings[f] = r[u].settings
                } t.breakpoints.sort(function(n, i) {
                return t.options.mobileFirst ? n - i : i - n
            })
        }
    }, t.prototype.reinit = function() {
        var t = this;
        if (t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && t.currentSlide !== 0 && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0) n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        t.setSlideClasses(typeof t.currentSlide == "number" ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
        var t = this;
        n(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = n(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(n, t, i) {
        var r = this;
        if (typeof n == "boolean" ? (t = n, n = t === !0 ? 0 : r.slideCount - 1) : n = t === !0 ? --n : n, r.slideCount < 1 || n < 0 || n > r.slideCount - 1) return !1;
        r.unload(), i === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(n).remove(), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slidesCache = r.$slides, r.reinit()
    }, t.prototype.setCSS = function(n) {
        var t = this,
            i = {},
            r, u;
        t.options.rtl === !0 && (n = -n), r = t.positionProp == "left" ? Math.ceil(n) + "px" : "0px", u = t.positionProp == "top" ? Math.ceil(n) + "px" : "0px", i[t.positionProp] = n, t.transformsEnabled === !1 ? t.$slideTrack.css(i) : (i = {}, t.cssTransitions === !1 ? (i[t.animType] = "translate(" + r + ", " + u + ")", t.$slideTrack.css(i)) : (i[t.animType] = "translate3d(" + r + ", " + u + ", 0px)", t.$slideTrack.css(i)))
    }, t.prototype.setDimensions = function() {
        var n = this,
            t;
        n.options.vertical === !1 ? n.options.centerMode === !0 && n.$list.css({
            padding: "0px " + n.options.centerPadding
        }) : (n.$list.height(n.$slides.first().outerHeight(!0) * n.options.slidesToShow), n.options.centerMode === !0 && n.$list.css({
            padding: n.options.centerPadding + " 0px"
        })), n.listWidth = n.$list.width(), n.listHeight = n.$list.height(), n.options.vertical === !1 && n.options.variableWidth === !1 ? (n.slideWidth = Math.ceil(n.listWidth / n.options.slidesToShow), n.$slideTrack.width(Math.ceil(n.slideWidth * n.$slideTrack.children(".slick-slide").length))) : n.options.variableWidth === !0 ? n.$slideTrack.width(5e3 * n.slideCount) : (n.slideWidth = Math.ceil(n.listWidth), n.$slideTrack.height(Math.ceil(n.$slides.first().outerHeight(!0) * n.$slideTrack.children(".slick-slide").length))), t = n.$slides.first().outerWidth(!0) - n.$slides.first().width(), n.options.variableWidth === !1 && n.$slideTrack.children(".slick-slide").width(n.slideWidth - t)
    }, t.prototype.setFade = function() {
        var t = this,
            i;
        t.$slides.each(function(r, u) {
            i = t.slideWidth * r * -1, t.options.rtl === !0 ? n(u).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : n(u).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }), t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }, t.prototype.setHeight = function() {
        var n = this,
            t;
        n.options.slidesToShow === 1 && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.css("height", t))
    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t = this,
            u, f, e, i, o = !1,
            r;
        if (n.type(arguments[0]) === "object" ? (e = arguments[0], o = arguments[1], r = "multiple") : n.type(arguments[0]) === "string" && (e = arguments[0], i = arguments[1], o = arguments[2], arguments[0] === "responsive" && n.type(arguments[1]) === "array" ? r = "responsive" : typeof arguments[1] != "undefined" && (r = "single")), r === "single") t.options[e] = i;
        else if (r === "multiple") n.each(e, function(n, i) {
            t.options[n] = i
        });
        else if (r === "responsive")
            for (f in i)
                if (n.type(t.options.responsive) !== "array") t.options.responsive = [i[f]];
                else {
                    for (u = t.options.responsive.length - 1; u >= 0;) t.options.responsive[u].breakpoint === i[f].breakpoint && t.options.responsive.splice(u, 1), u--;
                    t.options.responsive.push(i[f])
                } o && (t.unload(), t.reinit())
    }, t.prototype.setPosition = function() {
        var n = this;
        n.setDimensions(), n.setHeight(), n.options.fade === !1 ? n.setCSS(n.getLeft(n.currentSlide)) : n.setFade(), n.$slider.trigger("setPosition", [n])
    }, t.prototype.setProps = function() {
        var n = this,
            t = document.body.style;
        n.positionProp = n.options.vertical === !0 ? "top" : "left", n.positionProp === "top" ? n.$slider.addClass("slick-vertical") : n.$slider.removeClass("slick-vertical"), (t.WebkitTransition !== undefined || t.MozTransition !== undefined || t.msTransition !== undefined) && n.options.useCSS === !0 && (n.cssTransitions = !0), n.options.fade && (typeof n.options.zIndex == "number" ? n.options.zIndex < 3 && (n.options.zIndex = 3) : n.options.zIndex = n.defaults.zIndex), t.OTransform !== undefined && (n.animType = "OTransform", n.transformType = "-o-transform", n.transitionType = "OTransition", t.perspectiveProperty === undefined && t.webkitPerspective === undefined && (n.animType = !1)), t.MozTransform !== undefined && (n.animType = "MozTransform", n.transformType = "-moz-transform", n.transitionType = "MozTransition", t.perspectiveProperty === undefined && t.MozPerspective === undefined && (n.animType = !1)), t.webkitTransform !== undefined && (n.animType = "webkitTransform", n.transformType = "-webkit-transform", n.transitionType = "webkitTransition", t.perspectiveProperty === undefined && t.webkitPerspective === undefined && (n.animType = !1)), t.msTransform !== undefined && (n.animType = "msTransform", n.transformType = "-ms-transform", n.transitionType = "msTransition", t.msTransform === undefined && (n.animType = !1)), t.transform !== undefined && n.animType !== !1 && (n.animType = "transform", n.transformType = "transform", n.transitionType = "transition"), n.transformsEnabled = n.options.useTransform && n.animType !== null && n.animType !== !1
    }, t.prototype.setSlideClasses = function(n) {
        var t = this,
            u, i, r, f, e;
        i = t.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), t.$slides.eq(n).addClass("slick-current"), t.options.centerMode === !0 ? (e = t.options.slidesToShow % 2 == 0 ? 1 : 0, u = Math.floor(t.options.slidesToShow / 2), t.options.infinite === !0 && (n >= u && n <= t.slideCount - 1 - u ? t.$slides.slice(n - u + e, n + u + 1).addClass("slick-active").attr("aria-hidden", "false") : (r = t.options.slidesToShow + n, i.slice(r - u + 1 + e, r + u + 2).addClass("slick-active").attr("aria-hidden", "false")), n === 0 ? i.eq(i.length - 1 - t.options.slidesToShow).addClass("slick-center") : n === t.slideCount - 1 && i.eq(t.options.slidesToShow).addClass("slick-center")), t.$slides.eq(n).addClass("slick-center")) : n >= 0 && n <= t.slideCount - t.options.slidesToShow ? t.$slides.slice(n, n + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= t.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (f = t.slideCount % t.options.slidesToShow, r = t.options.infinite === !0 ? t.options.slidesToShow + n : n, t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - n < t.options.slidesToShow ? i.slice(r - (t.options.slidesToShow - f), r + f).addClass("slick-active").attr("aria-hidden", "false") : i.slice(r, r + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), (t.options.lazyLoad === "ondemand" || t.options.lazyLoad === "anticipated") && t.lazyLoad()
    }, t.prototype.setupInfinite = function() {
        var t = this,
            i, r, u;
        if (t.options.fade === !0 && (t.options.centerMode = !1), t.options.infinite === !0 && t.options.fade === !1 && (r = null, t.slideCount > t.options.slidesToShow)) {
            for (u = t.options.centerMode === !0 ? t.options.slidesToShow + 1 : t.options.slidesToShow, i = t.slideCount; i > t.slideCount - u; i -= 1) r = i - 1, n(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r - t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");
            for (i = 0; i < u + t.slideCount; i += 1) r = i, n(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r + t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");
            t.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                n(this).attr("id", "")
            })
        }
    }, t.prototype.interrupt = function(n) {
        var t = this;
        n || t.autoPlay(), t.interrupted = n
    }, t.prototype.selectHandler = function(t) {
        var i = this,
            u = n(t.target).is(".slick-slide") ? n(t.target) : n(t.target).parents(".slick-slide"),
            r = parseInt(u.attr("data-slick-index"));
        if (r || (r = 0), i.slideCount <= i.options.slidesToShow) {
            i.slideHandler(r, !1, !0);
            return
        }
        i.slideHandler(r)
    }, t.prototype.slideHandler = function(n, t, i) {
        var u, f, s, o, h = null,
            r = this,
            e;
        if ((t = t || !1, r.animating !== !0 || r.options.waitForAnimate !== !0) && (r.options.fade !== !0 || r.currentSlide !== n)) {
            if (t === !1 && r.asNavFor(n), u = n, h = r.getLeft(u), o = r.getLeft(r.currentSlide), r.currentLeft = r.swipeLeft === null ? o : r.swipeLeft, r.options.infinite === !1 && r.options.centerMode === !1 && (n < 0 || n > r.getDotCount() * r.options.slidesToScroll)) {
                r.options.fade === !1 && (u = r.currentSlide, i !== !0 ? r.animateSlide(o, function() {
                    r.postSlide(u)
                }) : r.postSlide(u));
                return
            }
            if (r.options.infinite === !1 && r.options.centerMode === !0 && (n < 0 || n > r.slideCount - r.options.slidesToScroll)) {
                r.options.fade === !1 && (u = r.currentSlide, i !== !0 ? r.animateSlide(o, function() {
                    r.postSlide(u)
                }) : r.postSlide(u));
                return
            }
            if (r.options.autoplay && clearInterval(r.autoPlayTimer), f = u < 0 ? r.slideCount % r.options.slidesToScroll != 0 ? r.slideCount - r.slideCount % r.options.slidesToScroll : r.slideCount + u : u >= r.slideCount ? r.slideCount % r.options.slidesToScroll != 0 ? 0 : u - r.slideCount : u, r.animating = !0, r.$slider.trigger("beforeChange", [r, r.currentSlide, f]), s = r.currentSlide, r.currentSlide = f, r.setSlideClasses(r.currentSlide), r.options.asNavFor && (e = r.getNavTarget(), e = e.slick("getSlick"), e.slideCount <= e.options.slidesToShow && e.setSlideClasses(r.currentSlide)), r.updateDots(), r.updateArrows(), r.options.fade === !0) {
                i !== !0 ? (r.fadeSlideOut(s), r.fadeSlide(f, function() {
                    r.postSlide(f)
                })) : r.postSlide(f), r.animateHeight();
                return
            }
            i !== !0 ? r.animateSlide(h, function() {
                r.postSlide(f)
            }) : r.postSlide(f)
        }
    }, t.prototype.startLoad = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.hide(), n.$nextArrow.hide()), n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.hide(), n.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
        var i, r, u, n, t = this;
        return (i = t.touchObject.startX - t.touchObject.curX, r = t.touchObject.startY - t.touchObject.curY, u = Math.atan2(r, i), n = Math.round(u * 180 / Math.PI), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0) ? t.options.rtl === !1 ? "left" : "right" : n <= 360 && n >= 315 ? t.options.rtl === !1 ? "left" : "right" : n >= 135 && n <= 225 ? t.options.rtl === !1 ? "right" : "left" : t.options.verticalSwiping === !0 ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function() {
        var t = this,
            r, i;
        if (t.dragging = !1, t.swiping = !1, t.scrolling) return t.scrolling = !1, !1;
        if (t.interrupted = !1, t.shouldClick = t.touchObject.swipeLength > 10 ? !1 : !0, t.touchObject.curX === undefined) return !1;
        if (t.touchObject.edgeHit === !0 && t.$slider.trigger("edge", [t, t.swipeDirection()]), t.touchObject.swipeLength >= t.touchObject.minSwipe) {
            i = t.swipeDirection();
            switch (i) {
                case "left":
                case "down":
                    r = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount(), t.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    r = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount(), t.currentDirection = 1
            }
            i != "vertical" && (t.slideHandler(r), t.touchObject = {}, t.$slider.trigger("swipe", [t, i]))
        } else t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(t.currentSlide), t.touchObject = {})
    }, t.prototype.swipeHandler = function(n) {
        var t = this;
        if (t.options.swipe !== !1 && (!("ontouchend" in document) || t.options.swipe !== !1) && (t.options.draggable !== !1 || n.type.indexOf("mouse") === -1)) {
            t.touchObject.fingerCount = n.originalEvent && n.originalEvent.touches !== undefined ? n.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold);
            switch (n.data.action) {
                case "start":
                    t.swipeStart(n);
                    break;
                case "move":
                    t.swipeMove(n);
                    break;
                case "end":
                    t.swipeEnd(n)
            }
        }
    }, t.prototype.swipeMove = function(n) {
        var t = this,
            s = !1,
            f, e, r, u, i, o;
        if (i = n.originalEvent !== undefined ? n.originalEvent.touches : null, !t.dragging || t.scrolling || i && i.length !== 1) return !1;
        if (f = t.getLeft(t.currentSlide), t.touchObject.curX = i !== undefined ? i[0].pageX : n.clientX, t.touchObject.curY = i !== undefined ? i[0].pageY : n.clientY, t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))), o = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2))), !t.options.verticalSwiping && !t.swiping && o > 4) return t.scrolling = !0, !1;
        if (t.options.verticalSwiping === !0 && (t.touchObject.swipeLength = o), e = t.swipeDirection(), n.originalEvent !== undefined && t.touchObject.swipeLength > 4 && (t.swiping = !0, n.preventDefault()), u = (t.options.rtl === !1 ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1), t.options.verticalSwiping === !0 && (u = t.touchObject.curY > t.touchObject.startY ? 1 : -1), r = t.touchObject.swipeLength, t.touchObject.edgeHit = !1, t.options.infinite === !1 && (t.currentSlide === 0 && e === "right" || t.currentSlide >= t.getDotCount() && e === "left") && (r = t.touchObject.swipeLength * t.options.edgeFriction, t.touchObject.edgeHit = !0), t.swipeLeft = t.options.vertical === !1 ? f + r * u : f + r * (t.$list.height() / t.listWidth) * u, t.options.verticalSwiping === !0 && (t.swipeLeft = f + r * u), t.options.fade === !0 || t.options.touchMove === !1) return !1;
        if (t.animating === !0) return t.swipeLeft = null, !1;
        t.setCSS(t.swipeLeft)
    }, t.prototype.swipeStart = function(n) {
        var t = this,
            i;
        if (t.interrupted = !0, t.touchObject.fingerCount !== 1 || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        n.originalEvent !== undefined && n.originalEvent.touches !== undefined && (i = n.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = i !== undefined ? i.pageX : n.clientX, t.touchObject.startY = t.touchObject.curY = i !== undefined ? i.pageY : n.clientY, t.dragging = !0
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var n = this;
        n.$slidesCache !== null && (n.unload(), n.$slideTrack.children(this.options.slide).detach(), n.$slidesCache.appendTo(n.$slideTrack), n.reinit())
    }, t.prototype.unload = function() {
        var t = this;
        n(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function(n) {
        var t = this;
        t.$slider.trigger("unslick", [t, n]), t.destroy()
    }, t.prototype.updateArrows = function() {
        var n = this,
            t;
        t = Math.floor(n.options.slidesToShow / 2), n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && !n.options.infinite && (n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), n.currentSlide === 0 ? (n.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : n.currentSlide >= n.slideCount - n.options.slidesToShow && n.options.centerMode === !1 ? (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : n.currentSlide >= n.slideCount - 1 && n.options.centerMode === !0 && (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function() {
        var n = this;
        n.$dots !== null && (n.$dots.find("li").removeClass("slick-active").end(), n.$dots.find("li").eq(Math.floor(n.currentSlide / n.options.slidesToScroll)).addClass("slick-active"))
    }, t.prototype.visibility = function() {
        var n = this;
        n.options.autoplay && (n.interrupted = document[n.hidden] ? !0 : !1)
    }, n.fn.slick = function() {
        for (var i = this, r = arguments[0], f = Array.prototype.slice.call(arguments, 1), e = i.length, u, n = 0; n < e; n++)
            if (typeof r == "object" || typeof r == "undefined" ? i[n].slick = new t(i[n], r) : u = i[n].slick[r].apply(i[n].slick, f), typeof u != "undefined") return u;
        return i
    }
}), _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(n, t, i) {
                var s = function(n) {
                        for (var i = [], r = n.length, t = 0; t !== r; i.push(n[t++]));
                        return i
                    },
                    l = function(n, t, i) {
                        var u, r, f = n.cycle;
                        for (u in f) r = f[u], n[u] = "function" == typeof r ? r(i, t[i]) : r[i % r.length];
                        delete n.cycle
                    },
                    r = function(n, t, u) {
                        i.call(this, n, t, u), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = r.prototype.render
                    },
                    f = 1e-10,
                    e = i._internals,
                    a = e.isSelector,
                    v = e.isArray,
                    u = r.prototype = i.to({}, .1, {}),
                    y = [],
                    o, h, c;
                return r.version = "2.0.2", u.constructor = r, u.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
                }, u.updateTo = function(n, t) {
                    var u, h = this.ratio,
                        f = this.vars.immediateRender || n.immediateRender,
                        e, o, s, r;
                    t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (u in n) this.vars[u] = n[u];
                    if (this._initted || f)
                        if (t) this._initted = !1, f && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) e = this._totalTime, this.render(0, !0, !1), this._initted = !1, this.render(e, !0, !1);
                    else if (this._initted = !1, this._init(), this._time > 0 || f)
                        for (s = 1 / (1 - h), r = this._firstPT; r;) o = r.s + r.c, r.c *= s, r.s = o - r.c, r = r._next;
                    return this
                }, u.render = function(n, t, r) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var y, c, h, w, u, a, p, b, o, g = this._dirty ? this.totalDuration() : this._totalDuration,
                        k = this._time,
                        v = this._totalTime,
                        d = this._cycle,
                        s = this._duration,
                        l = this._rawPrevTime;
                    if (n >= g - 1e-7 && n >= 0 ? (this._totalTime = g, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = s, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (y = !0, c = "onComplete", r = r || this._timeline.autoRemoveChildren), 0 === s && (this._initted || !this.vars.lazy || r) && (this._startTime === this._timeline._duration && (n = 0), (0 > l || 0 >= n && n >= -1e-7 || l === f && "isPause" !== this.data) && l !== n && (r = !0, l > f && (c = "onReverseComplete")), this._rawPrevTime = b = !t || n || l === n ? n : f)) : 1e-7 > n ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== v || 0 === s && l > 0) && (c = "onReverseComplete", y = this._reversed), 0 > n && (this._active = !1, 0 === s && (this._initted || !this.vars.lazy || r) && (l >= 0 && (r = !0), this._rawPrevTime = b = !t || n || l === n ? n : f)), this._initted || (r = !0)) : (this._totalTime = this._time = n, 0 !== this._repeat && (w = s + this._repeatDelay, this._cycle = this._totalTime / w >> 0, 0 !== this._cycle && this._cycle === this._totalTime / w && n >= v && this._cycle--, this._time = this._totalTime - this._cycle * w, this._yoyo && 0 != (1 & this._cycle) && (this._time = s - this._time, o = this._yoyoEase || this.vars.yoyoEase, o && (this._yoyoEase || (o !== !0 || this._initted ? this._yoyoEase = o = o === !0 ? this._ease : o instanceof Ease ? o : Ease.map[o] : (o = this.vars.ease, this._yoyoEase = o = o ? o instanceof Ease ? o : "function" == typeof o ? new Ease(o, this.vars.easeParams) : Ease.map[o] || i.defaultEase : i.defaultEase)), this.ratio = o ? 1 - o.getRatio((s - this._time) / s) : 0)), this._time > s ? this._time = s : this._time < 0 && (this._time = 0)), this._easeType && !o ? (u = this._time / s, a = this._easeType, p = this._easePower, (1 === a || 3 === a && u >= .5) && (u = 1 - u), 3 === a && (u *= 2), 1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u), this.ratio = 1 === a ? 1 - u : 2 === a ? u : this._time / s < .5 ? u / 2 : 1 - u / 2) : o || (this.ratio = this._ease.getRatio(this._time / s))), k === this._time && !r && d === this._cycle) return void(v !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!r && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = k, this._totalTime = v, this._rawPrevTime = l, this._cycle = d, e.lazyTweens.push(this), void(this._lazy = [n, t]);
                        !this._time || y || o ? y && this._ease._calcEnd && !o && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / s)
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== k && n >= 0 && (this._active = !0), 0 === v && (2 === this._initted && n > 0 && this._init(), this._startAt && (n >= 0 ? this._startAt.render(n, !0, r) : c || (c = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === s) && (t || this._callback("onStart"))), h = this._firstPT; h;) h.f ? h.t[h.p](h.c * this.ratio + h.s) : h.t[h.p] = h.c * this.ratio + h.s, h = h._next;
                    this._onUpdate && (0 > n && this._startAt && this._startTime && this._startAt.render(n, !0, r), t || (this._totalTime !== v || c) && this._callback("onUpdate")), this._cycle !== d && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), c && (!this._gc || r) && (0 > n && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(n, !0, r), y && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[c] && this._callback(c), 0 === s && this._rawPrevTime === f && b !== f && (this._rawPrevTime = 0))
                }, r.to = function(n, t, i) {
                    return new r(n, t, i)
                }, r.from = function(n, t, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(n, t, i)
                }, r.fromTo = function(n, t, i, u) {
                    return u.startAt = i, u.immediateRender = 0 != u.immediateRender && 0 != i.immediateRender, new r(n, t, u)
                }, r.staggerTo = r.allTo = function(n, t, u, f, e, o, h) {
                    f = f || 0;
                    var b, c, p, w, d = 0,
                        g = [],
                        nt = function() {
                            u.onComplete && u.onComplete.apply(u.onCompleteScope || this, arguments), e.apply(h || u.callbackScope || this, o || y)
                        },
                        tt = u.cycle,
                        k = u.startAt && u.startAt.cycle;
                    for (v(n) || ("string" == typeof n && (n = i.selector(n) || n), a(n) && (n = s(n))), n = n || [], 0 > f && (n = s(n), n.reverse(), f *= -1), b = n.length - 1, p = 0; b >= p; p++) {
                        c = {};
                        for (w in u) c[w] = u[w];
                        if (tt && (l(c, n, p), null != c.duration && (t = c.duration, delete c.duration)), k) {
                            k = c.startAt = {};
                            for (w in u.startAt) k[w] = u.startAt[w];
                            l(c.startAt, n, p)
                        }
                        c.delay = d + (c.delay || 0), p === b && e && (c.onComplete = nt), g[p] = new r(n[p], t, c), d += f
                    }
                    return g
                }, r.staggerFrom = r.allFrom = function(n, t, i, u, f, e, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(n, t, i, u, f, e, o)
                }, r.staggerFromTo = r.allFromTo = function(n, t, i, u, f, e, o, s) {
                    return u.startAt = i, u.immediateRender = 0 != u.immediateRender && 0 != i.immediateRender, r.staggerTo(n, t, u, f, e, o, s)
                }, r.delayedCall = function(n, t, i, u, f) {
                    return new r(t, 0, {
                        delay: n,
                        onComplete: t,
                        onCompleteParams: i,
                        callbackScope: u,
                        onReverseComplete: t,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: f,
                        overwrite: 0
                    })
                }, r.set = function(n, t) {
                    return new r(n, 0, t)
                }, r.isTweening = function(n) {
                    return i.getTweensOf(n, !0).length > 0
                }, o = function(n, t) {
                    for (var u = [], f = 0, r = n._first; r;) r instanceof i ? u[f++] = r : (t && (u[f++] = r), u = u.concat(o(r, t)), f = u.length), r = r._next;
                    return u
                }, h = r.getAllTweens = function(t) {
                    return o(n._rootTimeline, t).concat(o(n._rootFramesTimeline, t))
                }, r.killAll = function(n, i, r, u) {
                    null == i && (i = !0), null == r && (r = !0);
                    for (var o, f, s = h(0 != u), c = s.length, l = i && r && u, e = 0; c > e; e++) f = s[e], (l || f instanceof t || (o = f.target === f.vars.onComplete) && r || i && !o) && (n ? f.totalTime(f._reversed ? 0 : f.totalDuration()) : f._enabled(!1, !1))
                }, r.killChildTweensOf = function(n, t) {
                    if (null != n) {
                        var f, o, h, u, l, c = e.tweenLookup;
                        if ("string" == typeof n && (n = i.selector(n) || n), a(n) && (n = s(n)), v(n))
                            for (u = n.length; --u > -1;) r.killChildTweensOf(n[u], t);
                        else {
                            f = [];
                            for (h in c)
                                for (o = c[h].target.parentNode; o;) o === n && (f = f.concat(c[h].tweens)), o = o.parentNode;
                            for (l = f.length, u = 0; l > u; u++) t && f[u].totalTime(f[u].totalDuration()), f[u]._enabled(!1, !1)
                        }
                    }
                }, c = function(n, i, r, u) {
                    i = i !== !1, r = r !== !1, u = u !== !1;
                    for (var e, f, o = h(u), c = i && r && u, s = o.length; --s > -1;) f = o[s], (c || f instanceof t || (e = f.target === f.vars.onComplete) && r || i && !e) && f.paused(n)
                }, r.pauseAll = function(n, t, i) {
                    c(!0, n, t, i)
                }, r.resumeAll = function(n, t, i) {
                    c(!1, n, t, i)
                }, r.globalTimeScale = function(t) {
                    var r = n._rootTimeline,
                        u = i.ticker.time;
                    return arguments.length ? (t = t || f, r._startTime = u - (u - r._startTime) * r._timeScale / t, r = n._rootFramesTimeline, u = i.ticker.frame, r._startTime = u - (u - r._startTime) * r._timeScale / t, r._timeScale = n._rootTimeline._timeScale = t, t) : r._timeScale
                }, u.progress = function(n, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - n : n) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
                }, u.totalProgress = function(n, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * n, t) : this._totalTime / this.totalDuration()
                }, u.time = function(n, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), n > this._duration && (n = this._duration), this._yoyo && 0 != (1 & this._cycle) ? n = this._duration - n + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (n += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(n, t)) : this._time
                }, u.duration = function(t) {
                    return arguments.length ? n.prototype.duration.call(this, t) : this._duration
                }, u.totalDuration = function(n) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((n - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, u.repeat = function(n) {
                    return arguments.length ? (this._repeat = n, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(n) {
                    return arguments.length ? (this._repeatDelay = n, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(n) {
                    return arguments.length ? (this._yoyo = n, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(n, t, i) {
                var u = function(n) {
                        t.call(this, n), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var r, u, i = this.vars;
                        for (u in i) r = i[u], f(r) && -1 !== r.join("").indexOf("{self}") && (i[u] = this._swapSelfInParams(r));
                        f(i.tweens) && this.add(i.tweens, 0, i.align, i.stagger)
                    },
                    e = 1e-10,
                    o = i._internals,
                    y = u._internals = {},
                    p = o.isSelector,
                    f = o.isArray,
                    h = o.lazyTweens,
                    c = o.lazyRender,
                    s = _gsScope._gsDefine.globals,
                    l = function(n) {
                        var t, i = {};
                        for (t in n) i[t] = n[t];
                        return i
                    },
                    a = function(n, t, i) {
                        var u, r, f = n.cycle;
                        for (u in f) r = f[u], n[u] = "function" == typeof r ? r(i, t[i]) : r[i % r.length];
                        delete n.cycle
                    },
                    w = y.pauseCallback = function() {},
                    v = function(n) {
                        for (var i = [], r = n.length, t = 0; t !== r; i.push(n[t++]));
                        return i
                    },
                    r = u.prototype = new t;
                return u.version = "2.0.2", r.constructor = u, r.kill()._gc = r._forcingPlayhead = r._hasPause = !1, r.to = function(n, t, r, u) {
                    var f = r.repeat && s.TweenMax || i;
                    return t ? this.add(new f(n, t, r), u) : this.set(n, r, u)
                }, r.from = function(n, t, r, u) {
                    return this.add((r.repeat && s.TweenMax || i).from(n, t, r), u)
                }, r.fromTo = function(n, t, r, u, f) {
                    var e = u.repeat && s.TweenMax || i;
                    return t ? this.add(e.fromTo(n, t, r, u), f) : this.set(n, u, f)
                }, r.staggerTo = function(n, t, r, f, e, o, s, h) {
                    var c, y, w = new u({
                            onComplete: o,
                            onCompleteParams: s,
                            callbackScope: h,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        b = r.cycle;
                    for ("string" == typeof n && (n = i.selector(n) || n), n = n || [], p(n) && (n = v(n)), f = f || 0, 0 > f && (n = v(n), n.reverse(), f *= -1), y = 0; y < n.length; y++) c = l(r), c.startAt && (c.startAt = l(c.startAt), c.startAt.cycle && a(c.startAt, n, y)), b && (a(c, n, y), null != c.duration && (t = c.duration, delete c.duration)), w.to(n[y], t, c, y * f);
                    return this.add(w, e)
                }, r.staggerFrom = function(n, t, i, r, u, f, e, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(n, t, i, r, u, f, e, o)
                }, r.staggerFromTo = function(n, t, i, r, u, f, e, o, s) {
                    return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, this.staggerTo(n, t, r, u, f, e, o, s)
                }, r.call = function(n, t, r, u) {
                    return this.add(i.delayedCall(0, n, t, r), u)
                }, r.set = function(n, t, r) {
                    return r = this._parseTimeOrLabel(r, 0, !0), null == t.immediateRender && (t.immediateRender = r === this._time && !this._paused), this.add(new i(n, 0, t), r)
                }, u.exportRoot = function(n, t) {
                    n = n || {}, null == n.smoothChildTiming && (n.smoothChildTiming = !0);
                    var s, o, r, h, f = new u(n),
                        e = f._timeline;
                    for (null == t && (t = !0), e._remove(f, !0), f._startTime = 0, f._rawPrevTime = f._time = f._totalTime = e._time, r = e._first; r;) h = r._next, t && r instanceof i && r.target === r.vars.onComplete || (o = r._startTime - r._delay, 0 > o && (s = 1), f.add(r, o)), r = h;
                    return e.add(f, 0), s && f.totalDuration(), f
                }, r.add = function(r, e, o, s) {
                    var l, v, a, h, c, y;
                    if ("number" != typeof e && (e = this._parseTimeOrLabel(e, 0, !0, r)), !(r instanceof n)) {
                        if (r instanceof Array || r && r.push && f(r)) {
                            for (o = o || "normal", s = s || 0, l = e, v = r.length, a = 0; v > a; a++) f(h = r[a]) && (h = new u({
                                tweens: h
                            })), this.add(h, l), "string" != typeof h && "function" != typeof h && ("sequence" === o ? l = h._startTime + h.totalDuration() / h._timeScale : "start" === o && (h._startTime -= h.delay())), l += s;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, e);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (t.prototype.add.call(this, r, e), r._time && (l = Math.max(0, Math.min(r.totalDuration(), (this.rawTime() - r._startTime) * r._timeScale)), Math.abs(l - r._totalTime) > 1e-5 && r.render(l, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (c = this, y = c.rawTime() > r._startTime; c._timeline;) y && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
                    return this
                }, r.remove = function(t) {
                    var r, i;
                    if (t instanceof n) return this._remove(t, !1), r = t._timeline = t.vars.useFrames ? n._rootFramesTimeline : n._rootTimeline, t._startTime = (t._paused ? t._pauseTime : r._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this;
                    if (t instanceof Array || t && t.push && f(t)) {
                        for (i = t.length; --i > -1;) this.remove(t[i]);
                        return this
                    }
                    return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
                }, r._remove = function(n, i) {
                    t.prototype._remove.call(this, n, i);
                    var r = this._last;
                    return r ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, r.append = function(n, t) {
                    return this.add(n, this._parseTimeOrLabel(null, t, !0, n))
                }, r.insert = r.insertMultiple = function(n, t, i, r) {
                    return this.add(n, t || 0, i, r)
                }, r.appendMultiple = function(n, t, i, r) {
                    return this.add(n, this._parseTimeOrLabel(null, t, !0, n), i, r)
                }, r.addLabel = function(n, t) {
                    return this._labels[n] = this._parseTimeOrLabel(t), this
                }, r.addPause = function(n, t, r, u) {
                    var f = i.delayedCall(0, w, r, u || this);
                    return f.vars.onComplete = f.vars.onReverseComplete = t, f.data = "isPause", this._hasPause = !0, this.add(f, n)
                }, r.removeLabel = function(n) {
                    return delete this._labels[n], this
                }, r.getLabelTime = function(n) {
                    return null != this._labels[n] ? this._labels[n] : -1
                }, r._parseTimeOrLabel = function(t, i, r, u) {
                    var o, e;
                    if (u instanceof n && u.timeline === this) this.remove(u);
                    else if (u && (u instanceof Array || u.push && f(u)))
                        for (e = u.length; --e > -1;) u[e] instanceof n && u[e].timeline === this && this.remove(u[e]);
                    if (o = "number" != typeof t || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof t && null == this._labels[i] ? t - o : 0, r);
                    if (i = i || 0, "string" == typeof t && (isNaN(t) || null != this._labels[t])) {
                        if (e = t.indexOf("="), -1 === e) return null == this._labels[t] ? r ? this._labels[t] = o + i : i : this._labels[t] + i;
                        i = parseInt(t.charAt(e - 1) + "1", 10) * Number(t.substr(e + 1)), t = e > 1 ? this._parseTimeOrLabel(t.substr(0, e - 1), 0, r) : o
                    } else null == t && (t = o);
                    return Number(t) + i
                }, r.seek = function(n, t) {
                    return this.totalTime("number" == typeof n ? n : this._parseTimeOrLabel(n), t !== !1)
                }, r.stop = function() {
                    return this.paused(!0)
                }, r.gotoAndPlay = function(n, t) {
                    return this.play(n, t)
                }, r.gotoAndStop = function(n, t) {
                    return this.pause(n, t)
                }, r.render = function(n, t, i) {
                    this._gc && this._enabled(!0, !1);
                    var r, s, v, o, l, u, a, f = this._time,
                        y = this._dirty ? this.totalDuration() : this._totalDuration,
                        w = this._startTime,
                        b = this._timeScale,
                        p = this._paused;
                    if (f !== this._time && (n += this._time - f), n >= y - 1e-7 && n >= 0) this._totalTime = this._time = y, this._reversed || this._hasPausedChild() || (s = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= n && n >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== n && this._first && (l = !0, this._rawPrevTime > e && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || n || this._rawPrevTime === n ? n : e, n = y + .0001;
                    else if (1e-7 > n)
                        if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > n && this._rawPrevTime >= 0)) && (o = "onReverseComplete", s = this._reversed), 0 > n) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = n;
                        else {
                            if (this._rawPrevTime = this._duration || !t || n || this._rawPrevTime === n ? n : e, 0 === n && s)
                                for (r = this._first; r && 0 === r._startTime;) r._duration || (s = !1), r = r._next;
                            n = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !t) {
                            if (n >= f)
                                for (r = this._first; r && r._startTime <= n && !u;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (u = r), r = r._next;
                            else
                                for (r = this._last; r && r._startTime >= n && !u;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (u = r), r = r._prev;
                            u && (this._time = n = u._startTime, this._totalTime = n + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = n
                    }
                    if (this._time !== f && this._first || i || l || u) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && n > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")), a = this._time, a >= f)
                            for (r = this._first; r && (v = r._next, a === this._time && (!this._paused || p));)(r._active || r._startTime <= a && !r._paused && !r._gc) && (u === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i)), r = v;
                        else
                            for (r = this._last; r && (v = r._prev, a === this._time && (!this._paused || p));) {
                                if (r._active || r._startTime <= f && !r._paused && !r._gc) {
                                    if (u === r) {
                                        for (u = r._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (n - u._startTime) * u._timeScale : (n - u._startTime) * u._timeScale, t, i), u = u._prev;
                                        u = null, this.pause()
                                    }
                                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i)
                                }
                                r = v
                            }
                        this._onUpdate && (t || (h.length && c(), this._callback("onUpdate"))), o && (this._gc || (w === this._startTime || b !== this._timeScale) && (0 === this._time || y >= this.totalDuration()) && (s && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] && this._callback(o)))
                    }
                }, r._hasPausedChild = function() {
                    for (var n = this._first; n;) {
                        if (n._paused || n instanceof u && n._hasPausedChild()) return !0;
                        n = n._next
                    }
                    return !1
                }, r.getChildren = function(n, t, r, u) {
                    u = u || -9999999999;
                    for (var e = [], f = this._first, o = 0; f;) f._startTime < u || (f instanceof i ? t !== !1 && (e[o++] = f) : (r !== !1 && (e[o++] = f), n !== !1 && (e = e.concat(f.getChildren(!0, t, r)), o = e.length))), f = f._next;
                    return e
                }, r.getTweensOf = function(n, t) {
                    var r, u, f = this._gc,
                        e = [],
                        o = 0;
                    for (f && this._enabled(!0, !0), r = i.getTweensOf(n), u = r.length; --u > -1;)(r[u].timeline === this || t && this._contains(r[u])) && (e[o++] = r[u]);
                    return f && this._enabled(!1, !0), e
                }, r.recent = function() {
                    return this._recent
                }, r._contains = function(n) {
                    for (var t = n.timeline; t;) {
                        if (t === this) return !0;
                        t = t.timeline
                    }
                    return !1
                }, r.shiftChildren = function(n, t, i) {
                    i = i || 0;
                    for (var u, r = this._first, f = this._labels; r;) r._startTime >= i && (r._startTime += n), r = r._next;
                    if (t)
                        for (u in f) f[u] >= i && (f[u] += n);
                    return this._uncache(!0)
                }, r._kill = function(n, t) {
                    if (!n && !t) return this._enabled(!1, !1);
                    for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = i.length, u = !1; --r > -1;) i[r]._kill(n, t) && (u = !0);
                    return u
                }, r.clear = function(n) {
                    var t = this.getChildren(!1, !0, !0),
                        i = t.length;
                    for (this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
                    return n !== !1 && (this._labels = {}), this._uncache(!0)
                }, r.invalidate = function() {
                    for (var t = this._first; t;) t.invalidate(), t = t._next;
                    return n.prototype.invalidate.call(this)
                }, r._enabled = function(n, i) {
                    if (n === this._gc)
                        for (var r = this._first; r;) r._enabled(n, !0), r = r._next;
                    return t.prototype._enabled.call(this, n, i)
                }, r.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var u = n.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, u
                }, r.duration = function(n) {
                    return arguments.length ? (0 !== this.duration() && 0 !== n && this.timeScale(this._duration / n), this) : (this._dirty && this.totalDuration(), this._duration)
                }, r.totalDuration = function(n) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var f, r, i = 0, t = this._last, u = 999999999999; t;) f = t._prev, t._dirty && t.totalDuration(), t._startTime > u && this._sortChildren && !t._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(t, t._startTime - t._delay), this._calculatingDuration = 0) : u = t._startTime, t._startTime < 0 && !t._paused && (i -= t._startTime, this._timeline.smoothChildTiming && (this._startTime += t._startTime / this._timeScale, this._time -= t._startTime, this._totalTime -= t._startTime, this._rawPrevTime -= t._startTime), this.shiftChildren(-t._startTime, !1, -9999999999), u = 0), r = t._startTime + t._totalDuration / t._timeScale, r > i && (i = r), t = f;
                            this._duration = this._totalDuration = i, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return n && this.totalDuration() ? this.timeScale(this._totalDuration / n) : this
                }, r.paused = function(t) {
                    if (!t)
                        for (var i = this._first, r = this._time; i;) i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return n.prototype.paused.apply(this, arguments)
                }, r.usesFrames = function() {
                    for (var t = this._timeline; t._timeline;) t = t._timeline;
                    return t === n._rootFramesTimeline
                }, r.rawTime = function(n) {
                    return n && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(n) - this._startTime) * this._timeScale
                }, u
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(n, t, i) {
                var f = function(t) {
                        n.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    u = 1e-10,
                    e = t._internals,
                    o = e.lazyTweens,
                    s = e.lazyRender,
                    h = _gsScope._gsDefine.globals,
                    c = new i(null, null, 1, 0),
                    r = f.prototype = new n;
                return r.constructor = f, r.kill()._gc = !1, f.version = "2.0.2", r.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), n.prototype.invalidate.call(this)
                }, r.addCallback = function(n, i, r, u) {
                    return this.add(t.delayedCall(0, n, r, u), i)
                }, r.removeCallback = function(n, t) {
                    if (n)
                        if (null == t) this._kill(null, n);
                        else
                            for (var i = this.getTweensOf(n, !1), r = i.length, u = this._parseTimeOrLabel(t); --r > -1;) i[r]._startTime === u && i[r]._enabled(!1, !1);
                    return this
                }, r.removePause = function(t) {
                    return this.removeCallback(n._internals.pauseCallback, t)
                }, r.tweenTo = function(n, i) {
                    i = i || {};
                    var f, e, r, u = {
                            ease: c,
                            useFrames: this.usesFrames(),
                            immediateRender: !1,
                            lazy: !1
                        },
                        o = i.repeat && h.TweenMax || t;
                    for (e in i) u[e] = i[e];
                    return u.time = this._parseTimeOrLabel(n), f = Math.abs(Number(u.time) - this._time) / this._timeScale || .001, r = new o(this, f, u), u.onStart = function() {
                        r.target.paused(!0), r.vars.time === r.target.time() || f !== r.duration() || r.isFromTo || r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale).render(r.time(), !0, !0), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || r, i.onStartParams || [])
                    }, r
                }, r.tweenFromTo = function(n, t, i) {
                    i = i || {}, n = this._parseTimeOrLabel(n), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [n],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var r = this.tweenTo(t, i);
                    return r.isFromTo = 1, r.duration(Math.abs(r.vars.time - n) / this._timeScale || .001)
                }, r.render = function(n, t, i) {
                    this._gc && this._enabled(!0, !1);
                    var r, y, w, l, a, b, f, k, h = this._time,
                        g = this._dirty ? this.totalDuration() : this._totalDuration,
                        e = this._duration,
                        d = this._totalTime,
                        it = this._startTime,
                        rt = this._timeScale,
                        c = this._rawPrevTime,
                        nt = this._paused,
                        v = this._cycle;
                    if (h !== this._time && (n += this._time - h), n >= g - 1e-7 && n >= 0) this._locked || (this._totalTime = g, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (y = !0, l = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= n && n >= -1e-7 || 0 > c || c === u) && c !== n && this._first && (a = !0, c > u && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || n || this._rawPrevTime === n ? n : u, this._yoyo && 0 != (1 & this._cycle) ? this._time = n = 0 : (this._time = e, n = e + .0001);
                    else if (1e-7 > n)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== h || 0 === e && c !== u && (c > 0 || 0 > n && c >= 0) && !this._locked) && (l = "onReverseComplete", y = this._reversed), 0 > n) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = y = !0, l = "onReverseComplete") : c >= 0 && this._first && (a = !0), this._rawPrevTime = n;
                        else {
                            if (this._rawPrevTime = e || !t || n || this._rawPrevTime === n ? n : u, 0 === n && y)
                                for (r = this._first; r && 0 === r._startTime;) r._duration || (y = !1), r = r._next;
                            n = 0, this._initted || (a = !0)
                        }
                    else if (0 === e && 0 > c && (a = !0), this._time = this._rawPrevTime = n, this._locked || (this._totalTime = n, 0 !== this._repeat && (b = e + this._repeatDelay, this._cycle = this._totalTime / b >> 0, 0 !== this._cycle && this._cycle === this._totalTime / b && n >= d && this._cycle--, this._time = this._totalTime - this._cycle * b, this._yoyo && 0 != (1 & this._cycle) && (this._time = e - this._time), this._time > e ? (this._time = e, n = e + .0001) : this._time < 0 ? this._time = n = 0 : n = this._time)), this._hasPause && !this._forcingPlayhead && !t) {
                        if (n = this._time, n >= h || this._repeat && v !== this._cycle)
                            for (r = this._first; r && r._startTime <= n && !f;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (f = r), r = r._next;
                        else
                            for (r = this._last; r && r._startTime >= n && !f;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (f = r), r = r._prev;
                        f && f._startTime < e && (this._time = n = f._startTime, this._totalTime = n + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== v && !this._locked) {
                        var p = this._yoyo && 0 != (1 & v),
                            ut = p === (this._yoyo && 0 != (1 & this._cycle)),
                            ft = this._totalTime,
                            tt = this._cycle,
                            et = this._rawPrevTime,
                            ot = this._time;
                        if (this._totalTime = v * e, this._cycle < v ? p = !p : this._totalTime += e, this._time = h, this._rawPrevTime = 0 === e ? c - .0001 : c, this._cycle = v, this._locked = !0, h = p ? 0 : e, this.render(h, t, 0 === e), t || this._gc || this.vars.onRepeat && (this._cycle = tt, this._locked = !1, this._callback("onRepeat")), h !== this._time) return;
                        if (ut && (this._cycle = v, this._locked = !0, h = p ? e + .0001 : -.0001, this.render(h, !0, !1)), this._locked = !1, this._paused && !nt) return;
                        this._time = ot, this._totalTime = ft, this._cycle = tt, this._rawPrevTime = et
                    }
                    if (!(this._time !== h && this._first || i || a || f)) return void(d !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && n > 0 && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")), k = this._time, k >= h)
                        for (r = this._first; r && (w = r._next, k === this._time && (!this._paused || nt));)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (f === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i)), r = w;
                    else
                        for (r = this._last; r && (w = r._prev, k === this._time && (!this._paused || nt));) {
                            if (r._active || r._startTime <= h && !r._paused && !r._gc) {
                                if (f === r) {
                                    for (f = r._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (n - f._startTime) * f._timeScale : (n - f._startTime) * f._timeScale, t, i), f = f._prev;
                                    f = null, this.pause()
                                }
                                r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i)
                            }
                            r = w
                        }
                    this._onUpdate && (t || (o.length && s(), this._callback("onUpdate"))), l && (this._locked || this._gc || (it === this._startTime || rt !== this._timeScale) && (0 === this._time || g >= this.totalDuration()) && (y && (o.length && s(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[l] && this._callback(l)))
                }, r.getActive = function(n, t, i) {
                    null == n && (n = !0), null == t && (t = !0), null == i && (i = !1);
                    for (var u, f = [], e = this.getChildren(n, t, i), o = 0, s = e.length, r = 0; s > r; r++) u = e[r], u.isActive() && (f[o++] = u);
                    return f
                }, r.getLabelAfter = function(n) {
                    n || 0 !== n && (n = this._time);
                    for (var i = this.getLabelsArray(), r = i.length, t = 0; r > t; t++)
                        if (i[t].time > n) return i[t].name;
                    return null
                }, r.getLabelBefore = function(n) {
                    null == n && (n = this._time);
                    for (var t = this.getLabelsArray(), i = t.length; --i > -1;)
                        if (t[i].time < n) return t[i].name;
                    return null
                }, r.getLabelsArray = function() {
                    var n, t = [],
                        i = 0;
                    for (n in this._labels) t[i++] = {
                        time: this._labels[n],
                        name: n
                    };
                    return t.sort(function(n, t) {
                        return n.time - t.time
                    }), t
                }, r.invalidate = function() {
                    return this._locked = !1, n.prototype.invalidate.call(this)
                }, r.progress = function(n, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - n : n) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0
                }, r.totalProgress = function(n, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * n, t) : this._totalTime / this.totalDuration() || 0
                }, r.totalDuration = function(t) {
                    return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (n.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, r.time = function(n, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), n > this._duration && (n = this._duration), this._yoyo && 0 != (1 & this._cycle) ? n = this._duration - n + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (n += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(n, t)) : this._time
                }, r.repeat = function(n) {
                    return arguments.length ? (this._repeat = n, this._uncache(!0)) : this._repeat
                }, r.repeatDelay = function(n) {
                    return arguments.length ? (this._repeatDelay = n, this._uncache(!0)) : this._repeatDelay
                }, r.yoyo = function(n) {
                    return arguments.length ? (this._yoyo = n, this) : this._yoyo
                }, r.currentLabel = function(n) {
                    return arguments.length ? this.seek(n, !0) : this.getLabelBefore(this._time + 1e-8)
                }, f
            }, !0),
            function() {
                var h = 180 / Math.PI,
                    n = [],
                    t = [],
                    i = [],
                    f = {},
                    c = _gsScope._gsDefine.globals,
                    u = function(n, t, i, r) {
                        i === r && (i = r - (r - t) / 1e6), n === t && (t = n + (i - n) / 1e6), this.a = n, this.b = t, this.c = i, this.d = r, this.da = r - n, this.ca = i - n, this.ba = t - n
                    },
                    l = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    e = function(n, t, i, r) {
                        var e = {
                                a: n
                            },
                            u = {},
                            f = {},
                            o = {
                                c: r
                            },
                            s = (n + t) / 2,
                            a = (t + i) / 2,
                            h = (i + r) / 2,
                            c = (s + a) / 2,
                            l = (a + h) / 2,
                            v = (l - c) / 8;
                        return e.b = s + (n - s) / 4, u.b = c + v, e.c = u.a = (e.b + u.b) / 2, u.c = f.a = (c + l) / 2, f.b = l - v, o.b = h + (r - h) / 4, f.c = o.a = (f.b + o.b) / 2, [e, u, f, o]
                    },
                    a = function(r, u, f, o, s) {
                        for (var v, c, nt, h, y, b, g, tt, l, k, d, it, rt = r.length - 1, p = 0, a = r[0].a, w = 0; rt > w; w++) h = r[p], v = h.a, c = h.d, nt = r[p + 1].d, s ? (k = n[w], d = t[w], it = (d + k) * u * .25 / (o ? .5 : i[w] || .5), y = c - (c - v) * (o ? .5 * u : 0 !== k ? it / k : 0), b = c + (nt - c) * (o ? .5 * u : 0 !== d ? it / d : 0), g = c - (y + ((b - y) * (3 * k / (k + d) + .5) / 4 || 0))) : (y = c - (c - v) * u * .5, b = c + (nt - c) * u * .5, g = c - (y + b) / 2), y += g, b += g, h.c = tt = y, h.b = 0 !== w ? a : a = h.a + .6 * (h.c - h.a), h.da = c - v, h.ca = tt - v, h.ba = a - v, f ? (l = e(v, a, tt, c), r.splice(p, 1, l[0], l[1], l[2], l[3]), p += 4) : p++, a = b;
                        h = r[p], h.b = a, h.c = a + .4 * (h.d - a), h.da = h.d - h.a, h.ca = h.c - h.a, h.ba = a - h.a, f && (l = e(h.a, a, h.c, h.d), r.splice(p, 1, l[0], l[1], l[2], l[3]))
                    },
                    v = function(i, r, f, e) {
                        var a, o, c, s, v, l, h = [];
                        if (e)
                            for (i = [e].concat(i), o = i.length; --o > -1;) "string" == typeof(l = i[o][r]) && "=" === l.charAt(1) && (i[o][r] = e[r] + Number(l.charAt(0) + l.substr(2)));
                        if (a = i.length - 2, 0 > a) return h[0] = new u(i[0][r], 0, 0, i[0][r]), h;
                        for (o = 0; a > o; o++) c = i[o][r], s = i[o + 1][r], h[o] = new u(c, 0, 0, s), f && (v = i[o + 2][r], n[o] = (n[o] || 0) + (s - c) * (s - c), t[o] = (t[o] || 0) + (v - s) * (v - s));
                        return h[o] = new u(i[o][r], 0, 0, i[o + 1][r]), h
                    },
                    o = function(r, u, e, o, s, h) {
                        var c, y, w, p, g, nt, k, tt, d = {},
                            b = [],
                            it = h || r[0];
                        s = "string" == typeof s ? "," + s + "," : l, null == u && (u = 1);
                        for (y in r[0]) b.push(y);
                        if (r.length > 1) {
                            for (tt = r[r.length - 1], k = !0, c = b.length; --c > -1;)
                                if (y = b[c], Math.abs(it[y] - tt[y]) > .05) {
                                    k = !1;
                                    break
                                } k && (r = r.concat(), h && r.unshift(h), r.push(r[1]), h = r[r.length - 3])
                        }
                        for (n.length = t.length = i.length = 0, c = b.length; --c > -1;) y = b[c], f[y] = -1 !== s.indexOf("," + y + ","), d[y] = v(r, y, f[y], h);
                        for (c = n.length; --c > -1;) n[c] = Math.sqrt(n[c]), t[c] = Math.sqrt(t[c]);
                        if (!o) {
                            for (c = b.length; --c > -1;)
                                if (f[y])
                                    for (w = d[b[c]], nt = w.length - 1, p = 0; nt > p; p++) g = w[p + 1].da / t[p] + w[p].da / n[p] || 0, i[p] = (i[p] || 0) + g * g;
                            for (c = i.length; --c > -1;) i[c] = Math.sqrt(i[c])
                        }
                        for (c = b.length, p = e ? 4 : 1; --c > -1;) y = b[c], w = d[y], a(w, u, e, o, f[y]), k && (w.splice(0, p), w.splice(w.length - p, p));
                        return d
                    },
                    y = function(n, t, i) {
                        t = t || "soft";
                        var o, a, v, w, f, y, r, c, s, e, h, b = {},
                            l = "cubic" === t ? 3 : 2,
                            k = "soft" === t,
                            p = [];
                        if (k && i && (n = [i].concat(n)), null == n || n.length < l + 1) throw "invalid Bezier data";
                        for (s in n[0]) p.push(s);
                        for (y = p.length; --y > -1;) {
                            for (s = p[y], b[s] = f = [], e = 0, c = n.length, r = 0; c > r; r++) o = null == i ? n[r][s] : "string" == typeof(h = n[r][s]) && "=" === h.charAt(1) ? i[s] + Number(h.charAt(0) + h.substr(2)) : Number(h), k && r > 1 && c - 1 > r && (f[e++] = (o + f[e - 2]) / 2), f[e++] = o;
                            for (c = e - l + 1, e = 0, r = 0; c > r; r += l) o = f[r], a = f[r + 1], v = f[r + 2], w = 2 === l ? 0 : f[r + 3], f[e++] = h = 3 === l ? new u(o, a, v, w) : new u(o, (2 * a + o) / 3, (2 * a + v) / 3, v);
                            f.length = e
                        }
                        return b
                    },
                    p = function(n, t, i) {
                        for (var e, s, o, a, v, y, r, u, h, f, c, p = 1 / i, l = n.length; --l > -1;)
                            for (f = n[l], o = f.a, a = f.d - o, v = f.c - o, y = f.b - o, e = s = 0, u = 1; i >= u; u++) r = p * u, h = 1 - r, e = s - (s = (r * r * a + 3 * h * (r * v + h * y)) * r), c = l * i + u - 1, t[c] = (t[c] || 0) + e * e
                    },
                    w = function(n, t) {
                        t = t >> 0 || 6;
                        var s, i, h, r, f = [],
                            c = [],
                            u = 0,
                            e = 0,
                            a = t - 1,
                            l = [],
                            o = [];
                        for (s in n) p(n[s], f, t);
                        for (h = f.length, i = 0; h > i; i++) u += Math.sqrt(f[i]), r = i % t, o[r] = u, r === a && (e += u, r = i / t >> 0, l[r] = o, c[r] = e, u = 0, o = []);
                        return {
                            length: e,
                            lengths: c,
                            segments: l
                        }
                    },
                    r = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.8",
                        API: 2,
                        global: !0,
                        init: function(n, t, i) {
                            var c;
                            this._target = n, t instanceof Array && (t = {
                                values: t
                            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                            var r, a, f, e, l, s = t.values || [],
                                h = {},
                                v = s[0],
                                u = t.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = u ? u instanceof Array ? u : [
                                ["x", "y", "rotation", u === !0 ? 0 : Number(u) || 0]
                            ] : null;
                            for (r in v) this._props.push(r);
                            for (f = this._props.length; --f > -1;) r = this._props[f], this._overwriteProps.push(r), a = this._func[r] = "function" == typeof n[r], h[r] = a ? n[r.indexOf("set") || "function" != typeof n["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(n[r]), l || h[r] !== s[0][r] && (l = h);
                            if ((this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? o(s, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, l) : y(s, t.type, h), this._segCount = this._beziers[r].length, this._timeRes) && (c = w(this._beziers, this._timeRes), this._length = c.length, this._lengths = c.lengths, this._segments = c.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length), u = this._autoRotate)
                                for (this._initialRotations = [], u[0] instanceof Array || (this._autoRotate = u = [u]), f = u.length; --f > -1;) {
                                    for (e = 0; 3 > e; e++) r = u[f][e], this._func[r] = "function" == typeof n[r] ? n[r.indexOf("set") || "function" != typeof n["get" + r.substr(3)] ? r : "get" + r.substr(3)] : !1;
                                    r = u[f][2], this._initialRotations[f] = (this._func[r] ? this._func[r].call(this._target) : this._target[r]) || 0, this._overwriteProps.push(r)
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(n) {
                            var c, d, t, u, i, r, o, w, v, f, l = this._segCount,
                                g = this._func,
                                a = this._target,
                                it = n !== this._startRatio,
                                e, b, k, y, p, nt, tt, s;
                            if (this._timeRes) {
                                if (v = this._lengths, f = this._curSeg, n *= this._length, t = this._li, n > this._l2 && l - 1 > t) {
                                    for (w = l - 1; w > t && (this._l2 = v[++t]) <= n;);
                                    this._l1 = v[t - 1], this._li = t, this._curSeg = f = this._segments[t], this._s2 = f[this._s1 = this._si = 0]
                                } else if (n < this._l1 && t > 0) {
                                    for (; t > 0 && (this._l1 = v[--t]) >= n;);
                                    0 === t && n < this._l1 ? this._l1 = 0 : t++, this._l2 = v[t], this._li = t, this._curSeg = f = this._segments[t], this._s1 = f[(this._si = f.length - 1) - 1] || 0, this._s2 = f[this._si]
                                }
                                if (c = t, n -= this._l1, t = this._si, n > this._s2 && t < f.length - 1) {
                                    for (w = f.length - 1; w > t && (this._s2 = f[++t]) <= n;);
                                    this._s1 = f[t - 1], this._si = t
                                } else if (n < this._s1 && t > 0) {
                                    for (; t > 0 && (this._s1 = f[--t]) >= n;);
                                    0 === t && n < this._s1 ? this._s1 = 0 : t++, this._s2 = f[t], this._si = t
                                }
                                r = (t + (n - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else c = 0 > n ? 0 : n >= 1 ? l - 1 : l * n >> 0, r = (n - c * (1 / l)) * l;
                            for (d = 1 - r, t = this._props.length; --t > -1;) u = this._props[t], i = this._beziers[u][c], o = (r * r * i.da + 3 * d * (r * i.ca + d * i.ba)) * r + i.a, this._mod[u] && (o = this._mod[u](o, a)), g[u] ? a[u](o) : a[u] = o;
                            if (this._autoRotate)
                                for (s = this._autoRotate, t = s.length; --t > -1;) u = s[t][2], nt = s[t][3] || 0, tt = s[t][4] === !0 ? 1 : h, i = this._beziers[s[t][0]], e = this._beziers[s[t][1]], i && e && (i = i[c], e = e[c], b = i.a + (i.b - i.a) * r, y = i.b + (i.c - i.b) * r, b += (y - b) * r, y += (i.c + (i.d - i.c) * r - y) * r, k = e.a + (e.b - e.a) * r, p = e.b + (e.c - e.b) * r, k += (p - k) * r, p += (e.c + (e.d - e.c) * r - p) * r, o = it ? Math.atan2(p - k, y - b) * tt + nt : this._initialRotations[t], this._mod[u] && (o = this._mod[u](o, a)), g[u] ? a[u](o) : a[u] = o)
                        }
                    }),
                    s = r.prototype;
                r.bezierThrough = o, r.cubicToQuadratic = e, r._autoCSS = !0, r.quadraticToCubic = function(n, t, i) {
                    return new u(n, (2 * t + n) / 3, (2 * t + i) / 3, i)
                }, r._cssRegister = function() {
                    var t = c.CSSPlugin;
                    if (t) {
                        var n = t._internals,
                            i = n._parseToProxy,
                            u = n._setPluginRatio,
                            f = n.CSSPropTween;
                        n._registerComplexSpecialProp("bezier", {
                            parser: function(n, t, e, o, s, h) {
                                t instanceof Array && (t = {
                                    values: t
                                }), h = new r;
                                var a, v, l, p = t.values,
                                    y = p.length - 1,
                                    w = [],
                                    c = {};
                                if (0 > y) return s;
                                for (a = 0; y >= a; a++) l = i(n, p[a], o, s, h, y !== a), w[a] = l.end;
                                for (v in t) c[v] = t[v];
                                return c.values = w, s = new f(n, "bezier", 0, 0, l.pt, 2), s.data = l, s.plugin = h, s.setRatio = u, 0 === c.autoRotate && (c.autoRotate = !0), !c.autoRotate || c.autoRotate instanceof Array || (a = c.autoRotate === !0 ? 0 : Number(c.autoRotate), c.autoRotate = null != l.end.left ? [
                                    ["left", "top", "rotation", a, !1]
                                ] : null != l.end.x ? [
                                    ["x", "y", "rotation", a, !1]
                                ] : !1), c.autoRotate && (o._transform || o._enableTransforms(!1), l.autoRotate = o._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), h._onInitTween(l.proxy, c, o._tween), s
                            }
                        })
                    }
                }, s._mod = function(n) {
                    for (var t, i = this._overwriteProps, r = i.length; --r > -1;) t = n[i[r]], t && "function" == typeof t && (this._mod[i[r]] = t)
                }, s._kill = function(n) {
                    var r, t, i = this._props;
                    for (r in this._beziers)
                        if (r in n)
                            for (delete this._beziers[r], delete this._func[r], t = i.length; --t > -1;) i[t] === r && i.splice(t, 1);
                    if (i = this._autoRotate)
                        for (t = i.length; --t > -1;) n[i[t][2]] && i.splice(t, 1);
                    return this._super._kill.call(this, n)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(n, t) {
                var ct, ti, e, oi, r = function() {
                        n.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = r.prototype.setRatio
                    },
                    ru = _gsScope._gsDefine.globals,
                    v = {},
                    i = r.prototype = new n("css"),
                    gr, ht, nu, tu, iu, ni;
                i.constructor = r, r.version = "2.0.2", r.API = 2, r.defaultTransformPerspective = 0, r.defaultSkewType = "compensated", r.defaultSmoothOrigin = !0, i = "px", r.suffixMap = {
                    top: i,
                    right: i,
                    bottom: i,
                    left: i,
                    width: i,
                    height: i,
                    fontSize: i,
                    padding: i,
                    margin: i,
                    perspective: i,
                    lineHeight: ""
                };
                var si, er, hi, ci, or, ot, rt, tt, lt = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    li = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    ai = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    vi = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    at = /(?:\d|\-|\+|=|#|\.)*/g,
                    yi = /opacity *= *([^)]*)/i,
                    uu = /opacity:([^;]*)/i,
                    fu = /alpha\(opacity *=.+?\)/i,
                    eu = /^(rgb|hsl)/,
                    sr = /([A-Z])/g,
                    hr = /-([a-z])/gi,
                    ou = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    cr = function(n, t) {
                        return t.toUpperCase()
                    },
                    su = /(?:Left|Right|Width)/i,
                    hu = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    cu = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    k = /,(?=[^\)]*(?:\(|$))/gi,
                    lu = /[\s,\(]/i,
                    c = Math.PI / 180,
                    ut = 180 / Math.PI,
                    ii = {},
                    au = {
                        style: {}
                    },
                    d = _gsScope.document || {
                        createElement: function() {
                            return au
                        }
                    },
                    ri = function(n, t) {
                        return d.createElementNS ? d.createElementNS(t || "http://www.w3.org/1999/xhtml", n) : d.createElement(n)
                    },
                    g = ri("div"),
                    pi = ri("img"),
                    y = r._internals = {
                        _specialProps: v
                    },
                    nt = (_gsScope.navigator || {}).userAgent || "",
                    ft = function() {
                        var t = nt.indexOf("Android"),
                            n = ri("a");
                        return hi = -1 !== nt.indexOf("Safari") && -1 === nt.indexOf("Chrome") && (-1 === t || parseFloat(nt.substr(t + 8, 2)) > 3), or = hi && parseFloat(nt.substr(nt.indexOf("Version/") + 8, 2)) < 6, ci = -1 !== nt.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(nt) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(nt)) && (ot = parseFloat(RegExp.$1)), n ? (n.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(n.style.opacity)) : !1
                    }(),
                    lr = function(n) {
                        return yi.test("string" == typeof n ? n : (n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    ar = function(n) {
                        _gsScope.console && console.log(n)
                    },
                    vr = "",
                    wi = "",
                    vt = function(n, t) {
                        t = t || g;
                        var r, i, u = t.style;
                        if (void 0 !== u[n]) return n;
                        for (n = n.charAt(0).toUpperCase() + n.substr(1), r = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === u[r[i] + n];);
                        return i >= 0 ? (wi = 3 === i ? "ms" : r[i], vr = "-" + wi.toLowerCase() + "-", wi + n) : null
                    },
                    p = ("undefined" != typeof window ? window : d.defaultView || {
                        getComputedStyle: function() {}
                    }).getComputedStyle,
                    u = r.getStyle = function(n, t, i, r, u) {
                        var f;
                        return ft || "opacity" !== t ? (!r && n.style[t] ? f = n.style[t] : (i = i || p(n)) ? f = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(sr, "-$1").toLowerCase()) : n.currentStyle && (f = n.currentStyle[t]), null == u || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : u) : lr(n)
                    },
                    w = y.convertToPixels = function(n, i, f, e, o) {
                        if ("px" === e || !e && "lineHeight" !== i) return f;
                        if ("auto" === e || !f) return 0;
                        var s, h, v, l = su.test(i),
                            c = n,
                            a = g.style,
                            y = 0 > f,
                            b = 1 === f;
                        if (y && (f = -f), b && (f *= 100), "lineHeight" !== i || e)
                            if ("%" === e && -1 !== i.indexOf("border")) s = f / 100 * (l ? n.clientWidth : n.clientHeight);
                            else {
                                if (a.cssText = "border:0 solid red;position:" + u(n, "position") + ";line-height:0;", "%" !== e && c.appendChild && "v" !== e.charAt(0) && "rem" !== e) a[l ? "borderLeftWidth" : "borderTopWidth"] = f + e;
                                else {
                                    if (c = n.parentNode || d.body, -1 !== u(c, "display").indexOf("flex") && (a.position = "absolute"), h = c._gsCache, v = t.ticker.frame, h && l && h.time === v) return h.width * f / 100;
                                    a[l ? "width" : "height"] = f + e
                                }
                                c.appendChild(g), s = parseFloat(g[l ? "offsetWidth" : "offsetHeight"]), c.removeChild(g), l && "%" === e && r.cacheWidths !== !1 && (h = c._gsCache = c._gsCache || {}, h.time = v, h.width = s / f * 100), 0 !== s || o || (s = w(n, i, f, e, !0))
                            }
                        else h = p(n).lineHeight, n.style.lineHeight = f, s = parseFloat(p(n).lineHeight), n.style.lineHeight = h;
                        return b && (s /= 100), y ? -s : s
                    },
                    yr = y.calculateOffset = function(n, t, i) {
                        if ("absolute" !== u(n, "position", i)) return 0;
                        var r = "left" === t ? "Left" : "Top",
                            f = u(n, "margin" + r, i);
                        return n["offset" + r] - (w(n, t, parseFloat(f), f.replace(at, "")) || 0)
                    },
                    yt = function(n, t) {
                        var r, u, f, i = {};
                        if (t = t || p(n, null))
                            if (r = t.length)
                                for (; --r > -1;) f = t[r], (-1 === f.indexOf("-transform") || tr === f) && (i[f.replace(hr, cr)] = t.getPropertyValue(f));
                            else
                                for (r in t)(-1 === r.indexOf("Transform") || h === r) && (i[r] = t[r]);
                        else if (t = n.currentStyle || n.style)
                            for (r in t) "string" == typeof r && void 0 === i[r] && (i[r.replace(hr, cr)] = t[r]);
                        return ft || (i.opacity = lr(n)), u = gt(n, t, !1), i.rotation = u.rotation, i.skewX = u.skewX, i.scaleX = u.scaleX, i.scaleY = u.scaleY, i.x = u.x, i.y = u.y, b && (i.z = u.z, i.rotationX = u.rotationX, i.rotationY = u.rotationY, i.scaleZ = u.scaleZ), i.filters && delete i.filters, i
                    },
                    bi = function(n, t, i, r, u) {
                        var e, f, o, s = {},
                            h = n.style;
                        for (f in i) "cssText" !== f && "length" !== f && isNaN(f) && (t[f] !== (e = i[f]) || u && u[f]) && -1 === f.indexOf("Origin") && ("number" == typeof e || "string" == typeof e) && (s[f] = "auto" !== e || "left" !== f && "top" !== f ? "" !== e && "auto" !== e && "none" !== e || "string" != typeof t[f] || "" === t[f].replace(vi, "") ? e : 0 : yr(n, f), void 0 !== h[f] && (o = new nr(h, f, h[f], o)));
                        if (r)
                            for (f in r) "className" !== f && (s[f] = r[f]);
                        return {
                            difs: s,
                            firstMPT: o
                        }
                    },
                    vu = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    yu = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    pu = function(n, t, i) {
                        if ("svg" === (n.nodeName + "").toLowerCase()) return (i || p(n))[t] || 0;
                        if (n.getCTM && rr(n)) return n.getBBox()[t] || 0;
                        var r = parseFloat("width" === t ? n.offsetWidth : n.offsetHeight),
                            f = vu[t],
                            e = f.length;
                        for (i = i || p(n, null); --e > -1;) r -= parseFloat(u(n, "padding" + f[e], i, !0)) || 0, r -= parseFloat(u(n, "border" + f[e] + "Width", i, !0)) || 0;
                        return r
                    },
                    et = function(n, t) {
                        if ("contain" === n || "auto" === n || "auto auto" === n) return n + " ";
                        (null == n || "" === n) && (n = "0 0");
                        var f, r = n.split(" "),
                            i = -1 !== n.indexOf("left") ? "0%" : -1 !== n.indexOf("right") ? "100%" : r[0],
                            u = -1 !== n.indexOf("top") ? "0%" : -1 !== n.indexOf("bottom") ? "100%" : r[1];
                        if (r.length > 3 && !t) {
                            for (r = n.split(", ").join(",").split(","), n = [], f = 0; f < r.length; f++) n.push(et(r[f]));
                            return n.join(",")
                        }
                        return null == u ? u = "center" === i ? "50%" : "0" : "center" === u && (u = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), n = i + " " + u + (r.length > 2 ? " " + r[2] : ""), t && (t.oxp = -1 !== i.indexOf("%"), t.oyp = -1 !== u.indexOf("%"), t.oxr = "=" === i.charAt(1), t.oyr = "=" === u.charAt(1), t.ox = parseFloat(i.replace(vi, "")), t.oy = parseFloat(u.replace(vi, "")), t.v = n), t || n
                    },
                    pt = function(n, t) {
                        return "function" == typeof n && (n = n(tt, rt)), "string" == typeof n && "=" === n.charAt(1) ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - parseFloat(t) || 0
                    },
                    l = function(n, t) {
                        "function" == typeof n && (n = n(tt, rt));
                        var i = "string" == typeof n && "=" === n.charAt(1);
                        return "string" == typeof n && "v" === n.charAt(n.length - 2) && (n = (i ? n.substr(0, 2) : 0) + window["inner" + ("vh" === n.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? n.substr(2) : n) / 100)), null == n ? t : i ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) + t : parseFloat(n) || 0
                    },
                    wt = function(n, t, i, r) {
                        var f, o, u, e, s, h = 1e-6;
                        return "function" == typeof n && (n = n(tt, rt)), null == n ? e = t : "number" == typeof n ? e = n : (f = 360, o = n.split("_"), s = "=" === n.charAt(1), u = (s ? parseInt(n.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === n.indexOf("rad") ? 1 : ut) - (s ? 0 : t), o.length && (r && (r[i] = t + u), -1 !== n.indexOf("short") && (u %= f, u !== u % (f / 2) && (u = 0 > u ? u + f : u - f)), -1 !== n.indexOf("_cw") && 0 > u ? u = (u + 9999999999 * f) % f - (u / f | 0) * f : -1 !== n.indexOf("ccw") && u > 0 && (u = (u - 9999999999 * f) % f - (u / f | 0) * f)), e = t + u), h > e && e > -h && (e = 0), e
                    },
                    bt = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ki = function(n, t, i) {
                        return n = 0 > n ? n + 1 : n > 1 ? n - 1 : n, 255 * (1 > 6 * n ? t + (i - t) * n * 6 : .5 > n ? i : 2 > 3 * n ? t + (i - t) * (2 / 3 - n) * 6 : t) + .5 | 0
                    },
                    ui = r.parseColor = function(n, t) {
                        var i, u, r, f, o, h, e, s, c, l, a;
                        if (n)
                            if ("number" == typeof n) i = [n >> 16, n >> 8 & 255, 255 & n];
                            else {
                                if ("," === n.charAt(n.length - 1) && (n = n.substr(0, n.length - 1)), bt[n]) i = bt[n];
                                else if ("#" === n.charAt(0)) 4 === n.length && (u = n.charAt(1), r = n.charAt(2), f = n.charAt(3), n = "#" + u + u + r + r + f + f), n = parseInt(n.substr(1), 16), i = [n >> 16, n >> 8 & 255, 255 & n];
                                else if ("hsl" === n.substr(0, 3))
                                    if (i = a = n.match(lt), t) {
                                        if (-1 !== n.indexOf("=")) return n.match(li)
                                    } else o = Number(i[0]) % 360 / 360, h = Number(i[1]) / 100, e = Number(i[2]) / 100, r = .5 >= e ? e * (h + 1) : e + h - e * h, u = 2 * e - r, i.length > 3 && (i[3] = Number(i[3])), i[0] = ki(o + 1 / 3, u, r), i[1] = ki(o, u, r), i[2] = ki(o - 1 / 3, u, r);
                                else i = n.match(lt) || bt.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = bt.black;
                        return t && !a && (u = i[0] / 255, r = i[1] / 255, f = i[2] / 255, s = Math.max(u, r, f), c = Math.min(u, r, f), e = (s + c) / 2, s === c ? o = h = 0 : (l = s - c, h = e > .5 ? l / (2 - s - c) : l / (s + c), o = s === u ? (r - f) / l + (f > r ? 6 : 0) : s === r ? (f - u) / l + 2 : (u - r) / l + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * h + .5 | 0, i[2] = 100 * e + .5 | 0), i
                    },
                    pr = function(n, t) {
                        var u, i, f, e = n.match(a) || [],
                            r = 0,
                            o = "";
                        if (!e.length) return n;
                        for (u = 0; u < e.length; u++) i = e[u], f = n.substr(r, n.indexOf(i, r) - r), r += f.length + i.length, i = ui(i, t), 3 === i.length && i.push(1), o += f + (t ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
                        return o + n.substr(r)
                    },
                    a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (i in bt) a += "|" + i + "\\b";
                a = new RegExp(a + ")", "gi"), r.colorStringFilter = function(n) {
                    var t, i = n[0] + " " + n[1];
                    a.test(i) && (t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), n[0] = pr(n[0], t), n[1] = pr(n[1], t)), a.lastIndex = 0
                }, t.defaultStringFilter || (t.defaultStringFilter = r.colorStringFilter);
                var di = function(n, t, i, r) {
                        if (null == n) return function(n) {
                            return n
                        };
                        var e, s = t ? (n.match(a) || [""])[0] : "",
                            f = n.split(s).join("").match(ai) || [],
                            h = n.substr(0, n.indexOf(f[0])),
                            c = ")" === n.charAt(n.length - 1) ? ")" : "",
                            o = -1 !== n.indexOf(" ") ? " " : ",",
                            u = f.length,
                            l = u > 0 ? f[0].replace(lt, "") : "";
                        return u ? e = t ? function(n) {
                            var p, v, t, y;
                            if ("number" == typeof n) n += l;
                            else if (r && k.test(n)) {
                                for (y = n.replace(k, "|").split("|"), t = 0; t < y.length; t++) y[t] = e(y[t]);
                                return y.join(",")
                            }
                            if (p = (n.match(a) || [s])[0], v = n.split(p).join("").match(ai) || [], t = v.length, u > t--)
                                for (; ++t < u;) v[t] = i ? v[(t - 1) / 2 | 0] : f[t];
                            return h + v.join(o) + o + p + c + (-1 !== n.indexOf("inset") ? " inset" : "")
                        } : function(n) {
                            var s, a, t;
                            if ("number" == typeof n) n += l;
                            else if (r && k.test(n)) {
                                for (a = n.replace(k, "|").split("|"), t = 0; t < a.length; t++) a[t] = e(a[t]);
                                return a.join(",")
                            }
                            if (s = n.match(ai) || [], t = s.length, u > t--)
                                for (; ++t < u;) s[t] = i ? s[(t - 1) / 2 | 0] : f[t];
                            return h + s.join(o) + c
                        } : function(n) {
                            return n
                        }
                    },
                    gi = function(n) {
                        return n = n.split(","),
                            function(t, i, r, u, f, e, o) {
                                var s, h = (i + "").split(" ");
                                for (o = {}, s = 0; 4 > s; s++) o[n[s]] = h[s] = h[s] || h[(s - 1) / 2 >> 0];
                                return u.parse(t, o, f, e)
                            }
                    },
                    nr = (y._setPluginRatio = function(n) {
                        this.plugin.setRatio(n);
                        for (var r, t, f, e, o, u = this.data, s = u.proxy, i = u.firstMPT, h = 1e-6; i;) r = s[i.v], i.r ? r = i.r(r) : h > r && r > -h && (r = 0), i.t[i.p] = r, i = i._next;
                        if (u.autoRotate && (u.autoRotate.rotation = u.mod ? u.mod.call(this._tween, s.rotation, this.t, this._tween) : s.rotation), 1 === n || 0 === n)
                            for (i = u.firstMPT, o = 1 === n ? "e" : "b"; i;) {
                                if (t = i.t, t.type) {
                                    if (1 === t.type) {
                                        for (e = t.xs0 + t.s + t.xs1, f = 1; f < t.l; f++) e += t["xn" + f] + t["xs" + (f + 1)];
                                        t[o] = e
                                    }
                                } else t[o] = t.s + t.xs0;
                                i = i._next
                            }
                    }, function(n, t, i, r, u) {
                        this.t = n, this.p = t, this.v = i, this.r = u, r && (r._prev = this, this._next = r)
                    }),
                    o = (y._parseToProxy = function(n, t, i, r, u, f) {
                        var c, e, o, s, v, h = r,
                            l = {},
                            a = {},
                            y = i._transform,
                            p = ii;
                        for (i._transform = null, ii = t, r = v = i.parse(n, t, r, u), ii = p, f && (i._transform = y, h && (h._prev = null, h._prev && (h._prev._next = null))); r && r !== h;) {
                            if (r.type <= 1 && (e = r.p, a[e] = r.s + r.c, l[e] = r.s, f || (s = new nr(r, "s", e, s, r.r), r.c = 0), 1 === r.type))
                                for (c = r.l; --c > 0;) o = "xn" + c, e = r.p + "_" + o, a[e] = r.data[o], l[e] = r[o], f || (s = new nr(r, o, e, s, r.rxp[o]));
                            r = r._next
                        }
                        return {
                            proxy: l,
                            end: a,
                            firstMPT: s,
                            pt: v
                        }
                    }, y.CSSPropTween = function(n, t, i, r, u, f, e, s, h, c, l) {
                        this.t = n, this.p = t, this.s = i, this.c = r, this.n = e || t, n instanceof o || oi.push(this.n), this.r = s ? "function" == typeof s ? s : Math.round : s, this.type = f || 0, h && (this.pr = h, ct = !0), this.b = void 0 === c ? i : c, this.e = void 0 === l ? i + r : l, u && (this._next = u, u._prev = this)
                    }),
                    fi = function(n, t, i, r, u, f) {
                        var e = new o(n, t, i, r - i, u, -1, f);
                        return e.b = i, e.e = e.xs0 = r, e
                    },
                    kt = r.parseComplex = function(n, t, i, u, f, e, s, h, c, l) {
                        i = i || e || "", "function" == typeof u && (u = u(tt, rt)), s = new o(n, t, 0, 0, s, l ? 2 : 1, null, !1, h, i, u), u += "", f && a.test(u + i) && (u = [i, u], r.colorStringFilter(u), i = u[0], u = u[1]);
                        var p, it, ut, v, y, st, ht, ot, g, b, et, w, ct, d = i.split(", ").join(",").split(" "),
                            nt = u.split(", ").join(",").split(" "),
                            at = d.length,
                            vt = si !== !1;
                        for ((-1 !== u.indexOf(",") || -1 !== i.indexOf(",")) && (-1 !== (u + i).indexOf("rgb") || -1 !== (u + i).indexOf("hsl") ? (d = d.join(" ").replace(k, ", ").split(" "), nt = nt.join(" ").replace(k, ", ").split(" ")) : (d = d.join(" ").split(",").join(", ").split(" "), nt = nt.join(" ").split(",").join(", ").split(" ")), at = d.length), at !== nt.length && (d = (e || "").split(" "), at = d.length), s.plugin = c, s.setRatio = l, a.lastIndex = 0, p = 0; at > p; p++)
                            if (v = d[p], y = nt[p] + "", ot = parseFloat(v), ot || 0 === ot) s.appendXtra("", ot, pt(y, ot), y.replace(li, ""), vt && -1 !== y.indexOf("px") ? Math.round : !1, !0);
                            else if (f && a.test(v)) w = y.indexOf(")") + 1, w = ")" + (w ? y.substr(w) : ""), ct = -1 !== y.indexOf("hsl") && ft, b = y, v = ui(v, ct), y = ui(y, ct), g = v.length + y.length > 6, g && !ft && 0 === y[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(nt[p]).join("transparent")) : (ft || (g = !1), ct ? s.appendXtra(b.substr(0, b.indexOf("hsl")) + (g ? "hsla(" : "hsl("), v[0], pt(y[0], v[0]), ",", !1, !0).appendXtra("", v[1], pt(y[1], v[1]), "%,", !1).appendXtra("", v[2], pt(y[2], v[2]), g ? "%," : "%" + w, !1) : s.appendXtra(b.substr(0, b.indexOf("rgb")) + (g ? "rgba(" : "rgb("), v[0], y[0] - v[0], ",", Math.round, !0).appendXtra("", v[1], y[1] - v[1], ",", Math.round).appendXtra("", v[2], y[2] - v[2], g ? "," : w, Math.round), g && (v = v.length < 4 ? 1 : v[3], s.appendXtra("", v, (y.length < 4 ? 1 : y[3]) - v, w, !1))), a.lastIndex = 0;
                        else if (st = v.match(lt)) {
                            if (ht = y.match(li), !ht || ht.length !== st.length) return s;
                            for (ut = 0, it = 0; it < st.length; it++) et = st[it], b = v.indexOf(et, ut), s.appendXtra(v.substr(ut, b - ut), Number(et), pt(ht[it], et), "", vt && "px" === v.substr(b + et.length, 2) ? Math.round : !1, 0 === it), ut = b + et.length;
                            s["xs" + s.l] += v.substr(ut)
                        } else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + y : y;
                        if (-1 !== u.indexOf("=") && s.data) {
                            for (w = s.xs0 + s.data.s, p = 1; p < s.l; p++) w += s["xs" + p] + s.data["xn" + p];
                            s.e = w + s["xs" + p]
                        }
                        return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                    },
                    s = 9;
                for (i = o.prototype, i.l = i.pr = 0; --s > 0;) i["xn" + s] = 0, i["xs" + s] = "";
                i.xs0 = "", i._next = i._prev = i.xfirst = i.data = i.plugin = i.setRatio = i.rxp = null, i.appendXtra = function(n, t, i, r, u, f) {
                    var e = this,
                        s = e.l;
                    return e["xs" + s] += f && (s || e["xs" + s]) ? " " + n : n || "", i || 0 === s || e.plugin ? (e.l++, e.type = e.setRatio ? 2 : 1, e["xs" + e.l] = r || "", s > 0 ? (e.data["xn" + s] = t + i, e.rxp["xn" + s] = u, e["xn" + s] = t, e.plugin || (e.xfirst = new o(e, "xn" + s, t, i, e.xfirst || e, 0, e.n, u, e.pr), e.xfirst.xs0 = 0), e) : (e.data = {
                        s: t + i
                    }, e.rxp = {}, e.s = t, e.c = i, e.r = u, e)) : (e["xs" + s] += t + (r || ""), e)
                };
                var wr = function(n, t) {
                        t = t || {}, this.p = t.prefix ? vt(n) || n : n, v[n] = v[this.p] = this, this.format = t.formatter || di(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                    },
                    f = y._registerComplexSpecialProp = function(n, t, i) {
                        "object" != typeof t && (t = {
                            parser: i
                        });
                        var r, e, u = n.split(","),
                            f = t.defaultValue;
                        for (i = i || [f], r = 0; r < u.length; r++) t.prefix = 0 === r && t.prefix, t.defaultValue = i[r] || f, e = new wr(u[r], t)
                    },
                    wu = y._registerPluginProp = function(n) {
                        if (!v[n]) {
                            var t = n.charAt(0).toUpperCase() + n.substr(1) + "Plugin";
                            f(n, {
                                parser: function(n, i, r, u, f, e, o) {
                                    var s = ru.com.greensock.plugins[t];
                                    return s ? (s._cssRegister(), v[r].parse(n, i, r, u, f, e, o)) : (ar("Error: " + t + " js file not loaded."), f)
                                }
                            })
                        }
                    };
                i = wr.prototype, i.parseComplex = function(n, t, i, r, u, f) {
                    var e, o, s, a, c, l, h = this.keyword;
                    if (this.multi && (k.test(i) || k.test(t) ? (o = t.replace(k, "|").split("|"), s = i.replace(k, "|").split("|")) : h && (o = [t], s = [i])), s) {
                        for (a = s.length > o.length ? s.length : o.length, e = 0; a > e; e++) t = o[e] = o[e] || this.dflt, i = s[e] = s[e] || this.dflt, h && (c = t.indexOf(h), l = i.indexOf(h), c !== l && (-1 === l ? o[e] = o[e].split(h).join("") : -1 === c && (o[e] += " " + h)));
                        t = o.join(", "), i = s.join(", ")
                    }
                    return kt(n, this.p, t, i, this.clrs, this.dflt, r, this.pr, u, f)
                }, i.parse = function(n, t, i, r, f, o) {
                    return this.parseComplex(n.style, this.format(u(n, this.p, e, !1, this.dflt)), this.format(t), f, o)
                }, r.registerSpecialProp = function(n, t, i) {
                    f(n, {
                        parser: function(n, r, u, f, e, s) {
                            var c = new o(n, u, 0, 0, e, 2, u, !1, i);
                            return c.plugin = s, c.setRatio = t(n, r, f._tween, u), c
                        },
                        priority: i
                    })
                }, r.useSVGTransformAttr = !0;
                var it, br = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    h = vt("transform"),
                    tr = vr + "transform",
                    dt = vt("transformOrigin"),
                    b = null !== vt("perspective"),
                    ei = y.Transform = function() {
                        this.perspective = parseFloat(r.defaultTransformPerspective) || 0, this.force3D = r.defaultForce3D !== !1 && b ? r.defaultForce3D || "auto" : !1
                    },
                    bu = _gsScope.SVGElement,
                    kr = function(n, t, i) {
                        var r, u = d.createElementNS("http://www.w3.org/2000/svg", n),
                            f = /([a-z])([A-Z])/g;
                        for (r in i) u.setAttributeNS(null, r.replace(f, "$1-$2").toLowerCase(), i[r]);
                        return t.appendChild(u), u
                    },
                    st = d.documentElement || {},
                    ku = function() {
                        var t, n, r, i = ot || /Android/i.test(nt) && !_gsScope.chrome;
                        return d.createElementNS && !i && (t = kr("svg", st), n = kr("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), r = n.getBoundingClientRect().width, n.style[dt] = "50% 50%", n.style[h] = "scaleX(0.5)", i = r === n.getBoundingClientRect().width && !(ci && b), st.removeChild(t)), i
                    }(),
                    ir = function(n, t, i, u, f, e) {
                        var l, a, v, y, p, w, o, b, k, d, g, c, nt, tt, s = n._gsTransform,
                            h = fr(n, !0);
                        s && (nt = s.xOrigin, tt = s.yOrigin), (!u || (l = u.split(" ")).length < 2) && (o = n.getBBox(), 0 === o.x && 0 === o.y && o.width + o.height === 0 && (o = {
                            x: parseFloat(n.hasAttribute("x") ? n.getAttribute("x") : n.hasAttribute("cx") ? n.getAttribute("cx") : 0) || 0,
                            y: parseFloat(n.hasAttribute("y") ? n.getAttribute("y") : n.hasAttribute("cy") ? n.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), t = et(t).split(" "), l = [(-1 !== t[0].indexOf("%") ? parseFloat(t[0]) / 100 * o.width : parseFloat(t[0])) + o.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * o.height : parseFloat(t[1])) + o.y]), i.xOrigin = y = parseFloat(l[0]), i.yOrigin = p = parseFloat(l[1]), u && h !== ur && (w = h[0], o = h[1], b = h[2], k = h[3], d = h[4], g = h[5], c = w * k - o * b, c && (a = y * (k / c) + p * (-b / c) + (b * g - k * d) / c, v = y * (-o / c) + p * (w / c) - (w * g - o * d) / c, y = i.xOrigin = l[0] = a, p = i.yOrigin = l[1] = v)), s && (e && (i.xOffset = s.xOffset, i.yOffset = s.yOffset, s = i), f || f !== !1 && r.defaultSmoothOrigin !== !1 ? (a = y - nt, v = p - tt, s.xOffset += a * h[0] + v * h[2] - a, s.yOffset += a * h[1] + v * h[3] - v) : s.xOffset = s.yOffset = 0), e || n.setAttribute("data-svg-origin", l.join(" "))
                    },
                    dr = function(n) {
                        var t, i = ri("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            r = this.parentNode,
                            u = this.nextSibling,
                            f = this.style.cssText;
                        if (st.appendChild(i), i.appendChild(this), this.style.display = "block", n) try {
                            t = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = dr
                        } catch (e) {} else this._originalGetBBox && (t = this._originalGetBBox());
                        return u ? r.insertBefore(this, u) : r.appendChild(this), st.removeChild(i), this.style.cssText = f, t
                    },
                    du = function(n) {
                        try {
                            return n.getBBox()
                        } catch (t) {
                            return dr.call(n, !0)
                        }
                    },
                    rr = function(n) {
                        return !(!bu || !n.getCTM || n.parentNode && !n.ownerSVGElement || !du(n))
                    },
                    ur = [1, 0, 0, 1, 0, 0],
                    fr = function(n, t) {
                        var e, r, i, f, c, l, a = n._gsTransform || new ei,
                            v = 1e5,
                            o = n.style;
                        if (h ? r = u(n, tr, null, !0) : n.currentStyle && (r = n.currentStyle.filter.match(hu), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), e = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, !h || !(l = !p(n) || "none" === p(n).display) && n.parentNode || (l && (f = o.display, o.display = "block"), n.parentNode || (c = 1, st.appendChild(n)), r = u(n, tr, null, !0), e = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, f ? o.display = f : l && ht(o, "display"), c && st.removeChild(n)), (a.svg || n.getCTM && rr(n)) && (e && -1 !== (o[h] + "").indexOf("matrix") && (r = o[h], e = 0), i = n.getAttribute("transform"), e && i && (i = n.transform.baseVal.consolidate().matrix, r = "matrix(" + i.a + "," + i.b + "," + i.c + "," + i.d + "," + i.e + "," + i.f + ")", e = 0)), e) return ur;
                        for (i = (r || "").match(lt) || [], s = i.length; --s > -1;) f = Number(i[s]), i[s] = (c = f - (f |= 0)) ? (c * v + (0 > c ? -.5 : .5) | 0) / v + f : f;
                        return t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i
                    },
                    gt = y.getTransform = function(n, i, f, e) {
                        if (n._gsTransform && f && !e) return n._gsTransform;
                        var s, pt, kt, gt, wt, ni, o = f ? n._gsTransform || new ei : new ei,
                            ui = o.scaleX < 0,
                            bt = 2e-5,
                            tt = 1e5,
                            fi = b ? parseFloat(u(n, dt, i, !1, "0 0 0").split(" ")[2]) || o.zOrigin || 0 : 0,
                            oi = parseFloat(r.defaultTransformPerspective) || 0;
                        if (o.svg = !(!n.getCTM || !rr(n)), o.svg && (ir(n, u(n, dt, i, !1, "50% 50%") + "", o, n.getAttribute("data-svg-origin")), it = r.useSVGTransformAttr || ku), s = fr(n), s !== ur) {
                            if (16 === s.length) {
                                var rt, ft, et, c, l, k = s[0],
                                    y = s[1],
                                    ot = s[2],
                                    si = s[3],
                                    d = s[4],
                                    p = s[5],
                                    st = s[6],
                                    hi = s[7],
                                    g = s[8],
                                    v = s[9],
                                    w = s[10],
                                    ti = s[12],
                                    ii = s[13],
                                    ct = s[14],
                                    nt = s[11],
                                    a = Math.atan2(st, w);
                                o.zOrigin && (ct = -o.zOrigin, ti = g * ct - s[12], ii = v * ct - s[13], ct = w * ct + o.zOrigin - s[14]), o.rotationX = a * ut, a && (c = Math.cos(-a), l = Math.sin(-a), rt = d * c + g * l, ft = p * c + v * l, et = st * c + w * l, g = d * -l + g * c, v = p * -l + v * c, w = st * -l + w * c, nt = hi * -l + nt * c, d = rt, p = ft, st = et), a = Math.atan2(-ot, w), o.rotationY = a * ut, a && (c = Math.cos(-a), l = Math.sin(-a), rt = k * c - g * l, ft = y * c - v * l, et = ot * c - w * l, v = y * l + v * c, w = ot * l + w * c, nt = si * l + nt * c, k = rt, y = ft, ot = et), a = Math.atan2(y, k), o.rotation = a * ut, a && (c = Math.cos(a), l = Math.sin(a), rt = k * c + y * l, ft = d * c + p * l, et = g * c + v * l, y = y * c - k * l, p = p * c - d * l, v = v * c - g * l, k = rt, d = ft, g = et), o.rotationX && Math.abs(o.rotationX) + Math.abs(o.rotation) > 359.9 && (o.rotationX = o.rotation = 0, o.rotationY = 180 - o.rotationY), a = Math.atan2(d, p), o.scaleX = (Math.sqrt(k * k + y * y + ot * ot) * tt + .5 | 0) / tt, o.scaleY = (Math.sqrt(p * p + st * st) * tt + .5 | 0) / tt, o.scaleZ = (Math.sqrt(g * g + v * v + w * w) * tt + .5 | 0) / tt, k /= o.scaleX, d /= o.scaleY, y /= o.scaleX, p /= o.scaleY, Math.abs(a) > bt ? (o.skewX = a * ut, d = 0, "simple" !== o.skewType && (o.scaleY *= 1 / Math.cos(a))) : o.skewX = 0, o.perspective = nt ? 1 / (0 > nt ? -nt : nt) : 0, o.x = ti, o.y = ii, o.z = ct, o.svg && (o.x -= o.xOrigin - (o.xOrigin * k - o.yOrigin * d), o.y -= o.yOrigin - (o.yOrigin * y - o.xOrigin * p))
                            } else if (!b || e || !s.length || o.x !== s[4] || o.y !== s[5] || !o.rotationX && !o.rotationY) {
                                var ri = s.length >= 6,
                                    lt = ri ? s[0] : 1,
                                    at = s[1] || 0,
                                    vt = s[2] || 0,
                                    yt = ri ? s[3] : 1;
                                o.x = s[4] || 0, o.y = s[5] || 0, kt = Math.sqrt(lt * lt + at * at), gt = Math.sqrt(yt * yt + vt * vt), wt = lt || at ? Math.atan2(at, lt) * ut : o.rotation || 0, ni = vt || yt ? Math.atan2(vt, yt) * ut + wt : o.skewX || 0, o.scaleX = kt, o.scaleY = gt, o.rotation = wt, o.skewX = ni, b && (o.rotationX = o.rotationY = o.z = 0, o.perspective = oi, o.scaleZ = 1), o.svg && (o.x -= o.xOrigin - (o.xOrigin * lt + o.yOrigin * vt), o.y -= o.yOrigin - (o.xOrigin * at + o.yOrigin * yt))
                            }
                            Math.abs(o.skewX) > 90 && Math.abs(o.skewX) < 270 && (ui ? (o.scaleX *= -1, o.skewX += o.rotation <= 0 ? 180 : -180, o.rotation += o.rotation <= 0 ? 180 : -180) : (o.scaleY *= -1, o.skewX += o.skewX <= 0 ? 180 : -180)), o.zOrigin = fi;
                            for (pt in o) o[pt] < bt && o[pt] > -bt && (o[pt] = 0)
                        }
                        return f && (n._gsTransform = o, o.svg && (it && n.style[h] ? t.delayedCall(.001, function() {
                            ht(n.style, h)
                        }) : !it && n.getAttribute("transform") && t.delayedCall(.001, function() {
                            n.removeAttribute("transform")
                        }))), o
                    },
                    gu = function(n) {
                        var o, p, t = this.data,
                            nt = -t.rotation * c,
                            ut = nt + t.skewX * c,
                            e = 1e5,
                            h = (Math.cos(nt) * t.scaleX * e | 0) / e,
                            u = (Math.sin(nt) * t.scaleX * e | 0) / e,
                            f = (Math.sin(ut) * -t.scaleY * e | 0) / e,
                            l = (Math.cos(ut) * t.scaleY * e | 0) / e,
                            b = this.t.style,
                            g = this.t.currentStyle,
                            d, y, ft, et;
                        if (g) {
                            p = u, u = -f, f = -p, o = g.filter, b.filter = "";
                            var i, r, a = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                tt = "absolute" !== g.position,
                                k = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + u + ", M21=" + f + ", M22=" + l,
                                it = t.x + a * t.xPercent / 100,
                                rt = t.y + v * t.yPercent / 100;
                            if (null != t.ox && (i = (t.oxp ? a * t.ox * .01 : t.ox) - a / 2, r = (t.oyp ? v * t.oy * .01 : t.oy) - v / 2, it += i - (i * h + r * u), rt += r - (i * f + r * l)), tt ? (i = a / 2, r = v / 2, k += ", Dx=" + (i - (i * h + r * u) + it) + ", Dy=" + (r - (i * f + r * l) + rt) + ")") : k += ", sizingMethod='auto expand')", b.filter = -1 !== o.indexOf("DXImageTransform.Microsoft.Matrix(") ? o.replace(cu, k) : k + " " + o, (0 === n || 1 === n) && 1 === h && 0 === u && 0 === f && 1 === l && (tt && -1 === k.indexOf("Dx=0, Dy=0") || yi.test(o) && 100 !== parseFloat(RegExp.$1) || -1 === o.indexOf(o.indexOf("Alpha")) && b.removeAttribute("filter")), !tt)
                                for (et = 8 > ot ? 1 : -1, i = t.ieOffsetX || 0, r = t.ieOffsetY || 0, t.ieOffsetX = Math.round((a - ((0 > h ? -h : h) * a + (0 > u ? -u : u) * v)) / 2 + it), t.ieOffsetY = Math.round((v - ((0 > l ? -l : l) * v + (0 > f ? -f : f) * a)) / 2 + rt), s = 0; 4 > s; s++) y = yu[s], d = g[y], p = -1 !== d.indexOf("px") ? parseFloat(d) : w(this.t, y, parseFloat(d), d.replace(at, "")) || 0, ft = p !== t[y] ? 2 > s ? -t.ieOffsetX : -t.ieOffsetY : 2 > s ? i - t.ieOffsetX : r - t.ieOffsetY, b[y] = (t[y] = Math.round(p - ft * (0 === s || 2 === s ? 1 : et))) + "px"
                        }
                    },
                    nf = y.set3DTransformRatio = y.setTransformRatio = function(n) {
                        var r, l, a, nt, v, y, tt, vt, yt, ut, pt, wt, ft, ct, i, f, e, ni, g, o, s, bt, et, t = this.data,
                            kt = this.t.style,
                            u = t.rotation,
                            dt = t.rotationX,
                            gt = t.rotationY,
                            k = t.scaleX,
                            d = t.scaleY,
                            rt = t.scaleZ,
                            p = t.x,
                            w = t.y,
                            ot = t.z,
                            lt = t.svg,
                            st = t.perspective,
                            ti = t.force3D,
                            ht = t.skewY,
                            at = t.skewX;
                        if (ht && (at += ht, u += ht), ((1 === n || 0 === n) && "auto" === ti && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !ti) && !ot && !st && !gt && !dt && 1 === rt || it && lt || !b) return void(u || at || lt ? (u *= c, bt = at * c, et = 1e5, l = Math.cos(u) * k, v = Math.sin(u) * k, a = Math.sin(u - bt) * -d, y = Math.cos(u - bt) * d, bt && "simple" === t.skewType && (r = Math.tan(bt - ht * c), r = Math.sqrt(1 + r * r), a *= r, y *= r, ht && (r = Math.tan(ht * c), r = Math.sqrt(1 + r * r), l *= r, v *= r)), lt && (p += t.xOrigin - (t.xOrigin * l + t.yOrigin * a) + t.xOffset, w += t.yOrigin - (t.xOrigin * v + t.yOrigin * y) + t.yOffset, it && (t.xPercent || t.yPercent) && (i = this.t.getBBox(), p += .01 * t.xPercent * i.width, w += .01 * t.yPercent * i.height), i = 1e-6, i > p && p > -i && (p = 0), i > w && w > -i && (w = 0)), g = (l * et | 0) / et + "," + (v * et | 0) / et + "," + (a * et | 0) / et + "," + (y * et | 0) / et + "," + p + "," + w + ")", lt && it ? this.t.setAttribute("transform", "matrix(" + g) : kt[h] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + g) : kt[h] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + k + ",0,0," + d + "," + p + "," + w + ")");
                        if (ci && (i = .0001, i > k && k > -i && (k = rt = 2e-5), i > d && d > -i && (d = rt = 2e-5), !st || t.z || t.rotationX || t.rotationY || (st = 0)), u || at) u *= c, f = l = Math.cos(u), e = v = Math.sin(u), at && (u -= at * c, f = Math.cos(u), e = Math.sin(u), "simple" === t.skewType && (r = Math.tan((at - ht) * c), r = Math.sqrt(1 + r * r), f *= r, e *= r, t.skewY && (r = Math.tan(ht * c), r = Math.sqrt(1 + r * r), l *= r, v *= r))), a = -e, y = f;
                        else {
                            if (!(gt || dt || 1 !== rt || st || lt)) return void(kt[h] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + p + "px," + w + "px," + ot + "px)" + (1 !== k || 1 !== d ? " scale(" + k + "," + d + ")" : ""));
                            l = y = 1, a = v = 0
                        }
                        ut = 1, nt = tt = vt = yt = pt = wt = 0, ft = st ? -1 / st : 0, ct = t.zOrigin, i = 1e-6, o = ",", s = "0", u = gt * c, u && (f = Math.cos(u), e = Math.sin(u), vt = -e, pt = ft * -e, nt = l * e, tt = v * e, ut = f, ft *= f, l *= f, v *= f), u = dt * c, u && (f = Math.cos(u), e = Math.sin(u), r = a * f + nt * e, ni = y * f + tt * e, yt = ut * e, wt = ft * e, nt = a * -e + nt * f, tt = y * -e + tt * f, ut *= f, ft *= f, a = r, y = ni), 1 !== rt && (nt *= rt, tt *= rt, ut *= rt, ft *= rt), 1 !== d && (a *= d, y *= d, yt *= d, wt *= d), 1 !== k && (l *= k, v *= k, vt *= k, pt *= k), (ct || lt) && (ct && (p += nt * -ct, w += tt * -ct, ot += ut * -ct + ct), lt && (p += t.xOrigin - (t.xOrigin * l + t.yOrigin * a) + t.xOffset, w += t.yOrigin - (t.xOrigin * v + t.yOrigin * y) + t.yOffset), i > p && p > -i && (p = s), i > w && w > -i && (w = s), i > ot && ot > -i && (ot = 0)), g = t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(", g += (i > l && l > -i ? s : l) + o + (i > v && v > -i ? s : v) + o + (i > vt && vt > -i ? s : vt), g += o + (i > pt && pt > -i ? s : pt) + o + (i > a && a > -i ? s : a) + o + (i > y && y > -i ? s : y), dt || gt || 1 !== rt ? (g += o + (i > yt && yt > -i ? s : yt) + o + (i > wt && wt > -i ? s : wt) + o + (i > nt && nt > -i ? s : nt), g += o + (i > tt && tt > -i ? s : tt) + o + (i > ut && ut > -i ? s : ut) + o + (i > ft && ft > -i ? s : ft) + o) : g += ",0,0,0,0,1,0,", g += p + o + w + o + ot + o + (st ? 1 + -ot / st : 1) + ")", kt[h] = g
                    };
                for (i = ei.prototype, i.x = i.y = i.z = i.skewX = i.skewY = i.rotation = i.rotationX = i.rotationY = i.zOrigin = i.xPercent = i.yPercent = i.xOffset = i.yOffset = 0, i.scaleX = i.scaleY = i.scaleZ = 1, f("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                        parser: function(n, t, i, f, s, a, v) {
                            var bt, ht;
                            if (f._lastParsedTransform === v) return s;
                            f._lastParsedTransform = v, ht = v.scale && "function" == typeof v.scale ? v.scale : 0, "function" == typeof v[i] && (bt = v[i], v[i] = t), ht && (v.scale = ht(tt, n));
                            var w, nt, vt, yt, st, ft, ot, ct, ut, pt = n._gsTransform,
                                kt = n.style,
                                ni = 1e-6,
                                ti = br.length,
                                y = v,
                                lt = {},
                                at = "transformOrigin",
                                p = gt(n, e, !0, y.parseTransform),
                                k = y.transform && ("function" == typeof y.transform ? y.transform(tt, rt) : y.transform);
                            if (p.skewType = y.skewType || p.skewType || r.defaultSkewType, f._transform = p, "rotationZ" in y && (y.rotation = y.rotationZ), k && "string" == typeof k && h) nt = g.style, nt[h] = k, nt.display = "block", nt.position = "absolute", -1 !== k.indexOf("%") && (nt.width = u(n, "width"), nt.height = u(n, "height")), d.body.appendChild(g), w = gt(g, null, !1), "simple" === p.skewType && (w.scaleY *= Math.cos(w.skewX * c)), p.svg && (ft = p.xOrigin, ot = p.yOrigin, w.x -= p.xOffset, w.y -= p.yOffset, (y.transformOrigin || y.svgOrigin) && (k = {}, ir(n, et(y.transformOrigin), k, y.svgOrigin, y.smoothOrigin, !0), ft = k.xOrigin, ot = k.yOrigin, w.x -= k.xOffset - p.xOffset, w.y -= k.yOffset - p.yOffset), (ft || ot) && (ct = fr(g, !0), w.x -= ft - (ft * ct[0] + ot * ct[2]), w.y -= ot - (ft * ct[1] + ot * ct[3]))), d.body.removeChild(g), w.perspective || (w.perspective = p.perspective), null != y.xPercent && (w.xPercent = l(y.xPercent, p.xPercent)), null != y.yPercent && (w.yPercent = l(y.yPercent, p.yPercent));
                            else if ("object" == typeof y) {
                                if (w = {
                                        scaleX: l(null != y.scaleX ? y.scaleX : y.scale, p.scaleX),
                                        scaleY: l(null != y.scaleY ? y.scaleY : y.scale, p.scaleY),
                                        scaleZ: l(y.scaleZ, p.scaleZ),
                                        x: l(y.x, p.x),
                                        y: l(y.y, p.y),
                                        z: l(y.z, p.z),
                                        xPercent: l(y.xPercent, p.xPercent),
                                        yPercent: l(y.yPercent, p.yPercent),
                                        perspective: l(y.transformPerspective, p.perspective)
                                    }, st = y.directionalRotation, null != st)
                                    if ("object" == typeof st)
                                        for (nt in st) y[nt] = st[nt];
                                    else y.rotation = st;
                                "string" == typeof y.x && -1 !== y.x.indexOf("%") && (w.x = 0, w.xPercent = l(y.x, p.xPercent)), "string" == typeof y.y && -1 !== y.y.indexOf("%") && (w.y = 0, w.yPercent = l(y.y, p.yPercent)), w.rotation = wt("rotation" in y ? y.rotation : "shortRotation" in y ? y.shortRotation + "_short" : p.rotation, p.rotation, "rotation", lt), b && (w.rotationX = wt("rotationX" in y ? y.rotationX : "shortRotationX" in y ? y.shortRotationX + "_short" : p.rotationX || 0, p.rotationX, "rotationX", lt), w.rotationY = wt("rotationY" in y ? y.rotationY : "shortRotationY" in y ? y.shortRotationY + "_short" : p.rotationY || 0, p.rotationY, "rotationY", lt)), w.skewX = wt(y.skewX, p.skewX), w.skewY = wt(y.skewY, p.skewY)
                            }
                            for (b && null != y.force3D && (p.force3D = y.force3D, yt = !0), vt = p.force3D || p.z || p.rotationX || p.rotationY || w.z || w.rotationX || w.rotationY || w.perspective, vt || null == y.scale || (w.scaleZ = 1); --ti > -1;) ut = br[ti], k = w[ut] - p[ut], (k > ni || -ni > k || null != y[ut] || null != ii[ut]) && (yt = !0, s = new o(p, ut, p[ut], k, s), ut in lt && (s.e = lt[ut]), s.xs0 = 0, s.plugin = a, f._overwriteProps.push(s.n));
                            return k = y.transformOrigin, p.svg && (k || y.svgOrigin) && (ft = p.xOffset, ot = p.yOffset, ir(n, et(k), w, y.svgOrigin, y.smoothOrigin), s = fi(p, "xOrigin", (pt ? p : w).xOrigin, w.xOrigin, s, at), s = fi(p, "yOrigin", (pt ? p : w).yOrigin, w.yOrigin, s, at), (ft !== p.xOffset || ot !== p.yOffset) && (s = fi(p, "xOffset", pt ? ft : p.xOffset, p.xOffset, s, at), s = fi(p, "yOffset", pt ? ot : p.yOffset, p.yOffset, s, at)), k = "0px 0px"), (k || b && vt && p.zOrigin) && (h ? (yt = !0, ut = dt, k = (k || u(n, ut, e, !1, "50% 50%")) + "", s = new o(kt, ut, 0, 0, s, -1, at), s.b = kt[ut], s.plugin = a, b ? (nt = p.zOrigin, k = k.split(" "), p.zOrigin = (k.length > 2 && (0 === nt || "0px" !== k[2]) ? parseFloat(k[2]) : nt) || 0, s.xs0 = s.e = k[0] + " " + (k[1] || "50%") + " 0px", s = new o(p, "zOrigin", 0, 0, s, -1, s.n), s.b = nt, s.xs0 = s.e = p.zOrigin) : s.xs0 = s.e = k) : et(k + "", p)), yt && (f._transformType = p.svg && it || !vt && 3 !== this._transformType ? 2 : 3), bt && (v[i] = bt), ht && (v.scale = ht), s
                        },
                        prefix: !0
                    }), f("boxShadow", {
                        defaultValue: "0px 0px 0px 0px #999",
                        prefix: !0,
                        color: !0,
                        multi: !0,
                        keyword: "inset"
                    }), f("borderRadius", {
                        defaultValue: "0px",
                        parser: function(n, t, i, r, f) {
                            t = this.format(t);
                            var it, a, g, c, s, h, b, v, rt, ut, l, y, nt, k, d, tt, p = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                ft = n.style;
                            for (rt = parseFloat(n.offsetWidth), ut = parseFloat(n.offsetHeight), it = t.split(" "), a = 0; a < p.length; a++) this.p.indexOf("border") && (p[a] = vt(p[a])), s = c = u(n, p[a], e, !1, "0px"), -1 !== s.indexOf(" ") && (c = s.split(" "), s = c[0], c = c[1]), h = g = it[a], b = parseFloat(s), y = s.substr((b + "").length), nt = "=" === h.charAt(1), nt ? (v = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), v *= parseFloat(h), l = h.substr((v + "").length - (0 > v ? 1 : 0)) || "") : (v = parseFloat(h), l = h.substr((v + "").length)), "" === l && (l = ti[i] || y), l !== y && (k = w(n, "borderLeft", b, y), d = w(n, "borderTop", b, y), "%" === l ? (s = k / rt * 100 + "%", c = d / ut * 100 + "%") : "em" === l ? (tt = w(n, "borderLeft", 1, "em"), s = k / tt + "em", c = d / tt + "em") : (s = k + "px", c = d + "px"), nt && (h = parseFloat(s) + v + l, g = parseFloat(c) + v + l)), f = kt(ft, p[a], s + " " + c, h + " " + g, !1, "0px", f);
                            return f
                        },
                        prefix: !0,
                        formatter: di("0px 0px 0px 0px", !1, !0)
                    }), f("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                        defaultValue: "0px",
                        parser: function(n, t, i, r, f) {
                            return kt(n.style, i, this.format(u(n, i, e, !1, "0px 0px")), this.format(t), !1, "0px", f)
                        },
                        prefix: !0,
                        formatter: di("0px 0px", !1, !0)
                    }), f("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function(n, t, i, r, f, o) {
                            var c, k, h, y, w, l, b = "background-position",
                                a = e || p(n, null),
                                s = this.format((a ? ot ? a.getPropertyValue(b + "-x") + " " + a.getPropertyValue(b + "-y") : a.getPropertyValue(b) : n.currentStyle.backgroundPositionX + " " + n.currentStyle.backgroundPositionY) || "0 0"),
                                v = this.format(t);
                            if (-1 !== s.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (l = u(n, "backgroundImage").replace(ou, ""), l && "none" !== l)) {
                                for (c = s.split(" "), k = v.split(" "), pi.setAttribute("src", l), h = 2; --h > -1;) s = c[h], y = -1 !== s.indexOf("%"), y !== (-1 !== k[h].indexOf("%")) && (w = 0 === h ? n.offsetWidth - pi.width : n.offsetHeight - pi.height, c[h] = y ? parseFloat(s) / 100 * w + "px" : parseFloat(s) / w * 100 + "%");
                                s = c.join(" ")
                            }
                            return this.parseComplex(n.style, s, v, f, o)
                        },
                        formatter: et
                    }), f("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: function(n) {
                            return n += "", "co" === n.substr(0, 2) ? n : et(-1 === n.indexOf(" ") ? n + " " + n : n)
                        }
                    }), f("perspective", {
                        defaultValue: "0px",
                        prefix: !0
                    }), f("perspectiveOrigin", {
                        defaultValue: "50% 50%",
                        prefix: !0
                    }), f("transformStyle", {
                        prefix: !0
                    }), f("backfaceVisibility", {
                        prefix: !0
                    }), f("userSelect", {
                        prefix: !0
                    }), f("margin", {
                        parser: gi("marginTop,marginRight,marginBottom,marginLeft")
                    }), f("padding", {
                        parser: gi("paddingTop,paddingRight,paddingBottom,paddingLeft")
                    }), f("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function(n, t, i, r, f, o) {
                            var c, s, h;
                            return 9 > ot ? (s = n.currentStyle, h = 8 > ot ? " " : ",", c = "rect(" + s.clipTop + h + s.clipRight + h + s.clipBottom + h + s.clipLeft + ")", t = this.format(t).split(",").join(h)) : (c = this.format(u(n, this.p, e, !1, this.dflt)), t = this.format(t)), this.parseComplex(n.style, c, t, f, o)
                        }
                    }), f("textShadow", {
                        defaultValue: "0px 0px 0px #999",
                        color: !0,
                        multi: !0
                    }), f("autoRound,strictUnits", {
                        parser: function(n, t, i, r, u) {
                            return u
                        }
                    }), f("border", {
                        defaultValue: "0px solid #000",
                        parser: function(n, t, i, r, f, o) {
                            var s = u(n, "borderTopWidth", e, !1, "0px"),
                                c = this.format(t).split(" "),
                                h = c[0].replace(at, "");
                            return "px" !== h && (s = parseFloat(s) / w(n, "borderTopWidth", 1, h) + h), this.parseComplex(n.style, this.format(s + " " + u(n, "borderTopStyle", e, !1, "solid") + " " + u(n, "borderTopColor", e, !1, "#000")), c.join(" "), f, o)
                        },
                        color: !0,
                        formatter: function(n) {
                            var t = n.split(" ");
                            return t[0] + " " + (t[1] || "solid") + " " + (n.match(a) || ["#000"])[0]
                        }
                    }), f("borderWidth", {
                        parser: gi("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                    }), f("float,cssFloat,styleFloat", {
                        parser: function(n, t, i, r, u) {
                            var e = n.style,
                                s = "cssFloat" in e ? "cssFloat" : "styleFloat";
                            return new o(e, s, 0, 0, u, -1, i, !1, 0, e[s], t)
                        }
                    }), gr = function(n) {
                        var f, i = this.t,
                            t = i.filter || u(this.data, "filter") || "",
                            r = this.s + this.c * n | 0;
                        100 === r && (-1 === t.indexOf("atrix(") && -1 === t.indexOf("radient(") && -1 === t.indexOf("oader(") ? (i.removeAttribute("filter"), f = !u(this.data, "filter")) : (i.filter = t.replace(fu, ""), f = !0)), f || (this.xn1 && (i.filter = t = t || "alpha(opacity=" + r + ")"), -1 === t.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = t + " alpha(opacity=" + r + ")") : i.filter = t.replace(yi, "opacity=" + r))
                    }, f("opacity,alpha,autoAlpha", {
                        defaultValue: "1",
                        parser: function(n, t, i, r, f, s) {
                            var h = parseFloat(u(n, "opacity", e, !1, "1")),
                                c = n.style,
                                l = "autoAlpha" === i;
                            return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + h), l && 1 === h && "hidden" === u(n, "visibility", e) && 0 !== t && (h = 0), ft ? f = new o(c, "opacity", h, t - h, f) : (f = new o(c, "opacity", 100 * h, 100 * (t - h), f), f.xn1 = l ? 1 : 0, c.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = n, f.plugin = s, f.setRatio = gr), l && (f = new o(c, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), f.xs0 = "inherit", r._overwriteProps.push(f.n), r._overwriteProps.push(i)), f
                        }
                    }), ht = function(n, t) {
                        t && (n.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), n.removeProperty(t.replace(sr, "-$1").toLowerCase())) : n.removeAttribute(t))
                    }, nu = function(n) {
                        if (this.t._gsClassPT = this, 1 === n || 0 === n) {
                            this.t.setAttribute("class", 0 === n ? this.b : this.e);
                            for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : ht(i, t.p), t = t._next;
                            1 === n && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    }, f("className", {
                        parser: function(n, t, i, r, u, f, s) {
                            var c, y, l, a, h, v = n.getAttribute("class") || "",
                                p = n.style.cssText;
                            if (u = r._classNamePT = new o(n, i, 0, 0, u, 2), u.setRatio = nu, u.pr = -11, ct = !0, u.b = v, y = yt(n, e), l = n._gsClassPT) {
                                for (a = {}, h = l.data; h;) a[h.p] = 1, h = h._next;
                                l.setRatio(1)
                            }
                            return n._gsClassPT = u, u.e = "=" !== t.charAt(1) ? t : v.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), n.setAttribute("class", u.e), c = bi(n, y, yt(n), s, a), n.setAttribute("class", v), u.data = c.firstMPT, n.style.cssText = p, u = u.xfirst = r.parse(n, c.difs, u, f)
                        }
                    }), tu = function(n) {
                        if ((1 === n || 0 === n) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                            var i, t, r, u, f, e = this.t.style,
                                o = v.transform.parse;
                            if ("all" === this.e) e.cssText = "", u = !0;
                            else
                                for (i = this.e.split(" ").join("").split(","), r = i.length; --r > -1;) t = i[r], v[t] && (v[t].parse === o ? u = !0 : t = "transformOrigin" === t ? dt : v[t].p), ht(e, t);
                            u && (ht(e, h), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                        }
                    }, f("clearProps", {
                        parser: function(n, t, i, r, u) {
                            return u = new o(n, i, 0, 0, u, 2), u.setRatio = tu, u.e = t, u.pr = -10, u.data = r._tween, ct = !0, u
                        }
                    }), i = "bezier,throwProps,physicsProps,physics2D".split(","), s = i.length; s--;) wu(i[s]);
                return i = r.prototype, i._firstPT = i._lastParsedTransform = i._transform = null, i._onInitTween = function(n, t, i, f) {
                    if (!n.nodeType) return !1;
                    this._target = rt = n, this._tween = i, this._vars = t, tt = f, si = t.autoRound, ct = !1, ti = t.suffixMap || r.suffixMap, e = p(n, ""), oi = this._overwriteProps;
                    var a, c, s, y, k, d, b, w, g, l = n.style;
                    if (er && "" === l.zIndex && (a = u(n, "zIndex", e), ("auto" === a || "" === a) && this._addLazySet(l, "zIndex", 0)), "string" == typeof t && (y = l.cssText, a = yt(n, e), l.cssText = y + ";" + t, a = bi(n, a, yt(n)).difs, !ft && uu.test(t) && (a.opacity = parseFloat(RegExp.$1)), t = a, l.cssText = y), this._firstPT = t.className ? c = v.className.parse(n, t.className, "className", this, null, null, t) : c = this.parse(n, t, null), this._transformType) {
                        for (g = 3 === this._transformType, h ? hi && (er = !0, "" === l.zIndex && (b = u(n, "zIndex", e), ("auto" === b || "" === b) && this._addLazySet(l, "zIndex", 0)), or && this._addLazySet(l, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (g ? "visible" : "hidden"))) : l.zoom = 1, s = c; s && s._next;) s = s._next;
                        w = new o(n, "transform", 0, 0, null, 2), this._linkCSSP(w, null, s), w.setRatio = h ? nf : gu, w.data = this._transform || gt(n, e, !0), w.tween = i, w.pr = -1, oi.pop()
                    }
                    if (ct) {
                        for (; c;) {
                            for (d = c._next, s = y; s && s.pr > c.pr;) s = s._next;
                            (c._prev = s ? s._prev : k) ? c._prev._next = c: y = c, (c._next = s) ? s._prev = c : k = c, c = d
                        }
                        this._firstPT = y
                    }
                    return !0
                }, i.parse = function(n, t, i, r) {
                    var f, g, h, c, a, s, y, l, b, k, d = n.style;
                    for (f in t) {
                        if (s = t[f], "function" == typeof s && (s = s(tt, rt)), g = v[f]) i = g.parse(n, s, f, this, i, r, t);
                        else {
                            if ("--" === f.substr(0, 2)) {
                                this._tween._propLookup[f] = this._addTween.call(this._tween, n.style, "setProperty", p(n).getPropertyValue(f) + "", s + "", f, !1, f);
                                continue
                            }
                            a = u(n, f, e) + "", b = "string" == typeof s, "color" === f || "fill" === f || "stroke" === f || -1 !== f.indexOf("Color") || b && eu.test(s) ? (b || (s = ui(s), s = (s.length > 3 ? "rgba(" : "rgb(") + s.join(",") + ")"), i = kt(d, f, a, s, !0, "transparent", i, 0, r)) : b && lu.test(s) ? i = kt(d, f, a, s, !0, null, i, 0, r) : (h = parseFloat(a), y = h || 0 === h ? a.substr((h + "").length) : "", ("" === a || "auto" === a) && ("width" === f || "height" === f ? (h = pu(n, f, e), y = "px") : "left" === f || "top" === f ? (h = yr(n, f, e), y = "px") : (h = "opacity" !== f ? 0 : 1, y = "")), k = b && "=" === s.charAt(1), k ? (c = parseInt(s.charAt(0) + "1", 10), s = s.substr(2), c *= parseFloat(s), l = s.replace(at, "")) : (c = parseFloat(s), l = b ? s.replace(at, "") : ""), "" === l && (l = f in ti ? ti[f] : y), s = c || 0 === c ? (k ? c + h : c) + l : t[f], y !== l && ("" !== l || "lineHeight" === f) && (c || 0 === c) && h && (h = w(n, f, h, y), "%" === l ? (h /= w(n, f, 100, "%") / 100, t.strictUnits !== !0 && (a = h + "%")) : "em" === l || "rem" === l || "vw" === l || "vh" === l ? h /= w(n, f, 1, l) : "px" !== l && (c = w(n, f, c, l), l = "px"), k && (c || 0 === c) && (s = c + h + l)), k && (c += h), !h && 0 !== h || !c && 0 !== c ? void 0 !== d[f] && (s || s + "" != "NaN" && null != s) ? (i = new o(d, f, c || h || 0, 0, i, -1, f, !1, 0, a, s), i.xs0 = "none" !== s || "display" !== f && -1 === f.indexOf("Style") ? s : a) : ar("invalid " + f + " tween value: " + t[f]) : (i = new o(d, f, h, c - h, i, 0, f, si !== !1 && ("px" === l || "zIndex" === f), 0, a, s), i.xs0 = l))
                        }
                        r && i && !i.plugin && (i.plugin = r)
                    }
                    return i
                }, i.setRatio = function(n) {
                    var r, u, i, t = this._firstPT,
                        f = 1e-6;
                    if (1 !== n || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (n || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; t;) {
                                if (r = t.c * n + t.s, t.r ? r = t.r(r) : f > r && r > -f && (r = 0), t.type)
                                    if (1 === t.type)
                                        if (i = t.l, 2 === i) t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2;
                                        else if (3 === i) t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3;
                                else if (4 === i) t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4;
                                else if (5 === i) t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4 + t.xn4 + t.xs5;
                                else {
                                    for (u = t.xs0 + r + t.xs1, i = 1; i < t.l; i++) u += t["xn" + i] + t["xs" + (i + 1)];
                                    t.t[t.p] = u
                                } else -1 === t.type ? t.t[t.p] = t.xs0 : t.setRatio && t.setRatio(n);
                                else t.t[t.p] = r + t.xs0;
                                t = t._next
                            } else
                                for (; t;) 2 !== t.type ? t.t[t.p] = t.b : t.setRatio(n), t = t._next;
                        else
                            for (; t;) {
                                if (2 !== t.type)
                                    if (t.r && -1 !== t.type)
                                        if (r = t.r(t.s + t.c), t.type) {
                                            if (1 === t.type) {
                                                for (i = t.l, u = t.xs0 + r + t.xs1, i = 1; i < t.l; i++) u += t["xn" + i] + t["xs" + (i + 1)];
                                                t.t[t.p] = u
                                            }
                                        } else t.t[t.p] = r + t.xs0;
                                else t.t[t.p] = t.e;
                                else t.setRatio(n);
                                t = t._next
                            }
                }, i._enableTransforms = function(n) {
                    this._transform = this._transform || gt(this._target, e, !0), this._transformType = this._transform.svg && it || !n && 3 !== this._transformType ? 2 : 3
                }, iu = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                }, i._addLazySet = function(n, t, i) {
                    var r = this._firstPT = new o(n, t, 0, 0, this._firstPT, 2);
                    r.e = i, r.setRatio = iu, r.data = this
                }, i._linkCSSP = function(n, t, i, r) {
                    return n && (t && (t._prev = n), n._next && (n._next._prev = n._prev), n._prev ? n._prev._next = n._next : this._firstPT === n && (this._firstPT = n._next, r = !0), i ? i._next = n : r || null !== this._firstPT || (this._firstPT = n), n._next = t, n._prev = i), n
                }, i._mod = function(n) {
                    for (var t = this._firstPT; t;) "function" == typeof n[t.p] && (t.r = n[t.p]), t = t._next
                }, i._kill = function(t) {
                    var i, f, r, u = t;
                    if (t.autoAlpha || t.alpha) {
                        u = {};
                        for (f in t) u[f] = t[f];
                        u.opacity = 1, u.autoAlpha && (u.visibility = 1)
                    }
                    for (t.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== f && i.plugin._kill && (i.plugin._kill(t), f = i.plugin), i = i._next;
                    return n.prototype._kill.call(this, u)
                }, ni = function(n, t, i) {
                    var e, u, r, f;
                    if (n.slice)
                        for (u = n.length; --u > -1;) ni(n[u], t, i);
                    else
                        for (e = n.childNodes, u = e.length; --u > -1;) r = e[u], f = r.type, r.style && (t.push(yt(r)), i && i.push(r)), 1 !== f && 9 !== f && 11 !== f || !r.childNodes.length || ni(r, t, i)
                }, r.cascadeTo = function(n, i, r) {
                    var u, f, e, h, o = t.to(n, i, r),
                        l = [o],
                        c = [],
                        a = [],
                        s = [],
                        v = t._internals.reservedProps;
                    for (n = o._targets || o.target, ni(n, c, s), o.render(i, !0, !0), ni(n, a), o.render(0, !0, !0), o._enabled(!0), u = s.length; --u > -1;)
                        if (f = bi(s[u], c[u], a[u]), f.firstMPT) {
                            f = f.difs;
                            for (e in r) v[e] && (f[e] = r[e]);
                            h = {};
                            for (e in f) h[e] = c[u][e];
                            l.push(t.fromTo(s[u], i, h, f))
                        } return l
                }, n.activate([r]), r
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.7.0",
                        priority: -1,
                        API: 2,
                        init: function(n, t, i) {
                            return this._tween = i, !0
                        }
                    }),
                    i = function(n) {
                        var t = 1 > n ? Math.pow(10, (n + "").length - 2) : 1;
                        return function(i) {
                            return (Math.round(i / n) * n * t | 0) / t
                        }
                    },
                    r = function(n, t) {
                        for (; n;) n.f || n.blob || (n.m = t || Math.round), n = n._next
                    },
                    n = t.prototype;
                n._onInitAllProps = function() {
                    var n, f, s, t, e = this._tween,
                        u = e.vars.roundProps,
                        o = {},
                        h = e._propLookup.roundProps;
                    if ("object" != typeof u || u.push)
                        for ("string" == typeof u && (u = u.split(",")), s = u.length; --s > -1;) o[u[s]] = Math.round;
                    else
                        for (t in u) o[t] = i(u[t]);
                    for (t in o)
                        for (n = e._firstPT; n;) f = n._next, n.pg ? n.t._mod(o) : n.n === t && (2 === n.f && n.t ? r(n.t._firstPT, o[t]) : (this._add(n.t, t, n.s, n.c, o[t]), f && (f._prev = n._prev), n._prev ? n._prev._next = f : e._firstPT === n && (e._firstPT = f), n._next = n._prev = null, e._propLookup[t] = h)), n = f;
                    return !1
                }, n._add = function(n, t, i, r, u) {
                    this._addTween(n, t, i, i + r, t, u || Math.round), this._overwriteProps.push(t)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.6.1",
                    init: function(n, t, i, r) {
                        var u, f;
                        if ("function" != typeof n.setAttribute) return !1;
                        for (u in t) f = t[u], "function" == typeof f && (f = f(r, n)), this._addTween(n, "setAttribute", n.getAttribute(u) + "", f + "", u, !1, u), this._overwriteProps.push(u);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(n, t, i, r) {
                    "object" != typeof t && (t = {
                        rotation: t
                    }), this.finals = {};
                    var f, o, h, s, u, c, e = t.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6;
                    for (f in t) "useRadians" !== f && (s = t[f], "function" == typeof s && (s = s(r, n)), c = (s + "").split("_"), o = c[0], h = parseFloat("function" != typeof n[f] ? n[f] : n[f.indexOf("set") || "function" != typeof n["get" + f.substr(3)] ? f : "get" + f.substr(3)]()), s = this.finals[f] = "string" == typeof o && "=" === o.charAt(1) ? h + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0, u = s - h, c.length && (o = c.join("_"), -1 !== o.indexOf("short") && (u %= e, u !== u % (e / 2) && (u = 0 > u ? u + e : u - e)), -1 !== o.indexOf("_cw") && 0 > u ? u = (u + 9999999999 * e) % e - (u / e | 0) * e : -1 !== o.indexOf("ccw") && u > 0 && (u = (u - 9999999999 * e) % e - (u / e | 0) * e)), (u > l || -l > u) && (this._addTween(n, f, h, h + u, f), this._overwriteProps.push(f)));
                    return !0
                },
                set: function(n) {
                    var t;
                    if (1 !== n) this._super.setRatio.call(this, n);
                    else
                        for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(n) {
                var f, s, u, h, v = _gsScope.GreenSockGlobals || _gsScope,
                    w = v.com.greensock,
                    y = 2 * Math.PI,
                    p = Math.PI / 2,
                    r = w._class,
                    i = function(t, i) {
                        var u = r("easing." + t, function() {}, !0),
                            f = u.prototype = new n;
                        return f.constructor = u, f.getRatio = i, u
                    },
                    c = n.register || function() {},
                    e = function(n, t, i, u) {
                        var e = r("easing." + n, {
                            easeOut: new t,
                            easeIn: new i,
                            easeInOut: new u
                        }, !0);
                        return c(e, n), e
                    },
                    l = function(n, t, i) {
                        this.t = n, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - n)
                    },
                    a = function(t, i) {
                        var u = r("easing." + t, function(n) {
                                this._p1 = n || 0 === n ? n : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            f = u.prototype = new n;
                        return f.constructor = u, f.getRatio = i, f.config = function(n) {
                            return new u(n)
                        }, u
                    },
                    b = e("Back", a("BackOut", function(n) {
                        return (n -= 1) * n * ((this._p1 + 1) * n + this._p1) + 1
                    }), a("BackIn", function(n) {
                        return n * n * ((this._p1 + 1) * n - this._p1)
                    }), a("BackInOut", function(n) {
                        return (n *= 2) < 1 ? .5 * n * n * ((this._p2 + 1) * n - this._p2) : .5 * ((n -= 2) * n * ((this._p2 + 1) * n + this._p2) + 2)
                    })),
                    o = r("easing.SlowMo", function(n, t, i) {
                        t = t || 0 === t ? t : .7, null == n ? n = .7 : n > 1 && (n = 1), this._p = 1 !== n ? t : 0, this._p1 = (1 - n) / 2, this._p2 = n, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    t = o.prototype = new n;
                return t.constructor = o, t.getRatio = function(n) {
                    var t = n + (.5 - n) * this._p;
                    return n < this._p1 ? this._calcEnd ? 1 - (n = 1 - n / this._p1) * n : t - (n = 1 - n / this._p1) * n * n * n * t : n > this._p3 ? this._calcEnd ? 1 === n ? 0 : 1 - (n = (n - this._p3) / this._p1) * n : t + (n - t) * (n = (n - this._p3) / this._p1) * n * n * n : this._calcEnd ? 1 : t
                }, o.ease = new o(.7, .7), t.config = o.config = function(n, t, i) {
                    return new o(n, t, i)
                }, f = r("easing.SteppedEase", function(n, t) {
                    n = n || 1, this._p1 = 1 / n, this._p2 = n + (t ? 0 : 1), this._p3 = t ? 1 : 0
                }, !0), t = f.prototype = new n, t.constructor = f, t.getRatio = function(n) {
                    return 0 > n ? n = 0 : n >= 1 && (n = .999999999), ((this._p2 * n | 0) + this._p3) * this._p1
                }, t.config = f.config = function(n, t) {
                    return new f(n, t)
                }, s = r("easing.ExpoScaleEase", function(n, t, i) {
                    this._p1 = Math.log(t / n), this._p2 = t - n, this._p3 = n, this._ease = i
                }, !0), t = s.prototype = new n, t.constructor = s, t.getRatio = function(n) {
                    return this._ease && (n = this._ease.getRatio(n)), (this._p3 * Math.exp(this._p1 * n) - this._p3) / this._p2
                }, t.config = s.config = function(n, t, i) {
                    return new s(n, t, i)
                }, u = r("easing.RoughEase", function(t) {
                    t = t || {};
                    for (var i, r, u, f, h, e, c = t.taper || "none", a = [], w = 0, v = 0 | (t.points || 20), o = v, y = t.randomize !== !1, b = t.clamp === !0, p = t.template instanceof n ? t.template : null, s = "number" == typeof t.strength ? .4 * t.strength : .4; --o > -1;) i = y ? Math.random() : 1 / v * o, r = p ? p.getRatio(i) : i, "none" === c ? u = s : "out" === c ? (f = 1 - i, u = f * f * s) : "in" === c ? u = i * i * s : .5 > i ? (f = 2 * i, u = f * f * .5 * s) : (f = 2 * (1 - i), u = f * f * .5 * s), y ? r += Math.random() * u - .5 * u : o % 2 ? r += .5 * u : r -= .5 * u, b && (r > 1 ? r = 1 : 0 > r && (r = 0)), a[w++] = {
                        x: i,
                        y: r
                    };
                    for (a.sort(function(n, t) {
                            return n.x - t.x
                        }), e = new l(1, 1, null), o = v; --o > -1;) h = a[o], e = new l(h.x, h.y, e);
                    this._prev = new l(0, 0, 0 !== e.t ? e : e.next)
                }, !0), t = u.prototype = new n, t.constructor = u, t.getRatio = function(n) {
                    var t = this._prev;
                    if (n > t.t) {
                        for (; t.next && n >= t.t;) t = t.next;
                        t = t.prev
                    } else
                        for (; t.prev && n <= t.t;) t = t.prev;
                    return this._prev = t, t.v + (n - t.t) / t.gap * t.c
                }, t.config = function(n) {
                    return new u(n)
                }, u.ease = new u, e("Bounce", i("BounceOut", function(n) {
                    return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
                }), i("BounceIn", function(n) {
                    return (n = 1 - n) < 1 / 2.75 ? 1 - 7.5625 * n * n : 2 / 2.75 > n ? 1 - (7.5625 * (n -= 1.5 / 2.75) * n + .75) : 2.5 / 2.75 > n ? 1 - (7.5625 * (n -= 2.25 / 2.75) * n + .9375) : 1 - (7.5625 * (n -= 2.625 / 2.75) * n + .984375)
                }), i("BounceInOut", function(n) {
                    var t = .5 > n;
                    return n = t ? 1 - 2 * n : 2 * n - 1, n = 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375, t ? .5 * (1 - n) : .5 * n + .5
                })), e("Circ", i("CircOut", function(n) {
                    return Math.sqrt(1 - (n -= 1) * n)
                }), i("CircIn", function(n) {
                    return -(Math.sqrt(1 - n * n) - 1)
                }), i("CircInOut", function(n) {
                    return (n *= 2) < 1 ? -.5 * (Math.sqrt(1 - n * n) - 1) : .5 * (Math.sqrt(1 - (n -= 2) * n) + 1)
                })), h = function(t, i, u) {
                    var f = r("easing." + t, function(n, t) {
                            this._p1 = n >= 1 ? n : 1, this._p2 = (t || u) / (1 > n ? n : 1), this._p3 = this._p2 / y * (Math.asin(1 / this._p1) || 0), this._p2 = y / this._p2
                        }, !0),
                        e = f.prototype = new n;
                    return e.constructor = f, e.getRatio = i, e.config = function(n, t) {
                        return new f(n, t)
                    }, f
                }, e("Elastic", h("ElasticOut", function(n) {
                    return this._p1 * Math.pow(2, -10 * n) * Math.sin((n - this._p3) * this._p2) + 1
                }, .3), h("ElasticIn", function(n) {
                    return -(this._p1 * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - this._p3) * this._p2))
                }, .3), h("ElasticInOut", function(n) {
                    return (n *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - this._p3) * this._p2) : this._p1 * Math.pow(2, -10 * (n -= 1)) * Math.sin((n - this._p3) * this._p2) * .5 + 1
                }, .45)), e("Expo", i("ExpoOut", function(n) {
                    return 1 - Math.pow(2, -10 * n)
                }), i("ExpoIn", function(n) {
                    return Math.pow(2, 10 * (n - 1)) - .001
                }), i("ExpoInOut", function(n) {
                    return (n *= 2) < 1 ? .5 * Math.pow(2, 10 * (n - 1)) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
                })), e("Sine", i("SineOut", function(n) {
                    return Math.sin(n * p)
                }), i("SineIn", function(n) {
                    return -Math.cos(n * p) + 1
                }), i("SineInOut", function(n) {
                    return -.5 * (Math.cos(Math.PI * n) - 1)
                })), r("easing.EaseLookup", {
                    find: function(t) {
                        return n.map[t]
                    }
                }, !0), c(v.SlowMo, "SlowMo", "ease,"), c(u, "RoughEase", "ease,"), c(f, "SteppedEase", "ease,"), b
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(n, t) {
        "use strict";
        var nt = {},
            y = n.document,
            ht = n.GreenSockGlobals = n.GreenSockGlobals || n,
            ct = ht[t],
            vt, o, pt, ot, c;
        if (ct) return "undefined" != typeof module && module.exports && (module.exports = ct), ct;
        var s, f, i, u, h, ni = function(n) {
                for (var r = n.split("."), i = ht, t = 0; t < r.length; t++) i[r[t]] = i = i[r[t]] || {};
                return i
            },
            p = ni("com.greensock"),
            e = 1e-10,
            ti = function(n) {
                for (var i = [], r = n.length, t = 0; t !== r; i.push(n[t++]));
                return i
            },
            ii = function() {},
            tt = function() {
                var n = Object.prototype.toString,
                    t = n.call([]);
                return function(i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && n.call(i) === t)
                }
            }(),
            it = {},
            ri = function(i, r, u, f) {
                this.sc = it[i] ? it[i].sc : [], it[i] = this, this.gsClass = null, this.func = u;
                var e = [];
                this.check = function(o) {
                    for (var l, a, c, h, s = r.length, v = s; --s > -1;)(l = it[r[s]] || new ri(r[s], [])).gsClass ? (e[s] = l.gsClass, v--) : o && l.sc.push(this);
                    if (0 === v && u) {
                        if (a = ("com.greensock." + i).split("."), c = a.pop(), h = ni(a.join("."))[c] = this.gsClass = u.apply(u, e), f)
                            if (ht[c] = nt[c] = h, "undefined" != typeof module && module.exports)
                                if (i === t) {
                                    module.exports = nt[t] = h;
                                    for (s in nt) h[s] = nt[s]
                                } else nt[t] && (nt[t][c] = h);
                        else "function" == typeof define && define.amd && define((n.GreenSockAMDPath ? n.GreenSockAMDPath + "/" : "") + i.split(".").pop(), [], function() {
                            return h
                        });
                        for (s = 0; s < this.sc.length; s++) this.sc[s].check()
                    }
                }, this.check(!0)
            },
            lt = n._gsDefine = function(n, t, i, r) {
                return new ri(n, t, i, r)
            },
            l = p._class = function(n, t, i) {
                return t = t || function() {}, lt(n, [], function() {
                    return t
                }, i), t
            };
        lt.globals = ht;
        var ui = [0, 0, 1, 1],
            a = l("easing.Ease", function(n, t, i, r) {
                this._func = n, this._type = i || 0, this._power = r || 0, this._params = t ? ui.concat(t) : ui
            }, !0),
            ft = a.map = {},
            at = a.register = function(n, t, i, r) {
                for (var o, u, e, f, s = t.split(","), h = s.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                    for (u = s[h], o = r ? l("easing." + u, null, !0) : p.easing[u] || {}, e = c.length; --e > -1;) f = c[e], ft[u + "." + f] = ft[f + u] = o[f] = n.getRatio ? n : n[f] || new n
            };
        for (i = a.prototype, i._calcEnd = !1, i.getRatio = function(n) {
                if (this._func) return this._params[0] = n, this._func.apply(null, this._params);
                var i = this._type,
                    r = this._power,
                    t = 1 === i ? 1 - n : 2 === i ? n : .5 > n ? 2 * n : 2 * (1 - n);
                return 1 === r ? t *= t : 2 === r ? t *= t * t : 3 === r ? t *= t * t * t : 4 === r && (t *= t * t * t * t), 1 === i ? 1 - t : 2 === i ? t : .5 > n ? t / 2 : 1 - t / 2
            }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], f = s.length; --f > -1;) i = s[f] + ",Power" + f, at(new a(null, null, 1, f), i, "easeOut", !0), at(new a(null, null, 2, f), i, "easeIn" + (0 === f ? ",easeNone" : "")), at(new a(null, null, 3, f), i, "easeInOut");
        ft.linear = p.easing.Linear.easeIn, ft.swing = p.easing.Quad.easeInOut, vt = l("events.EventDispatcher", function(n) {
            this._listeners = {}, this._eventTarget = n || this
        }), i = vt.prototype, i.addEventListener = function(n, t, i, r, f) {
            f = f || 0;
            var s, o, e = this._listeners[n],
                c = 0;
            for (this !== u || h || u.wake(), null == e && (this._listeners[n] = e = []), o = e.length; --o > -1;) s = e[o], s.c === t && s.s === i ? e.splice(o, 1) : 0 === c && s.pr < f && (c = o + 1);
            e.splice(c, 0, {
                c: t,
                s: i,
                up: r,
                pr: f
            })
        }, i.removeEventListener = function(n, t) {
            var i, r = this._listeners[n];
            if (r)
                for (i = r.length; --i > -1;)
                    if (r[i].c === t) return void r.splice(i, 1)
        }, i.dispatchEvent = function(n) {
            var r, u, t, i = this._listeners[n];
            if (i)
                for (r = i.length, r > 1 && (i = i.slice(0)), u = this._eventTarget; --r > -1;) t = i[r], t && (t.up ? t.c.call(t.s || u, {
                    type: n,
                    target: u
                }) : t.c.call(t.s || u))
        };
        var et = n.requestAnimationFrame,
            yt = n.cancelAnimationFrame,
            rt = Date.now || function() {
                return +new Date
            },
            b = rt();
        for (s = ["ms", "moz", "webkit", "o"], f = s.length; --f > -1 && !et;) et = n[s[f] + "RequestAnimationFrame"], yt = n[s[f] + "CancelAnimationFrame"] || n[s[f] + "CancelRequestAnimationFrame"];
        l("Ticker", function(n, t) {
            var r, a, f, c, l, i = this,
                v = rt(),
                o = t !== !1 && et ? "auto" : !1,
                s = 500,
                w = 33,
                k = "tick",
                p = function(n) {
                    var t, e, u = rt() - b;
                    u > s && (v += u - w), b += u, i.time = (b - v) / 1e3, t = i.time - l, (!r || t > 0 || n === !0) && (i.frame++, l += t + (t >= c ? .004 : c - t), e = !0), n !== !0 && (f = a(p)), e && i.dispatchEvent(k)
                };
            vt.call(i), i.time = i.frame = 0, i.tick = function() {
                p(!0)
            }, i.lagSmoothing = function(n, t) {
                return arguments.length ? (s = n || 1 / e, void(w = Math.min(t, s, 0))) : 1 / e > s
            }, i.sleep = function() {
                null != f && (o && yt ? yt(f) : clearTimeout(f), a = ii, f = null, i === u && (h = !1))
            }, i.wake = function(n) {
                null !== f ? i.sleep() : n ? v += -b + (b = rt()) : i.frame > 10 && (b = rt() - s + 5), a = 0 === r ? ii : o && et ? et : function(n) {
                    return setTimeout(n, 1e3 * (l - i.time) + 1 | 0)
                }, i === u && (h = !0), p(2)
            }, i.fps = function(n) {
                return arguments.length ? (r = n, c = 1 / (r || 60), l = this.time + c, void i.wake()) : r
            }, i.useRAF = function(n) {
                return arguments.length ? (i.sleep(), o = n, void i.fps(r)) : o
            }, i.fps(n), setTimeout(function() {
                "auto" === o && i.frame < 5 && "hidden" !== (y || {}).visibilityState && i.useRAF(!1)
            }, 1500)
        }), i = p.Ticker.prototype = new p.events.EventDispatcher, i.constructor = p.Ticker, o = l("core.Animation", function(n, t) {
            if (this.vars = t = t || {}, this._duration = this._totalDuration = n || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, w) {
                h || u.wake();
                var i = this.vars.useFrames ? g : w;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        }), u = o.ticker = new p.Ticker, i = o.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1, pt = function() {
            h && rt() - b > 2e3 && ("hidden" !== (y || {}).visibilityState || !u.lagSmoothing()) && u.wake();
            var n = setTimeout(pt, 2e3);
            n.unref && n.unref()
        }, pt(), i.play = function(n, t) {
            return null != n && this.seek(n, t), this.reversed(!1).paused(!1)
        }, i.pause = function(n, t) {
            return null != n && this.seek(n, t), this.paused(!0)
        }, i.resume = function(n, t) {
            return null != n && this.seek(n, t), this.paused(!1)
        }, i.seek = function(n, t) {
            return this.totalTime(Number(n), t !== !1)
        }, i.restart = function(n, t) {
            return this.reversed(!1).paused(!1).totalTime(n ? -this._delay : 0, t !== !1, !0)
        }, i.reverse = function(n, t) {
            return null != n && this.seek(n || this.totalDuration(), t), this.reversed(!0).paused(!1)
        }, i.render = function() {}, i.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, i.isActive = function() {
            var t, n = this._timeline,
                i = this._startTime;
            return !n || !this._gc && !this._paused && n.isActive() && (t = n.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
        }, i._enabled = function(n, t) {
            return h || u.wake(), this._gc = !n, this._active = this.isActive(), t !== !0 && (n && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !n && this.timeline && this._timeline._remove(this, !0)), !1
        }, i._kill = function() {
            return this._enabled(!1, !1)
        }, i.kill = function(n, t) {
            return this._kill(n, t), this
        }, i._uncache = function(n) {
            for (var t = n ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
            return this
        }, i._swapSelfInParams = function(n) {
            for (var t = n.length, i = n.concat(); --t > -1;) "{self}" === n[t] && (i[t] = this);
            return i
        }, i._callback = function(n) {
            var i = this.vars,
                r = i[n],
                t = i[n + "Params"],
                u = i[n + "Scope"] || i.callbackScope || this,
                f = t ? t.length : 0;
            switch (f) {
                case 0:
                    r.call(u);
                    break;
                case 1:
                    r.call(u, t[0]);
                    break;
                case 2:
                    r.call(u, t[0], t[1]);
                    break;
                default:
                    r.apply(u, t)
            }
        }, i.eventCallback = function(n, t, i, r) {
            if ("on" === (n || "").substr(0, 2)) {
                var u = this.vars;
                if (1 === arguments.length) return u[n];
                null == t ? delete u[n] : (u[n] = t, u[n + "Params"] = tt(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, u[n + "Scope"] = r), "onUpdate" === n && (this._onUpdate = t)
            }
            return this
        }, i.delay = function(n) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + n - this._delay), this._delay = n, this) : this._delay
        }, i.duration = function(n) {
            return arguments.length ? (this._duration = this._totalDuration = n, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== n && this.totalTime(this._totalTime * (n / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, i.totalDuration = function(n) {
            return this._dirty = !1, arguments.length ? this.duration(n) : this._totalDuration
        }, i.time = function(n, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(n > this._duration ? this._duration : n, t)) : this._time
        }, i.totalTime = function(n, t, i) {
            if (h || u.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > n && !i && (n += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var f = this._totalDuration,
                        r = this._timeline;
                    if (n > f && !i && (n = f), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? f - n : n) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== n || 0 === this._duration) && (v.length && ut(), this.render(n, t, !1), v.length && ut())
            }
            return this
        }, i.progress = i.totalProgress = function(n, t) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * n, t) : i ? this._time / i : this.ratio
        }, i.startTime = function(n) {
            return arguments.length ? (n !== this._startTime && (this._startTime = n, this.timeline && this.timeline._sortChildren && this.timeline.add(this, n - this._delay)), this) : this._startTime
        }, i.endTime = function(n) {
            return this._startTime + (0 != n ? this.totalDuration() : this.duration()) / this._timeScale
        }, i.timeScale = function(n) {
            if (!arguments.length) return this._timeScale;
            var i, t;
            for (n = n || e, this._timeline && this._timeline.smoothChildTiming && (i = this._pauseTime, t = i || 0 === i ? i : this._timeline.totalTime(), this._startTime = t - (t - this._startTime) * this._timeScale / n), this._timeScale = n, t = this.timeline; t && t.timeline;) t._dirty = !0, t.totalDuration(), t = t.timeline;
            return this
        }, i.reversed = function(n) {
            return arguments.length ? (n != this._reversed && (this._reversed = n, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, i.paused = function(n) {
            if (!arguments.length) return this._paused;
            var t, r, i = this._timeline;
            return n != this._paused && i && (h || n || u.wake(), t = i.rawTime(), r = t - this._pauseTime, !n && i.smoothChildTiming && (this._startTime += r, this._uncache(!1)), this._pauseTime = n ? t : null, this._paused = n, this._active = this.isActive(), !n && 0 !== r && this._initted && this.duration() && (t = i.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !n && this._enabled(!0, !1), this
        }, ot = l("core.SimpleTimeline", function(n) {
            o.call(this, 0, n), this.autoRemoveChildren = this.smoothChildTiming = !0
        }), i = ot.prototype = new o, i.constructor = ot, i.kill()._gc = !1, i._first = i._last = i._recent = null, i._sortChildren = !1, i.add = i.insert = function(n, t) {
            var u, f;
            if (n._startTime = Number(t || 0) + n._delay, n._paused && this !== n._timeline && (n._pauseTime = this.rawTime() - (n._timeline.rawTime() - n._pauseTime)), n.timeline && n.timeline._remove(n, !0), n.timeline = n._timeline = this, n._gc && n._enabled(!0, !0), u = this._last, this._sortChildren)
                for (f = n._startTime; u && u._startTime > f;) u = u._prev;
            return u ? (n._next = u._next, u._next = n) : (n._next = this._first, this._first = n), n._next ? n._next._prev = n : this._last = n, n._prev = u, this._recent = n, this._timeline && this._uncache(!0), this
        }, i._remove = function(n, t) {
            return n.timeline === this && (t || n._enabled(!1, !0), n._prev ? n._prev._next = n._next : this._first === n && (this._first = n._next), n._next ? n._next._prev = n._prev : this._last === n && (this._last = n._prev), n._next = n._prev = n.timeline = null, n === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, i.render = function(n, t, i) {
            var u, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = n; r;) u = r._next, (r._active || n >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i)), r = u
        }, i.rawTime = function() {
            return h || u.wake(), this._totalTime
        };
        var r = l("TweenLite", function(t, i, u) {
                if (o.call(this, i, u), this.render = r.prototype.render, null == t) throw "Cannot tween a null target.";
                this.target = t = "string" != typeof t ? t : r.selector(t) || t;
                var s, f, h, l = t.jquery || t.length && t !== n && t[0] && (t[0] === n || t[0].nodeType && t[0].style && !t.nodeType),
                    c = this.vars.overwrite;
                if (this._overwrite = c = null == c ? hi[r.defaultOverwrite] : "number" == typeof c ? c >> 0 : hi[c], (l || t instanceof Array || t.push && tt(t)) && "number" != typeof t[0])
                    for (this._targets = h = ti(t), this._propLookup = [], this._siblings = [], s = 0; s < h.length; s++) f = h[s], f ? "string" != typeof f ? f.length && f !== n && f[0] && (f[0] === n || f[0].nodeType && f[0].style && !f.nodeType) ? (h.splice(s--, 1), this._targets = h = h.concat(ti(f))) : (this._siblings[s] = st(f, this, !1), 1 === c && this._siblings[s].length > 1 && gt(f, this, null, 1, this._siblings[s])) : (f = h[s--] = r.selector(f), "string" == typeof f && h.splice(s + 1, 1)) : h.splice(s--, 1);
                else this._propLookup = {}, this._siblings = st(t, this, !1), 1 === c && this._siblings.length > 1 && gt(t, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -e, this.render(Math.min(0, -this._delay)))
            }, !0),
            wt = function(t) {
                return t && t.length && t !== n && t[0] && (t[0] === n || t[0].nodeType && t[0].style && !t.nodeType)
            },
            vi = function(n, t) {
                var i, r = {};
                for (i in n) dt[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!k[i] || k[i] && k[i]._autoCSS) || (r[i] = n[i], delete n[i]);
                n.css = r
            };
        i = r.prototype = new o, i.constructor = r, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = i._lazy = !1, r.version = "2.0.2", r.defaultEase = i._ease = new a(null, null, 1, 1), r.defaultOverwrite = "auto", r.ticker = u, r.autoSleep = 120, r.lagSmoothing = function(n, t) {
            u.lagSmoothing(n, t)
        }, r.selector = n.$ || n.jQuery || function(t) {
            var i = n.$ || n.jQuery;
            return i ? (r.selector = i, i(t)) : (y || (y = n.document), y ? y.querySelectorAll ? y.querySelectorAll(t) : y.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t)
        };
        var v = [],
            bt = {},
            fi = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            yi = /[\+-]=-?[\.\d]/,
            ei = function(n) {
                for (var i, t = this._firstPT, r = 1e-6; t;) i = t.blob ? 1 === n && null != this.end ? this.end : n ? this.join("") : this.start : t.c * n + t.s, t.m ? i = t.m.call(this._tween, i, this._target || t.t, this._tween) : r > i && i > -r && !t.blob && (i = 0), t.f ? t.fp ? t.t[t.p](t.fp, i) : t.t[t.p](i) : t.t[t.p] = i, t = t._next
            },
            oi = function(n, t, i, r) {
                var l, v, a, e, y, c, f, u = [],
                    s = 0,
                    o = "",
                    h = 0;
                for (u.start = n, u.end = t, n = u[0] = n + "", t = u[1] = t + "", i && (i(u), n = u[0], t = u[1]), u.length = 0, l = n.match(fi) || [], v = t.match(fi) || [], r && (r._next = null, r.blob = 1, u._firstPT = u._applyPT = r), y = v.length, e = 0; y > e; e++) f = v[e], c = t.substr(s, t.indexOf(f, s) - s), o += c || !e ? c : ",", s += c.length, h ? h = (h + 1) % 5 : "rgba(" === c.substr(-5) && (h = 1), f === l[e] || l.length <= e ? o += f : (o && (u.push(o), o = ""), a = parseFloat(l[e]), u.push(a), u._firstPT = {
                    _next: u._firstPT,
                    t: u,
                    p: u.length - 1,
                    s: a,
                    c: ("=" === f.charAt(1) ? parseInt(f.charAt(0) + "1", 10) * parseFloat(f.substr(2)) : parseFloat(f) - a) || 0,
                    f: 0,
                    m: h && 4 > h ? Math.round : 0
                }), s += f.length;
                return o += t.substr(s), o && u.push(o), u.setRatio = ei, yi.test(t) && (u.end = null), u
            },
            si = function(n, t, i, u, f, e, o, s, h) {
                "function" == typeof u && (u = u(h || 0, n));
                var y, p = typeof n[t],
                    v = "function" !== p ? "" : t.indexOf("set") || "function" != typeof n["get" + t.substr(3)] ? t : "get" + t.substr(3),
                    l = "get" !== i ? i : v ? o ? n[v](o) : n[v]() : n[t],
                    a = "string" == typeof u && "=" === u.charAt(1),
                    c = {
                        t: n,
                        p: t,
                        s: l,
                        f: "function" === p,
                        pg: 0,
                        n: f || t,
                        m: e ? "function" == typeof e ? e : Math.round : 0,
                        pr: 0,
                        c: a ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - l || 0
                    };
                return ("number" != typeof l || "number" != typeof u && !a) && (o || isNaN(l) || !a && isNaN(u) || "boolean" == typeof l || "boolean" == typeof u ? (c.fp = o, y = oi(l, a ? parseFloat(c.s) + c.c + (c.s + "").replace(/[0-9\-\.]/g, "") : u, s || r.defaultStringFilter, c), c = {
                    t: y,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: f || t,
                    pr: 0,
                    m: 0
                }) : (c.s = parseFloat(l), a || (c.c = parseFloat(u) - c.s || 0))), c.c ? ((c._next = this._firstPT) && (c._next._prev = c), this._firstPT = c, c) : void 0
            },
            kt = r._internals = {
                isArray: tt,
                isSelector: wt,
                lazyTweens: v,
                blobDif: oi
            },
            k = r._plugins = {},
            d = kt.tweenLookup = {},
            pi = 0,
            dt = kt.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1
            },
            hi = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            g = o._rootFramesTimeline = new ot,
            w = o._rootTimeline = new ot,
            ci = 30,
            ut = kt.lazyRender = function() {
                var n, t = v.length;
                for (bt = {}; --t > -1;) n = v[t], n && n._lazy !== !1 && (n.render(n._lazy[0], n._lazy[1], !0), n._lazy = !1);
                v.length = 0
            };
        w._startTime = u.time, g._startTime = u.frame, w._active = g._active = !0, setTimeout(ut, 1), o._updateRoot = r.render = function() {
            var i, t, n;
            if (v.length && ut(), w.render((u.time - w._startTime) * w._timeScale, !1, !1), g.render((u.frame - g._startTime) * g._timeScale, !1, !1), v.length && ut(), u.frame >= ci) {
                ci = u.frame + (parseInt(r.autoSleep, 10) || 120);
                for (n in d) {
                    for (t = d[n].tweens, i = t.length; --i > -1;) t[i]._gc && t.splice(i, 1);
                    0 === t.length && delete d[n]
                }
                if (n = w._first, (!n || n._paused) && r.autoSleep && !g._first && 1 === u._listeners.tick.length) {
                    for (; n && n._paused;) n = n._next;
                    n || u.sleep()
                }
            }
        }, u.addEventListener("tick", o._updateRoot);
        var st = function(n, t, i) {
                var r, f, u = n._gsTweenID;
                if (d[u || (n._gsTweenID = u = "t" + pi++)] || (d[u] = {
                        target: n,
                        tweens: []
                    }), t && (r = d[u].tweens, r[f = r.length] = t, i))
                    for (; --f > -1;) r[f] === t && r.splice(f, 1);
                return d[u].tweens
            },
            li = function(n, t, i, u) {
                var e, o, f = n.vars.onOverwrite;
                return f && (e = f(n, t, i, u)), f = r.onOverwrite, f && (o = f(n, t, i, u)), e !== !1 && o !== !1
            },
            gt = function(n, t, i, r, u) {
                var o, s, f, h;
                if (1 === r || r >= 4) {
                    for (h = u.length, o = 0; h > o; o++)
                        if ((f = u[o]) !== t) f._gc || f._kill(null, n, t) && (s = !0);
                        else if (5 === r) break;
                    return s
                }
                var c, l = t._startTime + e,
                    a = [],
                    v = 0,
                    y = 0 === t._duration;
                for (o = u.length; --o > -1;)(f = u[o]) === t || f._gc || f._paused || (f._timeline !== t._timeline ? (c = c || ai(t, 0, y), 0 === ai(f, c, y) && (a[v++] = f)) : f._startTime <= l && f._startTime + f.totalDuration() / f._timeScale > l && ((y || !f._initted) && l - f._startTime <= 2e-10 || (a[v++] = f)));
                for (o = v; --o > -1;)
                    if (f = a[o], h = f._firstPT, 2 === r && f._kill(i, n, t) && (s = !0), 2 !== r || !f._firstPT && f._initted && h) {
                        if (2 !== r && !li(f, t)) continue;
                        f._enabled(!1, !1) && (s = !0)
                    } return s
            },
            ai = function(n, t, i) {
                for (var u = n._timeline, f = u._timeScale, r = n._startTime; u._timeline;) {
                    if (r += u._startTime, f *= u._timeScale, u._paused) return -100;
                    u = u._timeline
                }
                return r /= f, r > t ? r - t : i && r === t || !n._initted && 2 * e > r - t ? e : (r += n.totalDuration() / n._timeScale / f) > t + e ? 0 : r - t - e
            };
        if (i._init = function() {
                var f, h, t, e, i, c, n = this.vars,
                    s = this._overwrittenProps,
                    l = this._duration,
                    o = !!n.immediateRender,
                    u = n.ease;
                if (n.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), i = {};
                    for (e in n.startAt) i[e] = n.startAt[e];
                    if (i.data = "isStart", i.overwrite = !1, i.immediateRender = !0, i.lazy = o && n.lazy !== !1, i.startAt = i.delay = null, i.onUpdate = n.onUpdate, i.onUpdateParams = n.onUpdateParams, i.onUpdateScope = n.onUpdateScope || n.callbackScope || this, this._startAt = r.to(this.target || {}, 0, i), o)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== l) return
                } else if (n.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (o = !1), t = {};
                        for (e in n) dt[e] && "autoCSS" !== e || (t[e] = n[e]);
                        if (t.overwrite = 0, t.data = "isFromStart", t.lazy = o && n.lazy !== !1, t.immediateRender = o, this._startAt = r.to(this.target, 0, t), o) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    } if (this._ease = u = u ? u instanceof a ? u : "function" == typeof u ? new a(u, n.easeParams) : ft[u] || r.defaultEase : r.defaultEase, n.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (c = this._targets.length, f = 0; c > f; f++) this._initProps(this._targets[f], this._propLookup[f] = {}, this._siblings[f], s ? s[f] : null, f) && (h = !0);
                else h = this._initProps(this.target, this._propLookup, this._siblings, s, 0);
                if (h && r._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (t = this._firstPT; t;) t.s += t.c, t.c = -t.c, t = t._next;
                this._onUpdate = n.onUpdate, this._initted = !0
            }, i._initProps = function(t, i, r, u, f) {
                var e, c, l, o, h, s;
                if (null == t) return !1;
                bt[t._gsTweenID] && ut(), this.vars.css || t.style && t !== n && t.nodeType && k.css && this.vars.autoCSS !== !1 && vi(this.vars, t);
                for (e in this.vars)
                    if (s = this.vars[e], dt[e]) s && (s instanceof Array || s.push && tt(s)) && -1 !== s.join("").indexOf("{self}") && (this.vars[e] = s = this._swapSelfInParams(s, this));
                    else if (k[e] && (o = new k[e])._onInitTween(t, this.vars[e], this, f)) {
                    for (this._firstPT = h = {
                            _next: this._firstPT,
                            t: o,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: e,
                            pg: 1,
                            pr: o._priority,
                            m: 0
                        }, c = o._overwriteProps.length; --c > -1;) i[o._overwriteProps[c]] = this._firstPT;
                    (o._priority || o._onInitAllProps) && (l = !0), (o._onDisable || o._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
                } else i[e] = si.call(this, t, e, "get", s, e, 0, null, this.vars.stringFilter, f);
                return u && this._kill(u, t) ? this._initProps(t, i, r, u, f) : this._overwrite > 1 && this._firstPT && r.length > 1 && gt(t, this, i, this._overwrite, r) ? (this._kill(i, t), this._initProps(t, i, r, u, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (bt[t._gsTweenID] = !0), l)
            }, i.render = function(n, t, i) {
                var h, s, u, y, c = this._time,
                    f = this._duration,
                    o = this._rawPrevTime;
                if (n >= f - 1e-7 && n >= 0) this._totalTime = this._time = f, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (h = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === f && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (n = 0), (0 > o || 0 >= n && n >= -1e-7 || o === e && "isPause" !== this.data) && o !== n && (i = !0, o > e && (s = "onReverseComplete")), this._rawPrevTime = y = !t || n || o === n ? n : e);
                else if (1e-7 > n) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== c || 0 === f && o > 0) && (s = "onReverseComplete", h = this._reversed), 0 > n && (this._active = !1, 0 === f && (this._initted || !this.vars.lazy || i) && (o >= 0 && (o !== e || "isPause" !== this.data) && (i = !0), this._rawPrevTime = y = !t || n || o === n ? n : e)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                else if (this._totalTime = this._time = n, this._easeType) {
                    var r = n / f,
                        l = this._easeType,
                        a = this._easePower;
                    (1 === l || 3 === l && r >= .5) && (r = 1 - r), 3 === l && (r *= 2), 1 === a ? r *= r : 2 === a ? r *= r * r : 3 === a ? r *= r * r * r : 4 === a && (r *= r * r * r * r), this.ratio = 1 === l ? 1 - r : 2 === l ? r : .5 > n / f ? r / 2 : 1 - r / 2
                } else this.ratio = this._ease.getRatio(n / f);
                if (this._time !== c || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = c, this._rawPrevTime = o, v.push(this), void(this._lazy = [n, t]);
                        this._time && !h ? this.ratio = this._ease.getRatio(this._time / f) : h && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== c && n >= 0 && (this._active = !0), 0 === c && (this._startAt && (n >= 0 ? this._startAt.render(n, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === f) && (t || this._callback("onStart"))), u = this._firstPT; u;) u.f ? u.t[u.p](u.c * this.ratio + u.s) : u.t[u.p] = u.c * this.ratio + u.s, u = u._next;
                    this._onUpdate && (0 > n && this._startAt && n !== -.0001 && this._startAt.render(n, !0, i), t || (this._time !== c || h || i) && this._callback("onUpdate")), s && (!this._gc || i) && (0 > n && this._startAt && !this._onUpdate && n !== -.0001 && this._startAt.render(n, !0, i), h && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this._callback(s), 0 === f && this._rawPrevTime === e && y !== e && (this._rawPrevTime = 0))
                }
            }, i._kill = function(n, t, i) {
                if ("all" === n && (n = null), null == n && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : r.selector(t) || t;
                var f, s, o, u, e, c, l, a, h, v = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                    y = this._firstPT;
                if ((tt(t) || wt(t)) && "number" != typeof t[0])
                    for (f = t.length; --f > -1;) this._kill(n, t[f], i) && (c = !0);
                else {
                    if (this._targets) {
                        for (f = this._targets.length; --f > -1;)
                            if (t === this._targets[f]) {
                                e = this._propLookup[f] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[f] = n ? this._overwrittenProps[f] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        e = this._propLookup, s = this._overwrittenProps = n ? this._overwrittenProps || {} : "all"
                    }
                    if (e) {
                        if (l = n || e, a = n !== s && "all" !== s && n !== e && ("object" != typeof n || !n._tempKill), i && (r.onOverwrite || this.vars.onOverwrite)) {
                            for (o in l) e[o] && (h || (h = []), h.push(o));
                            if ((h || !n) && !li(this, i, t, h)) return !1
                        }
                        for (o in l)(u = e[o]) && (v && (u.f ? u.t[u.p](u.s) : u.t[u.p] = u.s, c = !0), u.pg && u.t._kill(l) && (c = !0), u.pg && 0 !== u.t._overwriteProps.length || (u._prev ? u._prev._next = u._next : u === this._firstPT && (this._firstPT = u._next), u._next && (u._next._prev = u._prev), u._next = u._prev = null), delete e[o]), a && (s[o] = 1);
                        !this._firstPT && this._initted && y && this._enabled(!1, !1)
                    }
                }
                return c
            }, i.invalidate = function() {
                return this._notifyPluginsOfEnabled && r._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], o.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -e, this.render(Math.min(0, -this._delay))), this
            }, i._enabled = function(n, t) {
                if (h || u.wake(), n && this._gc) {
                    var i, f = this._targets;
                    if (f)
                        for (i = f.length; --i > -1;) this._siblings[i] = st(f[i], this, !0);
                    else this._siblings = st(this.target, this, !0)
                }
                return o.prototype._enabled.call(this, n, t), this._notifyPluginsOfEnabled && this._firstPT ? r._onPluginEvent(n ? "_onEnable" : "_onDisable", this) : !1
            }, r.to = function(n, t, i) {
                return new r(n, t, i)
            }, r.from = function(n, t, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(n, t, i)
            }, r.fromTo = function(n, t, i, u) {
                return u.startAt = i, u.immediateRender = 0 != u.immediateRender && 0 != i.immediateRender, new r(n, t, u)
            }, r.delayedCall = function(n, t, i, u, f) {
                return new r(t, 0, {
                    delay: n,
                    onComplete: t,
                    onCompleteParams: i,
                    callbackScope: u,
                    onReverseComplete: t,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: f,
                    overwrite: 0
                })
            }, r.set = function(n, t) {
                return new r(n, 0, t)
            }, r.getTweensOf = function(n, t) {
                if (null == n) return [];
                n = "string" != typeof n ? n : r.selector(n) || n;
                var i, u, f, e;
                if ((tt(n) || wt(n)) && "number" != typeof n[0]) {
                    for (i = n.length, u = []; --i > -1;) u = u.concat(r.getTweensOf(n[i], t));
                    for (i = u.length; --i > -1;)
                        for (e = u[i], f = i; --f > -1;) e === u[f] && u.splice(i, 1)
                } else if (n._gsTweenID)
                    for (u = st(n).concat(), i = u.length; --i > -1;)(u[i]._gc || t && !u[i].isActive()) && u.splice(i, 1);
                return u || []
            }, r.killTweensOf = r.killDelayedCallsTo = function(n, t, i) {
                "object" == typeof t && (i = t, t = !1);
                for (var u = r.getTweensOf(n, t), f = u.length; --f > -1;) u[f]._kill(i, n)
            }, c = l("plugins.TweenPlugin", function(n, t) {
                this._overwriteProps = (n || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = c.prototype
            }, !0), i = c.prototype, c.version = "1.19.0", c.API = 2, i._firstPT = null, i._addTween = si, i.setRatio = ei, i._kill = function(n) {
                var i, r = this._overwriteProps,
                    t = this._firstPT;
                if (null != n[this._propName]) this._overwriteProps = [];
                else
                    for (i = r.length; --i > -1;) null != n[r[i]] && r.splice(i, 1);
                for (; t;) null != n[t.n] && (t._next && (t._next._prev = t._prev), t._prev ? (t._prev._next = t._next, t._prev = null) : this._firstPT === t && (this._firstPT = t._next)), t = t._next;
                return !1
            }, i._mod = i._roundProps = function(n) {
                for (var i, t = this._firstPT; t;) i = n[this._propName] || null != t.n && n[t.n.split(this._propName + "_").join("")], i && "function" == typeof i && (2 === t.f ? t.t._applyPT.m = i : t.m = i), t = t._next
            }, r._onPluginEvent = function(n, t) {
                var f, r, u, e, o, i = t._firstPT;
                if ("_onInitAllProps" === n) {
                    for (; i;) {
                        for (o = i._next, r = u; r && r.pr > i.pr;) r = r._next;
                        (i._prev = r ? r._prev : e) ? i._prev._next = i: u = i, (i._next = r) ? r._prev = i : e = i, i = o
                    }
                    i = t._firstPT = u
                }
                for (; i;) i.pg && "function" == typeof i.t[n] && i.t[n]() && (f = !0), i = i._next;
                return f
            }, c.activate = function(n) {
                for (var t = n.length; --t > -1;) n[t].API === c.API && (k[(new n[t])._propName] = n[t]);
                return !0
            }, lt.plugin = function(n) {
                if (!(n && n.propName && n.init && n.API)) throw "illegal plugin definition.";
                var i, r = n.propName,
                    e = n.priority || 0,
                    o = n.overwriteProps,
                    u = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    },
                    t = l("plugins." + r.charAt(0).toUpperCase() + r.substr(1) + "Plugin", function() {
                        c.call(this, r, e), this._overwriteProps = o || []
                    }, n.global === !0),
                    f = t.prototype = new c(r);
                f.constructor = t, t.API = n.API;
                for (i in u) "function" == typeof n[i] && (f[u[i]] = n[i]);
                return t.version = n.version, c.activate([t]), t
            }, s = n._gsQueue) {
            for (f = 0; f < s.length; f++) s[f]();
            for (i in it) it[i].func || n.console.log("GSAP encountered missing dependency: " + i)
        }
        h = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(n, t) {
        typeof define == "function" && define.amd ? define(t) : typeof exports == "object" ? module.exports = t() : n.ScrollMagic = t()
    }(this, function() {
        "use strict";
        var t = function() {
                n.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
            },
            r, u, i, n;
        return t.version = "2.0.7", window.addEventListener("mousewheel", function() {}), r = "data-scrollmagic-pin-spacer", t.Controller = function(i) {
            var l = "ScrollMagic.Controller",
                st = "FORWARD",
                g = "REVERSE",
                nt = "PAUSED",
                k = u.defaults,
                e = this,
                f = n.extend({}, k, i),
                o = [],
                h = !1,
                v = 0,
                y = nt,
                c = !0,
                p = 0,
                w = !0,
                tt, it, ht = function() {
                    var i, r;
                    for (i in f) k.hasOwnProperty(i) || (s(2, 'WARNING: Unknown option "' + i + '"'), delete f[i]);
                    if (f.container = n.get.elements(f.container)[0], !f.container) {
                        s(1, "ERROR creating object " + l + ": No valid scroll container supplied");
                        throw l + " init failed.";
                    }
                    c = f.container === window || f.container === document.body || !document.body.contains(f.container), c && (f.container = window), p = d(), f.container.addEventListener("resize", a), f.container.addEventListener("scroll", a), r = parseInt(f.refreshInterval, 10), f.refreshInterval = n.type.Number(r) ? r : k.refreshInterval, rt(), s(3, "added new " + l + " controller (v" + t.version + ")")
                },
                rt = function() {
                    f.refreshInterval > 0 && (it = window.setTimeout(ct, f.refreshInterval))
                },
                ut = function() {
                    return f.vertical ? n.get.scrollTop(f.container) : n.get.scrollLeft(f.container)
                },
                d = function() {
                    return f.vertical ? n.get.height(f.container) : n.get.width(f.container)
                },
                ft = this._setScrollPos = function(t) {
                    f.vertical ? c ? window.scrollTo(n.get.scrollLeft(), t) : f.container.scrollTop = t : c ? window.scrollTo(t, n.get.scrollTop()) : f.container.scrollLeft = t
                },
                et = function() {
                    var t, r, i;
                    w && h && (t = n.type.Array(h) ? h : o.slice(0), h = !1, r = v, v = e.scrollPos(), i = v - r, i !== 0 && (y = i > 0 ? st : g), y === g && t.reverse(), t.forEach(function(n, i) {
                        s(3, "updating Scene " + (i + 1) + "/" + t.length + " (" + o.length + " total)"), n.update(!0)
                    }), t.length === 0 && f.loglevel >= 3 && s(3, "updating 0 Scenes (nothing added to controller)"))
                },
                ot = function() {
                    tt = n.rAF(et)
                },
                a = function(n) {
                    s(3, "event fired causing an update:", n.type), n.type == "resize" && (p = d(), y = nt), h !== !0 && (h = !0, ot())
                },
                ct = function() {
                    if (!c && p != d()) {
                        var n;
                        try {
                            n = new Event("resize", {
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (t) {
                            n = document.createEvent("Event"), n.initEvent("resize", !1, !1)
                        }
                        f.container.dispatchEvent(n)
                    }
                    o.forEach(function(n) {
                        n.refresh()
                    }), rt()
                },
                s = this._log = function(t) {
                    f.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + l + ") ->"), n.log.apply(window, arguments))
                },
                b;
            return this._options = f, b = function(n) {
                if (n.length <= 1) return n;
                var t = n.slice(0);
                return t.sort(function(n, t) {
                    return n.scrollOffset() > t.scrollOffset() ? 1 : -1
                }), t
            }, this.addScene = function(i) {
                if (n.type.Array(i)) i.forEach(function(n) {
                    e.addScene(n)
                });
                else if (i instanceof t.Scene) {
                    if (i.controller() !== e) i.addTo(e);
                    else if (o.indexOf(i) < 0) {
                        o.push(i), o = b(o);
                        i.on("shift.controller_sort", function() {
                            o = b(o)
                        });
                        for (var r in f.globalSceneOptions) i[r] && i[r].call(i, f.globalSceneOptions[r]);
                        s(3, "adding Scene (now " + o.length + " total)")
                    }
                } else s(1, "ERROR: invalid argument supplied for '.addScene()'");
                return e
            }, this.removeScene = function(t) {
                if (n.type.Array(t)) t.forEach(function(n) {
                    e.removeScene(n)
                });
                else {
                    var i = o.indexOf(t);
                    i > -1 && (t.off("shift.controller_sort"), o.splice(i, 1), s(3, "removing Scene (now " + o.length + " left)"), t.remove())
                }
                return e
            }, this.updateScene = function(i, r) {
                return n.type.Array(i) ? i.forEach(function(n) {
                    e.updateScene(n, r)
                }) : r ? i.update(!0) : h !== !0 && i instanceof t.Scene && (h = h || [], h.indexOf(i) == -1 && h.push(i), h = b(h), ot()), e
            }, this.update = function(n) {
                return a({
                    type: "resize"
                }), n && et(), e
            }, this.scrollTo = function(i, u) {
                var o;
                if (n.type.Number(i)) ft.call(f.container, i, u);
                else if (i instanceof t.Scene) i.controller() === e ? e.scrollTo(i.scrollOffset(), u) : s(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", i);
                else if (n.type.Function(i)) ft = i;
                else if (o = n.get.elements(i)[0], o) {
                    while (o.parentNode.hasAttribute(r)) o = o.parentNode;
                    var h = f.vertical ? "top" : "left",
                        l = n.get.offset(f.container),
                        a = n.get.offset(o);
                    c || (l[h] -= e.scrollPos()), e.scrollTo(a[h] - l[h], u)
                } else s(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", i);
                return e
            }, this.scrollPos = function(t) {
                if (arguments.length) n.type.Function(t) ? ut = t : s(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
                else return ut.call(e);
                return e
            }, this.info = function(n) {
                var t = {
                    size: p,
                    vertical: f.vertical,
                    scrollPos: v,
                    scrollDirection: y,
                    container: f.container,
                    isDocument: c
                };
                if (arguments.length) {
                    if (t[n] !== undefined) return t[n];
                    s(1, 'ERROR: option "' + n + '" is not available');
                    return
                }
                return t
            }, this.loglevel = function(n) {
                if (arguments.length) f.loglevel != n && (f.loglevel = n);
                else return f.loglevel;
                return e
            }, this.enabled = function(n) {
                if (arguments.length) w != n && (w = !!n, e.updateScene(o, !0));
                else return w;
                return e
            }, this.destroy = function(t) {
                window.clearTimeout(it);
                for (var i = o.length; i--;) o[i].destroy(t);
                return f.container.removeEventListener("resize", a), f.container.removeEventListener("scroll", a), n.cAF(tt), s(3, "destroyed " + l + " (reset: " + (t ? "true" : "false") + ")"), null
            }, ht(), e
        }, u = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        }, t.Controller.addOption = function(n, t) {
            u.defaults[n] = t
        }, t.Controller.extend = function(i) {
            var r = this;
            t.Controller = function() {
                return r.apply(this, arguments), this.$super = n.extend({}, this), i.apply(this, arguments) || this
            }, n.extend(t.Controller, r), t.Controller.prototype = r.prototype, t.Controller.prototype.constructor = t.Controller
        }, t.Scene = function(u) {
            var it = "ScrollMagic.Scene",
                p = "BEFORE",
                a = "DURING",
                g = "AFTER",
                rt = i.defaults,
                f = this,
                h = n.extend({}, rt, u),
                c = p,
                v = 0,
                y = {
                    start: 0,
                    end: 0
                },
                nt = 0,
                ut = !0,
                w, o, wt = function() {
                    var n, t;
                    for (n in h) rt.hasOwnProperty(n) || (l(2, 'WARNING: Unknown option "' + n + '"'), delete h[n]);
                    for (t in rt) bt(t);
                    ct()
                },
                b = {},
                l, e, s, ot, d;
            this.on = function(t, i) {
                return n.type.Function(i) ? (t = t.trim().split(" "), t.forEach(function(n) {
                    var r = n.split("."),
                        t = r[0],
                        u = r[1];
                    t != "*" && (b[t] || (b[t] = []), b[t].push({
                        namespace: u || "",
                        callback: i
                    }))
                })) : l(1, "ERROR when calling '.on()': Supplied callback for '" + t + "' is not a valid function!"), f
            }, this.off = function(n, t) {
                return n ? (n = n.trim().split(" "), n.forEach(function(n) {
                    var r = n.split("."),
                        u = r[0],
                        f = r[1] || "",
                        e = u === "*" ? Object.keys(b) : [u];
                    e.forEach(function(n) {
                        for (var i = b[n] || [], u = i.length, r; u--;) r = i[u], r && (f === r.namespace || f === "*") && (!t || t == r.callback) && i.splice(u, 1);
                        i.length || delete b[n]
                    })
                }), f) : (l(1, "ERROR: Invalid event name supplied."), f)
            }, this.trigger = function(n, i) {
                if (n) {
                    var u = n.trim().split("."),
                        r = u[0],
                        e = u[1],
                        o = b[r];
                    l(3, "event fired:", r, i ? "->" : "", i || ""), o && o.forEach(function(n) {
                        e && e !== n.namespace || n.callback.call(f, new t.Event(r, n.namespace, f, i))
                    })
                } else l(1, "ERROR: Invalid event name supplied.");
                return f
            };
            f.on("change.internal", function(n) {
                n.what !== "loglevel" && n.what !== "tweenChanges" && (n.what === "triggerElement" ? st() : n.what === "reverse" && f.update())
            }).on("shift.internal", function() {
                lt(), f.update()
            });
            l = this._log = function(t) {
                h.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + it + ") ->"), n.log.apply(window, arguments))
            }, this.addTo = function(n) {
                return n instanceof t.Controller ? o != n && (o && o.removeScene(f), o = n, ct(), at(!0), st(!0), lt(), o.info("container").addEventListener("resize", vt), n.addScene(f), f.trigger("add", {
                    controller: o
                }), l(3, "added " + it + " to controller"), f.update()) : l(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), f
            }, this.enabled = function(n) {
                if (arguments.length) ut != n && (ut = !!n, f.update(!0));
                else return ut;
                return f
            }, this.remove = function() {
                if (o) {
                    o.info("container").removeEventListener("resize", vt);
                    var n = o;
                    o = undefined, n.removeScene(f), f.trigger("remove"), l(3, "removed " + it + " from controller")
                }
                return f
            }, this.destroy = function(n) {
                return f.trigger("destroy", {
                    reset: n
                }), f.remove(), f.off("*.*"), l(3, "destroyed " + it + " (reset: " + (n ? "true" : "false") + ")"), null
            }, this.update = function(n) {
                if (o)
                    if (n)
                        if (o.enabled() && ut) {
                            var t = o.info("scrollPos"),
                                i;
                            i = h.duration > 0 ? (t - y.start) / (y.end - y.start) : t >= y.start ? 1 : 0, f.trigger("update", {
                                startPos: y.start,
                                endPos: y.end,
                                scrollPos: t
                            }), f.progress(i)
                        } else e && c === a && k(!0);
                else o.updateScene(f, !1);
                return f
            }, this.refresh = function() {
                return at(), st(), f
            }, this.progress = function(n) {
                if (arguments.length) {
                    var t = !1,
                        u = c,
                        s = o ? o.info("scrollDirection") : "PAUSED",
                        r = h.reverse || n >= v;
                    if (h.duration === 0 ? (t = v != n, v = n < 1 && r ? 0 : 1, c = v === 0 ? p : a) : n < 0 && c !== p && r ? (v = 0, c = p, t = !0) : n >= 0 && n < 1 && r ? (v = n, c = a, t = !0) : n >= 1 && c !== g ? (v = 1, c = g, t = !0) : c !== a || r || k(), t) {
                        var l = {
                                progress: v,
                                state: c,
                                scrollDirection: s
                            },
                            e = c != u,
                            i = function(n) {
                                f.trigger(n, l)
                            };
                        e && u !== a && (i("enter"), i(u === p ? "start" : "end")), i("progress"), e && c !== a && (i(c === p ? "start" : "end"), i("leave"))
                    }
                    return f
                }
                return v
            };
            var lt = function() {
                    y = {
                        start: nt + h.offset
                    }, o && h.triggerElement && (y.start -= o.info("size") * h.triggerHook), y.end = y.start + h.duration
                },
                at = function(n) {
                    if (w) {
                        var t = "duration";
                        yt(t, w.call(f)) && !n && (f.trigger("change", {
                            what: t,
                            newval: h[t]
                        }), f.trigger("shift", {
                            reason: t
                        }))
                    }
                },
                st = function(t) {
                    var u = 0,
                        i = h.triggerElement,
                        a, v;
                    if (o && (i || nt > 0)) {
                        if (i)
                            if (i.parentNode) {
                                for (var e = o.info(), c = n.get.offset(e.container), s = e.vertical ? "top" : "left"; i.parentNode.hasAttribute(r);) i = i.parentNode;
                                a = n.get.offset(i), e.isDocument || (c[s] -= o.scrollPos()), u = a[s] - c[s]
                            } else l(2, "WARNING: triggerElement was removed from DOM and will be reset to", undefined), f.triggerElement(undefined);
                        v = u != nt, nt = u, v && !t && f.trigger("shift", {
                            reason: "triggerElementPosition"
                        })
                    }
                },
                vt = function() {
                    h.triggerHook > 0 && f.trigger("shift", {
                        reason: "containerResize"
                    })
                },
                ht = n.extend(i.validate, {
                    duration: function(t) {
                        if (n.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                            var i = parseFloat(t) / 100;
                            t = function() {
                                return o ? o.info("size") * i : 0
                            }
                        }
                        if (n.type.Function(t)) {
                            w = t;
                            try {
                                t = parseFloat(w.call(f))
                            } catch (r) {
                                t = -1
                            }
                        }
                        if (t = parseFloat(t), !n.type.Number(t) || t < 0)
                            if (w) {
                                w = undefined;
                                throw ['Invalid return value of supplied function for option "duration":', t];
                            } else throw ['Invalid value for option "duration":', t];
                        return t
                    }
                }),
                ct = function(t) {
                    t = arguments.length ? [t] : Object.keys(ht), t.forEach(function(t) {
                        var u, r;
                        if (ht[t]) try {
                            u = ht[t](h[t])
                        } catch (f) {
                            u = rt[t], r = n.type.String(f) ? [f] : f, n.type.Array(r) ? (r[0] = "ERROR: " + r[0], r.unshift(1), l.apply(this, r)) : l(1, "ERROR: Problem executing validation callback for option '" + t + "':", f.message)
                        } finally {
                            h[t] = u
                        }
                    })
                },
                yt = function(n, t) {
                    var i = !1,
                        r = h[n];
                    return h[n] != t && (h[n] = t, ct(n), i = r != h[n]), i
                },
                bt = function(n) {
                    f[n] || (f[n] = function(t) {
                        if (arguments.length) n === "duration" && (w = undefined), yt(n, t) && (f.trigger("change", {
                            what: n,
                            newval: h[n]
                        }), i.shifts.indexOf(n) > -1 && f.trigger("shift", {
                            reason: n
                        }));
                        else return h[n];
                        return f
                    })
                };
            this.controller = function() {
                return o
            }, this.state = function() {
                return c
            }, this.scrollOffset = function() {
                return y.start
            }, this.triggerPosition = function() {
                var n = h.offset;
                return o && (n += h.triggerElement ? nt : o.info("size") * f.triggerHook()), n
            };
            f.on("shift.internal", function(n) {
                var t = n.reason === "duration";
                (c === g && t || c === a && h.duration === 0) && k(), t && tt()
            }).on("progress.internal", function() {
                k()
            }).on("add.internal", function() {
                tt()
            }).on("destroy.internal", function(n) {
                f.removePin(n.reset)
            });
            var k = function(t) {
                    var r, i, u, w, f, l;
                    e && o && (r = o.info(), i = s.spacer.firstChild, t || c !== a ? (f = {
                        position: s.inFlow ? "relative" : "absolute",
                        top: 0,
                        left: 0
                    }, l = n.css(i, "position") != f.position, s.pushFollowers ? h.duration > 0 && (c === g && parseFloat(n.css(s.spacer, "padding-top")) === 0 ? l = !0 : c === p && parseFloat(n.css(s.spacer, "padding-bottom")) === 0 && (l = !0)) : f[r.vertical ? "top" : "left"] = h.duration * v, n.css(i, f), l && tt()) : (n.css(i, "position") != "fixed" && (n.css(i, {
                        position: "fixed"
                    }), tt()), u = n.get.offset(s.spacer, !0), w = h.reverse || h.duration === 0 ? r.scrollPos - y.start : Math.round(v * h.duration * 10) / 10, u[r.vertical ? "top" : "left"] += w, n.css(s.spacer.firstChild, {
                        top: u.top,
                        left: u.left
                    })))
                },
                tt = function() {
                    if (e && o && s.inFlow) {
                        var l = c === g,
                            y = c === p,
                            i = c === a,
                            r = o.info("vertical"),
                            u = s.spacer.firstChild,
                            f = n.isMarginCollapseType(n.css(s.spacer, "display")),
                            t = {};
                        s.relSize.width || s.relSize.autoFullWidth ? i ? n.css(e, {
                            width: n.get.width(s.spacer)
                        }) : n.css(e, {
                            width: "100%"
                        }) : (t["min-width"] = n.get.width(r ? e : u, !0, !0), t.width = i ? t["min-width"] : "auto"), s.relSize.height ? i ? n.css(e, {
                            height: n.get.height(s.spacer) - (s.pushFollowers ? h.duration : 0)
                        }) : n.css(e, {
                            height: "100%"
                        }) : (t["min-height"] = n.get.height(r ? u : e, !0, !f), t.height = i ? t["min-height"] : "auto"), s.pushFollowers && (t["padding" + (r ? "Top" : "Left")] = h.duration * v, t["padding" + (r ? "Bottom" : "Right")] = h.duration * (1 - v)), n.css(s.spacer, t)
                    }
                },
                ft = function() {
                    o && e && c === a && !o.info("isDocument") && k()
                },
                pt = function() {
                    o && e && c === a && ((s.relSize.width || s.relSize.autoFullWidth) && n.get.width(window) != n.get.width(s.spacer.parentNode) || s.relSize.height && n.get.height(window) != n.get.height(s.spacer.parentNode)) && tt()
                },
                et = function(n) {
                    o && e && c === a && !o.info("isDocument") && (n.preventDefault(), o._setScrollPos(o.info("scrollPos") - ((n.wheelDelta || n[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -n.detail * 30)))
                };
            this.setPin = function(t, i) {
                var d = {
                        pushFollowers: !0,
                        spacerClass: "scrollmagic-pin-spacer"
                    },
                    g = i && i.hasOwnProperty("pushFollowers"),
                    y, a, u, v, w, b;
                if (i = n.extend({}, d, i), t = n.get.elements(t)[0], t) {
                    if (n.css(t, "position") === "fixed") return l(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), f
                } else return l(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), f;
                if (e) {
                    if (e === t) return f;
                    f.removePin()
                }
                e = t, y = e.parentNode.style.display, a = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"], e.parentNode.style.display = "none";
                var o = n.css(e, "position") != "absolute",
                    p = n.css(e, a.concat(["display"])),
                    c = n.css(e, ["width", "height"]);
                return e.parentNode.style.display = y, !o && i.pushFollowers && (l(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), i.pushFollowers = !1), window.setTimeout(function() {
                    e && h.duration === 0 && g && i.pushFollowers && l(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
                }, 0), u = e.parentNode.insertBefore(document.createElement("div"), e), v = n.extend(p, {
                    position: o ? "relative" : "absolute",
                    boxSizing: "content-box",
                    mozBoxSizing: "content-box",
                    webkitBoxSizing: "content-box"
                }), o || n.extend(v, n.css(e, ["width", "height"])), n.css(u, v), u.setAttribute(r, ""), n.addClass(u, i.spacerClass), s = {
                    spacer: u,
                    relSize: {
                        width: c.width.slice(-1) === "%",
                        height: c.height.slice(-1) === "%",
                        autoFullWidth: c.width === "auto" && o && n.isMarginCollapseType(p.display)
                    },
                    pushFollowers: i.pushFollowers,
                    inFlow: o
                }, e.___origStyle || (e.___origStyle = {}, w = e.style, b = a.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]), b.forEach(function(n) {
                    e.___origStyle[n] = w[n] || ""
                })), s.relSize.width && n.css(u, {
                    width: c.width
                }), s.relSize.height && n.css(u, {
                    height: c.height
                }), u.appendChild(e), n.css(e, {
                    position: o ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), (s.relSize.width || s.relSize.autoFullWidth) && n.css(e, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }), window.addEventListener("scroll", ft), window.addEventListener("resize", ft), window.addEventListener("resize", pt), e.addEventListener("mousewheel", et), e.addEventListener("DOMMouseScroll", et), l(3, "added pin"), k(), f
            }, this.removePin = function(t) {
                var i;
                if (e) {
                    if (c === a && k(!0), t || !o) {
                        if (i = s.spacer.firstChild, i.hasAttribute(r)) {
                            var h = s.spacer.style,
                                v = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"],
                                u = {};
                            v.forEach(function(n) {
                                u[n] = h[n] || ""
                            }), n.css(i, u)
                        }
                        s.spacer.parentNode.insertBefore(i, s.spacer), s.spacer.parentNode.removeChild(s.spacer), e.parentNode.hasAttribute(r) || (n.css(e, e.___origStyle), delete e.___origStyle)
                    }
                    window.removeEventListener("scroll", ft), window.removeEventListener("resize", ft), window.removeEventListener("resize", pt), e.removeEventListener("mousewheel", et), e.removeEventListener("DOMMouseScroll", et), e = undefined, l(3, "removed pin (reset: " + (t ? "true" : "false") + ")")
                }
                return f
            }, d = [];
            f.on("destroy.internal", function(n) {
                f.removeClassToggle(n.reset)
            });
            return this.setClassToggle = function(t, i) {
                var r = n.get.elements(t);
                if (r.length === 0 || !n.type.String(i)) return l(1, "ERROR calling method 'setClassToggle()': Invalid " + (r.length === 0 ? "element" : "classes") + " supplied."), f;
                d.length > 0 && f.removeClassToggle(), ot = i, d = r;
                f.on("enter.internal_class leave.internal_class", function(t) {
                    var i = t.type === "enter" ? n.addClass : n.removeClass;
                    d.forEach(function(n) {
                        i(n, ot)
                    })
                });
                return f
            }, this.removeClassToggle = function(t) {
                return t && d.forEach(function(t) {
                    n.removeClass(t, ot)
                }), f.off("start.internal_class end.internal_class"), ot = undefined, d = [], f
            }, wt(), f
        }, i = {
            defaults: {
                duration: 0,
                offset: 0,
                triggerElement: undefined,
                triggerHook: .5,
                reverse: !0,
                loglevel: 2
            },
            validate: {
                offset: function(t) {
                    if (t = parseFloat(t), !n.type.Number(t)) throw ['Invalid value for option "offset":', t];
                    return t
                },
                triggerElement: function(t) {
                    if (t = t || undefined, t) {
                        var i = n.get.elements(t)[0];
                        if (i && i.parentNode) t = i;
                        else throw ['Element defined in option "triggerElement" was not found:', t];
                    }
                    return t
                },
                triggerHook: function(t) {
                    var i = {
                        onCenter: .5,
                        onEnter: 1,
                        onLeave: 0
                    };
                    if (n.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
                    else if (t in i) t = i[t];
                    else throw ['Invalid value for option "triggerHook": ', t];
                    return t
                },
                reverse: function(n) {
                    return !!n
                },
                loglevel: function(t) {
                    if (t = parseInt(t), !n.type.Number(t) || t < 0 || t > 3) throw ['Invalid value for option "loglevel":', t];
                    return t
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        }, t.Scene.addOption = function(n, r, u, f) {
            n in i.defaults ? t._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + n + "', because it already exists.") : (i.defaults[n] = r, i.validate[n] = u, f && i.shifts.push(n))
        }, t.Scene.extend = function(i) {
            var r = this;
            t.Scene = function() {
                return r.apply(this, arguments), this.$super = n.extend({}, this), i.apply(this, arguments) || this
            }, n.extend(t.Scene, r), t.Scene.prototype = r.prototype, t.Scene.prototype.constructor = t.Scene
        }, t.Event = function(n, t, i, r) {
            r = r || {};
            for (var u in r) this[u] = r[u];
            return this.type = n, this.target = this.currentTarget = i, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
        }, n = t._util = function(n) {
            var r = {},
                t, s = function(n) {
                    return parseFloat(n) || 0
                },
                l = function(t) {
                    return t.currentStyle ? t.currentStyle : n.getComputedStyle(t)
                },
                y = function(t, r, u, f) {
                    var o, e;
                    if (r = r === document ? n : r, r === n) f = !1;
                    else if (!i.DomElement(r)) return 0;
                    return t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(), o = (u ? r["offset" + t] || r["outer" + t] : r["client" + t] || r["inner" + t]) || 0, u && f && (e = l(r), o += t === "Height" ? s(e.marginTop) + s(e.marginBottom) : s(e.marginLeft) + s(e.marginRight)), o
                },
                a = function(n) {
                    return n.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(n) {
                        return n[1].toUpperCase()
                    })
                },
                e, f, v, i, u;
            r.extend = function(n) {
                for (n = n || {}, t = 1; t < arguments.length; t++)
                    if (arguments[t])
                        for (var i in arguments[t]) arguments[t].hasOwnProperty(i) && (n[i] = arguments[t][i]);
                return n
            }, r.isMarginCollapseType = function(n) {
                return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(n) > -1
            };
            var p = 0,
                h = ["ms", "moz", "webkit", "o"],
                o = n.requestAnimationFrame,
                c = n.cancelAnimationFrame;
            for (t = 0; !o && t < h.length; ++t) o = n[h[t] + "RequestAnimationFrame"], c = n[h[t] + "CancelAnimationFrame"] || n[h[t] + "CancelRequestAnimationFrame"];
            for (o || (o = function(t) {
                    var i = +new Date,
                        r = Math.max(0, 16 - (i - p)),
                        u = n.setTimeout(function() {
                            t(i + r)
                        }, r);
                    return p = i + r, u
                }), c || (c = function(t) {
                    n.clearTimeout(t)
                }), r.rAF = o.bind(n), r.cAF = c.bind(n), e = ["error", "warn", "log"], f = n.console || {}, f.log = f.log || function() {}, t = 0; t < e.length; t++) v = e[t], f[v] || (f[v] = f.log);
            return r.log = function(n) {
                (n > e.length || n <= 0) && (n = e.length);
                var t = new Date,
                    r = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2) + ":" + ("00" + t.getMilliseconds()).slice(-3),
                    u = e[n - 1],
                    i = Array.prototype.splice.call(arguments, 1),
                    o = Function.prototype.bind.call(f[u], f);
                i.unshift(r), o.apply(f, i)
            }, i = r.type = function(n) {
                return Object.prototype.toString.call(n).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            }, i.String = function(n) {
                return i(n) === "string"
            }, i.Function = function(n) {
                return i(n) === "function"
            }, i.Array = function(n) {
                return Array.isArray(n)
            }, i.Number = function(n) {
                return !i.Array(n) && n - parseFloat(n) + 1 >= 0
            }, i.DomElement = function(n) {
                return typeof HTMLElement == "object" || typeof HTMLElement == "function" ? n instanceof HTMLElement || n instanceof SVGElement : n && typeof n == "object" && n !== null && n.nodeType === 1 && typeof n.nodeName == "string"
            }, u = r.get = {}, u.elements = function(t) {
                var r = [],
                    f, o, e;
                if (i.String(t)) try {
                    t = document.querySelectorAll(t)
                } catch (s) {
                    return r
                }
                if (i(t) === "nodelist" || i.Array(t) || t instanceof NodeList)
                    for (f = 0, o = r.length = t.length; f < o; f++) e = t[f], r[f] = i.DomElement(e) ? e : u.elements(e);
                else(i.DomElement(t) || t === document || t === n) && (r = [t]);
                return r
            }, u.scrollTop = function(t) {
                return t && typeof t.scrollTop == "number" ? t.scrollTop : n.pageYOffset || 0
            }, u.scrollLeft = function(t) {
                return t && typeof t.scrollLeft == "number" ? t.scrollLeft : n.pageXOffset || 0
            }, u.width = function(n, t, i) {
                return y("width", n, t, i)
            }, u.height = function(n, t, i) {
                return y("height", n, t, i)
            }, u.offset = function(n, t) {
                var i = {
                        top: 0,
                        left: 0
                    },
                    r;
                return n && n.getBoundingClientRect && (r = n.getBoundingClientRect(), i.top = r.top, i.left = r.left, t || (i.top += u.scrollTop(), i.left += u.scrollLeft())), i
            }, r.addClass = function(n, t) {
                t && (n.classList ? n.classList.add(t) : n.className += " " + t)
            }, r.removeClass = function(n, t) {
                t && (n.classList ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }, r.css = function(n, t) {
                var u, e, f, r;
                if (i.String(t)) return l(n)[a(t)];
                if (i.Array(t)) return u = {}, e = l(n), t.forEach(function(n) {
                    u[n] = e[a(n)]
                }), u;
                for (f in t) r = t[f], r == parseFloat(r) && (r += "px"), n.style[a(f)] = r
            }, r
        }(window || {}), t.Scene.prototype.addIndicators = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
        }, t.Scene.prototype.removeIndicators = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
        }, t.Scene.prototype.setTween = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
        }, t.Scene.prototype.removeTween = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
        }, t.Scene.prototype.setVelocity = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
        }, t.Scene.prototype.removeVelocity = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
        }, t
    }), ! function(n, t) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], t) : "object" == typeof exports ? (require("gsap"), t(require("scrollmagic"), TweenMax, TimelineMax)) : t(n.ScrollMagic || n.jQuery && n.jQuery.ScrollMagic, n.TweenMax || n.TweenLite, n.TimelineMax || n.TimelineLite)
    }(this, function(n, t, i) {
        "use strict";
        n.Scene.addOption("tweenChanges", !1, function(n) {
            return !!n
        }), n.Scene.extend(function() {
            var n, r = this,
                u;
            r.on("progress.plugin_gsap", function() {
                u()
            }), r.on("destroy.plugin_gsap", function(n) {
                r.removeTween(n.reset)
            }), u = function() {
                if (n) {
                    var t = r.progress(),
                        i = r.state();
                    n.repeat && -1 === n.repeat() ? "DURING" === i && n.paused() ? n.play() : "DURING" === i || n.paused() || n.pause() : t != n.progress() && (0 === r.duration() ? 0 < t ? n.play() : n.reverse() : r.tweenChanges() && n.tweenTo ? n.tweenTo(t * n.duration()) : n.progress(t).pause())
                }
            }, r.setTween = function(f, e, o) {
                var s;
                1 < arguments.length && (arguments.length < 3 && (o = e, e = 1), f = t.to(f, e, o));
                try {
                    (s = i ? new i({
                        smoothChildTiming: !0
                    }).add(f) : f).pause()
                } catch (f) {
                    return r
                }
                return n && r.removeTween(), n = s, f.repeat && -1 === f.repeat() && (n.repeat(-1), n.yoyo(f.yoyo())), u(), r
            }, r.removeTween = function(t) {
                return n && (t && n.progress(0).pause(), n.kill(), n = void 0), r
            }
        })
    }), ! function(n, t) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "velocity"], t) : "object" == typeof exports ? t(require("scrollmagic"), require("velocity")) : t(n.ScrollMagic || n.jQuery && n.jQuery.ScrollMagic, n.Velocity || n.jQuery && n.jQuery.Velocity)
    }(this, function(n, t) {
        "use strict";
        var i = 0;
        n.Scene.extend(function() {
            var u, o, f, e, r = this,
                s = n._util,
                c = 0;
            r.on("progress.plugin_velocity", function() {
                a()
            }), r.on("destroy.plugin_velocity", function(n) {
                r.off("*.plugin_velocity"), r.removeVelocity(n.reset)
            });
            var l = function(n, i, r) {
                    s.type.Array(n) ? n.forEach(function(n) {
                        l(n, i, r)
                    }) : (t.Utilities.data(n, e) || t.Utilities.data(n, e, {
                        reverseProps: s.css(n, Object.keys(o))
                    }), t(n, i, r), void 0 !== r.queue && t.Utilities.dequeue(n, r.queue))
                },
                h = function(n, i) {
                    if (s.type.Array(n)) n.forEach(function(n) {
                        h(n, i)
                    });
                    else {
                        var r = t.Utilities.data(n, e);
                        r && r.reverseProps && (t(n, r.reverseProps, i), void 0 !== i.queue && t.Utilities.dequeue(n, i.queue))
                    }
                },
                a = function() {
                    if (u) {
                        var n = r.progress();
                        n != c && (0 === r.duration() && (0 < n ? l(u, o, f) : h(u, f)), c = n)
                    }
                };
            r.setVelocity = function(n, t, h) {
                return u && r.removeVelocity(), u = s.get.elements(n), o = t || {}, e = "ScrollMagic.animation.velocity[" + i++ + "]", void 0 !== (f = h || {}).queue && (f.queue = e + "_queue"), a(), r
            }, r.removeVelocity = function(n) {
                return u && (void 0 !== f.queue && t(u, "stop", f.queue), n && h(u, {
                    duration: 0
                }), u.forEach(function(n) {
                    t.Utilities.removeData(n, e)
                }), u = o = f = e = void 0), r
            }
        })
    }),
    function(n, t) {
        typeof define == "function" && define.amd ? define(["ScrollMagic"], t) : typeof exports == "object" ? t(require("scrollmagic")) : t(n.ScrollMagic || n.jQuery && n.jQuery.ScrollMagic)
    }(this, function(n) {
        "use strict";
        var r = "debug.addIndicators",
            f = window.console || {},
            c = Function.prototype.bind.call(f.error || f.log || function() {}, f),
            h, i;
        n || c("(" + r + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
        var e = "0.85em",
            o = "9999",
            u = 15,
            t = n._util,
            s = 0;
        n.Scene.extend(function() {
            var n = this,
                i, u = function() {
                    n._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + r + ")", "->"), n._log.apply(this, arguments))
                };
            n.addIndicators = function(r) {
                if (!i) {
                    var u = {
                        name: "",
                        indent: 0,
                        parent: undefined,
                        colorStart: "green",
                        colorEnd: "red",
                        colorTrigger: "blue"
                    };
                    r = t.extend({}, u, r), s++, i = new h(n, r);
                    n.on("add.plugin_addIndicators", i.add);
                    n.on("remove.plugin_addIndicators", i.remove);
                    n.on("destroy.plugin_addIndicators", n.removeIndicators);
                    n.controller() && i.add()
                }
                return n
            }, n.removeIndicators = function() {
                return i && (i.remove(), this.off("*.plugin_addIndicators"), i = undefined), n
            }
        }), n.Controller.addOption("addIndicators", !1), n.Controller.extend(function() {
            var e = this,
                l = e.info(),
                i = l.container,
                c = l.isDocument,
                f = l.vertical,
                s = {
                    groups: []
                },
                a = function() {
                    e._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + r + ")", "->"), e._log.apply(this, arguments))
                },
                h, o;
            return e._indicators && a(2, "WARNING: Scene already has a property '_indicators', which will be overwritten by plugin."), this._indicators = s, h = function() {
                s.updateBoundsPositions()
            }, o = function() {
                s.updateTriggerGroupPositions()
            }, i.addEventListener("resize", o), c || (window.addEventListener("resize", o), window.addEventListener("scroll", o)), i.addEventListener("resize", h), i.addEventListener("scroll", h), this._indicators.updateBoundsPositions = function(n) {
                for (var o = n ? [t.extend({}, n.triggerGroup, {
                        members: [n]
                    })] : s.groups, h = o.length, c = {}, a = f ? "left" : "top", v = f ? "width" : "height", y = f ? t.get.scrollLeft(i) + t.get.width(i) - u : t.get.scrollTop(i) + t.get.height(i) - u, e, l, r; h--;)
                    for (r = o[h], e = r.members.length, l = t.get[v](r.element.firstChild); e--;) c[a] = y - l, t.css(r.members[e].bounds, c)
            }, this._indicators.updateTriggerGroupPositions = function(n) {
                for (var a = n ? [n] : s.groups, v = a.length, b = c ? document.body : i, y = c ? {
                        top: 0,
                        left: 0
                    } : t.get.offset(b, !0), p = f ? t.get.width(i) - u : t.get.height(i) - u, k = f ? "width" : "height", d = f ? "Y" : "X", r, o, h, w, l; v--;) r = a[v], o = r.element, h = r.triggerHook * e.info("size"), w = t.get[k](o.firstChild.firstChild), l = h > w ? "translate" + d + "(-100%)" : "", t.css(o, {
                    top: y.top + (f ? h : p - r.members[0].options.indent),
                    left: y.left + (f ? p - r.members[0].options.indent : h)
                }), t.css(o.firstChild.firstChild, {
                    "-ms-transform": l,
                    "-webkit-transform": l,
                    transform: l
                })
            }, this._indicators.updateTriggerGroupLabel = function(n) {
                var t = "trigger" + (n.members.length > 1 ? "" : " " + n.members[0].options.name),
                    i = n.element.firstChild.firstChild,
                    r = i.textContent !== t;
                r && (i.textContent = t, f && s.updateBoundsPositions())
            }, this.addScene = function(t) {
                this._options.addIndicators && t instanceof n.Scene && t.controller() === e && t.addIndicators(), this.$super.addScene.apply(this, arguments)
            }, this.destroy = function() {
                i.removeEventListener("resize", o), c || (window.removeEventListener("resize", o), window.removeEventListener("scroll", o)), i.removeEventListener("resize", h), i.removeEventListener("scroll", h), this.$super.destroy.apply(this, arguments)
            }, e
        }), h = function(n, u) {
            var f = this,
                o = i.bounds(),
                a = i.start(u.colorStart),
                l = i.end(u.colorEnd),
                h = u.parent && t.get.elements(u.parent)[0],
                c, e, v = function() {
                    n._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + r + ")", "->"), n._log.apply(this, arguments))
                };
            u.name = u.name || s, a.firstChild.textContent += " " + u.name, l.textContent += " " + u.name, o.appendChild(a), o.appendChild(l), f.options = u, f.bounds = o, f.triggerGroup = undefined, this.add = function() {
                e = n.controller(), c = e.info("vertical");
                var i = e.info("isDocument");
                h || (h = i ? document.body : e.info("container")), i || t.css(h, "position") !== "static" || t.css(h, {
                    position: "relative"
                });
                n.on("change.plugin_addIndicators", p);
                n.on("shift.plugin_addIndicators", y);
                k(), w(), setTimeout(function() {
                    e._indicators.updateBoundsPositions(f)
                }, 0), v(3, "added indicators")
            }, this.remove = function() {
                if (f.triggerGroup) {
                    if (n.off("change.plugin_addIndicators", p), n.off("shift.plugin_addIndicators", y), f.triggerGroup.members.length > 1) {
                        var t = f.triggerGroup;
                        t.members.splice(t.members.indexOf(f), 1), e._indicators.updateTriggerGroupLabel(t), e._indicators.updateTriggerGroupPositions(t), f.triggerGroup = undefined
                    } else b();
                    g(), v(3, "removed indicators")
                }
            };
            var y = function() {
                    w()
                },
                p = function(n) {
                    n.what === "triggerHook" && k()
                },
                d = function() {
                    var n = e.info("vertical");
                    t.css(a.firstChild, {
                        "border-bottom-width": n ? 1 : 0,
                        "border-right-width": n ? 0 : 1,
                        bottom: n ? -1 : u.indent,
                        right: n ? u.indent : -1,
                        padding: n ? "0 8px" : "2px 4px"
                    }), t.css(l, {
                        "border-top-width": n ? 1 : 0,
                        "border-left-width": n ? 0 : 1,
                        top: n ? "100%" : "",
                        right: n ? u.indent : "",
                        bottom: n ? "" : u.indent,
                        left: n ? "" : "100%",
                        padding: n ? "0 8px" : "2px 4px"
                    }), h.appendChild(o)
                },
                g = function() {
                    o.parentNode.removeChild(o)
                },
                w = function() {
                    o.parentNode !== h && d();
                    var i = {};
                    i[c ? "top" : "left"] = n.triggerPosition(), i[c ? "height" : "width"] = n.duration(), t.css(o, i), t.css(l, {
                        display: n.duration() > 0 ? "" : "none"
                    })
                },
                nt = function() {
                    var o = i.trigger(u.colorTrigger),
                        s = {},
                        r;
                    s[c ? "right" : "bottom"] = 0, s[c ? "border-top-width" : "border-left-width"] = 1, t.css(o.firstChild, s), t.css(o.firstChild.firstChild, {
                        padding: c ? "0 8px 3px 8px" : "3px 4px"
                    }), document.body.appendChild(o), r = {
                        triggerHook: n.triggerHook(),
                        element: o,
                        members: [f]
                    }, e._indicators.groups.push(r), f.triggerGroup = r, e._indicators.updateTriggerGroupLabel(r), e._indicators.updateTriggerGroupPositions(r)
                },
                b = function() {
                    e._indicators.groups.splice(e._indicators.groups.indexOf(f.triggerGroup), 1), f.triggerGroup.element.parentNode.removeChild(f.triggerGroup.element), f.triggerGroup = undefined
                },
                k = function() {
                    var i = n.triggerHook(),
                        o = .0001,
                        r, t, u;
                    if (!f.triggerGroup || !(Math.abs(f.triggerGroup.triggerHook - i) < o)) {
                        for (r = e._indicators.groups, u = r.length; u--;)
                            if (t = r[u], Math.abs(t.triggerHook - i) < o) {
                                f.triggerGroup && (f.triggerGroup.members.length === 1 ? b() : (f.triggerGroup.members.splice(f.triggerGroup.members.indexOf(f), 1), e._indicators.updateTriggerGroupLabel(f.triggerGroup), e._indicators.updateTriggerGroupPositions(f.triggerGroup))), t.members.push(f), f.triggerGroup = t, e._indicators.updateTriggerGroupLabel(t);
                                return
                            } if (f.triggerGroup) {
                            if (f.triggerGroup.members.length === 1) {
                                f.triggerGroup.triggerHook = i, e._indicators.updateTriggerGroupPositions(f.triggerGroup);
                                return
                            }
                            f.triggerGroup.members.splice(f.triggerGroup.members.indexOf(f), 1), e._indicators.updateTriggerGroupLabel(f.triggerGroup), e._indicators.updateTriggerGroupPositions(f.triggerGroup), f.triggerGroup = undefined
                        }
                        nt()
                    }
                }
        }, i = {
            start: function(n) {
                var r = document.createElement("div"),
                    i;
                return r.textContent = "start", t.css(r, {
                    position: "absolute",
                    overflow: "visible",
                    "border-width": 0,
                    "border-style": "solid",
                    color: n,
                    "border-color": n
                }), i = document.createElement("div"), t.css(i, {
                    position: "absolute",
                    overflow: "visible",
                    width: 0,
                    height: 0
                }), i.appendChild(r), i
            },
            end: function(n) {
                var i = document.createElement("div");
                return i.textContent = "end", t.css(i, {
                    position: "absolute",
                    overflow: "visible",
                    "border-width": 0,
                    "border-style": "solid",
                    color: n,
                    "border-color": n
                }), i
            },
            bounds: function() {
                var n = document.createElement("div");
                return t.css(n, {
                    position: "absolute",
                    overflow: "visible",
                    "white-space": "nowrap",
                    "pointer-events": "none",
                    "font-size": e
                }), n.style.zIndex = o, n
            },
            trigger: function(n) {
                var u = document.createElement("div"),
                    r, i;
                return u.textContent = "trigger", t.css(u, {
                    position: "relative"
                }), r = document.createElement("div"), t.css(r, {
                    position: "absolute",
                    overflow: "visible",
                    "border-width": 0,
                    "border-style": "solid",
                    color: n,
                    "border-color": n
                }), r.appendChild(u), i = document.createElement("div"), t.css(i, {
                    position: "fixed",
                    overflow: "visible",
                    "white-space": "nowrap",
                    "pointer-events": "none",
                    "font-size": e
                }), i.style.zIndex = o, i.appendChild(r), i
            }
        }
    }),
    function(n) {
        typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(jQuery)
    }(function(n) {
        function i(n, t) {
            return n.toFixed(t.decimals)
        }
        var t = function(i, r) {
            this.$element = n(i), this.options = n.extend({}, t.DEFAULTS, this.dataOptions(), r), this.init()
        };
        t.DEFAULTS = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: i,
            onUpdate: null,
            onComplete: null
        }, t.prototype.init = function() {
            this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
        }, t.prototype.dataOptions = function() {
            var n = {
                    from: this.$element.data("from"),
                    to: this.$element.data("to"),
                    speed: this.$element.data("speed"),
                    refreshInterval: this.$element.data("refresh-interval"),
                    decimals: this.$element.data("decimals")
                },
                i = Object.keys(n),
                r, t;
            for (r in i) t = i[r], typeof n[t] == "undefined" && delete n[t];
            return n
        }, t.prototype.update = function() {
            this.value += this.increment, this.loopCount++, this.render(), typeof this.options.onUpdate == "function" && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, typeof this.options.onComplete == "function" && this.options.onComplete.call(this.$element, this.value))
        }, t.prototype.render = function() {
            var n = this.options.formatter.call(this.$element, this.value, this.options);
            this.$element.text(n)
        }, t.prototype.restart = function() {
            this.stop(), this.init(), this.start()
        }, t.prototype.start = function() {
            this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
        }, t.prototype.stop = function() {
            this.interval && clearInterval(this.interval)
        }, t.prototype.toggle = function() {
            this.interval ? this.stop() : this.start()
        }, n.fn.countTo = function(i) {
            return this.each(function() {
                var u = n(this),
                    r = u.data("countTo"),
                    f = !r || typeof i == "object",
                    e = typeof i == "object" ? i : {},
                    o = typeof i == "string" ? i : "start";
                f && (r && r.stop(), u.data("countTo", r = new t(this, e))), r[o].call(r)
            })
        }
    }),
    function(n, t) {
        typeof define == "function" && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
            return t(n, i)
        }) : typeof module == "object" && module.exports ? module.exports = t(n, require("jquery")) : n.jQueryBridget = t(n, n.jQuery)
    }(window, function(n, t) {
        "use strict";

        function u(i, u, o) {
            function s(n, t, u) {
                var f, e = "$()." + i + '("' + t + '")';
                return n.each(function(n, s) {
                    var h = o.data(s, i),
                        c, l;
                    if (!h) {
                        r(i + " not initialized. Cannot call methods, i.e. " + e);
                        return
                    }
                    if (c = h[t], !c || t.charAt(0) == "_") {
                        r(e + " is not a valid method");
                        return
                    }
                    l = c.apply(h, u), f = f === undefined ? l : f
                }), f !== undefined ? f : n
            }

            function h(n, t) {
                n.each(function(n, r) {
                    var f = o.data(r, i);
                    f ? (f.option(t), f._init()) : (f = new u(r, t), o.data(r, i, f))
                })
            }(o = o || t || n.jQuery, o) && (u.prototype.option || (u.prototype.option = function(n) {
                o.isPlainObject(n) && (this.options = o.extend(!0, this.options, n))
            }), o.fn[i] = function(n) {
                if (typeof n == "string") {
                    var t = e.call(arguments, 1);
                    return s(this, n, t)
                }
                return h(this, n), this
            }, f(o))
        }

        function f(n) {
            !n || n && n.bridget || (n.bridget = u)
        }
        var e = Array.prototype.slice,
            i = n.console,
            r = typeof i == "undefined" ? function() {} : function(n) {
                i.error(n)
            };
        return f(t || n.jQuery), u
    }),
    function(n, t) {
        typeof define == "function" && define.amd ? define("ev-emitter/ev-emitter", t) : typeof module == "object" && module.exports ? module.exports = t() : n.EvEmitter = t()
    }(typeof window != "undefined" ? window : this, function() {
        function t() {}
        var n = t.prototype;
        return n.on = function(n, t) {
            if (n && t) {
                var i = this._events = this._events || {},
                    r = i[n] = i[n] || [];
                return r.indexOf(t) == -1 && r.push(t), this
            }
        }, n.once = function(n, t) {
            if (n && t) {
                this.on(n, t);
                var i = this._onceEvents = this._onceEvents || {},
                    r = i[n] = i[n] || {};
                return r[t] = !0, this
            }
        }, n.off = function(n, t) {
            var i = this._events && this._events[n],
                r;
            if (i && i.length) return r = i.indexOf(t), r != -1 && i.splice(r, 1), this
        }, n.emitEvent = function(n, t) {
            var i = this._events && this._events[n],
                u, f, r, e;
            if (i && i.length) {
                for (i = i.slice(0), t = t || [], u = this._onceEvents && this._onceEvents[n], f = 0; f < i.length; f++) r = i[f], e = u && u[r], e && (this.off(n, r), delete u[r]), r.apply(this, t);
                return this
            }
        }, n.allOff = function() {
            delete this._events, delete this._onceEvents
        }, t
    }),
    function(n, t) {
        typeof define == "function" && define.amd ? define("get-size/get-size", t) : typeof module == "object" && module.exports ? module.exports = t() : n.getSize = t()
    }(window, function() {
        "use strict";

        function n(n) {
            var t = parseFloat(n),
                i = n.indexOf("%") == -1 && !isNaN(t);
            return i && t
        }

        function o() {}

        function h() {
            for (var i = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, u, n = 0; n < r; n++) u = t[n], i[u] = 0;
            return i
        }

        function u(n) {
            var t = getComputedStyle(n);
            return t || s("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t
        }

        function c() {
            var t, r, o;
            f || (f = !0, t = document.createElement("div"), t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box", r = document.body || document.documentElement, r.appendChild(t), o = u(t), i = Math.round(n(o.width)) == 200, e.isBoxSizeOuter = i, r.removeChild(t))
        }

        function e(f) {
            var o, e, a, s, l;
            if (c(), typeof f == "string" && (f = document.querySelector(f)), f && typeof f == "object" && f.nodeType) {
                if (o = u(f), o.display == "none") return h();
                for (e = {}, e.width = f.offsetWidth, e.height = f.offsetHeight, a = e.isBorderBox = o.boxSizing == "border-box", s = 0; s < r; s++) {
                    var v = t[s],
                        nt = o[v],
                        y = parseFloat(nt);
                    e[v] = isNaN(y) ? 0 : y
                }
                var p = e.paddingLeft + e.paddingRight,
                    w = e.paddingTop + e.paddingBottom,
                    tt = e.marginLeft + e.marginRight,
                    it = e.marginTop + e.marginBottom,
                    b = e.borderLeftWidth + e.borderRightWidth,
                    k = e.borderTopWidth + e.borderBottomWidth,
                    d = a && i,
                    g = n(o.width);
                return g !== !1 && (e.width = g + (d ? 0 : p + b)), l = n(o.height), l !== !1 && (e.height = l + (d ? 0 : w + k)), e.innerWidth = e.width - (p + b), e.innerHeight = e.height - (w + k), e.outerWidth = e.width + tt, e.outerHeight = e.height + it, e
            }
        }
        var s = typeof console == "undefined" ? o : function(n) {
                console.error(n)
            },
            t = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            r = t.length,
            f = !1,
            i;
        return e
    }),
    function(n, t) {
        "use strict";
        typeof define == "function" && define.amd ? define("desandro-matches-selector/matches-selector", t) : typeof module == "object" && module.exports ? module.exports = t() : n.matchesSelector = t()
    }(window, function() {
        "use strict";
        var n = function() {
            var t = window.Element.prototype,
                i, n, u, r;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (i = ["webkit", "moz", "ms", "o"], n = 0; n < i.length; n++)
                if (u = i[n], r = u + "MatchesSelector", t[r]) return r
        }();
        return function(t, i) {
            return t[n](i)
        }
    }),
    function(n, t) {
        typeof define == "function" && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
            return t(n, i)
        }) : typeof module == "object" && module.exports ? module.exports = t(n, require("desandro-matches-selector")) : n.fizzyUIUtils = t(n, n.matchesSelector)
    }(window, function(n, t) {
        var i = {},
            u, r;
        return i.extend = function(n, t) {
            for (var i in t) n[i] = t[i];
            return n
        }, i.modulo = function(n, t) {
            return (n % t + t) % t
        }, u = Array.prototype.slice, i.makeArray = function(n) {
            if (Array.isArray(n)) return n;
            if (n === null || n === undefined) return [];
            var t = typeof n == "object" && typeof n.length == "number";
            return t ? u.call(n) : [n]
        }, i.removeFrom = function(n, t) {
            var i = n.indexOf(t);
            i != -1 && n.splice(i, 1)
        }, i.getParent = function(n, i) {
            while (n.parentNode && n != document.body)
                if (n = n.parentNode, t(n, i)) return n
        }, i.getQueryElement = function(n) {
            return typeof n == "string" ? document.querySelector(n) : n
        }, i.handleEvent = function(n) {
            var t = "on" + n.type;
            this[t] && this[t](n)
        }, i.filterFindElements = function(n, r) {
            n = i.makeArray(n);
            var u = [];
            return n.forEach(function(n) {
                var f, i;
                if (n instanceof HTMLElement) {
                    if (!r) {
                        u.push(n);
                        return
                    }
                    for (t(n, r) && u.push(n), f = n.querySelectorAll(r), i = 0; i < f.length; i++) u.push(f[i])
                }
            }), u
        }, i.debounceMethod = function(n, t, i) {
            i = i || 100;
            var u = n.prototype[t],
                r = t + "Timeout";
            n.prototype[t] = function() {
                var f = this[r],
                    t, n;
                clearTimeout(f), t = arguments, n = this, this[r] = setTimeout(function() {
                    u.apply(n, t), delete n[r]
                }, i)
            }
        }, i.docReady = function(n) {
            var t = document.readyState;
            t == "complete" || t == "interactive" ? setTimeout(n) : document.addEventListener("DOMContentLoaded", n)
        }, i.toDashed = function(n) {
            return n.replace(/(.)([A-Z])/g, function(n, t, i) {
                return t + "-" + i
            }).toLowerCase()
        }, r = n.console, i.htmlInit = function(t, u) {
            i.docReady(function() {
                var e = i.toDashed(u),
                    f = "data-" + e,
                    s = document.querySelectorAll("[" + f + "]"),
                    h = document.querySelectorAll(".js-" + e),
                    c = i.makeArray(s).concat(i.makeArray(h)),
                    l = f + "-options",
                    o = n.jQuery;
                c.forEach(function(n) {
                    var i = n.getAttribute(f) || n.getAttribute(l),
                        e, s;
                    try {
                        e = i && JSON.parse(i)
                    } catch (h) {
                        r && r.error("Error parsing " + f + " on " + n.className + ": " + h);
                        return
                    }
                    s = new t(n, e), o && o.data(n, u, s)
                })
            })
        }, i
    }),
    function(n, t) {
        typeof define == "function" && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : typeof module == "object" && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (n.Outlayer = {}, n.Outlayer.Item = t(n.EvEmitter, n.getSize))
    }(window, function(n, t) {
        "use strict";

        function l(n) {
            for (var t in n) return !1;
            return t = null, !0
        }

        function u(n, t) {
            n && (this.element = n, this.layout = t, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function v(n) {
            return n.replace(/([A-Z])/g, function(n) {
                return "-" + n.toLowerCase()
            })
        }
        var f = document.documentElement.style,
            r = typeof f.transition == "string" ? "transition" : "WebkitTransition",
            e = typeof f.transform == "string" ? "transform" : "WebkitTransform",
            o = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            } [r],
            a = {
                transform: e,
                transition: r,
                transitionDuration: r + "Duration",
                transitionProperty: r + "Property",
                transitionDelay: r + "Delay"
            },
            i = u.prototype = Object.create(n.prototype),
            s, h, c;
        return i.constructor = u, i._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, i.handleEvent = function(n) {
            var t = "on" + n.type;
            this[t] && this[t](n)
        }, i.getSize = function() {
            this.size = t(this.element)
        }, i.css = function(n) {
            var r = this.element.style,
                t, i;
            for (t in n) i = a[t] || t, r[i] = n[t]
        }, i.getPosition = function() {
            var r = getComputedStyle(this.element),
                u = this.layout._getOption("originLeft"),
                f = this.layout._getOption("originTop"),
                e = r[u ? "left" : "right"],
                o = r[f ? "top" : "bottom"],
                n = parseFloat(e),
                t = parseFloat(o),
                i = this.layout.size;
            e.indexOf("%") != -1 && (n = n / 100 * i.width), o.indexOf("%") != -1 && (t = t / 100 * i.height), n = isNaN(n) ? 0 : n, t = isNaN(t) ? 0 : t, n -= u ? i.paddingLeft : i.paddingRight, t -= f ? i.paddingTop : i.paddingBottom, this.position.x = n, this.position.y = t
        }, i.layoutPosition = function() {
            var r = this.layout.size,
                n = {},
                t = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                u = t ? "paddingLeft" : "paddingRight",
                f = t ? "left" : "right",
                e = t ? "right" : "left",
                o = this.position.x + r[u];
            n[f] = this.getXValue(o), n[e] = "";
            var s = i ? "paddingTop" : "paddingBottom",
                h = i ? "top" : "bottom",
                c = i ? "bottom" : "top",
                l = this.position.y + r[s];
            n[h] = this.getYValue(l), n[c] = "", this.css(n), this.emitEvent("layout", [this])
        }, i.getXValue = function(n) {
            var t = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !t ? n / this.layout.size.width * 100 + "%" : n + "px"
        }, i.getYValue = function(n) {
            var t = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && t ? n / this.layout.size.height * 100 + "%" : n + "px"
        }, i._transitionTo = function(n, t) {
            this.getPosition();
            var r = this.position.x,
                u = this.position.y,
                f = n == this.position.x && t == this.position.y;
            if (this.setPosition(n, t), f && !this.isTransitioning) {
                this.layoutPosition();
                return
            }
            var e = n - r,
                o = t - u,
                i = {};
            i.transform = this.getTranslate(e, o), this.transition({
                to: i,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, i.getTranslate = function(n, t) {
            var i = this.layout._getOption("originLeft"),
                r = this.layout._getOption("originTop");
            return n = i ? n : -n, t = r ? t : -t, "translate3d(" + n + "px, " + t + "px, 0)"
        }, i.goTo = function(n, t) {
            this.setPosition(n, t), this.layoutPosition()
        }, i.moveTo = i._transitionTo, i.setPosition = function(n, t) {
            this.position.x = parseFloat(n), this.position.y = parseFloat(t)
        }, i._nonTransition = function(n) {
            this.css(n.to), n.isCleaning && this._removeStyles(n.to);
            for (var t in n.onTransitionEnd) n.onTransitionEnd[t].call(this)
        }, i.transition = function(n) {
            var i, t, r;
            if (!parseFloat(this.layout.options.transitionDuration)) {
                this._nonTransition(n);
                return
            }
            i = this._transn;
            for (t in n.onTransitionEnd) i.onEnd[t] = n.onTransitionEnd[t];
            for (t in n.to) i.ingProperties[t] = !0, n.isCleaning && (i.clean[t] = !0);
            n.from && (this.css(n.from), r = this.element.offsetHeight, r = null), this.enableTransition(n.to), this.css(n.to), this.isTransitioning = !0
        }, s = "opacity," + v(e), i.enableTransition = function() {
            if (!this.isTransitioning) {
                var n = this.layout.options.transitionDuration;
                n = typeof n == "number" ? n + "ms" : n, this.css({
                    transitionProperty: s,
                    transitionDuration: n,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(o, this, !1)
            }
        }, i.onwebkitTransitionEnd = function(n) {
            this.ontransitionend(n)
        }, i.onotransitionend = function(n) {
            this.ontransitionend(n)
        }, h = {
            "-webkit-transform": "transform"
        }, i.ontransitionend = function(n) {
            var t, i, r;
            n.target === this.element && (t = this._transn, i = h[n.propertyName] || n.propertyName, delete t.ingProperties[i], l(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[n.propertyName] = "", delete t.clean[i]), i in t.onEnd && (r = t.onEnd[i], r.call(this), delete t.onEnd[i]), this.emitEvent("transitionEnd", [this]))
        }, i.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
        }, i._removeStyles = function(n) {
            var t = {},
                i;
            for (i in n) t[i] = "";
            this.css(t)
        }, c = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        }, i.removeTransitionStyles = function() {
            this.css(c)
        }, i.stagger = function(n) {
            n = isNaN(n) ? 0 : n, this.staggerDelay = n + "ms"
        }, i.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, i.remove = function() {
            if (!r || !parseFloat(this.layout.options.transitionDuration)) {
                this.removeElem();
                return
            }
            this.once("transitionEnd", function() {
                this.removeElem()
            });
            this.hide()
        }, i.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var n = this.layout.options,
                t = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            t[i] = this.onRevealTransitionEnd, this.transition({
                from: n.hiddenStyle,
                to: n.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: t
            })
        }, i.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, i.getHideRevealTransitionEndProperty = function(n) {
            var t = this.layout.options[n],
                i;
            if (t.opacity) return "opacity";
            for (i in t) return i
        }, i.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var n = this.layout.options,
                t = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            t[i] = this.onHideTransitionEnd, this.transition({
                from: n.visibleStyle,
                to: n.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: t
            })
        }, i.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, i.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, u
    }),
    function(n, t) {
        "use strict";
        typeof define == "function" && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, r, u, f) {
            return t(n, i, r, u, f)
        }) : typeof module == "object" && module.exports ? module.exports = t(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = t(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item)
    }(window, function(n, t, i, r, u) {
        "use strict";

        function e(n, t) {
            var i = r.getQueryElement(n),
                u, f;
            if (!i) {
                h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || n));
                return
            }
            this.element = i, o && (this.$element = o(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(t), u = ++v, this.element.outlayerGUID = u, s[u] = this, this._create(), f = this._getOption("initLayout"), f && this.layout()
        }

        function l(n) {
            function t() {
                n.apply(this, arguments)
            }
            return t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t
        }

        function y(n) {
            var r;
            if (typeof n == "number") return n;
            var t = n.match(/(^\d*\.?\d*)(\w*)/),
                i = t && t[1],
                u = t && t[2];
            return i.length ? (i = parseFloat(i), r = a[u] || 1, i * r) : 0
        }
        var h = n.console,
            o = n.jQuery,
            c = function() {},
            v = 0,
            s = {},
            f, a;
        return e.namespace = "outlayer", e.Item = u, e.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, f = e.prototype, r.extend(f, t.prototype), f.option = function(n) {
            r.extend(this.options, n)
        }, f._getOption = function(n) {
            var t = this.constructor.compatOptions[n];
            return t && this.options[t] !== undefined ? this.options[t] : this.options[n]
        }, e.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, f._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), r.extend(this.element.style, this.options.containerStyle);
            var n = this._getOption("resize");
            n && this.bindResize()
        }, f.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, f._itemize = function(n) {
            for (var i = this._filterFindItemElements(n), e = this.constructor.Item, r = [], u, f, t = 0; t < i.length; t++) u = i[t], f = new e(u, this), r.push(f);
            return r
        }, f._filterFindItemElements = function(n) {
            return r.filterFindElements(n, this.options.itemSelector)
        }, f.getItemElements = function() {
            return this.items.map(function(n) {
                return n.element
            })
        }, f.layout = function() {
            this._resetLayout(), this._manageStamps();
            var n = this._getOption("layoutInstant"),
                t = n !== undefined ? n : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, f._init = f.layout, f._resetLayout = function() {
            this.getSize()
        }, f.getSize = function() {
            this.size = i(this.element)
        }, f._getMeasurement = function(n, t) {
            var r = this.options[n],
                u;
            r ? (typeof r == "string" ? u = this.element.querySelector(r) : r instanceof HTMLElement && (u = r), this[n] = u ? i(u)[t] : r) : this[n] = 0
        }, f.layoutItems = function(n, t) {
            n = this._getItemsForLayout(n), this._layoutItems(n, t), this._postLayout()
        }, f._getItemsForLayout = function(n) {
            return n.filter(function(n) {
                return !n.isIgnored
            })
        }, f._layoutItems = function(n, t) {
            if (this._emitCompleteOnItems("layout", n), n && n.length) {
                var i = [];
                n.forEach(function(n) {
                    var r = this._getItemLayoutPosition(n);
                    r.item = n, r.isInstant = t || n.isLayoutInstant, i.push(r)
                }, this), this._processLayoutQueue(i)
            }
        }, f._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, f._processLayoutQueue = function(n) {
            this.updateStagger(), n.forEach(function(n, t) {
                this._positionItem(n.item, n.x, n.y, n.isInstant, t)
            }, this)
        }, f.updateStagger = function() {
            var n = this.options.stagger;
            if (n === null || n === undefined) {
                this.stagger = 0;
                return
            }
            return this.stagger = y(n)
        }, f._positionItem = function(n, t, i, r, u) {
            r ? n.goTo(t, i) : (n.stagger(u * this.stagger), n.moveTo(t, i))
        }, f._postLayout = function() {
            this.resizeContainer()
        }, f.resizeContainer = function() {
            var t = this._getOption("resizeContainer"),
                n;
            t && (n = this._getContainerSize(), n && (this._setContainerMeasure(n.width, !0), this._setContainerMeasure(n.height, !1)))
        }, f._getContainerSize = c, f._setContainerMeasure = function(n, t) {
            if (n !== undefined) {
                var i = this.size;
                i.isBorderBox && (n += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), n = Math.max(n, 0), this.element.style[t ? "width" : "height"] = n + "px"
            }
        }, f._emitCompleteOnItems = function(n, t) {
            function r() {
                f.dispatchEvent(n + "Complete", null, [t])
            }

            function e() {
                i++, i == u && r()
            }
            var f = this,
                u = t.length,
                i;
            if (!t || !u) {
                r();
                return
            }
            i = 0, t.forEach(function(t) {
                t.once(n, e)
            })
        }, f.dispatchEvent = function(n, t, i) {
            var u = t ? [t].concat(i) : i,
                r;
            this.emitEvent(n, u), o && (this.$element = this.$element || o(this.element), t ? (r = o.Event(t), r.type = n, this.$element.trigger(r, i)) : this.$element.trigger(n, i))
        }, f.ignore = function(n) {
            var t = this.getItem(n);
            t && (t.isIgnored = !0)
        }, f.unignore = function(n) {
            var t = this.getItem(n);
            t && delete t.isIgnored
        }, f.stamp = function(n) {
            (n = this._find(n), n) && (this.stamps = this.stamps.concat(n), n.forEach(this.ignore, this))
        }, f.unstamp = function(n) {
            (n = this._find(n), n) && n.forEach(function(n) {
                r.removeFrom(this.stamps, n), this.unignore(n)
            }, this)
        }, f._find = function(n) {
            if (n) return typeof n == "string" && (n = this.element.querySelectorAll(n)), n = r.makeArray(n)
        }, f._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, f._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                n = this.size;
            this._boundingRect = {
                left: t.left + n.paddingLeft + n.borderLeftWidth,
                top: t.top + n.paddingTop + n.borderTopWidth,
                right: t.right - (n.paddingRight + n.borderRightWidth),
                bottom: t.bottom - (n.paddingBottom + n.borderBottomWidth)
            }
        }, f._manageStamp = c, f._getElementOffset = function(n) {
            var t = n.getBoundingClientRect(),
                r = this._boundingRect,
                u = i(n);
            return {
                left: t.left - r.left - u.marginLeft,
                top: t.top - r.top - u.marginTop,
                right: r.right - t.right - u.marginRight,
                bottom: r.bottom - t.bottom - u.marginBottom
            }
        }, f.handleEvent = r.handleEvent, f.bindResize = function() {
            n.addEventListener("resize", this), this.isResizeBound = !0
        }, f.unbindResize = function() {
            n.removeEventListener("resize", this), this.isResizeBound = !1
        }, f.onresize = function() {
            this.resize()
        }, r.debounceMethod(e, "onresize", 100), f.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, f.needsResizeLayout = function() {
            var n = i(this.element),
                t = this.size && n;
            return t && n.innerWidth !== this.size.innerWidth
        }, f.addItems = function(n) {
            var t = this._itemize(n);
            return t.length && (this.items = this.items.concat(t)), t
        }, f.appended = function(n) {
            var t = this.addItems(n);
            t.length && (this.layoutItems(t, !0), this.reveal(t))
        }, f.prepended = function(n) {
            var t = this._itemize(n),
                i;
            t.length && (i = this.items.slice(0), this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i))
        }, f.reveal = function(n) {
            if (this._emitCompleteOnItems("reveal", n), n && n.length) {
                var t = this.updateStagger();
                n.forEach(function(n, i) {
                    n.stagger(i * t), n.reveal()
                })
            }
        }, f.hide = function(n) {
            if (this._emitCompleteOnItems("hide", n), n && n.length) {
                var t = this.updateStagger();
                n.forEach(function(n, i) {
                    n.stagger(i * t), n.hide()
                })
            }
        }, f.revealItemElements = function(n) {
            var t = this.getItems(n);
            this.reveal(t)
        }, f.hideItemElements = function(n) {
            var t = this.getItems(n);
            this.hide(t)
        }, f.getItem = function(n) {
            for (var i, t = 0; t < this.items.length; t++)
                if (i = this.items[t], i.element == n) return i
        }, f.getItems = function(n) {
            n = r.makeArray(n);
            var t = [];
            return n.forEach(function(n) {
                var i = this.getItem(n);
                i && t.push(i)
            }, this), t
        }, f.remove = function(n) {
            var t = this.getItems(n);
            (this._emitCompleteOnItems("remove", t), t && t.length) && t.forEach(function(n) {
                n.remove(), r.removeFrom(this.items, n)
            }, this)
        }, f.destroy = function() {
            var n = this.element.style,
                t;
            n.height = "", n.position = "", n.width = "", this.items.forEach(function(n) {
                n.destroy()
            }), this.unbindResize(), t = this.element.outlayerGUID, delete s[t], delete this.element.outlayerGUID, o && o.removeData(this.element, this.constructor.namespace)
        }, e.data = function(n) {
            n = r.getQueryElement(n);
            var t = n && n.outlayerGUID;
            return t && s[t]
        }, e.create = function(n, t) {
            var i = l(e);
            return i.defaults = r.extend({}, e.defaults), r.extend(i.defaults, t), i.compatOptions = r.extend({}, e.compatOptions), i.namespace = n, i.data = e.data, i.Item = l(u), r.htmlInit(i, n), o && o.bridget && o.bridget(n, i), i
        }, a = {
            ms: 1,
            s: 1e3
        }, e.Item = u, e
    }),
    function(n, t) {
        typeof define == "function" && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], t) : typeof module == "object" && module.exports ? module.exports = t(require("outlayer")) : (n.Isotope = n.Isotope || {}, n.Isotope.Item = t(n.Outlayer))
    }(window, function(n) {
        "use strict";

        function i() {
            n.Item.apply(this, arguments)
        }
        var t = i.prototype = Object.create(n.Item.prototype),
            u = t._create,
            r;
        return t._create = function() {
            this.id = this.layout.itemGUID++, u.call(this), this.sortData = {}
        }, t.updateSortData = function() {
            var t, i, n, r;
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random(), t = this.layout.options.getSortData, i = this.layout._sorters;
                for (n in t) r = i[n], this.sortData[n] = r(this.element, this)
            }
        }, r = t.destroy, t.destroy = function() {
            r.apply(this, arguments), this.css({
                display: ""
            })
        }, i
    }),
    function(n, t) {
        typeof define == "function" && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : typeof module == "object" && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (n.Isotope = n.Isotope || {}, n.Isotope.LayoutMode = t(n.getSize, n.Outlayer))
    }(window, function(n, t) {
        "use strict";

        function r(n) {
            this.isotope = n, n && (this.options = n.options[this.namespace], this.element = n.element, this.items = n.filteredItems, this.size = n.size)
        }
        var i = r.prototype,
            u = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
        return u.forEach(function(n) {
            i[n] = function() {
                return t.prototype[n].apply(this.isotope, arguments)
            }
        }), i.needsVerticalResizeLayout = function() {
            var t = n(this.isotope.element),
                i = this.isotope.size && t;
            return i && t.innerHeight != this.isotope.size.innerHeight
        }, i._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, i.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, i.getSegmentSize = function(n, t) {
            var i = n + t,
                u = "outer" + t,
                r;
            (this._getMeasurement(i, u), this[i]) || (r = this.getFirstItemSize(), this[i] = r && r[u] || this.isotope.size["inner" + t])
        }, i.getFirstItemSize = function() {
            var t = this.isotope.filteredItems[0];
            return t && t.element && n(t.element)
        }, i.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, r.modes = {}, r.create = function(n, t) {
            function u() {
                r.apply(this, arguments)
            }
            return u.prototype = Object.create(i), u.prototype.constructor = u, t && (u.options = t), u.prototype.namespace = n, r.modes[n] = u, u
        }, r
    }),
    function(n, t) {
        typeof define == "function" && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : typeof module == "object" && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : n.Masonry = t(n.Outlayer, n.getSize)
    }(window, function(n, t) {
        var r = n.create("masonry"),
            i;
        return r.compatOptions.fitWidth = "isFitWidth", i = r.prototype, i._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var n = 0; n < this.cols; n++) this.colYs.push(0);
            this.maxY = 0, this.horizontalColIndex = 0
        }, i.measureColumns = function() {
            var n, i;
            this.getContainerWidth(), this.columnWidth || (n = this.items[0], i = n && n.element, this.columnWidth = i && t(i).outerWidth || this.containerWidth);
            var r = this.columnWidth += this.gutter,
                f = this.containerWidth + this.gutter,
                u = f / r,
                e = r - f % r,
                o = e && e < 1 ? "round" : "floor";
            u = Math[o](u), this.cols = Math.max(u, 1)
        }, i.getContainerWidth = function() {
            var i = this._getOption("fitWidth"),
                r = i ? this.element.parentNode : this.element,
                n = t(r);
            this.containerWidth = n && n.innerWidth
        }, i._getItemLayoutPosition = function(n) {
            var r;
            n.getSize();
            var u = n.size.outerWidth % this.columnWidth,
                f = u && u < 1 ? "round" : "ceil",
                i = Math[f](n.size.outerWidth / this.columnWidth);
            i = Math.min(i, this.cols);
            var e = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition",
                t = this[e](i, n),
                o = {
                    x: this.columnWidth * t.col,
                    y: t.y
                },
                s = t.y + n.size.outerHeight,
                h = i + t.col;
            for (r = t.col; r < h; r++) this.colYs[r] = s;
            return o
        }, i._getTopColPosition = function(n) {
            var t = this._getTopColGroup(n),
                i = Math.min.apply(Math, t);
            return {
                col: t.indexOf(i),
                y: i
            }
        }, i._getTopColGroup = function(n) {
            var i, r, t;
            if (n < 2) return this.colYs;
            for (i = [], r = this.cols + 1 - n, t = 0; t < r; t++) i[t] = this._getColGroupY(t, n);
            return i
        }, i._getColGroupY = function(n, t) {
            if (t < 2) return this.colYs[n];
            var i = this.colYs.slice(n, n + t);
            return Math.max.apply(Math, i)
        }, i._getHorizontalColPosition = function(n, t) {
            var i = this.horizontalColIndex % this.cols,
                u = n > 1 && i + n > this.cols,
                r;
            return i = u ? 0 : i, r = t.size.outerWidth && t.size.outerHeight, this.horizontalColIndex = r ? i + n : this.horizontalColIndex, {
                col: i,
                y: this._getColGroupY(i, n)
            }
        }, i._manageStamp = function(n) {
            var e = t(n),
                u = this._getElementOffset(n),
                l = this._getOption("originLeft"),
                o = l ? u.left : u.right,
                s = o + e.outerWidth,
                f = Math.floor(o / this.columnWidth),
                i, h, c, r;
            for (f = Math.max(0, f), i = Math.floor(s / this.columnWidth), i -= s % this.columnWidth ? 0 : 1, i = Math.min(this.cols - 1, i), h = this._getOption("originTop"), c = (h ? u.top : u.bottom) + e.outerHeight, r = f; r <= i; r++) this.colYs[r] = Math.max(c, this.colYs[r])
        }, i._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var n = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (n.width = this._getContainerFitWidth()), n
        }, i._getContainerFitWidth = function() {
            for (var n = 0, t = this.cols; --t;) {
                if (this.colYs[t] !== 0) break;
                n++
            }
            return (this.cols - n) * this.columnWidth - this.gutter
        }, i.needsResizeLayout = function() {
            var n = this.containerWidth;
            return this.getContainerWidth(), n != this.containerWidth
        }, r
    }),
    function(n, t) {
        typeof define == "function" && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], t) : typeof module == "object" && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(n.Isotope.LayoutMode, n.Masonry)
    }(window, function(n, t) {
        "use strict";
        var u = n.create("masonry"),
            i = u.prototype,
            o = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            },
            r, f, e;
        for (r in t.prototype) o[r] || (i[r] = t.prototype[r]);
        return f = i.measureColumns, i.measureColumns = function() {
            this.items = this.isotope.filteredItems, f.call(this)
        }, e = i._getOption, i._getOption = function(n) {
            return n == "fitWidth" ? this.options.isFitWidth !== undefined ? this.options.isFitWidth : this.options.fitWidth : e.apply(this.isotope, arguments)
        }, u
    }),
    function(n, t) {
        typeof define == "function" && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], t) : typeof exports == "object" ? module.exports = t(require("../layout-mode")) : t(n.Isotope.LayoutMode)
    }(window, function(n) {
        "use strict";
        var i = n.create("fitRows"),
            t = i.prototype;
        return t._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, t._getItemLayoutPosition = function(n) {
            var t, i, r;
            return n.getSize(), t = n.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter, this.x !== 0 && t + this.x > i && (this.x = 0, this.y = this.maxY), r = {
                x: this.x,
                y: this.y
            }, this.maxY = Math.max(this.maxY, this.y + n.size.outerHeight), this.x += t, r
        }, t._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, i
    }),
    function(n, t) {
        typeof define == "function" && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], t) : typeof module == "object" && module.exports ? module.exports = t(require("../layout-mode")) : t(n.Isotope.LayoutMode)
    }(window, function(n) {
        "use strict";
        var i = n.create("vertical", {
                horizontalAlignment: 0
            }),
            t = i.prototype;
        return t._resetLayout = function() {
            this.y = 0
        }, t._getItemLayoutPosition = function(n) {
            n.getSize();
            var t = (this.isotope.size.innerWidth - n.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += n.size.outerHeight, {
                x: t,
                y: i
            }
        }, t._getContainerSize = function() {
            return {
                height: this.y
            }
        }, i
    }),
    function(n, t) {
        typeof define == "function" && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, r, u, f, e, o) {
            return t(n, i, r, u, f, e, o)
        }) : typeof module == "object" && module.exports ? module.exports = t(n, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : n.Isotope = t(n, n.Outlayer, n.getSize, n.matchesSelector, n.fizzyUIUtils, n.Isotope.Item, n.Isotope.LayoutMode)
    }(window, function(n, t, i, r, u, f, e) {
        function v(n, t) {
            return function(i, r) {
                for (var s, h, u = 0; u < n.length; u++) {
                    var f = n[u],
                        e = i.sortData[f],
                        o = r.sortData[f];
                    if (e > o || e < o) return s = t[f] !== undefined ? t[f] : t, h = s ? 1 : -1, (e > o ? 1 : -1) * h
                }
                return 0
            }
        }
        var h = n.jQuery,
            a = String.prototype.trim ? function(n) {
                return n.trim()
            } : function(n) {
                return n.replace(/^\s+|\s+$/g, "")
            },
            s = t.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            }),
            o, c, l;
        return s.Item = f, s.LayoutMode = e, o = s.prototype, o._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var n in e.modes) this._initLayoutMode(n)
        }, o.reloadItems = function() {
            this.itemGUID = 0, t.prototype.reloadItems.call(this)
        }, o._itemize = function() {
            for (var n = t.prototype._itemize.apply(this, arguments), r, i = 0; i < n.length; i++) r = n[i], r.id = this.itemGUID++;
            return this._updateItemsSortData(n), n
        }, o._initLayoutMode = function(n) {
            var t = e.modes[n],
                i = this.options[n] || {};
            this.options[n] = t.options ? u.extend(t.options, i) : i, this.modes[n] = new t(this)
        }, o.layout = function() {
            if (!this._isLayoutInited && this._getOption("initLayout")) {
                this.arrange();
                return
            }
            this._layout()
        }, o._layout = function() {
            var n = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, n), this._isLayoutInited = !0
        }, o.arrange = function(n) {
            this.option(n), this._getIsInstant();
            var t = this._filter(this.items);
            this.filteredItems = t.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t), this._sort(), this._layout()
        }, o._init = o.arrange, o._hideReveal = function(n) {
            this.reveal(n.needReveal), this.hide(n.needHide)
        }, o._getIsInstant = function() {
            var n = this._getOption("layoutInstant"),
                t = n !== undefined ? n : !this._isLayoutInited;
            return this._isInstant = t, t
        }, o._bindArrangeComplete = function() {
            function n() {
                t && i && r && u.dispatchEvent("arrangeComplete", null, [u.filteredItems])
            }
            var t, i, r, u = this;
            this.once("layoutComplete", function() {
                t = !0, n()
            });
            this.once("hideComplete", function() {
                i = !0, n()
            });
            this.once("revealComplete", function() {
                r = !0, n()
            })
        }, o._filter = function(n) {
            var u = this.options.filter,
                i, t, r;
            u = u || "*";
            var f = [],
                e = [],
                o = [],
                s = this._getFilterTest(u);
            for (i = 0; i < n.length; i++)(t = n[i], t.isIgnored) || (r = s(t), r && f.push(t), r && t.isHidden ? e.push(t) : r || t.isHidden || o.push(t));
            return {
                matches: f,
                needReveal: e,
                needHide: o
            }
        }, o._getFilterTest = function(n) {
            return h && this.options.isJQueryFiltering ? function(t) {
                return h(t.element).is(n)
            } : typeof n == "function" ? function(t) {
                return n(t.element)
            } : function(t) {
                return r(t.element, n)
            }
        }, o.updateSortData = function(n) {
            var t;
            n ? (n = u.makeArray(n), t = this.getItems(n)) : t = this.items, this._getSorters(), this._updateItemsSortData(t)
        }, o._getSorters = function() {
            var t = this.options.getSortData,
                n, i;
            for (n in t) i = t[n], this._sorters[n] = c(i)
        }, o._updateItemsSortData = function(n) {
            for (var i = n && n.length, r, t = 0; i && t < i; t++) r = n[t], r.updateSortData()
        }, c = function() {
            function n(n) {
                if (typeof n != "string") return n;
                var i = a(n).split(" "),
                    r = i[0],
                    u = r.match(/^\[(.+)\]$/),
                    o = u && u[1],
                    f = t(o, r),
                    e = s.sortDataParsers[i[1]];
                return n = e ? function(n) {
                    return n && e(f(n))
                } : function(n) {
                    return n && f(n)
                }
            }

            function t(n, t) {
                return n ? function(t) {
                    return t.getAttribute(n)
                } : function(n) {
                    var i = n.querySelector(t);
                    return i && i.textContent
                }
            }
            return n
        }(), s.sortDataParsers = {
            parseInt: function(n) {
                return parseInt(n, 10)
            },
            parseFloat: function(n) {
                return parseFloat(n)
            }
        }, o._sort = function() {
            var n, t;
            this.options.sortBy && (n = u.makeArray(this.options.sortBy), this._getIsSameSortBy(n) || (this.sortHistory = n.concat(this.sortHistory)), t = v(this.sortHistory, this.options.sortAscending), this.filteredItems.sort(t))
        }, o._getIsSameSortBy = function(n) {
            for (var t = 0; t < n.length; t++)
                if (n[t] != this.sortHistory[t]) return !1;
            return !0
        }, o._mode = function() {
            var n = this.options.layoutMode,
                t = this.modes[n];
            if (!t) throw new Error("No layout mode: " + n);
            return t.options = this.options[n], t
        }, o._resetLayout = function() {
            t.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, o._getItemLayoutPosition = function(n) {
            return this._mode()._getItemLayoutPosition(n)
        }, o._manageStamp = function(n) {
            this._mode()._manageStamp(n)
        }, o._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, o.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, o.appended = function(n) {
            var t = this.addItems(n),
                i;
            t.length && (i = this._filterRevealAdded(t), this.filteredItems = this.filteredItems.concat(i))
        }, o.prepended = function(n) {
            var t = this._itemize(n),
                i;
            t.length && (this._resetLayout(), this._manageStamps(), i = this._filterRevealAdded(t), this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = t.concat(this.items))
        }, o._filterRevealAdded = function(n) {
            var t = this._filter(n);
            return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
        }, o.insert = function(n) {
            var i = this.addItems(n),
                t, u, r, f;
            if (i.length) {
                for (r = i.length, t = 0; t < r; t++) u = i[t], this.element.appendChild(u.element);
                for (f = this._filter(i).matches, t = 0; t < r; t++) i[t].isLayoutInstant = !0;
                for (this.arrange(), t = 0; t < r; t++) delete i[t].isLayoutInstant;
                this.reveal(f)
            }
        }, l = o.remove, o.remove = function(n) {
            var t, r, i, f;
            for (n = u.makeArray(n), t = this.getItems(n), l.call(this, n), r = t && t.length, i = 0; r && i < r; i++) f = t[i], u.removeFrom(this.filteredItems, f)
        }, o.shuffle = function() {
            for (var t, n = 0; n < this.items.length; n++) t = this.items[n], t.sortData.random = Math.random();
            this.options.sortBy = "random", this._sort(), this._layout()
        }, o._noTransition = function(n, t) {
            var r = this.options.transitionDuration,
                i;
            return this.options.transitionDuration = 0, i = n.apply(this, t), this.options.transitionDuration = r, i
        }, o.getFilteredItemElements = function() {
            return this.filteredItems.map(function(n) {
                return n.element
            })
        }, s
    }), $(document).ready(function() {
        timer = setInterval(function() {
            var n = ["smart-spend-wrapper", "smart-track", "smart-save", "smart-invest"];
            rotateWords(n)
        }, 2500)
    }), $(".Zone1 , .Zone2 , .Zone3 , .Zone4").hide(), $(document).ready(function() {
        RandomizeArray(), startTimeout = setInterval(RandomizeArray, "3000")
    }), $(function() {
        function yt() {
            setTimeout(function() {
                $(".security .card-wrapper .overlay").removeClass("active")
            }, 2e3)
        }
        var vt, t, c, l, a, i, r, u, f, e, o, s, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, ht, h, ct, lt, at, et, ot, n, st;
        if ($(".responsive").slick({
                dots: !1,
                infinite: !1,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: !0
            }), $(".slick-arrow").click(function() {
                $(".customer-row .doodles-box .heart").addClass("animated heartBeat"), $(".customer-row .doodles-box .hand").addClass("animated wobble"), $(".customer-row .doodles-box .smily, .customer-row .doodles-box .comment, .customer-row .doodles-box .talk").addClass("animated swing"), $(".customer-row .doodles-box .arrow").addClass("animated zoomIn"), $(".customer-row .doodles-box .speak, .customer-row .doodles-box .network").addClass("animated flash"), $(".customer-row .doodles-box .chart, .customer-row .doodles-box .goal").addClass("animated shake"), setTimeout(function() {
                    $(".customer-row .doodles-box .heart").removeClass("animated heartBeat"), $(".customer-row .doodles-box .hand").removeClass("animated wobble"), $(".customer-row .doodles-box .smily, .customer-row .doodles-box .comment, .customer-row .doodles-box .talk").removeClass("animated swing"), $(".customer-row .doodles-box .arrow").removeClass("animated zoomIn"), $(".customer-row .doodles-box .speak, .customer-row .doodles-box .network").removeClass("animated flash"), $(".customer-row .doodles-box .chart, .customer-row .doodles-box .goal").removeClass("animated shake")
                }, 1e3)
            }), $(".Smarter-india .mobile-view").length > 0) {
            vt = $(".Smarter-india .mobile-view");

            function pt() {
                $(".timer").countTo()
            }
            $(document).bind("scroll", function() {
                var t = $(document).scrollTop(),
                    i = vt.offset().top - window.innerHeight;
                t > i && (pt(), $(document).unbind("scroll"))
            })
        }
        $(".smart-spend-part1 .card1").length > 0 && (n = new ScrollMagic.Controller, t = new TimelineMax, t.to(".banner .rocket", .5, {
            className: "+=fadeInUp"
        }), t.to(".banner .word", .5, {
            className: "+=fadeIn"
        }), t.to(".banner .graph", .5, {
            className: "+=jello"
        }), t.to(".banner .bar", .5, {
            className: "+=jello"
        }), t.to(".banner .chart", .5, {
            className: "+=rotateIn"
        }), t.to(".banner .arrow-left", .5, {
            className: "+=fadeInUp"
        }), t.to(".banner .leaf", .5, {
            className: "+=shake"
        }), t.to(".banner .bulb2", .5, {
            className: "+=flash"
        }), t.to(".banner .bulb", .5, {
            className: "+=flash"
        }), new ScrollMagic.Scene({
            triggerElement: ".banner"
        }).on("enter", function() {
            t.time(0)
        }).setTween(t).addTo(n), c = new TimelineMax, c.to(".smart-spend-part1 .card1", .5, {
            className: "+=fadeInLeft"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-spend-wrapper"
        }).on("leave", function() {
            c.time(0)
        }).setTween(c).addTo(n), l = new TimelineMax, l.to(".smart-spend-part1 .card2", .5, {
            className: "+=fadeInLeft"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-spend-wrapper"
        }).on("leave", function() {
            l.time(0)
        }).setTween(l).addTo(n), a = new TimelineMax, a.to(".smart-spend-part2 .wrap-text", .5, {
            className: "+=fadeInLeft"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-spend-wrapper"
        }).on("leave", function() {
            a.time(0)
        }).setTween(a).addTo(n), i = new TimelineMax, i.to(".smart-track .track-part-1 .text-wrap", .5, {
            className: "+=fadeInRight"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-track .track-part-1 .text-wrap",
            triggerHook: .9
        }).on("start", function() {
            i.time(0)
        }).setTween(i).addTo(n), r = new TimelineMax, r.to(".smart-track .track-part-2 .textbottom .text-wrap", .5, {
            className: "+=fadeInRight"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-track .track-part-2 .textbottom .text-wrap",
            duration: "100%"
        }).on("leave", function() {
            r.time(0)
        }).setTween(r).addTo(n), u = new TimelineMax, u.to(".smart-track .track-part-4 .text-wrap", .5, {
            className: "+=fadeInRight"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-track .track-part-4 .text-wrap",
            duration: "100%"
        }).on("start", function() {
            u.time(0)
        }).setTween(u).addTo(n), f = new TimelineMax, f.to(".smart-track .track-part-1 .wrap-text-2", .5, {
            className: "+=grow"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-track  .track-part-1 .wrap-text-2",
            triggerHook: "0.9",
            duration: "100%"
        }).on("start", function() {
            f.time(0)
        }).setTween(f).addTo(n), e = new TimelineMax, e.to(".smart-track .track-part-2 .wrap-text-2.texttop", .5, {
            className: "+=grow"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-track .track-part-2 .wrap-text-2",
            duration: "100%"
        }).on("start", function() {
            e.time(0)
        }).setTween(e).addTo(n), o = new TimelineMax, o.to(".smart-track .track-part-2 .wrap-text-2.textbottom", .5, {
            className: "+=grow"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-track .track-part-2 .wrap-text-2.textbottom",
            duration: "100%"
        }).on("leave", function() {
            o.time(0)
        }).setTween(o).addTo(n), s = new TimelineMax, s.to(".smart-track .track-part-4 .wrap-text-2", .5, {
            className: "+=grow"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-track .track-part-4 .wrap-text-2",
            duration: "100%"
        }).on("start", function() {
            s.time(0)
        }).setTween(s).addTo(n), v = new TimelineMax, v.to(".smart-invest .invest-part1 .wrap1 .wrap-text-2", .5, {
            className: "+=grow"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-invest .invest-part1"
        }).on("start", function() {
            v.time(0)
        }).setTween(v).addTo(n), y = new TimelineMax, y.to(".smart-invest .invest-part1 .wrap1 .text-wrap", .5, {
            className: "+=fadeInRight"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-invest .invest-part1",
            triggerHook: "onEnter"
        }).on("start", function() {
            y.time(0)
        }).setTween(y).addTo(n), p = new TimelineMax, p.to(".smart-invest .invest-part1 .wrap2 .wrap-text-2", .5, {
            className: "+=grow"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-invest .invest-part1"
        }).on("center", function() {
            p.time(0)
        }).setTween(p).addTo(n), w = new TimelineMax, w.to(".smart-invest .invest-part1 .wrap2 .text-wrap", .5, {
            className: "+=fadeInRight"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-invest .invest-part1"
        }).on("center", function() {
            w.time(0)
        }).setTween(w).addTo(n), b = new TimelineMax, b.to(".smart-save .smart1 .wrap1 .wrap-text", .5, {
            className: "+=fadeInLeft"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-save .smart1 .wrap1"
        }).on("start", function() {
            b.time(0)
        }).setTween(b).addTo(n), k = new TimelineMax, k.to(".smart-save .smart1 .wrap1 .text-wrapper", .5, {
            className: "+=fadeInLeft"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-save .smart1 .wrap1"
        }).on("start", function() {
            k.time(0)
        }).setTween(k).addTo(n), d = new TimelineMax, d.to(".smart-save .smart1 .wrap2 .wrap-text", .5, {
            className: "+=fadeInLeft"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-save .smart1 .wrap2"
        }).on("center", function() {
            d.time(0)
        }).setTween(d).addTo(n), g = new TimelineMax, g.to(".smart-save .smart1 .wrap2 .text-wrapper", .5, {
            className: "+=fadeInLeft"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-save .smart1 .wrap2"
        }).on("center", function() {
            g.time(0)
        }).setTween(g).addTo(n), nt = new TimelineMax, nt.to(".Get-in-app .mobile-view", 1, {
            className: "+=rotate"
        }), new ScrollMagic.Scene({
            triggerElement: ".Get-in-app"
        }).on("start", function() {
            nt.time(0)
        }).setTween(nt).addTo(n), new ScrollMagic.Scene({
            triggerElement: ".customer-speaks",
            triggerHook: "onEnter"
        }).reverse(!1).addTo(n), tt = new TimelineMax, tt.to(".security .card-img img", .5, {
            className: "+=fadeIn"
        }), new ScrollMagic.Scene({
            triggerElement: ".security"
        }).on("center", function() {
            tt.time(0)
        }).setTween(tt).addTo(n), it = new TimelineMax, it.to(".security .card-d", 1, {
            className: "+=nobounce"
        }), new ScrollMagic.Scene({
            triggerElement: ".security"
        }).on("center", function() {
            it.time(0)
        }).setTween(it).addTo(n), rt = new TimelineMax, rt.to(".security .insurance-d", 1, {
            className: "+=nobounce"
        }), new ScrollMagic.Scene({
            triggerElement: ".security"
        }).on("center", function() {
            rt.time(0)
        }).setTween(rt).addTo(n), ut = new TimelineMax, ut.to(".security .card-farud img", 1, {
            className: "+=shake"
        }), new ScrollMagic.Scene({
            triggerElement: ".security"
        }).on("center", function() {
            ut.time(0)
        }).setTween(ut).addTo(n), ft = new TimelineMax, ft.to(".security .overlay", 1, {
            className: "+=active"
        }), new ScrollMagic.Scene({
            triggerElement: ".security"
        }).on("center", function() {
            ft.time(0)
        }).setTween(ft).on("enter", yt).addTo(n), $(window).width() > 1151 && (n = new ScrollMagic.Controller, ht = new TimelineMax, ht.to(".smart-track .track-part-1 .graph img", .5, {
            scale: .6,
            y: 700
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-track .track-part-1",
            duration: "100%",
            triggerHook: 0
        }).setTween(ht).addTo(n), h = new TimelineMax, h.from(".smart-track .track-part-2 .mobile-view1 .view", 1, {
            opacity: .1,
            y: 0,
            display: "inline-block"
        }), h.to(".smart-track .track-part-2 .mobile-view1 .view", 1, {
            display: "none"
        }), h.from(".smart-track .track-part-2 .mobile-view1 .view1", 1, {
            display: "none"
        }), h.to(".smart-track .track-part-2 .mobile-view1 .view1", 1, {
            scale: 1.3,
            y: -100,
            display: "inline-block"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-track .track-part-2 .mobile-view1",
            duration: "100%",
            triggerHook: "0.85"
        }).setTween(h).addTo(n), ct = new TimelineMax, ct.to(".smart-track .track-part-2 .textbottom", 1, {
            opacity: 1
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-track .track-part-2  .wrap-text-2.textbottom",
            duration: "100%",
            triggerHook: "onCenter"
        }).setTween(ct).addTo(n), lt = new TimelineMax, lt.to(".smart-track .track-part-2 .mobile-view1 .view1", 1, {
            opacity: 1
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-track .track-part-2 .mobile-view1",
            duration: "110%",
            triggerHook: "onLeave"
        }).setTween(lt).addTo(n), new ScrollMagic.Scene({
            triggerElement: ".smart-invest .invest-part1",
            triggerHook: "onLeave"
        }).setClassToggle(".smart-invest .invest-part1  .img", "active").addTo(n), at = new TimelineMax, at.from(".smart-invest .invest-part1 .wrap2", 1, {
            display: "none"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-invest .invest-part1",
            triggerHook: "onEnter",
            duration: "100%"
        }).setTween(at).addTo(n), et = new TimelineMax, et.to(".smart-invest .invest-part1 .wrap1", 1, {
            display: "none"
        }), et.to(".smart-invest .invest-part1 .wrap2", 1, {
            display: "block"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-invest .invest-part1",
            triggerHook: "onCenter",
            duration: "100%"
        }).setTween(et).addTo(n)), ot = new TimelineMax, ot.to(".smart-spend-part2 .text-wrapper", .5, {
            className: "+=fadeInLeft"
        }), new ScrollMagic.Scene({
            triggerElement: ".smart-spend-wrapper"
        }).on("start", function() {
            i.restart(), r.restart(), u.restart(), f.restart(), e.restart(), o.restart(), s.restart()
        }).on("leave", function() {
            ot.time(0), i.pause(), r.pause(), u.pause(), f.pause(), e.pause(), o.pause(), s.pause()
        }).setTween(ot).addTo(n)), $(window).width() > 1151 && $("#scrollable-div").length > 0 && (n = new ScrollMagic.Controller, st = new TimelineMax, st.to(".sticky-img", 1, {
            className: "+=stickyimg"
        }), new ScrollMagic.Scene({
            triggerElement: ".sticky-img",
            triggerHook: "onCenter"
        }).on("start", function() {
            st.time(0)
        }).setTween(st).addTo(n), new ScrollMagic.Scene({
            triggerElement: ".send-money",
            triggerHook: "onCenter"
        }).on("start", function() {
            $("#innerimage").attr("src", "../Images/account/send-money.mp4"), $("#videowrapper")[0].load()
        }).addTo(n), new ScrollMagic.Scene({
            triggerElement: ".spend-manager",
            triggerHook: "onCenter"
        }).on("start", function() {
            $("#innerimage").attr("src", "../Images/account/spend-manager.mp4"), $("#videowrapper")[0].load()
        }).addTo(n), new ScrollMagic.Scene({
            triggerElement: ".buy",
            triggerHook: "onCenter"
        }).on("start", function() {
            $("#innerimage").attr("src", "../Images/account/gold.mp4"), $("#videowrapper")[0].load()
        }).addTo(n), new ScrollMagic.Scene({
            triggerElement: ".shop",
            triggerHook: "onCenter"
        }).on("start", function() {
            $("#innerimage").attr("src", "../Images/account/shop.mp4"), $("#videowrapper")[0].load()
        }).addTo(n), new ScrollMagic.Scene({
            triggerElement: ".pay",
            triggerHook: "onCenter"
        }).on("start", function() {
            $("#innerimage").attr("src", "../Images/account/merchants.mp4"), $("#videowrapper")[0].load()
        }).addTo(n), new ScrollMagic.Scene({
            triggerElement: ".merchant",
            triggerHook: "onCenter"
        }).on("start", function() {
            $("#innerimage").attr("src", "../Images/account/nearby-merchants.mp4"), $("#videowrapper")[0].load()
        }).addTo(n), new ScrollMagic.Scene({
            triggerElement: ".bills",
            triggerHook: "onCenter"
        }).on("start", function() {
            $("#innerimage").attr("src", "../Images/account/pay-bills.mp4"), $("#videowrapper")[0].load()
        }).addTo(n))
    }), $(function() {
        function y() {
            var u, r, n, f;
            for (v = document.getElementById("container").offsetWidth + 10, g(v, window.innerHeight), u = i.width, r = i.height, n = 0; n < o; n++) t[n] = new p(u / (o - 1) * n, r / 2, r / 2);
            b(), f = window.innerWidth / 3
        }

        function w() {
            y();
            var n = 50,
                t = 1e3 / n >> 0,
                r = setInterval(k, t);
            window.addEventListener && s(window, "DOMMouseScroll", l), s(window, "mousewheel", l), s(window, "resize", y), i.onmousemove = function(n) {
                var t, r;
                n ? (t = n.pageX, r = n.pageY) : (t = event.x + document.body.scrollLeft, r = event.y + document.body.scrollTop), e = 1e3, t < i.width - 2 && (f = 1 + Math.floor((o - 2) * t / i.width), u[f] = e)
            }
        }

        function b() {
            for (var n = 0; n < o; n++) u[n] = 0
        }

        function k() {
            var h, s;
            for (n.clearRect(0, 0, i.width, i.height), e -= e * .9, u[f] = e, s = f - 1; s > 0; s--) h = f - s, h > r && (h = r), u[s] -= (u[s] - u[s + 1]) * (1 - .01 * h);
            for (s = f + 1; s < o; s++) h = s - f, h > r && (h = r), u[s] -= (u[s] - u[s - 1]) * (1 - .01 * h);
            for (s = 0; s < t.length; s++) t[s].updateY(u[s]);
            d()
        }

        function d() {
            var u;
            for (n.beginPath(), n.moveTo(0, window.innerHeight), n.fillStyle = h, n.lineTo(t[0].x, t[0].y), u = 1; u < t.length; u++) n.lineTo(t[u].x, t[u].y);
            for (n.lineTo(i.width, window.innerHeight), n.lineTo(0, window.innerHeight), n.fill(), n.beginPath(), n.moveTo(0, window.innerHeight), n.fillStyle = c, n.lineTo(t[0].x + 15, t[0].y + 10), u = 1; u < t.length; u++) n.lineTo(t[u].x + 15, t[u].y + 10);
            for (n.lineTo(i.width, window.innerHeight), n.lineTo(0, window.innerHeight), n.fill(), n.beginPath(), n.moveTo(0, window.innerHeight), n.fillStyle = a, n.lineTo(t[0].x, t[0].y + 20), u = 1; u < t.length; u++) n.lineTo(t[u].x, t[u].y + 20);
            n.lineTo(i.width, window.innerHeight), n.lineTo(0, window.innerHeight), n.fill(), n.fillStyle = "#777", n.font = "12px sans-serif", n.textBaseline = "top", n.fillText("Click on the surface of the liquid", 70, i.height / 2 - 20), n.fillStyle = "#fff", n.fillText("Use mouse wheel to change the viscosity", 70, i.height / 2 + 15), n.fillText("滚轮改变粘稠度 / Viscosity: " + ((r - 15) * 20 / 7).toFixed(2) + "%", 70, i.height - 20)
        }

        function g(t, r) {
            i = document.getElementById("canvas"), i.width = t, i.height = r, n = i.getContext("2d")
        }

        function p(n, t, i) {
            this.baseY = i, this.x = n, this.y = t, this.vy = 0, this.targetY = 0, this.friction = .01, this.deceleration = .95
        }
        var i, n, t = [],
            u = [],
            e = 1e3,
            o = 250,
            v = window.innerWidth + 40,
            s = function(n, t, i) {
                n.addEventListener ? n.addEventListener(t, i, !1) : n.attachEvent && n.attachEvent("on" + t, i)
            },
            l, f, r;
        s(window, "load", w), l = function(n) {
            var t = n.detail ? -n.detail : n.wheelDelta;
            t > 0 ? r > 15 ? r-- : r = r : r < 50 ? r++ : r = r
        }, f = 150, r = 15;
        var h = "#8d051e",
            c = "#fff",
            a = "#fff";
        p.prototype.updateY = function(n) {
            this.targetY = n + this.baseY, this.vy += this.targetY - this.y, this.y += this.vy * this.friction, this.vy *= this.deceleration
        };
        var nt = function() {
                h = "#6ca0f6", c = "#367aec", a = "#367aec"
            },
            tt = function() {
                h = "rgba(121, 30, 47, 0.5)", c = "#791e2f", a = "#ffffff"
            },
            it = function() {
                h = "#ff92ec", c = "#f727d2", color4 = "#f727d2"
            }
    })