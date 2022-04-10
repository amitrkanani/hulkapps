if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) { "use strict"; var b = a.fn.jquery.split(" ")[0].split("."); if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3") }(jQuery), + function(a) { "use strict";

    function b() { var a = document.createElement("bootstrap"),
            b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var c in b)
            if (void 0 !== a.style[c]) return { end: b[c] }; return !1 } a.fn.emulateTransitionEnd = function(b) { var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() { c = !0 }); var e = function() { c || a(d).trigger(a.support.transition.end) }; return setTimeout(e, b), this }, a(function() { a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function(b) { return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0 } }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c) }) } var c = '[data-dismiss="alert"]',
        d = function(b) { a(b).on("click", c, this.close) };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() { g.detach().trigger("closed.bs.alert").remove() } var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")); var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c()) }; var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() { return a.fn.alert = e, this }, a(document).on("click.bs.alert.data-api", c, d.prototype.close) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b) }) } var c = function(b, d) { this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1 };
    c.VERSION = "3.3.6", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function(b) { var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() { d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c)) }, this), 0) }, c.prototype.toggle = function() { var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]'); if (b.length) { var c = this.$element.find("input"); "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") }; var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() { return a.fn.button = d, this }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) { var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault() }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) { a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type)) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle() }) } var c = function(b, c) { this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this)) };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function(a) { if (!/input|textarea/i.test(a.target.tagName)) { switch (a.which) {
                case 37:
                    this.prev(); break;
                case 39:
                    this.next(); break;
                default:
                    return } a.preventDefault() } }, c.prototype.cycle = function(b) { return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this }, c.prototype.getItemIndex = function(a) { return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active) }, c.prototype.getItemForDirection = function(a, b) { var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1; if (d && !this.options.wrap) return b; var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length; return this.$items.eq(f) }, c.prototype.to = function(a) { var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active")); return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() { b.to(a) }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a)) }, c.prototype.pause = function(b) { return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, c.prototype.next = function() { return this.sliding ? void 0 : this.slide("next") }, c.prototype.prev = function() { return this.sliding ? void 0 : this.slide("prev") }, c.prototype.slide = function(b, d) { var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this; if (f.hasClass("active")) return this.sliding = !1; var j = f[0],
            k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h }); if (this.$element.trigger(k), !k.isDefaultPrevented()) { if (this.sliding = !0, g && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active") } var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h }); return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() { f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() { i.$element.trigger(m) }, 0) }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this } }; var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() { return a.fn.carousel = d, this }; var e = function(c) { var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")); if (f.hasClass("carousel")) { var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault() } };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() { a('[data-ride="carousel"]').each(function() { var c = a(this);
            b.call(c, c.data()) }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""); return a(d) }

    function c(b) { return this.each(function() { var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]() }) } var d = function(b, c) { this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function() { var a = this.$element.hasClass("width"); return a ? "width" : "height" }, d.prototype.show = function() { if (!this.transitioning && !this.$element.hasClass("in")) { var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) { var f = a.Event("show.bs.collapse"); if (this.$element.trigger(f), !f.isDefaultPrevented()) { e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null)); var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var h = function() { this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!a.support.transition) return h.call(this); var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]) } } } }, d.prototype.hide = function() { if (!this.transitioning && this.$element.hasClass("in")) { var b = a.Event("hide.bs.collapse"); if (this.$element.trigger(b), !b.isDefaultPrevented()) { var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var e = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this) } } }, d.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, d.prototype.getParent = function() { return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) { var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e) }, this)).end() }, d.prototype.addAriaAndCollapsedClass = function(a, b) { var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c) }; var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() { return a.fn.collapse = e, this }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) { var e = a(this);
        e.attr("data-target") || d.preventDefault(); var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h) }) }(jQuery), + function(a) { "use strict";

    function b(b) { var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")); var d = c && a(c); return d && d.length ? d : b.parent() }

    function c(c) { c && 3 === c.which || (a(e).remove(), a(f).each(function() { var d = a(this),
                e = b(d),
                f = { relatedTarget: this };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f))))) })) }

    function d(b) { return this.each(function() { var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c) }) } var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) { a(b).on("click.bs.dropdown", this.toggle) };
    g.VERSION = "3.3.6", g.prototype.toggle = function(d) { var e = a(this); if (!e.is(".disabled, :disabled")) { var f = b(e),
                g = f.hasClass("open"); if (c(), !g) { "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c); var h = { relatedTarget: this }; if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h)) } return !1 } }, g.prototype.keydown = function(c) { if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) { var d = a(this); if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) { var e = b(d),
                    g = e.hasClass("open"); if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click"); var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h); if (i.length) { var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus") } } } }; var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() { return a.fn.dropdown = h, this }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) { a.stopPropagation() }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown) }(jQuery), + function(a) { "use strict";

    function b(b, d) { return this.each(function() { var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d) }) } var c = function(b, c) { this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function(a) { return this.isShown ? this.hide() : this.show(a) }, c.prototype.show = function(b) { var d = this,
            e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { d.$element.one("mouseup.dismiss.bs.modal", function(b) { a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0) }) }), this.backdrop(function() { var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus(); var f = a.Event("shown.bs.modal", { relatedTarget: b });
            e ? d.$dialog.one("bsTransitionEnd", function() { d.$element.trigger("focus").trigger(f) }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f) })) }, c.prototype.hide = function(b) { b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal()) }, c.prototype.enforceFocus = function() { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) { this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus") }, this)) }, c.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) { 27 == a.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, c.prototype.resize = function() { this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal") }, c.prototype.hideModal = function() { var a = this;
        this.$element.hide(), this.backdrop(function() { a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal") }) }, c.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, c.prototype.backdrop = function(b) { var d = this,
            e = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var f = a.support.transition && e; if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) { return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var g = function() { d.removeBackdrop(), b && b() };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g() } else b && b() }, c.prototype.handleUpdate = function() { this.adjustDialog() }, c.prototype.adjustDialog = function() { var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" }) }, c.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, c.prototype.checkScrollbar = function() { var a = window.innerWidth; if (!a) { var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left) } this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar() }, c.prototype.setScrollbar = function() { var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth) }, c.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, c.prototype.measureScrollbar = function() { var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a); var b = a.offsetWidth - a.clientWidth; return this.$body[0].removeChild(a), b }; var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() { return a.fn.modal = d, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) { var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) { a.isDefaultPrevented() || f.one("hidden.bs.modal", function() { d.is(":visible") && d.trigger("focus") }) }), b.call(f, g, this) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function(a, b) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b) };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function(b, c, d) { if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!"); for (var e = this.options.trigger.split(" "), f = e.length; f--;) { var g = e[f]; if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) { var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this)) } } this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.getOptions = function(b) { return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b }, c.prototype.getDelegateOptions = function() { var b = {},
            c = this.getDefaults(); return this._options && a.each(this._options, function(a, d) { c[a] != d && (b[a] = d) }), b }, c.prototype.enter = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() { "in" == c.hoverState && c.show() }, c.options.delay.show)) : c.show()) }, c.prototype.isInStateTrue = function() { for (var a in this.inState)
            if (this.inState[a]) return !0; return !1 }, c.prototype.leave = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() { "out" == c.hoverState && c.hide() }, c.options.delay.hide)) : c.hide()) }, c.prototype.show = function() { var b = a.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(b); var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (b.isDefaultPrevented() || !d) return; var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade"); var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type); var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight; if (j) { var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h) } var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h); var q = function() { var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e) };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q() } }, c.prototype.applyPlacement = function(b, c) { var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function(a) { d.css({ top: Math.round(a.top), left: Math.round(a.left) }) } }, b), 0), d.addClass("in"); var i = d[0].offsetWidth,
            j = d[0].offsetHeight; "top" == c && j != f && (b.top = b.top + f - j); var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top; var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l) }, c.prototype.replaceArrow = function(a, b, c) { this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "") }, c.prototype.setContent = function() { var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right") }, c.prototype.hide = function(b) {
        function d() { "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b() } var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type); return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this) }, c.prototype.fixTitle = function() { var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "") }, c.prototype.hasContent = function() { return this.getTitle() }, c.prototype.getPosition = function(b) { b = b || this.$element; var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top })); var f = d ? { top: 0, left: 0 } : b.offset(),
            g = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
            h = d ? { width: a(window).width(), height: a(window).height() } : null; return a.extend({}, e, g, h, f) }, c.prototype.getCalculatedOffset = function(a, b, c, d) { return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width } }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) { var e = { top: 0, left: 0 }; if (!this.$viewport) return e; var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport); if (/right|left/.test(a)) { var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i) } else { var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k) } return e }, c.prototype.getTitle = function() { var a, b = this.$element,
            c = this.options; return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title) }, c.prototype.getUID = function(a) { do a += ~~(1e6 * Math.random()); while (document.getElementById(a)); return a }, c.prototype.tip = function() { if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, c.prototype.enable = function() { this.enabled = !0 }, c.prototype.disable = function() { this.enabled = !1 }, c.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, c.prototype.toggle = function(b) { var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c) }, c.prototype.destroy = function() { var a = this;
        clearTimeout(this.timeout), this.hide(function() { a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null }) }; var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() { return a.fn.tooltip = d, this } }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function(a, b) { this.init("popover", a, b) }; if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.setContent = function() { var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide() }, c.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, c.prototype.getContent = function() { var a = this.$element,
            b = this.options; return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content) }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") }; var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() { return a.fn.popover = d, this } }(jQuery), + function(a) { "use strict";

    function b(c, d) { this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process() }

    function c(c) { return this.each(function() { var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]() }) } b.VERSION = "3.3.6", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, b.prototype.refresh = function() { var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() { var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e); return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null }).sort(function(a, b) { return a[0] - b[0] }).each(function() { b.offsets.push(this[0]), b.targets.push(this[1]) }) }, b.prototype.process = function() { var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget; if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a); if (g && b < e[0]) return this.activeTarget = null, this.clear(); for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]) }, b.prototype.activate = function(b) { this.activeTarget = b, this.clear(); var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy") }, b.prototype.clear = function() { a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") }; var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() { return a.fn.scrollspy = d, this }, a(window).on("load.bs.scrollspy.data-api", function() { a('[data-spy="scroll"]').each(function() { var b = a(this);
            c.call(b, b.data()) }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]() }) } var c = function(b) { this.element = a(b) };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function() { var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target"); if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) { var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                g = a.Event("show.bs.tab", { relatedTarget: e[0] }); if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) { var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() { e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] }) }) } } }, c.prototype.activate = function(b, d, e) {
        function f() { g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e() } var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in") }; var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() { return a.fn.tab = d, this }; var e = function(c) { c.preventDefault(), b.call(a(this), "show") };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]() }) } var c = function(b, d) { this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
    c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function(a, b, c, d) { var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height(); if (null != c && "top" == this.affixed) return c > e ? "top" : !1; if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom"; var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b; return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1 }, c.prototype.getPinnedOffset = function() { if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix"); var a = this.$target.scrollTop(),
            b = this.$element.offset(); return this.pinnedOffset = b.top - a }, c.prototype.checkPositionWithEventLoop = function() { setTimeout(a.proxy(this.checkPosition, this), 1) }, c.prototype.checkPosition = function() { if (this.$element.is(":visible")) { var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height()); "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element)); var h = this.getState(g, b, e, f); if (this.affixed != h) { null != this.unpin && this.$element.css("top", ""); var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix"); if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix") } "bottom" == h && this.$element.offset({ top: g - b - f }) } }; var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() { return a.fn.affix = d, this }, a(window).on("load", function() { a('[data-spy="affix"]').each(function() { var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d) }) }) }(jQuery);
(function() { $(window).on('load', function() { $(".outslider_loading").fadeOut("slow"); }); }());
jQuery(document).ready(function($) { $('.acc_container').hide();
    $('.acc_trigger').click(function() { $('.acc_trigger').removeClass('active').next().slideUp();
        $(this).toggleClass('active').next().slideDown(); return false; });
    $('.acc_expand-all').click(function(e) {

    	$(this).children('.arrow').toggleClass('active');

     var all = $('.acc_trigger'),
            active = all.filter('.active'); if (all.length && all.length === active.length) { all.removeClass('active').next().slideUp(); } else { all.not('.active').addClass('active').next().slideDown(); } return false; 
        }); 

});

(function($) { $.fn.parallax = function(options) { var windowHeight = $(window).height(); var settings = $.extend({ speed: 0.15 }, options); return this.each(function() { var $this = $(this);
            $(document).scroll(function() { var scrollTop = $(window).scrollTop(); var offset = $this.offset().top; var height = $this.outerHeight(); if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) { return; } var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
                $this.css('background-position', 'center ' + yBgPosition + 'px'); }); }); } }(jQuery));
(function($) { $(function() { $(document).off('click.bs.tab.data-api', '[data-hover="tab"]');
        $(document).on('mouseenter.bs.tab.data-api', '[data-toggle="tab"], [data-hover="tab"]', function() { $(this).tab('show'); }); }); })(jQuery);
var $item = $('.carousel .item');
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight);
$item.addClass('full-screen');
$('.carousel img').each(function() { var $src = $(this).attr('src'); var $color = $(this).attr('data-color');
    $(this).parent().css({ 'background-image': 'url(' + $src + ')', 'background-color': $color });
    $(this).remove(); });
$(window).on('resize', function() { $wHeight = $(window).height();
    $item.height($wHeight); });
$('.carousel').carousel({ interval: 6000, pause: "false" });
(function($) {
    jQuery.fn.menuzord = function(options) {
        var settings;
        $.extend(settings = { showSpeed: 300, hideSpeed: 300, trigger: "hover", showDelay: 0, hideDelay: 0, effect: "fade", align: "left", responsive: true, animation: "none", indentChildren: true, indicatorFirstLevel: "+", indicatorSecondLevel: "+", scrollable: true, scrollableMaxHeight: 400 }, options);
        var menu_container = $(this);
        var menu = $(menu_container).children(".menuzord-menu");
        var menu_li = $(menu).find("li");
        var showHideButton;
        var mobileWidthBase = 767;
        var bigScreenFlag = 2000;
        var smallScreenFlag = 200;
        $(menu).children("li").children("a").each(function() { if ($(this).siblings(".dropdown, .megamenu").length > 0) { $(this).append("<span class='indicator'>" + settings.indicatorFirstLevel + "</span>"); } });
        $(menu).find(".dropdown").children("li").children("a").each(function() { if ($(this).siblings(".dropdown").length > 0) { $(this).append("<span class='indicator'>" + settings.indicatorSecondLevel + "</span>"); } });
        if (settings.align == "right") { $(menu).addClass("menuzord-right"); }
        if (settings.indentChildren) { $(menu).addClass("menuzord-indented"); }
        if (settings.responsive) { $(menu_container).addClass("menuzord-responsive").prepend("<a href='javascript:void(0)' class='showhide'><em></em><em></em><em></em></a>");
            showHideButton = $(menu_container).children(".showhide"); }
        if (settings.scrollable) { if (settings.responsive) { $(menu).css("max-height", settings.scrollableMaxHeight).addClass("scrollable").append("<li class='scrollable-fix'></li>"); } }

        function showDropdown(item) {
            if (settings.effect == "fade") $(item).children(".dropdown, .megamenu").stop(true, true).delay(settings.showDelay).fadeIn(settings.showSpeed).addClass(settings.animation);
            else
                $(item).children(".dropdown, .megamenu").stop(true, true).delay(settings.showDelay).slideDown(settings.showSpeed).addClass(settings.animation);
        }

        function hideDropdown(item) {
            if (settings.effect == "fade") $(item).children(".dropdown, .megamenu").stop(true, true).delay(settings.hideDelay).fadeOut(settings.hideSpeed).removeClass(settings.animation);
            else
                $(item).children(".dropdown, .megamenu").stop(true, true).delay(settings.hideDelay).slideUp(settings.hideSpeed).removeClass(settings.animation);
            $(item).children(".dropdown, .megamenu").find(".dropdown, .megamenu").stop(true, true).delay(settings.hideDelay).fadeOut(settings.hideSpeed);
        }

        function landscapeMode() { $(menu).find(".dropdown, .megamenu").hide(0); if (navigator.userAgent.match(/Mobi/i) || window.navigator.msMaxTouchPoints > 0 || settings.trigger == "click") { $(".menuzord-menu > li > a, .menuzord-menu ul.dropdown li a").bind("click touchstart", function(e) { e.stopPropagation();
                    e.preventDefault();
                    $(this).parent("li").siblings("li").find(".dropdown, .megamenu").stop(true, true).fadeOut(300); if ($(this).siblings(".dropdown, .megamenu").css("display") == "none") { showDropdown($(this).parent("li")); return false; } else { hideDropdown($(this).parent("li")); } window.location.href = $(this).attr("href"); });
                $(document).bind("click.menu touchstart.menu", function(ev) { if ($(ev.target).closest(".menuzord").length == 0) { $(".menuzord-menu").find(".dropdown, .megamenu").fadeOut(300); } }); } else { $(menu_li).bind("mouseenter", function() { showDropdown(this); }).bind("mouseleave", function() { hideDropdown(this); }); } }

        function portraitMode() { $(menu).find(".dropdown, .megamenu").hide(0);
            $(menu).find(".indicator").each(function() { if ($(this).parent("a").siblings(".dropdown, .megamenu").length > 0) { $(this).bind("click", function(e) { $(menu).scrollTo({ top: 45, left: 0 }, 600); if ($(this).parent().prop("tagName") == "A") { e.preventDefault(); } if ($(this).parent("a").siblings(".dropdown, .megamenu").css("display") == "none") { $(this).parent("a").siblings(".dropdown, .megamenu").delay(settings.showDelay).slideDown(settings.showSpeed);
                            $(this).parent("a").parent("li").siblings("li").find(".dropdown, .megamenu").slideUp(settings.hideSpeed); } else { $(this).parent("a").siblings(".dropdown, .megamenu").slideUp(settings.hideSpeed); } }); } }); }

        function fixSubmenuRight() { var submenus = $(menu).children("li").children(".dropdown, .megamenu"); if ($(window).innerWidth() > mobileWidthBase) { var menu_width = $(menu_container).outerWidth(true); for (var i = 0; i < submenus.length; i++) { if ($(submenus[i]).parent("li").position().left + $(submenus[i]).outerWidth() > menu_width) { $(submenus[i]).css("right", 0); } else { if (menu_width == $(submenus[i]).outerWidth() || (menu_width - $(submenus[i]).outerWidth()) < 20) { $(submenus[i]).css("left", 0); } if ($(submenus[i]).parent("li").position().left + $(submenus[i]).outerWidth() < menu_width) { $(submenus[i]).css("right", "auto"); } } } } }

        function showMobileBar() {
            $(menu).hide(0);
            $(showHideButton).show(0).click(function() {
                if ($(menu).css("display") == "none") $(menu).slideDown(settings.showSpeed);
                else
                    $(menu).slideUp(settings.hideSpeed).find(".dropdown, .megamenu").hide(settings.hideSpeed);
            });
        }

        function hideMobileBar() { $(menu).show(0);
            $(showHideButton).hide(0); }

        function unbindEvents() { $(menu_container).find("li, a").unbind();
            $(document).unbind("click.menu touchstart.menu"); }

        function menuTabs() {
            function startTab(tab) { var TabNavs = $(tab).find(".menuzord-tabs-nav > li"); var TabContents = $(tab).find(".menuzord-tabs-content");
                $(TabNavs).bind("click touchstart", function(e) { e.stopPropagation();
                    e.preventDefault();
                    $(TabNavs).removeClass("active");
                    $(this).addClass("active");
                    $(TabContents).hide(0);
                    $(TabContents[$(this).index()]).show(0); }); } if ($(menu).find(".menuzord-tabs").length > 0) { var menuTabs = $(menu).find(".menuzord-tabs"); for (var i = 0; i < menuTabs.length; i++) { startTab(menuTabs[i]); } } }

        function windowWidth() { return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; }

        function startMenu() { fixSubmenuRight(); if (windowWidth() <= mobileWidthBase && bigScreenFlag > mobileWidthBase) { unbindEvents(); if (settings.responsive) { showMobileBar();
                    portraitMode(); } else { landscapeMode(); } } if (windowWidth() > mobileWidthBase && smallScreenFlag <= mobileWidthBase) { unbindEvents();
                hideMobileBar();
                landscapeMode(); } bigScreenFlag = windowWidth();
            smallScreenFlag = windowWidth();
            menuTabs(); if (/MSIE (\d+\.\d+);/.test(navigator.userAgent) && windowWidth() < mobileWidthBase) { var ieversion = new Number(RegExp.$1); if (ieversion == 8) { $(showHideButton).hide(0);
                    $(menu).show(0);
                    unbindEvents();
                    landscapeMode(); } } } startMenu();
        $(window).resize(function() { startMenu();
            fixSubmenuRight(); });
    }
}(jQuery));
jQuery(document).ready(function() { jQuery("#menuzord").menuzord({ indicatorFirstLevel: "<i class='fa fa-angle-down'></i>", indicatorSecondLevel: "<i class='fa fa-angle-right'></i>" });
    jQuery('#slideshow ul').bxSlider({ useCSS: false, pager: false, controls: false, auto: true, }); });
(function(k) { 'use strict';
    k(['jquery'], function($) { var j = $.scrollTo = function(a, b, c) { return $(window).scrollTo(a, b, c) };
        j.defaults = { axis: 'xy', duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1, limit: !0 };
        j.window = function(a) { return $(window)._scrollable() };
        $.fn._scrollable = function() { return this.map(function() { var a = this,
                    isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1; if (!isWin) return a; var b = (a.contentWindow || a).document || a.ownerDocument || a; return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement }) };
        $.fn.scrollTo = function(f, g, h) { if (typeof g == 'object') { h = g;
                g = 0 } if (typeof h == 'function') h = { onAfter: h }; if (f == 'max') f = 9e9;
            h = $.extend({}, j.defaults, h);
            g = g || h.duration;
            h.queue = h.queue && h.axis.length > 1; if (h.queue) g /= 2;
            h.offset = both(h.offset);
            h.over = both(h.over); return this._scrollable().each(function() { if (f == null) return; var d = this,
                    $elem = $(d),
                    targ = f,
                    toff, attr = {},
                    win = $elem.is('html,body'); switch (typeof targ) {
                    case 'number':
                    case 'string':
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) { targ = both(targ); break } targ = win ? $(targ) : $(targ, this); if (!targ.length) return;
                    case 'object':
                        if (targ.is || targ.style) toff = (targ = $(targ)).offset() } var e = $.isFunction(h.offset) && h.offset(d, targ) || h.offset;
                $.each(h.axis.split(''), function(i, a) { var b = a == 'x' ? 'Left' : 'Top',
                        pos = b.toLowerCase(),
                        key = 'scroll' + b,
                        old = d[key],
                        max = j.max(d, a); if (toff) { attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]); if (h.margin) { attr[key] -= parseInt(targ.css('margin' + b)) || 0;
                            attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0 } attr[key] += e[pos] || 0; if (h.over[pos]) attr[key] += targ[a == 'x' ? 'width' : 'height']() * h.over[pos] } else { var c = targ[pos];
                        attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c } if (h.limit && /^\d+$/.test(attr[key])) attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max); if (!i && h.queue) { if (old != attr[key]) animate(h.onAfterFirst);
                        delete attr[key] } });
                animate(h.onAfter);

                function animate(a) { $elem.animate(attr, g, h.easing, a && function() { a.call(this, targ, h) }) } }).end() };
        j.max = function(a, b) { var c = b == 'x' ? 'Width' : 'Height',
                scroll = 'scroll' + c; if (!$(a).is('html,body')) return a[scroll] - $(a)[c.toLowerCase()](); var d = 'client' + c,
                html = a.ownerDocument.documentElement,
                body = a.ownerDocument.body; return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d]) };

        function both(a) { return $.isFunction(a) || typeof a == 'object' ? a : { top: a, left: a } } return j }) }(typeof define === 'function' && define.amd ? define : function(a, b) { if (typeof module !== 'undefined' && module.exports) { module.exports = b(require('jquery')) } else { b(jQuery) } }));
"function" !== typeof Object.create && (Object.create = function(f) {
    function g() {} g.prototype = f; return new g });
(function(f, g, k) { var l = { init: function(a, b) { this.$elem = f(b);
            this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
            this.userOptions = a;
            this.loadContent() }, loadContent: function() {
            function a(a) { var d, e = ""; if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);
                else { for (d in a.owl) a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
                    b.$elem.html(e) } b.logIn() } var b = this,
                e; "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]); "string" === typeof b.options.jsonPath ? (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn() }, logIn: function() { this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
            this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
            this.$elem.css({ opacity: 0 });
            this.orignalItems = this.options.items;
            this.checkBrowser();
            this.wrapperWidth = 0;
            this.checkVisible = null;
            this.setVars() }, setVars: function() { if (0 === this.$elem.children().length) return !1;
            this.baseClass();
            this.eventTypes();
            this.$userItems = this.$elem.children();
            this.itemsAmount = this.$userItems.length;
            this.wrapItems();
            this.$owlItems = this.$elem.find(".owl-item");
            this.$owlWrapper = this.$elem.find(".owl-wrapper");
            this.playDirection = "next";
            this.prevItem = 0;
            this.prevArr = [0];
            this.currentItem = 0;
            this.customEvents();
            this.onStartup() }, onStartup: function() { this.updateItems();
            this.calculateAll();
            this.buildControls();
            this.updateControls();
            this.response();
            this.moveEvents();
            this.stopOnHover();
            this.owlStatus();!1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);!0 === this.options.autoPlay && (this.options.autoPlay = 5E3);
            this.play();
            this.$elem.find(".owl-wrapper").css("display", "block");
            this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
            this.onstartup = !1;
            this.eachMoveUpdate(); "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem]) }, eachMoveUpdate: function() {!0 === this.options.lazyLoad && this.lazyLoad();!0 === this.options.autoHeight && this.autoHeight();
            this.onVisibleItems(); "function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem]) }, updateVars: function() { "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
            this.watchVisibility();
            this.updateItems();
            this.calculateAll();
            this.updatePosition();
            this.updateControls();
            this.eachMoveUpdate(); "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem]) }, reload: function() { var a = this;
            g.setTimeout(function() { a.updateVars() }, 0) }, watchVisibility: function() { var a = this; if (!1 === a.$elem.is(":visible")) a.$elem.css({ opacity: 0 }), g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);
            else return !1;
            a.checkVisible = g.setInterval(function() { a.$elem.is(":visible") && (a.reload(), a.$elem.animate({ opacity: 1 }, 200), g.clearInterval(a.checkVisible)) }, 500) }, wrapItems: function() { this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
            this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
            this.$elem.css("display", "block") }, baseClass: function() { var a = this.$elem.hasClass(this.options.baseClass),
                b = this.$elem.hasClass(this.options.theme);
            a || this.$elem.addClass(this.options.baseClass);
            b || this.$elem.addClass(this.options.theme) }, updateItems: function() { var a, b; if (!1 === this.options.responsive) return !1; if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            a = f(this.options.responsiveBaseWidth).width();
            a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems); if (!1 !== this.options.itemsCustom)
                for (this.options.itemsCustom.sort(function(a, b) { return a[0] - b[0] }), b = 0; b < this.options.itemsCustom.length; b += 1) this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
            else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount) }, response: function() { var a = this,
                b, e; if (!0 !== a.options.responsive) return !1;
            e = f(g).width();
            a.resizer = function() { f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function() { e = f(g).width();
                    a.updateVars() }, a.options.responsiveRefreshRate)) };
            f(g).resize(a.resizer) }, updatePosition: function() { this.jumpTo(this.currentItem);!1 !== this.options.autoPlay && this.checkAp() }, appendItemsSizes: function() { var a = this,
                b = 0,
                e = a.itemsAmount - a.options.items;
            a.$owlItems.each(function(c) { var d = f(this);
                d.css({ width: a.itemWidth }).data("owl-item", Number(c)); if (0 === c % a.options.items || c === e) c > e || (b += 1);
                d.data("owl-roundPages", b) }) }, appendWrapperSizes: function() { this.$owlWrapper.css({ width: this.$owlItems.length * this.itemWidth * 2, left: 0 });
            this.appendItemsSizes() }, calculateAll: function() { this.calculateWidth();
            this.appendWrapperSizes();
            this.loops();
            this.max() }, calculateWidth: function() { this.itemWidth = Math.round(this.$elem.width() / this.options.items) }, max: function() { var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a); return a }, min: function() { return 0 }, loops: function() { var a = 0,
                b = 0,
                e, c;
            this.positionsInArray = [0];
            this.pagesInArray = []; for (e = 0; e < this.itemsAmount; e += 1) b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]), c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c)) }, buildControls: function() { if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);!0 === this.options.pagination && this.buildPagination();!0 === this.options.navigation && this.buildButtons() }, buildButtons: function() { var a = this,
                b = f('<div class="owl-buttons"/>');
            a.owlControls.append(b);
            a.buttonPrev = f("<div/>", { "class": "owl-prev", html: a.options.navigationText[0] || "" });
            a.buttonNext = f("<div/>", { "class": "owl-next", html: a.options.navigationText[1] || "" });
            b.append(a.buttonPrev).append(a.buttonNext);
            b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) { a.preventDefault() });
            b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(b) { b.preventDefault();
                f(this).hasClass("owl-next") ? a.next() : a.prev() }) }, buildPagination: function() { var a = this;
            a.paginationWrapper = f('<div class="owl-pagination"/>');
            a.owlControls.append(a.paginationWrapper);
            a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(b) { b.preventDefault();
                Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0) }) }, updatePagination: function() { var a, b, e, c, d, g; if (!1 === this.options.pagination) return !1;
            this.paginationWrapper.html("");
            a = 0;
            b = this.itemsAmount - this.itemsAmount % this.options.items; for (c = 0; c < this.itemsAmount; c += 1) 0 === c % this.options.items && (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", { "class": "owl-page" }), g = f("<span></span>", { text: !0 === this.options.paginationNumbers ? a : "", "class": !0 === this.options.paginationNumbers ? "owl-numbers" : "" }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
            this.checkPagination() }, checkPagination: function() { var a = this; if (!1 === a.options.pagination) return !1;
            a.paginationWrapper.find(".owl-page").each(function() { f(this).data("owl-roundPages") === f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active")) }) }, checkNavigation: function() { if (!1 === this.options.navigation) return !1;!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled"))) }, updateControls: function() { this.updatePagination();
            this.checkNavigation();
            this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show()) }, destroyControls: function() { this.owlControls && this.owlControls.remove() }, next: function(a) { if (this.isTransition) return !1;
            this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1; if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
                if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";
                else return this.currentItem = this.maximumItem, !1;
            this.goTo(this.currentItem, a) }, prev: function(a) { if (this.isTransition) return !1;
            this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1); if (0 > this.currentItem)
                if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";
                else return this.currentItem = 0, !1;
            this.goTo(this.currentItem, a) }, goTo: function(a, b, e) { var c = this; if (c.isTransition) return !1; "function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
            a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);
            c.currentItem = c.owl.currentItem = a; if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0), !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;
            a = c.positionsInArray[a];!0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function() { c.isCss3Finish = !0 }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function() { c.isCss3Finish = !0 }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function() { c.isCss3Finish = !0 }, c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);
            c.afterGo() }, jumpTo: function(a) { "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
            a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
            this.swapSpeed(0);!0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
            this.currentItem = this.owl.currentItem = a;
            this.afterGo() }, afterGo: function() { this.prevArr.push(this.currentItem);
            this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
            this.prevArr.shift(0);
            this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp()); "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem]) }, stop: function() { this.apStatus = "stop";
            g.clearInterval(this.autoPlayInterval) }, checkAp: function() { "stop" !== this.apStatus && this.play() }, play: function() { var a = this;
            a.apStatus = "play"; if (!1 === a.options.autoPlay) return !1;
            g.clearInterval(a.autoPlayInterval);
            a.autoPlayInterval = g.setInterval(function() { a.next(!0) }, a.options.autoPlay) }, swapSpeed: function(a) { "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a)) }, addCssSpeed: function(a) { return { "-webkit-transition": "all " + a + "ms ease", "-moz-transition": "all " + a + "ms ease", "-o-transition": "all " + a + "ms ease", transition: "all " + a + "ms ease" } }, removeTransition: function() { return { "-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: "" } }, doTranslate: function(a) { return { "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)", "-moz-transform": "translate3d(" + a + "px, 0px, 0px)", "-o-transform": "translate3d(" + a + "px, 0px, 0px)", "-ms-transform": "translate3d(" + a + "px, 0px, 0px)", transform: "translate3d(" + a + "px, 0px,0px)" } }, transition3d: function(a) { this.$owlWrapper.css(this.doTranslate(a)) }, css2move: function(a) { this.$owlWrapper.css({ left: a }) }, css2slide: function(a, b) { var e = this;
            e.isCssFinish = !1;
            e.$owlWrapper.stop(!0, !0).animate({ left: a }, { duration: b || e.options.slideSpeed, complete: function() { e.isCssFinish = !0 } }) }, checkBrowser: function() { var a = k.createElement("div");
            a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
            a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
            this.browser = { support3d: null !== a && 1 === a.length, isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints } }, moveEvents: function() { if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents() }, eventTypes: function() { var a = ["s", "e", "x"];
            this.ev_types = {};!0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
            this.ev_types.start = a[0];
            this.ev_types.move = a[1];
            this.ev_types.end = a[2] }, disabledEvents: function() { this.$elem.on("dragstart.owl", function(a) { a.preventDefault() });
            this.$elem.on("mousedown.disableTextSelect", function(a) { return f(a.target).is("input, textarea, select, option") }) }, gestures: function() {
            function a(a) { if (void 0 !== a.touches) return { x: a.touches[0].pageX, y: a.touches[0].pageY }; if (void 0 === a.touches) { if (void 0 !== a.pageX) return { x: a.pageX, y: a.pageY }; if (void 0 === a.pageX) return { x: a.clientX, y: a.clientY } } }

            function b(a) { "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end)) }

            function e(b) { b = b.originalEvent || b || g.event;
                d.newPosX = a(b).x - h.offsetX;
                d.newPosY = a(b).y - h.offsetY;
                d.newRelativeX = d.newPosX - h.relativePos; "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));
                (8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);
                (10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
                d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);!0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX) }

            function c(a) { a = a.originalEvent || a || g.event; var c;
                a.target = a.target || a.srcElement;
                h.dragging = !1;!0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
                d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";
                0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function(a) { a.stopImmediatePropagation();
                    a.stopPropagation();
                    a.preventDefault();
                    f(a.target).off("click.disable") }), a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));
                b("off") } var d = this,
                h = { offsetX: 0, offsetY: 0, baseElWidth: 0, relativePos: 0, position: null, minSwipe: null, maxSwipe: null, sliding: null, dargging: null, targetElement: null };
            d.isCssFinish = !0;
            d.$elem.on(d.ev_types.start, ".owl-wrapper", function(c) { c = c.originalEvent || c || g.event; var e; if (3 === c.which) return !1; if (!(d.itemsAmount <= d.options.items)) { if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;!1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);!0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
                    d.newPosX = 0;
                    d.newRelativeX = 0;
                    f(this).css(d.removeTransition());
                    e = f(this).position();
                    h.relativePos = e.left;
                    h.offsetX = a(c).x - e.left;
                    h.offsetY = a(c).y - e.top;
                    b("on");
                    h.sliding = !1;
                    h.targetElement = c.target || c.srcElement } }) }, getNewPosition: function() { var a = this.closestItem();
            a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = a = 0); return a }, closestItem: function() { var a = this,
                b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
                e = a.newPosX,
                c = null;
            f.each(b, function(d, g) { e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) : (c = b[d + 1], a.currentItem = d + 1)) }); return a.currentItem }, moveDirection: function() { var a;
            0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev"); return a }, customEvents: function() { var a = this;
            a.$elem.on("owl.next", function() { a.next() });
            a.$elem.on("owl.prev", function() { a.prev() });
            a.$elem.on("owl.play", function(b, e) { a.options.autoPlay = e;
                a.play();
                a.hoverStatus = "play" });
            a.$elem.on("owl.stop", function() { a.stop();
                a.hoverStatus = "stop" });
            a.$elem.on("owl.goTo", function(b, e) { a.goTo(e) });
            a.$elem.on("owl.jumpTo", function(b, e) { a.jumpTo(e) }) }, stopOnHover: function() { var a = this;!0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() { a.stop() }), a.$elem.on("mouseout", function() { "stop" !== a.hoverStatus && a.play() })) }, lazyLoad: function() { var a, b, e, c, d; if (!1 === this.options.lazyLoad) return !1; for (a = 0; a < this.itemsAmount; a += 1) b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ? b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c))) }, lazyPreload: function(a, b) {
            function e() { a.data("owl-loaded", "loaded").removeClass("loading");
                b.removeAttr("data-src"); "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show(); "function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this, [d.$elem]) }

            function c() { f += 1;
                d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e() } var d = this,
                f = 0,
                k; "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");
            c() }, autoHeight: function() {
            function a() { var a = f(e.$owlItems[e.currentItem]).height();
                e.wrapperOuter.css("height", a + "px");
                e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function() { e.wrapperOuter.addClass("autoHeight") }, 0) }

            function b() { d += 1;
                e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b, 100) : e.wrapperOuter.css("height", "") } var e = this,
                c = f(e.$owlItems[e.currentItem]).find("img"),
                d;
            void 0 !== c.get(0) ? (d = 0, b()) : a() }, completeImg: function(a) { return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0 }, onVisibleItems: function() { var a;!0 === this.options.addClassActive && this.$owlItems.removeClass("active");
            this.visibleItems = []; for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
            this.owl.visibleItems = this.visibleItems }, transitionTypes: function(a) { this.outClass = "owl-" + a + "-out";
            this.inClass = "owl-" + a + "-in" }, singleItemTransition: function() { var a = this,
                b = a.outClass,
                e = a.inClass,
                c = a.$owlItems.eq(a.currentItem),
                d = a.$owlItems.eq(a.prevItem),
                f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
                g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
            a.isTransition = !0;
            a.$owlWrapper.addClass("owl-origin").css({ "-webkit-transform-origin": g + "px", "-moz-perspective-origin": g + "px", "perspective-origin": g + "px" });
            d.css({ position: "relative", left: f + "px" }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() { a.endPrev = !0;
                d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(d, b) });
            c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() { a.endCurrent = !0;
                c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(c, e) }) }, clearTransStyle: function(a, b) { a.css({ position: "", left: "" }).removeClass(b);
            this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1) }, owlStatus: function() { this.owl = { userOptions: this.userOptions, baseElement: this.$elem, userItems: this.$userItems, owlItems: this.$owlItems, currentItem: this.currentItem, prevItem: this.prevItem, visibleItems: this.visibleItems, isTouch: this.browser.isTouch, browser: this.browser, dragDirection: this.dragDirection } }, clearEvents: function() { this.$elem.off(".owl owl mousedown.disableTextSelect");
            f(k).off(".owl owl");
            f(g).off("resize", this.resizer) }, unWrap: function() { 0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
            this.clearEvents();
            this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses")) }, destroy: function() { this.stop();
            g.clearInterval(this.checkVisible);
            this.unWrap();
            this.$elem.removeData() }, reinit: function(a) { a = f.extend({}, this.userOptions, a);
            this.unWrap();
            this.init(a, this.$elem) }, addItem: function(a, b) { var e; if (!a) return !1; if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;
            this.unWrap();
            e = void 0 === b || -1 === b ? -1 : b;
            e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
            this.setVars() }, removeItem: function(a) { if (0 === this.$elem.children().length) return !1;
            a = void 0 === a || -1 === a ? -1 : a;
            this.unWrap();
            this.$userItems.eq(a).remove();
            this.setVars() } };
    f.fn.owlCarousel = function(a) { return this.each(function() { if (!0 === f(this).data("owl-init")) return !1;
            f(this).data("owl-init", !0); var b = Object.create(l);
            b.init(a, this);
            f.data(this, "owlCarousel", b) }) };
    f.fn.owlCarousel.options = { items: 5, itemsCustom: !1, itemsDesktop: [1199, 4], itemsDesktopSmall: [979, 3], itemsTablet: [768, 2], itemsTabletSmall: !1, itemsMobile: [479, 1], singleItem: !1, itemsScaleUp: !1, slideSpeed: 200, paginationSpeed: 800, rewindSpeed: 1E3, autoPlay: !1, stopOnHover: !1, navigation: !1, navigationText: ["prev", "next"], rewindNav: !0, scrollPerPage: !1, pagination: !0, paginationNumbers: !1, responsive: !0, responsiveRefreshRate: 200, responsiveBaseWidth: g, baseClass: "owl-carousel", theme: "owl-theme", lazyLoad: !1, lazyFollow: !0, lazyEffect: "fade", autoHeight: !1, jsonPath: !1, jsonSuccess: !1, dragBeforeAnimFinish: !0, mouseDrag: !0, touchDrag: !0, addClassActive: !1, transitionStyle: !1, beforeUpdate: !1, afterUpdate: !1, beforeInit: !1, afterInit: !1, beforeMove: !1, afterMove: !1, afterAction: !1, startDragging: !1, afterLazyLoad: !1 } })(jQuery, window, document);
if (typeof Object.create !== "function") { Object.create = function(obj) {
        function F() {} F.prototype = obj; return new F(); }; }(function($, window, document) { var Carousel = { init: function(options, el) { var base = this;
            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);
            base.userOptions = options;
            base.loadContent(); }, loadContent: function() { var base = this,
                url;

            function getData(data) { var i, content = ""; if (typeof base.options.jsonSuccess === "function") { base.options.jsonSuccess.apply(this, [data]); } else { for (i in data.owl) { if (data.owl.hasOwnProperty(i)) { content += data.owl[i].item; } } base.$elem.html(content); } base.logIn(); } if (typeof base.options.beforeInit === "function") { base.options.beforeInit.apply(this, [base.$elem]); } if (typeof base.options.jsonPath === "string") { url = base.options.jsonPath;
                $.getJSON(url, getData); } else { base.logIn(); } }, logIn: function() { var base = this;
            base.$elem.data("owl-originalStyles", base.$elem.attr("style"));
            base.$elem.data("owl-originalClasses", base.$elem.attr("class"));
            base.$elem.css({ opacity: 0 });
            base.orignalItems = base.options.items;
            base.checkBrowser();
            base.wrapperWidth = 0;
            base.checkVisible = null;
            base.setVars(); }, setVars: function() { var base = this; if (base.$elem.children().length === 0) { return false; } base.baseClass();
            base.eventTypes();
            base.$userItems = base.$elem.children();
            base.itemsAmount = base.$userItems.length;
            base.wrapItems();
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlWrapper = base.$elem.find(".owl-wrapper");
            base.playDirection = "next";
            base.prevItem = 0;
            base.prevArr = [0];
            base.currentItem = 0;
            base.customEvents();
            base.onStartup(); }, onStartup: function() { var base = this;
            base.updateItems();
            base.calculateAll();
            base.buildControls();
            base.updateControls();
            base.response();
            base.moveEvents();
            base.stopOnHover();
            base.owlStatus(); if (base.options.transitionStyle !== false) { base.transitionTypes(base.options.transitionStyle); } if (base.options.autoPlay === true) { base.options.autoPlay = 5000; } base.play();
            base.$elem.find(".owl-wrapper").css("display", "block"); if (!base.$elem.is(":visible")) { base.watchVisibility(); } else { base.$elem.css("opacity", 1); } base.onstartup = false;
            base.eachMoveUpdate(); if (typeof base.options.afterInit === "function") { base.options.afterInit.apply(this, [base.$elem]); } }, eachMoveUpdate: function() { var base = this; if (base.options.lazyLoad === true) { base.lazyLoad(); } if (base.options.autoHeight === true) { base.autoHeight(); } base.onVisibleItems(); if (typeof base.options.afterAction === "function") { base.options.afterAction.apply(this, [base.$elem]); } }, updateVars: function() { var base = this; if (typeof base.options.beforeUpdate === "function") { base.options.beforeUpdate.apply(this, [base.$elem]); } base.watchVisibility();
            base.updateItems();
            base.calculateAll();
            base.updatePosition();
            base.updateControls();
            base.eachMoveUpdate(); if (typeof base.options.afterUpdate === "function") { base.options.afterUpdate.apply(this, [base.$elem]); } }, reload: function() { var base = this;
            window.setTimeout(function() { base.updateVars(); }, 0); }, watchVisibility: function() { var base = this; if (base.$elem.is(":visible") === false) { base.$elem.css({ opacity: 0 });
                window.clearInterval(base.autoPlayInterval);
                window.clearInterval(base.checkVisible); } else { return false; } base.checkVisible = window.setInterval(function() { if (base.$elem.is(":visible")) { base.reload();
                    base.$elem.animate({ opacity: 1 }, 200);
                    window.clearInterval(base.checkVisible); } }, 500); }, wrapItems: function() { var base = this;
            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
            base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
            base.$elem.css("display", "block"); }, baseClass: function() { var base = this,
                hasBaseClass = base.$elem.hasClass(base.options.baseClass),
                hasThemeClass = base.$elem.hasClass(base.options.theme); if (!hasBaseClass) { base.$elem.addClass(base.options.baseClass); } if (!hasThemeClass) { base.$elem.addClass(base.options.theme); } }, updateItems: function() { var base = this,
                width, i; if (base.options.responsive === false) { return false; } if (base.options.singleItem === true) { base.options.items = base.orignalItems = 1;
                base.options.itemsCustom = false;
                base.options.itemsDesktop = false;
                base.options.itemsDesktopSmall = false;
                base.options.itemsTablet = false;
                base.options.itemsTabletSmall = false;
                base.options.itemsMobile = false; return false; } width = $(base.options.responsiveBaseWidth).width(); if (width > (base.options.itemsDesktop[0] || base.orignalItems)) { base.options.items = base.orignalItems; } if (base.options.itemsCustom !== false) { base.options.itemsCustom.sort(function(a, b) { return a[0] - b[0]; }); for (i = 0; i < base.options.itemsCustom.length; i += 1) { if (base.options.itemsCustom[i][0] <= width) { base.options.items = base.options.itemsCustom[i][1]; } } } else { if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) { base.options.items = base.options.itemsDesktop[1]; } if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) { base.options.items = base.options.itemsDesktopSmall[1]; } if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) { base.options.items = base.options.itemsTablet[1]; } if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) { base.options.items = base.options.itemsTabletSmall[1]; } if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) { base.options.items = base.options.itemsMobile[1]; } } if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) { base.options.items = base.itemsAmount; } }, response: function() { var base = this,
                smallDelay, lastWindowWidth; if (base.options.responsive !== true) { return false; } lastWindowWidth = $(window).width();
            base.resizer = function() { if ($(window).width() !== lastWindowWidth) { if (base.options.autoPlay !== false) { window.clearInterval(base.autoPlayInterval); } window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function() { lastWindowWidth = $(window).width();
                        base.updateVars(); }, base.options.responsiveRefreshRate); } };
            $(window).resize(base.resizer); }, updatePosition: function() { var base = this;
            base.jumpTo(base.currentItem); if (base.options.autoPlay !== false) { base.checkAp(); } }, appendItemsSizes: function() { var base = this,
                roundPages = 0,
                lastItem = base.itemsAmount - base.options.items;
            base.$owlItems.each(function(index) { var $this = $(this);
                $this.css({ "width": base.itemWidth }).data("owl-item", Number(index)); if (index % base.options.items === 0 || index === lastItem) { if (!(index > lastItem)) { roundPages += 1; } } $this.data("owl-roundPages", roundPages); }); }, appendWrapperSizes: function() { var base = this,
                width = base.$owlItems.length * base.itemWidth;
            base.$owlWrapper.css({ "width": width * 2, "left": 0 });
            base.appendItemsSizes(); }, calculateAll: function() { var base = this;
            base.calculateWidth();
            base.appendWrapperSizes();
            base.loops();
            base.max(); }, calculateWidth: function() { var base = this;
            base.itemWidth = Math.round(base.$elem.width() / base.options.items); }, max: function() { var base = this,
                maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1; if (base.options.items > base.itemsAmount) { base.maximumItem = 0;
                maximum = 0;
                base.maximumPixels = 0; } else { base.maximumItem = base.itemsAmount - base.options.items;
                base.maximumPixels = maximum; } return maximum; }, min: function() { return 0; }, loops: function() { var base = this,
                prev = 0,
                elWidth = 0,
                i, item, roundPageNum;
            base.positionsInArray = [0];
            base.pagesInArray = []; for (i = 0; i < base.itemsAmount; i += 1) { elWidth += base.itemWidth;
                base.positionsInArray.push(-elWidth); if (base.options.scrollPerPage === true) { item = $(base.$owlItems[i]);
                    roundPageNum = item.data("owl-roundPages"); if (roundPageNum !== prev) { base.pagesInArray[prev] = base.positionsInArray[i];
                        prev = roundPageNum; } } } }, buildControls: function() { var base = this; if (base.options.navigation === true || base.options.pagination === true) { base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem); } if (base.options.pagination === true) { base.buildPagination(); } if (base.options.navigation === true) { base.buildButtons(); } }, buildButtons: function() { var base = this,
                buttonsWrapper = $("<div class=\"owl-buttons\"/>");
            base.owlControls.append(buttonsWrapper);
            base.buttonPrev = $("<div/>", { "class": "owl-prev", "html": base.options.navigationText[0] || "" });
            base.buttonNext = $("<div/>", { "class": "owl-next", "html": base.options.navigationText[1] || "" });
            buttonsWrapper.append(base.buttonPrev).append(base.buttonNext);
            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function(event) { event.preventDefault(); });
            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function(event) { event.preventDefault(); if ($(this).hasClass("owl-next")) { base.next(); } else { base.prev(); } }); }, buildPagination: function() { var base = this;
            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
            base.owlControls.append(base.paginationWrapper);
            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(event) { event.preventDefault(); if (Number($(this).data("owl-page")) !== base.currentItem) { base.goTo(Number($(this).data("owl-page")), true); } }); }, updatePagination: function() { var base = this,
                counter, lastPage, lastItem, i, paginationButton, paginationButtonInner; if (base.options.pagination === false) { return false; } base.paginationWrapper.html("");
            counter = 0;
            lastPage = base.itemsAmount - base.itemsAmount % base.options.items; for (i = 0; i < base.itemsAmount; i += 1) { if (i % base.options.items === 0) { counter += 1; if (lastPage === i) { lastItem = base.itemsAmount - base.options.items; } paginationButton = $("<div/>", { "class": "owl-page" });
                    paginationButtonInner = $("<span></span>", { "text": base.options.paginationNumbers === true ? counter : "", "class": base.options.paginationNumbers === true ? "owl-numbers" : "" });
                    paginationButton.append(paginationButtonInner);
                    paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages", counter);
                    base.paginationWrapper.append(paginationButton); } } base.checkPagination(); }, checkPagination: function() { var base = this; if (base.options.pagination === false) { return false; } base.paginationWrapper.find(".owl-page").each(function() { if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) { base.paginationWrapper.find(".owl-page").removeClass("active");
                    $(this).addClass("active"); } }); }, checkNavigation: function() { var base = this; if (base.options.navigation === false) { return false; } if (base.options.rewindNav === false) { if (base.currentItem === 0 && base.maximumItem === 0) { base.buttonPrev.addClass("disabled");
                    base.buttonNext.addClass("disabled"); } else if (base.currentItem === 0 && base.maximumItem !== 0) { base.buttonPrev.addClass("disabled");
                    base.buttonNext.removeClass("disabled"); } else if (base.currentItem === base.maximumItem) { base.buttonPrev.removeClass("disabled");
                    base.buttonNext.addClass("disabled"); } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) { base.buttonPrev.removeClass("disabled");
                    base.buttonNext.removeClass("disabled"); } } }, updateControls: function() { var base = this;
            base.updatePagination();
            base.checkNavigation(); if (base.owlControls) { if (base.options.items >= base.itemsAmount) { base.owlControls.hide(); } else { base.owlControls.show(); } } }, destroyControls: function() { var base = this; if (base.owlControls) { base.owlControls.remove(); } }, next: function(speed) { var base = this; if (base.isTransition) { return false; } base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1; if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) { if (base.options.rewindNav === true) { base.currentItem = 0;
                    speed = "rewind"; } else { base.currentItem = base.maximumItem; return false; } } base.goTo(base.currentItem, speed); }, prev: function(speed) { var base = this; if (base.isTransition) { return false; } if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) { base.currentItem = 0; } else { base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1; } if (base.currentItem < 0) { if (base.options.rewindNav === true) { base.currentItem = base.maximumItem;
                    speed = "rewind"; } else { base.currentItem = 0; return false; } } base.goTo(base.currentItem, speed); }, goTo: function(position, speed, drag) { var base = this,
                goToPixel; if (base.isTransition) { return false; } if (typeof base.options.beforeMove === "function") { base.options.beforeMove.apply(this, [base.$elem]); } if (position >= base.maximumItem) { position = base.maximumItem; } else if (position <= 0) { position = 0; } base.currentItem = base.owl.currentItem = position; if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) { base.swapSpeed(0); if (base.browser.support3d === true) { base.transition3d(base.positionsInArray[position]); } else { base.css2slide(base.positionsInArray[position], 1); } base.afterGo();
                base.singleItemTransition(); return false; } goToPixel = base.positionsInArray[position]; if (base.browser.support3d === true) { base.isCss3Finish = false; if (speed === true) { base.swapSpeed("paginationSpeed");
                    window.setTimeout(function() { base.isCss3Finish = true; }, base.options.paginationSpeed); } else if (speed === "rewind") { base.swapSpeed(base.options.rewindSpeed);
                    window.setTimeout(function() { base.isCss3Finish = true; }, base.options.rewindSpeed); } else { base.swapSpeed("slideSpeed");
                    window.setTimeout(function() { base.isCss3Finish = true; }, base.options.slideSpeed); } base.transition3d(goToPixel); } else { if (speed === true) { base.css2slide(goToPixel, base.options.paginationSpeed); } else if (speed === "rewind") { base.css2slide(goToPixel, base.options.rewindSpeed); } else { base.css2slide(goToPixel, base.options.slideSpeed); } } base.afterGo(); }, jumpTo: function(position) { var base = this; if (typeof base.options.beforeMove === "function") { base.options.beforeMove.apply(this, [base.$elem]); } if (position >= base.maximumItem || position === -1) { position = base.maximumItem; } else if (position <= 0) { position = 0; } base.swapSpeed(0); if (base.browser.support3d === true) { base.transition3d(base.positionsInArray[position]); } else { base.css2slide(base.positionsInArray[position], 1); } base.currentItem = base.owl.currentItem = position;
            base.afterGo(); }, afterGo: function() { var base = this;
            base.prevArr.push(base.currentItem);
            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
            base.prevArr.shift(0); if (base.prevItem !== base.currentItem) { base.checkPagination();
                base.checkNavigation();
                base.eachMoveUpdate(); if (base.options.autoPlay !== false) { base.checkAp(); } } if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) { base.options.afterMove.apply(this, [base.$elem]); } }, stop: function() { var base = this;
            base.apStatus = "stop";
            window.clearInterval(base.autoPlayInterval); }, checkAp: function() { var base = this; if (base.apStatus !== "stop") { base.play(); } }, play: function() { var base = this;
            base.apStatus = "play"; if (base.options.autoPlay === false) { return false; } window.clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = window.setInterval(function() { base.next(true); }, base.options.autoPlay); }, swapSpeed: function(action) { var base = this; if (action === "slideSpeed") { base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed)); } else if (action === "paginationSpeed") { base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed)); } else if (typeof action !== "string") { base.$owlWrapper.css(base.addCssSpeed(action)); } }, addCssSpeed: function(speed) { return { "-webkit-transition": "all " + speed + "ms ease", "-moz-transition": "all " + speed + "ms ease", "-o-transition": "all " + speed + "ms ease", "transition": "all " + speed + "ms ease" }; }, removeTransition: function() { return { "-webkit-transition": "", "-moz-transition": "", "-o-transition": "", "transition": "" }; }, doTranslate: function(pixels) { return { "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)", "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)", "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)", "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)", "transform": "translate3d(" + pixels + "px, 0px,0px)" }; }, transition3d: function(value) { var base = this;
            base.$owlWrapper.css(base.doTranslate(value)); }, css2move: function(value) { var base = this;
            base.$owlWrapper.css({ "left": value }); }, css2slide: function(value, speed) { var base = this;
            base.isCssFinish = false;
            base.$owlWrapper.stop(true, true).animate({ "left": value }, { duration: speed || base.options.slideSpeed, complete: function() { base.isCssFinish = true; } }); }, checkBrowser: function() { var base = this,
                translate3D = "translate3d(0px, 0px, 0px)",
                tempElem = document.createElement("div"),
                regex, asSupport, support3d, isTouch;
            tempElem.style.cssText = "  -moz-transform:" + translate3D + "; -ms-transform:" + translate3D + "; -o-transform:" + translate3D + "; -webkit-transform:" + translate3D + "; transform:" + translate3D;
            regex = /translate3d\(0px, 0px, 0px\)/g;
            asSupport = tempElem.style.cssText.match(regex);
            support3d = (asSupport !== null && asSupport.length === 1);
            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;
            base.browser = { "support3d": support3d, "isTouch": isTouch }; }, moveEvents: function() { var base = this; if (base.options.mouseDrag !== false || base.options.touchDrag !== false) { base.gestures();
                base.disabledEvents(); } }, eventTypes: function() { var base = this,
                types = ["s", "e", "x"];
            base.ev_types = {}; if (base.options.mouseDrag === true && base.options.touchDrag === true) { types = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"]; } else if (base.options.mouseDrag === false && base.options.touchDrag === true) { types = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"]; } else if (base.options.mouseDrag === true && base.options.touchDrag === false) { types = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]; } base.ev_types.start = types[0];
            base.ev_types.move = types[1];
            base.ev_types.end = types[2]; }, disabledEvents: function() { var base = this;
            base.$elem.on("dragstart.owl", function(event) { event.preventDefault(); });
            base.$elem.on("mousedown.disableTextSelect", function(e) { return $(e.target).is('input, textarea, select, option'); }); }, gestures: function() { var base = this,
                locals = { offsetX: 0, offsetY: 0, baseElWidth: 0, relativePos: 0, position: null, minSwipe: null, maxSwipe: null, sliding: null, dargging: null, targetElement: null };
            base.isCssFinish = true;

            function getTouches(event) { if (event.touches !== undefined) { return { x: event.touches[0].pageX, y: event.touches[0].pageY }; } if (event.touches === undefined) { if (event.pageX !== undefined) { return { x: event.pageX, y: event.pageY }; } if (event.pageX === undefined) { return { x: event.clientX, y: event.clientY }; } } }

            function swapEvents(type) { if (type === "on") { $(document).on(base.ev_types.move, dragMove);
                    $(document).on(base.ev_types.end, dragEnd); } else if (type === "off") { $(document).off(base.ev_types.move);
                    $(document).off(base.ev_types.end); } }

            function dragStart(event) { var ev = event.originalEvent || event || window.event,
                    position; if (ev.which === 3) { return false; } if (base.itemsAmount <= base.options.items) { return; } if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) { return false; } if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) { return false; } if (base.options.autoPlay !== false) { window.clearInterval(base.autoPlayInterval); } if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) { base.$owlWrapper.addClass("grabbing"); } base.newPosX = 0;
                base.newRelativeX = 0;
                $(this).css(base.removeTransition());
                position = $(this).position();
                locals.relativePos = position.left;
                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;
                swapEvents("on");
                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement; }

            function dragMove(event) { var ev = event.originalEvent || event || window.event,
                    minSwipe, maxSwipe;
                base.newPosX = getTouches(ev).x - locals.offsetX;
                base.newPosY = getTouches(ev).y - locals.offsetY;
                base.newRelativeX = base.newPosX - locals.relativePos; if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) { locals.dragging = true;
                    base.options.startDragging.apply(base, [base.$elem]); } if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) { if (ev.preventDefault !== undefined) { ev.preventDefault(); } else { ev.returnValue = false; } locals.sliding = true; } if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) { $(document).off("touchmove.owl"); } minSwipe = function() { return base.newRelativeX / 5; };
                maxSwipe = function() { return base.maximumPixels + base.newRelativeX / 5; };
                base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe()); if (base.browser.support3d === true) { base.transition3d(base.newPosX); } else { base.css2move(base.newPosX); } }

            function dragEnd(event) { var ev = event.originalEvent || event || window.event,
                    newPosition, handlers, owlStopEvent;
                ev.target = ev.target || ev.srcElement;
                locals.dragging = false; if (base.browser.isTouch !== true) { base.$owlWrapper.removeClass("grabbing"); } if (base.newRelativeX < 0) { base.dragDirection = base.owl.dragDirection = "left"; } else { base.dragDirection = base.owl.dragDirection = "right"; } if (base.newRelativeX !== 0) { newPosition = base.getNewPosition();
                    base.goTo(newPosition, false, "drag"); if (locals.targetElement === ev.target && base.browser.isTouch !== true) { $(ev.target).on("click.disable", function(ev) { ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(ev.target).off("click.disable"); });
                        handlers = $._data(ev.target, "events").click;
                        owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent); } } swapEvents("off"); } base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart); }, getNewPosition: function() { var base = this,
                newPosition = base.closestItem(); if (newPosition > base.maximumItem) { base.currentItem = base.maximumItem;
                newPosition = base.maximumItem; } else if (base.newPosX >= 0) { newPosition = 0;
                base.currentItem = 0; } return newPosition; }, closestItem: function() { var base = this,
                array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
                goal = base.newPosX,
                closest = null;
            $.each(array, function(i, v) { if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") { closest = v; if (base.options.scrollPerPage === true) { base.currentItem = $.inArray(closest, base.positionsInArray); } else { base.currentItem = i; } } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") { if (base.options.scrollPerPage === true) { closest = array[i + 1] || array[array.length - 1];
                        base.currentItem = $.inArray(closest, base.positionsInArray); } else { closest = array[i + 1];
                        base.currentItem = i + 1; } } }); return base.currentItem; }, moveDirection: function() { var base = this,
                direction; if (base.newRelativeX < 0) { direction = "right";
                base.playDirection = "next"; } else { direction = "left";
                base.playDirection = "prev"; } return direction; }, customEvents: function() { var base = this;
            base.$elem.on("owl.next", function() { base.next(); });
            base.$elem.on("owl.prev", function() { base.prev(); });
            base.$elem.on("owl.play", function(event, speed) { base.options.autoPlay = speed;
                base.play();
                base.hoverStatus = "play"; });
            base.$elem.on("owl.stop", function() { base.stop();
                base.hoverStatus = "stop"; });
            base.$elem.on("owl.goTo", function(event, item) { base.goTo(item); });
            base.$elem.on("owl.jumpTo", function(event, item) { base.jumpTo(item); }); }, stopOnHover: function() { var base = this; if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) { base.$elem.on("mouseover", function() { base.stop(); });
                base.$elem.on("mouseout", function() { if (base.hoverStatus !== "stop") { base.play(); } }); } }, lazyLoad: function() { var base = this,
                i, $item, itemNumber, $lazyImg, follow; if (base.options.lazyLoad === false) { return false; } for (i = 0; i < base.itemsAmount; i += 1) { $item = $(base.$owlItems[i]); if ($item.data("owl-loaded") === "loaded") { continue; } itemNumber = $item.data("owl-item");
                $lazyImg = $item.find(".lazyOwl"); if (typeof $lazyImg.data("src") !== "string") { $item.data("owl-loaded", "loaded"); continue; } if ($item.data("owl-loaded") === undefined) { $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded", "checked"); } if (base.options.lazyFollow === true) { follow = itemNumber >= base.currentItem; } else { follow = true; } if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) { base.lazyPreload($item, $lazyImg); } } }, lazyPreload: function($item, $lazyImg) { var base = this,
                iterations = 0,
                isBackgroundImg; if ($lazyImg.prop("tagName") === "DIV") { $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                isBackgroundImg = true; } else { $lazyImg[0].src = $lazyImg.data("src"); }

            function showImage() { $item.data("owl-loaded", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src"); if (base.options.lazyEffect === "fade") { $lazyImg.fadeIn(400); } else { $lazyImg.show(); } if (typeof base.options.afterLazyLoad === "function") { base.options.afterLazyLoad.apply(this, [base.$elem]); } }

            function checkLazyImage() { iterations += 1; if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) { showImage(); } else if (iterations <= 100) { window.setTimeout(checkLazyImage, 100); } else { showImage(); } } checkLazyImage(); }, autoHeight: function() { var base = this,
                $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
                iterations;

            function addHeight() { var $currentItem = $(base.$owlItems[base.currentItem]).height();
                base.wrapperOuter.css("height", $currentItem + "px"); if (!base.wrapperOuter.hasClass("autoHeight")) { window.setTimeout(function() { base.wrapperOuter.addClass("autoHeight"); }, 0); } }

            function checkImage() { iterations += 1; if (base.completeImg($currentimg.get(0))) { addHeight(); } else if (iterations <= 100) { window.setTimeout(checkImage, 100); } else { base.wrapperOuter.css("height", ""); } } if ($currentimg.get(0) !== undefined) { iterations = 0;
                checkImage(); } else { addHeight(); } }, completeImg: function(img) { var naturalWidthType; if (!img.complete) { return false; } naturalWidthType = typeof img.naturalWidth; if (naturalWidthType !== "undefined" && img.naturalWidth === 0) { return false; } return true; }, onVisibleItems: function() { var base = this,
                i; if (base.options.addClassActive === true) { base.$owlItems.removeClass("active"); } base.visibleItems = []; for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) { base.visibleItems.push(i); if (base.options.addClassActive === true) { $(base.$owlItems[i]).addClass("active"); } } base.owl.visibleItems = base.visibleItems; }, transitionTypes: function(className) { var base = this;
            base.outClass = "owl-" + className + "-out";
            base.inClass = "owl-" + className + "-in"; }, singleItemTransition: function() { var base = this,
                outClass = base.outClass,
                inClass = base.inClass,
                $currentItem = base.$owlItems.eq(base.currentItem),
                $prevItem = base.$owlItems.eq(base.prevItem),
                prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
                animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';
            base.isTransition = true;
            base.$owlWrapper.addClass('owl-origin').css({ "-webkit-transform-origin": origin + "px", "-moz-perspective-origin": origin + "px", "perspective-origin": origin + "px" });

            function transStyles(prevPos) { return { "position": "relative", "left": prevPos + "px" }; } $prevItem.css(transStyles(prevPos, 10)).addClass(outClass).on(animEnd, function() { base.endPrev = true;
                $prevItem.off(animEnd);
                base.clearTransStyle($prevItem, outClass); });
            $currentItem.addClass(inClass).on(animEnd, function() { base.endCurrent = true;
                $currentItem.off(animEnd);
                base.clearTransStyle($currentItem, inClass); }); }, clearTransStyle: function(item, classToRemove) { var base = this;
            item.css({ "position": "", "left": "" }).removeClass(classToRemove); if (base.endPrev && base.endCurrent) { base.$owlWrapper.removeClass('owl-origin');
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false; } }, owlStatus: function() { var base = this;
            base.owl = { "userOptions": base.userOptions, "baseElement": base.$elem, "userItems": base.$userItems, "owlItems": base.$owlItems, "currentItem": base.currentItem, "prevItem": base.prevItem, "visibleItems": base.visibleItems, "isTouch": base.browser.isTouch, "browser": base.browser, "dragDirection": base.dragDirection }; }, clearEvents: function() { var base = this;
            base.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base.resizer); }, unWrap: function() { var base = this; if (base.$elem.children().length !== 0) { base.$owlWrapper.unwrap();
                base.$userItems.unwrap().unwrap(); if (base.owlControls) { base.owlControls.remove(); } } base.clearEvents();
            base.$elem.attr("style", base.$elem.data("owl-originalStyles") || "").attr("class", base.$elem.data("owl-originalClasses")); }, destroy: function() { var base = this;
            base.stop();
            window.clearInterval(base.checkVisible);
            base.unWrap();
            base.$elem.removeData(); }, reinit: function(newOptions) { var base = this,
                options = $.extend({}, base.userOptions, newOptions);
            base.unWrap();
            base.init(options, base.$elem); }, addItem: function(htmlString, targetPosition) { var base = this,
                position; if (!htmlString) { return false; } if (base.$elem.children().length === 0) { base.$elem.append(htmlString);
                base.setVars(); return false; } base.unWrap(); if (targetPosition === undefined || targetPosition === -1) { position = -1; } else { position = targetPosition; } if (position >= base.$userItems.length || position === -1) { base.$userItems.eq(-1).after(htmlString); } else { base.$userItems.eq(position).before(htmlString); } base.setVars(); }, removeItem: function(targetPosition) { var base = this,
                position; if (base.$elem.children().length === 0) { return false; } if (targetPosition === undefined || targetPosition === -1) { position = -1; } else { position = targetPosition; } base.unWrap();
            base.$userItems.eq(position).remove();
            base.setVars(); } };
    $.fn.owlCarousel = function(options) { return this.each(function() { if ($(this).data("owl-init") === true) { return false; } $(this).data("owl-init", true); var carousel = Object.create(Carousel);
            carousel.init(options, this);
            $.data(this, "owlCarousel", carousel); }); };
    $.fn.owlCarousel.options = { items: 5, itemsCustom: false, itemsDesktop: [1199, 4], itemsDesktopSmall: [979, 3], itemsTablet: [768, 2], itemsTabletSmall: false, itemsMobile: [479, 1], singleItem: false, itemsScaleUp: false, slideSpeed: 200, paginationSpeed: 800, rewindSpeed: 1000, autoPlay: false, stopOnHover: false, navigation: false, navigationText: ["prev", "next"], rewindNav: true, scrollPerPage: false, pagination: true, paginationNumbers: false, responsive: true, responsiveRefreshRate: 200, responsiveBaseWidth: window, baseClass: "owl-carousel", theme: "owl-theme", lazyLoad: false, lazyFollow: true, lazyEffect: "fade", autoHeight: false, jsonPath: false, jsonSuccess: false, dragBeforeAnimFinish: true, mouseDrag: true, touchDrag: true, addClassActive: false, transitionStyle: false, beforeUpdate: false, afterUpdate: false, beforeInit: false, afterInit: false, beforeMove: false, afterMove: false, afterAction: false, startDragging: false, afterLazyLoad: false }; }(jQuery, window, document));
(function(global, $) {
    'use strict';
    if (!$) throw new Error('Filterizr requires jQuery to work.');
    var Packer = function(w) { this.init(w); };
    Packer.prototype = {
        init: function(w) { this.root = { x: 0, y: 0, w: w }; },
        fit: function(blocks) {
            var n, node, block, len = blocks.length;
            var h = len > 0 ? blocks[0].h : 0;
            this.root.h = h;
            for (n = 0; n < len; n++) {
                block = blocks[n];
                if ((node = this.findNode(this.root, block.w, block.h))) block.fit = this.splitNode(node, block.w, block.h);
                else
                    block.fit = this.growDown(block.w, block.h);
            }
        },
        findNode: function(root, w, h) {
            if (root.used) return this.findNode(root.right, w, h) || this.findNode(root.down, w, h);
            else if ((w <= root.w) && (h <= root.h)) return root;
            else
                return null;
        },
        splitNode: function(node, w, h) { node.used = true;
            node.down = { x: node.x, y: node.y + h, w: node.w, h: node.h - h };
            node.right = { x: node.x + w, y: node.y, w: node.w - w, h: h }; return node; },
        growDown: function(w, h) {
            var node;
            this.root = { used: true, x: 0, y: 0, w: this.root.w, h: this.root.h + h, down: { x: 0, y: this.root.h, w: this.root.w, h: h }, right: this.root };
            if ((node = this.findNode(this.root, w, h))) return this.splitNode(node, w, h);
            else
                return null;
        }
    };
    $.fn.filterizr = function() { var self = this,
            args = arguments; if (!self._fltr) { self._fltr = $.fn.filterizr.prototype.init(self.selector, (typeof args[0] === 'object' ? args[0] : undefined)); } if (typeof args[0] === 'string') { if (args[0].lastIndexOf('_') > -1) throw new Error('Filterizr error: You cannot call private methods'); if (typeof self._fltr[args[0]] === 'function') { self._fltr[args[0]](args[1], args[2]); } else throw new Error('Filterizr error: There is no such function'); } return self; };
    $.fn.filterizr.prototype = {
        init: function(selector, options) { var self = $(selector).extend($.fn.filterizr.prototype);
            self.options = { animationDuration: 0.5, callbacks: { onFilteringStart: function() {}, onFilteringEnd: function() {}, onShufflingStart: function() {}, onShufflingEnd: function() {}, onSortingStart: function() {}, onSortingEnd: function() {} }, delay: 0, delayMode: 'progressive', easing: 'ease-out', filter: 'all', filterOutCss: { 'opacity': 0, 'transform': 'scale(0.5)' }, filterInCss: { 'opacity': 1, 'transform': 'scale(1)' }, layout: 'sameSize', selector: (typeof selector === 'string') ? selector : '.filtr-container', setupControls: true }; if (arguments.length === 0) { selector = self.options.selector;
                options = self.options; } if (arguments.length === 1 && typeof arguments[0] === 'object') options = arguments[0]; if (options) { self.setOptions(options); } self.css({ 'padding': 0, 'position': 'relative' });
            self._lastCategory = 0;
            self._isAnimating = false;
            self._isShuffling = false;
            self._isSorting = false;
            self._mainArray = self._getFiltrItems();
            self._subArrays = self._makeSubarrays();
            self._activeArray = self._getCollectionByFilter(self.options.filter);
            self._toggledCategories = {};
            self._typedText = $('input[data-search]').val() || '';
            self._uID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8); return v.toString(16); });
            self._setupEvents(); if (self.options.setupControls) self._setupControls();
            self.filter(self.options.filter); return self; },
        filter: function(targetFilter) { var self = this,
                target = self._getCollectionByFilter(targetFilter);
            self.options.filter = targetFilter;
            self.trigger('filteringStart');
            self._handleFiltering(target); if (self._isSearchActivated()) self.search(self._typedText); },
        toggleFilter: function(toggledFilter) {
            var self = this,
                target = [],
                i = 0;
            self.trigger('filteringStart');
            if (toggledFilter) {
                if (!self._toggledCategories[toggledFilter]) self._toggledCategories[toggledFilter] = true;
                else
                    delete self._toggledCategories[toggledFilter];
            }
            if (self._multifilterModeOn()) { target = self._makeMultifilterArray();
                self._handleFiltering(target); if (self._isSearchActivated()) self.search(self._typedText); } else { self.filter('all'); if (self._isSearchActivated()) self.search(self._typedText); }
        },
        search: function(text) { var self = this,
                array = self._multifilterModeOn() ? self._makeMultifilterArray() : self._getCollectionByFilter(self.options.filter),
                target = [],
                i = 0; if (self._isSearchActivated()) { for (i = 0; i < array.length; i++) { var containsText = array[i].text().toLowerCase().indexOf(text.toLowerCase()) > -1; if (containsText) { target.push(array[i]); } } } if (target.length > 0) { self._handleFiltering(target); } else { if (self._isSearchActivated()) { for (i = 0; i < self._activeArray.length; i++) { self._activeArray[i]._filterOut(); } } else { self._handleFiltering(array); } } },
        shuffle: function() {
            var self = this;
            self._isAnimating = true;
            self._isShuffling = true;
            self.trigger('shufflingStart');
            self._mainArray = self._fisherYatesShuffle(self._mainArray);
            self._subArrays = self._makeSubarrays();
            var target = self._multifilterModeOn() ? self._makeMultifilterArray() : self._getCollectionByFilter(self.options.filter);
            if (self._isSearchActivated()) self.search(self._typedText);
            else
                self._placeItems(target);
        },
        sort: function(attr, sortOrder) {
            var self = this;
            attr = attr || 'domIndex';
            sortOrder = sortOrder || 'asc';
            self._isAnimating = true;
            self._isSorting = true;
            self.trigger('sortingStart');
            var isUserAttr = attr !== 'domIndex' && attr !== 'sortData' && attr !== 'w' && attr !== 'h';
            if (isUserAttr) { for (var i = 0; i < self._mainArray.length; i++) { self._mainArray[i][attr] = self._mainArray[i].data(attr); } } self._mainArray.sort(self._comparator(attr, sortOrder));
            self._subArrays = self._makeSubarrays();
            var target = self._multifilterModeOn() ? self._makeMultifilterArray() : self._getCollectionByFilter(self.options.filter);
            if (self._isSearchActivated()) self.search(self._typedText);
            else
                self._placeItems(target);
        },
        setOptions: function(options) { var self = this,
                i = 0; for (var prop in options) { self.options[prop] = options[prop]; } if (self._mainArray && (options.animationDuration || options.delay || options.easing || options.delayMode)) { for (i = 0; i < self._mainArray.length; i++) { self._mainArray[i].css('transition', 'all ' + self.options.animationDuration + 's ' + self.options.easing + ' ' + self._mainArray[i]._calcDelay() + 'ms'); } } if (options.callbacks) { if (!options.callbacks.onFilteringStart) self.options.callbacks.onFilteringStart = function() {}; if (!options.callbacks.onFilteringEnd) self.options.callbacks.onFilteringEnd = function() {}; if (!options.callbacks.onShufflingStart) self.options.callbacks.onShufflingStart = function() {}; if (!options.callbacks.onShufflingEnd) self.options.callbacks.onShufflingEnd = function() {}; if (!options.callbacks.onSortingStart) self.options.callbacks.onSortingStart = function() {}; if (!options.callbacks.onSortingEnd) self.options.callbacks.onSortingEnd = function() {}; } if (!self.options.filterInCss.transform) self.options.filterInCss.transform = 'translate3d(0,0,0)'; if (!self.options.filterOutCss.transform) self.options.filterOutCss.transform = 'translate3d(0,0,0)'; },
        _getFiltrItems: function() { var self = this,
                filtrItems = $(self.find('.filtr-item')),
                itemsArray = [];
            $.each(filtrItems, function(i, e) { var item = $(e).extend(FiltrItemProto)._init(i, self);
                itemsArray.push(item); }); return itemsArray; },
        _makeSubarrays: function() { var self = this,
                subArrays = []; for (var i = 0; i < self._lastCategory; i++) subArrays.push([]); for (i = 0; i < self._mainArray.length; i++) { if (typeof self._mainArray[i]._category === 'object') { var length = self._mainArray[i]._category.length; for (var x = 0; x < length; x++) { subArrays[self._mainArray[i]._category[x] - 1].push(self._mainArray[i]); } } else subArrays[self._mainArray[i]._category - 1].push(self._mainArray[i]); } return subArrays; },
        _makeMultifilterArray: function() { var self = this,
                target = [],
                addedMap = {}; for (var i = 0; i < self._mainArray.length; i++) { var item = self._mainArray[i],
                    belongsToCategory = false,
                    isUnique = item.domIndex in addedMap === false; if (Array.isArray(item._category)) { for (var x = 0; x < item._category.length; x++) { if (item._category[x] in self._toggledCategories) { belongsToCategory = true; break; } } } else { if (item._category in self._toggledCategories) belongsToCategory = true; } if (isUnique && belongsToCategory) { addedMap[item.domIndex] = true;
                    target.push(item); } } return target; },
        _setupControls: function() { var self = this;
            $('*[data-filter]').click(function() { var targetFilter = $(this).data('filter'); if (self.options.filter === targetFilter) return;
                self.filter(targetFilter); });
            $('*[data-multifilter]').click(function() { var targetFilter = $(this).data('multifilter'); if (targetFilter === 'all') { self._toggledCategories = {};
                    self.filter('all'); } else { self.toggleFilter(targetFilter); } });
            $('*[data-shuffle]').click(function() { self.shuffle(); });
            $('*[data-sortAsc]').click(function() { var sortAttr = $('*[data-sortOrder]').val();
                self.sort(sortAttr, 'asc'); });
            $('*[data-sortDesc]').click(function() { var sortAttr = $('*[data-sortOrder]').val();
                self.sort(sortAttr, 'desc'); });
            $('input[data-search]').keyup(function() { self._typedText = $(this).val();
                self._delayEvent(function() { self.search(self._typedText); }, 250, self._uID); }); },
        _setupEvents: function() {
            var self = this;
            $(global).resize(function() { self._delayEvent(function() { self.trigger('resizeFiltrContainer'); }, 250, self._uID); });
            self.on('resizeFiltrContainer', function() {
                if (self._multifilterModeOn()) self.toggleFilter();
                else
                    self.filter(self.options.filter);
            }).on('filteringStart', function() { self.options.callbacks.onFilteringStart(); }).on('filteringEnd', function() { self.options.callbacks.onFilteringEnd(); }).on('shufflingStart', function() { self._isShuffling = true;
                self.options.callbacks.onShufflingStart(); }).on('shufflingEnd', function() { self.options.callbacks.onShufflingEnd();
                self._isShuffling = false; }).on('sortingStart', function() { self._isSorting = true;
                self.options.callbacks.onSortingStart(); }).on('sortingEnd', function() { self.options.callbacks.onSortingEnd();
                self._isSorting = false; });
        },
        _calcItemPositions: function() {
            var self = this,
                array = self._activeArray,
                containerHeight = 0,
                cols = Math.round(self.width() / self.find('.filtr-item').outerWidth()),
                rows = 0,
                itemWidth = array[0].outerWidth(),
                itemHeight = 0,
                left = 0,
                top = 0,
                i = 0,
                x = 0,
                posArray = [];
            if (self.options.layout === 'packed') { $.each(self._activeArray, function(i, e) { e._updateDimensions(); }); var packer = new Packer(self.outerWidth());
                packer.fit(self._activeArray); for (i = 0; i < array.length; i++) { posArray.push({ left: array[i].fit.x, top: array[i].fit.y }); } containerHeight = packer.root.h; }
            if (self.options.layout === 'horizontal') { rows = 1; for (i = 1; i <= array.length; i++) { itemWidth = array[i - 1].outerWidth();
                    itemHeight = array[i - 1].outerHeight();
                    posArray.push({ left: left, top: top });
                    left += itemWidth; if (containerHeight < itemHeight) containerHeight = itemHeight; } } else if (self.options.layout === 'vertical') { for (i = 1; i <= array.length; i++) { itemHeight = array[i - 1].outerHeight();
                    posArray.push({ left: left, top: top });
                    top += itemHeight; } containerHeight = top; } else if (self.options.layout === 'sameHeight') { rows = 1; var rowWidth = self.outerWidth(); for (i = 1; i <= array.length; i++) { itemWidth = array[i - 1].width(); var itemOuterWidth = array[i - 1].outerWidth(),
                        nextItemWidth = 0; if (array[i]) nextItemWidth = array[i].width();
                    posArray.push({ left: left, top: top });
                    x = left + itemWidth + nextItemWidth; if (x > rowWidth) { x = 0;
                        left = 0;
                        top += array[0].outerHeight();
                        rows++; } else left += itemOuterWidth; } containerHeight = rows * array[0].outerHeight(); } else if (self.options.layout === 'sameWidth') {
                for (i = 1; i <= array.length; i++) { posArray.push({ left: left, top: top }); if (i % cols === 0) rows++;
                    left += itemWidth;
                    top = 0; if (rows > 0) { x = rows; while (x > 0) { top += array[i - (cols * x)].outerHeight();
                            x--; } } if (i % cols === 0) left = 0; }
                for (i = 0; i < cols; i++) {
                    var columnHeight = 0,
                        index = i;
                    while (array[index]) { columnHeight += array[index].outerHeight();
                        index += cols; }
                    if (columnHeight > containerHeight) { containerHeight = columnHeight;
                        columnHeight = 0; } else
                        columnHeight = 0;
                }
            } else if (self.options.layout === 'sameSize') { for (i = 1; i <= array.length; i++) { posArray.push({ left: left, top: top });
                    left += itemWidth; if (i % cols === 0) { top += array[0].outerHeight();
                        left = 0; } } rows = Math.ceil(array.length / cols);
                containerHeight = rows * array[0].outerHeight(); } self.css('height', containerHeight);
            return posArray;
        },
        _handleFiltering: function(target) { var self = this,
                toFilterOut = self._getArrayOfUniqueItems(self._activeArray, target); for (var i = 0; i < toFilterOut.length; i++) { toFilterOut[i]._filterOut(); } self._activeArray = target;
            self._placeItems(target); },
        _multifilterModeOn: function() { var self = this; return Object.keys(self._toggledCategories).length > 0; },
        _isSearchActivated: function() { var self = this; return self._typedText.length > 0; },
        _placeItems: function(arr) { var self = this;
            self._isAnimating = true;
            self._itemPositions = self._calcItemPositions(); for (var i = 0; i < arr.length; i++) { arr[i]._filterIn(self._itemPositions[i]); } },
        _getCollectionByFilter: function(filter) { var self = this; return filter === 'all' ? self._mainArray : self._subArrays[filter - 1]; },
        _makeDeepCopy: function(obj) { var r = {}; for (var p in obj) r[p] = obj[p]; return r; },
        _comparator: function(prop, sortOrder) {
            return function(a, b) {
                if (sortOrder === 'asc') {
                    if (a[prop] < b[prop]) return -1;
                    else if (a[prop] > b[prop]) return 1;
                    else
                        return 0;
                } else if (sortOrder === 'desc') {
                    if (b[prop] < a[prop]) return -1;
                    else if (b[prop] > a[prop]) return 1;
                    else
                        return 0;
                }
            };
        },
        _getArrayOfUniqueItems: function(arr1, arr2) { var r = [],
                o = {},
                l = arr2.length,
                i, v; for (i = 0; i < l; i++) { o[arr2[i].domIndex] = true; } l = arr1.length; for (i = 0; i < l; i++) { v = arr1[i]; if (!(v.domIndex in o)) { r.push(v); } } return r; },
        _delayEvent: (function() { var self = this,
                timers = {}; return function(callback, ms, uniqueId) { if (uniqueId === null) { throw Error("UniqueID needed"); } if (timers[uniqueId]) { clearTimeout(timers[uniqueId]); } timers[uniqueId] = setTimeout(callback, ms); }; })(),
        _fisherYatesShuffle: function shuffle(array) { var m = array.length,
                t, i; while (m) { i = Math.floor(Math.random() * m--);
                t = array[m];
                array[m] = array[i];
                array[i] = t; } return array; }
    };
    var FiltrItemProto = {
        _init: function(index, parent) { var self = this,
                delay = 0;
            self._parent = parent;
            self._category = self._getCategory();
            self._lastPos = {};
            self.domIndex = index;
            self.sortData = self.data('sort');
            self.w = 0;
            self.h = 0;
            self._isFilteredOut = true;
            self._filteringOut = false;
            self._filteringIn = false;
            self.css(parent.options.filterOutCss).css({ '-webkit-backface-visibility': 'hidden', 'perspective': '1000px', '-webkit-perspective': '1000px', '-webkit-transform-style': 'preserve-3d', 'position': 'absolute', 'transition': 'all ' + parent.options.animationDuration + 's ' + parent.options.easing + ' ' + self._calcDelay() + 'ms' });
            self.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() { self._onTransitionEnd(); }); return self; },
        _updateDimensions: function() { var self = this;
            self.w = self.outerWidth();
            self.h = self.outerHeight(); },
        _calcDelay: function() {
            var self = this,
                r = 0;
            if (self._parent.options.delayMode === 'progressive') r = self._parent.options.delay * self.domIndex;
            else
            if (self.domIndex % 2 === 0) r = self._parent.options.delay;
            return r;
        },
        _getCategory: function() { var self = this,
                ret = self.data('category'); if (typeof ret === 'string') { ret = ret.split(', '); for (var i = 0; i < ret.length; i++) { if (isNaN(parseInt(ret[i]))) { throw new Error('Filterizr: the value of data-category must be a number, starting from value 1 and increasing.'); } if (parseInt(ret[i]) > self._parent._lastCategory) { self._parent._lastCategory = parseInt(ret[i]); } } } else { if (ret > self._parent._lastCategory) self._parent._lastCategory = ret; } return ret; },
        _onTransitionEnd: function() {
            var self = this;
            if (self._filteringOut) { $(self).addClass('filteredOut');
                self._isFilteredOut = true;
                self._filteringOut = false; } else if (self._filteringIn) { self._isFilteredOut = false;
                self._filteringIn = false; }
            if (self._parent._isAnimating) {
                if (self._parent._isShuffling) self._parent.trigger('shufflingEnd');
                else if (self._parent._isSorting) self._parent.trigger('sortingEnd');
                else
                    self._parent.trigger('filteringEnd');
                self._parent._isAnimating = false;
            }
        },
        _filterOut: function() { var self = this,
                filterOutCss = self._parent._makeDeepCopy(self._parent.options.filterOutCss);
            filterOutCss.transform += ' translate3d(' + self._lastPos.left + 'px,' + self._lastPos.top + 'px, 0)';
            self.css(filterOutCss);
            self.css('pointer-events', 'none');
            self._filteringOut = true; },
        _filterIn: function(targetPos) { var self = this,
                filterInCss = self._parent._makeDeepCopy(self._parent.options.filterInCss);
            $(self).removeClass('filteredOut');
            self._filteringIn = true;
            self._lastPos = targetPos;
            self.css('pointer-events', 'auto');
            filterInCss.transform += ' translate3d(' + targetPos.left + 'px,' + targetPos.top + 'px, 0)';
            self.css(filterInCss); }
    };
})(this, jQuery);
! function(a, b) { "use strict";
    a.MixItUp = function() { var b = this;
        b._execAction("_constructor", 0), a.extend(b, { selectors: { target: ".mix", filter: ".filter", sort: ".sort" }, animation: { enable: !0, effects: "fade scale", duration: 600, easing: "ease", perspectiveDistance: "3000", perspectiveOrigin: "50% 50%", queue: !0, queueLimit: 1, animateChangeLayout: !1, animateResizeContainer: !0, animateResizeTargets: !1, staggerSequence: !1, reverseOut: !1 }, callbacks: { onMixLoad: !1, onMixStart: !1, onMixBusy: !1, onMixEnd: !1, onMixFail: !1, _user: !1 }, controls: { enable: !0, live: !1, toggleFilterButtons: !1, toggleLogic: "or", activeClass: "active" }, layout: { display: "inline-block", containerClass: "", containerClassFail: "fail" }, load: { filter: "all", sort: !1 }, _$body: null, _$container: null, _$targets: null, _$parent: null, _$sortButtons: null, _$filterButtons: null, _suckMode: !1, _mixing: !1, _sorting: !1, _clicking: !1, _loading: !0, _changingLayout: !1, _changingClass: !1, _changingDisplay: !1, _origOrder: [], _startOrder: [], _newOrder: [], _activeFilter: null, _toggleArray: [], _toggleString: "", _activeSort: "default:asc", _newSort: null, _startHeight: null, _newHeight: null, _incPadding: !0, _newDisplay: null, _newClass: null, _targetsBound: 0, _targetsDone: 0, _queue: [], _$show: a(), _$hide: a() }), b._execAction("_constructor", 1) }, a.MixItUp.prototype = { constructor: a.MixItUp, _instances: {}, _handled: { _filter: {}, _sort: {} }, _bound: { _filter: {}, _sort: {} }, _actions: {}, _filters: {}, extend: function(b) { for (var c in b) a.MixItUp.prototype[c] = b[c] }, addAction: function(b, c, d, e) { a.MixItUp.prototype._addHook("_actions", b, c, d, e) }, addFilter: function(b, c, d, e) { a.MixItUp.prototype._addHook("_filters", b, c, d, e) }, _addHook: function(b, c, d, e, f) { var g = a.MixItUp.prototype[b],
                h = {};
            f = 1 === f || "post" === f ? "post" : "pre", h[c] = {}, h[c][f] = {}, h[c][f][d] = e, a.extend(!0, g, h) }, _init: function(b, c) { var d = this; if (d._execAction("_init", 0, arguments), c && a.extend(!0, d, c), d._$body = a("body"), d._domNode = b, d._$container = a(b), d._$container.addClass(d.layout.containerClass), d._id = b.id, d._platformDetect(), d._brake = d._getPrefixedCSS("transition", "none"), d._refresh(!0), d._$parent = d._$targets.parent().length ? d._$targets.parent() : d._$container, d.load.sort && (d._newSort = d._parseSort(d.load.sort), d._newSortString = d.load.sort, d._activeSort = d.load.sort, d._sort(), d._printSort()), d._activeFilter = "all" === d.load.filter ? d.selectors.target : "none" === d.load.filter ? "" : d.load.filter, d.controls.enable && d._bindHandlers(), d.controls.toggleFilterButtons) { d._buildToggleArray(); for (var e = 0; e < d._toggleArray.length; e++) d._updateControls({ filter: d._toggleArray[e], sort: d._activeSort }, !0) } else d.controls.enable && d._updateControls({ filter: d._activeFilter, sort: d._activeSort });
            d._filter(), d._init = !0, d._$container.data("mixItUp", d), d._execAction("_init", 1, arguments), d._buildState(), d._$targets.css(d._brake), d._goMix(d.animation.enable) }, _platformDetect: function() { var a = this,
                c = ["Webkit", "Moz", "O", "ms"],
                d = ["webkit", "moz"],
                e = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || !1,
                f = "undefined" != typeof InstallTrigger,
                g = function(a) { for (var b = 0; b < c.length; b++)
                        if (c[b] + "Transition" in a.style) return { prefix: "-" + c[b].toLowerCase() + "-", vendor: c[b] }; return "transition" in a.style ? "" : !1 },
                h = g(a._domNode);
            a._execAction("_platformDetect", 0), a._chrome = e ? parseInt(e[1], 10) : !1, a._ff = f ? parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]) : !1, a._prefix = h.prefix, a._vendor = h.vendor, a._suckMode = window.atob && a._prefix ? !1 : !0, a._suckMode && (a.animation.enable = !1), a._ff && a._ff <= 4 && (a.animation.enable = !1); for (var i = 0; i < d.length && !window.requestAnimationFrame; i++) window.requestAnimationFrame = window[d[i] + "RequestAnimationFrame"]; "function" != typeof Object.getPrototypeOf && ("object" == typeof "test".__proto__ ? Object.getPrototypeOf = function(a) { return a.__proto__ } : Object.getPrototypeOf = function(a) { return a.constructor.prototype }), a._domNode.nextElementSibling === b && Object.defineProperty(Element.prototype, "nextElementSibling", { get: function() { for (var a = this.nextSibling; a;) { if (1 === a.nodeType) return a;
                        a = a.nextSibling } return null } }), a._execAction("_platformDetect", 1) }, _refresh: function(a, c) { var d = this;
            d._execAction("_refresh", 0, arguments), d._$targets = d._$container.find(d.selectors.target); for (var e = 0; e < d._$targets.length; e++) { var f = d._$targets[e]; if (f.dataset === b || c) { f.dataset = {}; for (var g = 0; g < f.attributes.length; g++) { var h = f.attributes[g],
                            i = h.name,
                            j = h.value; if (i.indexOf("data-") > -1) { var k = d._helpers._camelCase(i.substring(5, i.length));
                            f.dataset[k] = j } } } f.mixParent === b && (f.mixParent = d._id) } if (d._$targets.length && a || !d._origOrder.length && d._$targets.length) { d._origOrder = []; for (var e = 0; e < d._$targets.length; e++) { var f = d._$targets[e];
                    d._origOrder.push(f) } } d._execAction("_refresh", 1, arguments) }, _bindHandlers: function() { var c = this,
                d = a.MixItUp.prototype._bound._filter,
                e = a.MixItUp.prototype._bound._sort;
            c._execAction("_bindHandlers", 0), c.controls.live ? c._$body.on("click.mixItUp." + c._id, c.selectors.sort, function() { c._processClick(a(this), "sort") }).on("click.mixItUp." + c._id, c.selectors.filter, function() { c._processClick(a(this), "filter") }) : (c._$sortButtons = a(c.selectors.sort), c._$filterButtons = a(c.selectors.filter), c._$sortButtons.on("click.mixItUp." + c._id, function() { c._processClick(a(this), "sort") }), c._$filterButtons.on("click.mixItUp." + c._id, function() { c._processClick(a(this), "filter") })), d[c.selectors.filter] = d[c.selectors.filter] === b ? 1 : d[c.selectors.filter] + 1, e[c.selectors.sort] = e[c.selectors.sort] === b ? 1 : e[c.selectors.sort] + 1, c._execAction("_bindHandlers", 1) }, _processClick: function(c, d) { var e = this,
                f = function(c, d, f) { var g = a.MixItUp.prototype;
                    g._handled["_" + d][e.selectors[d]] = g._handled["_" + d][e.selectors[d]] === b ? 1 : g._handled["_" + d][e.selectors[d]] + 1, g._handled["_" + d][e.selectors[d]] === g._bound["_" + d][e.selectors[d]] && (c[(f ? "remove" : "add") + "Class"](e.controls.activeClass), delete g._handled["_" + d][e.selectors[d]]) }; if (e._execAction("_processClick", 0, arguments), !e._mixing || e.animation.queue && e._queue.length < e.animation.queueLimit) { if (e._clicking = !0, "sort" === d) { var g = c.attr("data-sort");
                    (!c.hasClass(e.controls.activeClass) || g.indexOf("random") > -1) && (a(e.selectors.sort).removeClass(e.controls.activeClass), f(c, d), e.sort(g)) } if ("filter" === d) { var h, i = c.attr("data-filter"),
                        j = "or" === e.controls.toggleLogic ? "," : "";
                    e.controls.toggleFilterButtons ? (e._buildToggleArray(), c.hasClass(e.controls.activeClass) ? (f(c, d, !0), h = e._toggleArray.indexOf(i), e._toggleArray.splice(h, 1)) : (f(c, d), e._toggleArray.push(i)), e._toggleArray = a.grep(e._toggleArray, function(a) { return a }), e._toggleString = e._toggleArray.join(j), e.filter(e._toggleString)) : c.hasClass(e.controls.activeClass) || (a(e.selectors.filter).removeClass(e.controls.activeClass), f(c, d), e.filter(i)) } e._execAction("_processClick", 1, arguments) } else "function" == typeof e.callbacks.onMixBusy && e.callbacks.onMixBusy.call(e._domNode, e._state, e), e._execAction("_processClickBusy", 1, arguments) }, _buildToggleArray: function() { var a = this,
                b = a._activeFilter.replace(/\s/g, ""); if (a._execAction("_buildToggleArray", 0, arguments), "or" === a.controls.toggleLogic) a._toggleArray = b.split(",");
            else { a._toggleArray = b.split("."), !a._toggleArray[0] && a._toggleArray.shift(); for (var c, d = 0; c = a._toggleArray[d]; d++) a._toggleArray[d] = "." + c } a._execAction("_buildToggleArray", 1, arguments) }, _updateControls: function(c, d) { var e = this,
                f = { filter: c.filter, sort: c.sort },
                g = function(a, b) { try { d && "filter" === h && "none" !== f.filter && "" !== f.filter ? a.filter(b).addClass(e.controls.activeClass) : a.removeClass(e.controls.activeClass).filter(b).addClass(e.controls.activeClass) } catch (c) {} },
                h = "filter",
                i = null;
            e._execAction("_updateControls", 0, arguments), c.filter === b && (f.filter = e._activeFilter), c.sort === b && (f.sort = e._activeSort), f.filter === e.selectors.target && (f.filter = "all"); for (var j = 0; 2 > j; j++) i = e.controls.live ? a(e.selectors[h]) : e["_$" + h + "Buttons"], i && g(i, "[data-" + h + '="' + f[h] + '"]'), h = "sort";
            e._execAction("_updateControls", 1, arguments) }, _filter: function() { var b = this;
            b._execAction("_filter", 0); for (var c = 0; c < b._$targets.length; c++) { var d = a(b._$targets[c]);
                d.is(b._activeFilter) ? b._$show = b._$show.add(d) : b._$hide = b._$hide.add(d) } b._execAction("_filter", 1) }, _sort: function() { var a = this,
                b = function(a) { for (var b = a.slice(), c = b.length, d = c; d--;) { var e = parseInt(Math.random() * c),
                            f = b[d];
                        b[d] = b[e], b[e] = f } return b };
            a._execAction("_sort", 0), a._startOrder = []; for (var c = 0; c < a._$targets.length; c++) { var d = a._$targets[c];
                a._startOrder.push(d) } switch (a._newSort[0].sortBy) {
                case "default":
                    a._newOrder = a._origOrder; break;
                case "random":
                    a._newOrder = b(a._startOrder); break;
                case "custom":
                    a._newOrder = a._newSort[0].order; break;
                default:
                    a._newOrder = a._startOrder.concat().sort(function(b, c) { return a._compare(b, c) }) } a._execAction("_sort", 1) }, _compare: function(a, b, c) { c = c ? c : 0; var d = this,
                e = d._newSort[c].order,
                f = function(a) { return a.dataset[d._newSort[c].sortBy] || 0 },
                g = isNaN(1 * f(a)) ? f(a).toLowerCase() : 1 * f(a),
                h = isNaN(1 * f(b)) ? f(b).toLowerCase() : 1 * f(b); return h > g ? "asc" === e ? -1 : 1 : g > h ? "asc" === e ? 1 : -1 : g === h && d._newSort.length > c + 1 ? d._compare(a, b, c + 1) : 0 }, _printSort: function(a) { var b = this,
                c = a ? b._startOrder : b._newOrder,
                d = b._$parent[0].querySelectorAll(b.selectors.target),
                e = d.length ? d[d.length - 1].nextElementSibling : null,
                f = document.createDocumentFragment();
            b._execAction("_printSort", 0, arguments); for (var g = 0; g < d.length; g++) { var h = d[g],
                    i = h.nextSibling; "absolute" !== h.style.position && (i && "#text" === i.nodeName && b._$parent[0].removeChild(i), b._$parent[0].removeChild(h)) } for (var g = 0; g < c.length; g++) { var j = c[g]; if ("default" !== b._newSort[0].sortBy || "desc" !== b._newSort[0].order || a) f.appendChild(j), f.appendChild(document.createTextNode(" "));
                else { var k = f.firstChild;
                    f.insertBefore(j, k), f.insertBefore(document.createTextNode(" "), j) } } e ? b._$parent[0].insertBefore(f, e) : b._$parent[0].appendChild(f), b._execAction("_printSort", 1, arguments) }, _parseSort: function(a) { for (var b = this, c = "string" == typeof a ? a.split(" ") : [a], d = [], e = 0; e < c.length; e++) { var f = "string" == typeof a ? c[e].split(":") : ["custom", c[e]],
                    g = { sortBy: b._helpers._camelCase(f[0]), order: f[1] || "asc" }; if (d.push(g), "default" === g.sortBy || "random" === g.sortBy) break } return b._execFilter("_parseSort", d, arguments) }, _parseEffects: function() { var a = this,
                b = { opacity: "", transformIn: "", transformOut: "", filter: "" },
                c = function(b, c, d) { if (a.animation.effects.indexOf(b) > -1) { if (c) { var e = a.animation.effects.indexOf(b + "("); if (e > -1) { var f = a.animation.effects.substring(e),
                                    g = /\(([^)]+)\)/.exec(f),
                                    h = g[1]; return { val: h } } } return !0 } return !1 },
                d = function(a, b) { return b ? "-" === a.charAt(0) ? a.substr(1, a.length) : "-" + a : a },
                e = function(a, e) { for (var f = [
                            ["scale", ".01"],
                            ["translateX", "20px"],
                            ["translateY", "20px"],
                            ["translateZ", "20px"],
                            ["rotateX", "90deg"],
                            ["rotateY", "90deg"],
                            ["rotateZ", "180deg"]
                        ], g = 0; g < f.length; g++) { var h = f[g][0],
                            i = f[g][1],
                            j = e && "scale" !== h;
                        b[a] += c(h) ? h + "(" + d(c(h, !0).val || i, j) + ") " : "" } }; return b.opacity = c("fade") ? c("fade", !0).val || "0" : "1", e("transformIn"), a.animation.reverseOut ? e("transformOut", !0) : b.transformOut = b.transformIn, b.transition = {}, b.transition = a._getPrefixedCSS("transition", "all " + a.animation.duration + "ms " + a.animation.easing + ", opacity " + a.animation.duration + "ms linear"), a.animation.stagger = c("stagger") ? !0 : !1, a.animation.staggerDuration = parseInt(c("stagger") && c("stagger", !0).val ? c("stagger", !0).val : 100), a._execFilter("_parseEffects", b) }, _buildState: function(a) { var b = this,
                c = {}; return b._execAction("_buildState", 0), c = { activeFilter: "" === b._activeFilter ? "none" : b._activeFilter, activeSort: a && b._newSortString ? b._newSortString : b._activeSort, fail: !b._$show.length && "" !== b._activeFilter, $targets: b._$targets, $show: b._$show, $hide: b._$hide, totalTargets: b._$targets.length, totalShow: b._$show.length, totalHide: b._$hide.length, display: a && b._newDisplay ? b._newDisplay : b.layout.display }, a ? b._execFilter("_buildState", c) : (b._state = c, void b._execAction("_buildState", 1)) }, _goMix: function(a) { var b = this,
                c = function() { b._chrome && 31 === b._chrome && f(b._$parent[0]), b._setInter(), d() },
                d = function() { var a = window.pageYOffset,
                        c = window.pageXOffset;
                    document.documentElement.scrollHeight;
                    b._getInterMixData(), b._setFinal(), b._getFinalMixData(), window.pageYOffset !== a && window.scrollTo(c, a), b._prepTargets(), window.requestAnimationFrame ? requestAnimationFrame(e) : setTimeout(function() { e() }, 20) },
                e = function() { b._animateTargets(), 0 === b._targetsBound && b._cleanUp() },
                f = function(a) { var b = a.parentElement,
                        c = document.createElement("div"),
                        d = document.createDocumentFragment();
                    b.insertBefore(c, a), d.appendChild(a), b.replaceChild(a, c) },
                g = b._buildState(!0);
            b._execAction("_goMix", 0, arguments), !b.animation.duration && (a = !1), b._mixing = !0, b._$container.removeClass(b.layout.containerClassFail), "function" == typeof b.callbacks.onMixStart && b.callbacks.onMixStart.call(b._domNode, b._state, g, b), b._$container.trigger("mixStart", [b._state, g, b]), b._getOrigMixData(), a && !b._suckMode ? window.requestAnimationFrame ? requestAnimationFrame(c) : c() : b._cleanUp(), b._execAction("_goMix", 1, arguments) }, _getTargetData: function(a, b) { var c, d = this;
            a.dataset[b + "PosX"] = a.offsetLeft, a.dataset[b + "PosY"] = a.offsetTop, d.animation.animateResizeTargets && (c = d._suckMode ? { marginBottom: "", marginRight: "" } : window.getComputedStyle(a), a.dataset[b + "MarginBottom"] = parseInt(c.marginBottom), a.dataset[b + "MarginRight"] = parseInt(c.marginRight), a.dataset[b + "Width"] = a.offsetWidth, a.dataset[b + "Height"] = a.offsetHeight) }, _getOrigMixData: function() { var a = this,
                b = a._suckMode ? { boxSizing: "" } : window.getComputedStyle(a._$parent[0]),
                c = b.boxSizing || b[a._vendor + "BoxSizing"];
            a._incPadding = "border-box" === c, a._execAction("_getOrigMixData", 0), !a._suckMode && (a.effects = a._parseEffects()), a._$toHide = a._$hide.filter(":visible"), a._$toShow = a._$show.filter(":hidden"), a._$pre = a._$targets.filter(":visible"), a._startHeight = a._incPadding ? a._$parent.outerHeight() : a._$parent.height(); for (var d = 0; d < a._$pre.length; d++) { var e = a._$pre[d];
                a._getTargetData(e, "orig") } a._execAction("_getOrigMixData", 1) }, _setInter: function() { var a = this;
            a._execAction("_setInter", 0), a._changingLayout && a.animation.animateChangeLayout ? (a._$toShow.css("display", a._newDisplay), a._changingClass && a._$container.removeClass(a.layout.containerClass).addClass(a._newClass)) : a._$toShow.css("display", a.layout.display), a._execAction("_setInter", 1) }, _getInterMixData: function() { var a = this;
            a._execAction("_getInterMixData", 0); for (var b = 0; b < a._$toShow.length; b++) { var c = a._$toShow[b];
                a._getTargetData(c, "inter") } for (var b = 0; b < a._$pre.length; b++) { var c = a._$pre[b];
                a._getTargetData(c, "inter") } a._execAction("_getInterMixData", 1) }, _setFinal: function() { var a = this;
            a._execAction("_setFinal", 0), a._sorting && a._printSort(), a._$toHide.removeStyle("display"), a._changingLayout && a.animation.animateChangeLayout && a._$pre.css("display", a._newDisplay), a._execAction("_setFinal", 1) }, _getFinalMixData: function() { var a = this;
            a._execAction("_getFinalMixData", 0); for (var b = 0; b < a._$toShow.length; b++) { var c = a._$toShow[b];
                a._getTargetData(c, "final") } for (var b = 0; b < a._$pre.length; b++) { var c = a._$pre[b];
                a._getTargetData(c, "final") } a._newHeight = a._incPadding ? a._$parent.outerHeight() : a._$parent.height(), a._sorting && a._printSort(!0), a._$toShow.removeStyle("display"), a._$pre.css("display", a.layout.display), a._changingClass && a.animation.animateChangeLayout && a._$container.removeClass(a._newClass).addClass(a.layout.containerClass), a._execAction("_getFinalMixData", 1) }, _prepTargets: function() { var b = this,
                c = { _in: b._getPrefixedCSS("transform", b.effects.transformIn), _out: b._getPrefixedCSS("transform", b.effects.transformOut) };
            b._execAction("_prepTargets", 0), b.animation.animateResizeContainer && b._$parent.css("height", b._startHeight + "px"); for (var d = 0; d < b._$toShow.length; d++) { var e = b._$toShow[d],
                    f = a(e);
                e.style.opacity = b.effects.opacity, e.style.display = b._changingLayout && b.animation.animateChangeLayout ? b._newDisplay : b.layout.display, f.css(c._in), b.animation.animateResizeTargets && (e.style.width = e.dataset.finalWidth + "px", e.style.height = e.dataset.finalHeight + "px", e.style.marginRight = -(e.dataset.finalWidth - e.dataset.interWidth) + 1 * e.dataset.finalMarginRight + "px", e.style.marginBottom = -(e.dataset.finalHeight - e.dataset.interHeight) + 1 * e.dataset.finalMarginBottom + "px") } for (var d = 0; d < b._$pre.length; d++) { var e = b._$pre[d],
                    f = a(e),
                    g = { x: e.dataset.origPosX - e.dataset.interPosX, y: e.dataset.origPosY - e.dataset.interPosY },
                    c = b._getPrefixedCSS("transform", "translate(" + g.x + "px," + g.y + "px)");
                f.css(c), b.animation.animateResizeTargets && (e.style.width = e.dataset.origWidth + "px", e.style.height = e.dataset.origHeight + "px", e.dataset.origWidth - e.dataset.finalWidth && (e.style.marginRight = -(e.dataset.origWidth - e.dataset.interWidth) + 1 * e.dataset.origMarginRight + "px"), e.dataset.origHeight - e.dataset.finalHeight && (e.style.marginBottom = -(e.dataset.origHeight - e.dataset.interHeight) + 1 * e.dataset.origMarginBottom + "px")) } b._execAction("_prepTargets", 1) }, _animateTargets: function() { var b = this;
            b._execAction("_animateTargets", 0), b._targetsDone = 0, b._targetsBound = 0, b._$parent.css(b._getPrefixedCSS("perspective", b.animation.perspectiveDistance + "px")).css(b._getPrefixedCSS("perspective-origin", b.animation.perspectiveOrigin)), b.animation.animateResizeContainer && b._$parent.css(b._getPrefixedCSS("transition", "height " + b.animation.duration + "ms ease")).css("height", b._newHeight + "px"); for (var c = 0; c < b._$toShow.length; c++) { var d = b._$toShow[c],
                    e = a(d),
                    f = { x: d.dataset.finalPosX - d.dataset.interPosX, y: d.dataset.finalPosY - d.dataset.interPosY },
                    g = b._getDelay(c),
                    h = {};
                d.style.opacity = ""; for (var i = 0; 2 > i; i++) { var j = 0 === i ? j = b._prefix : "";
                    b._ff && b._ff <= 20 && (h[j + "transition-property"] = "all", h[j + "transition-timing-function"] = b.animation.easing + "ms", h[j + "transition-duration"] = b.animation.duration + "ms"), h[j + "transition-delay"] = g + "ms", h[j + "transform"] = "translate(" + f.x + "px," + f.y + "px)" }(b.effects.transform || b.effects.opacity) && b._bindTargetDone(e), b._ff && b._ff <= 20 ? e.css(h) : e.css(b.effects.transition).css(h) } for (var c = 0; c < b._$pre.length; c++) { var d = b._$pre[c],
                    e = a(d),
                    f = { x: d.dataset.finalPosX - d.dataset.interPosX, y: d.dataset.finalPosY - d.dataset.interPosY },
                    g = b._getDelay(c);
                (d.dataset.finalPosX !== d.dataset.origPosX || d.dataset.finalPosY !== d.dataset.origPosY) && b._bindTargetDone(e), e.css(b._getPrefixedCSS("transition", "all " + b.animation.duration + "ms " + b.animation.easing + " " + g + "ms")), e.css(b._getPrefixedCSS("transform", "translate(" + f.x + "px," + f.y + "px)")), b.animation.animateResizeTargets && (d.dataset.origWidth - d.dataset.finalWidth && 1 * d.dataset.finalWidth && (d.style.width = d.dataset.finalWidth + "px", d.style.marginRight = -(d.dataset.finalWidth - d.dataset.interWidth) + 1 * d.dataset.finalMarginRight + "px"), d.dataset.origHeight - d.dataset.finalHeight && 1 * d.dataset.finalHeight && (d.style.height = d.dataset.finalHeight + "px", d.style.marginBottom = -(d.dataset.finalHeight - d.dataset.interHeight) + 1 * d.dataset.finalMarginBottom + "px")) } b._changingClass && b._$container.removeClass(b.layout.containerClass).addClass(b._newClass); for (var c = 0; c < b._$toHide.length; c++) { for (var d = b._$toHide[c], e = a(d), g = b._getDelay(c), k = {}, i = 0; 2 > i; i++) { var j = 0 === i ? j = b._prefix : "";
                    k[j + "transition-delay"] = g + "ms", k[j + "transform"] = b.effects.transformOut, k.opacity = b.effects.opacity } e.css(b.effects.transition).css(k), (b.effects.transform || b.effects.opacity) && b._bindTargetDone(e) } b._execAction("_animateTargets", 1) }, _bindTargetDone: function(b) { var c = this,
                d = b[0];
            c._execAction("_bindTargetDone", 0, arguments), d.dataset.bound || (d.dataset.bound = !0, c._targetsBound++, b.on("webkitTransitionEnd.mixItUp transitionend.mixItUp", function(e) {
                (e.originalEvent.propertyName.indexOf("transform") > -1 || e.originalEvent.propertyName.indexOf("opacity") > -1) && a(e.originalEvent.target).is(c.selectors.target) && (b.off(".mixItUp"), d.dataset.bound = "", c._targetDone()) })), c._execAction("_bindTargetDone", 1, arguments) }, _targetDone: function() { var a = this;
            a._execAction("_targetDone", 0), a._targetsDone++, a._targetsDone === a._targetsBound && a._cleanUp(), a._execAction("_targetDone", 1) }, _cleanUp: function() { var b = this,
                c = b.animation.animateResizeTargets ? "transform opacity width height margin-bottom margin-right" : "transform opacity",
                d = function() { b._$targets.removeStyle("transition", b._prefix) };
            b._execAction("_cleanUp", 0), b._changingLayout ? b._$show.css("display", b._newDisplay) : b._$show.css("display", b.layout.display), b._$targets.css(b._brake), b._$targets.removeStyle(c, b._prefix).removeAttr("data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"), b._$hide.removeStyle("display"), b._$parent.removeStyle("height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin", b._prefix), b._sorting && (b._printSort(), b._activeSort = b._newSortString, b._sorting = !1), b._changingLayout && (b._changingDisplay && (b.layout.display = b._newDisplay, b._changingDisplay = !1), b._changingClass && (b._$parent.removeClass(b.layout.containerClass).addClass(b._newClass), b.layout.containerClass = b._newClass, b._changingClass = !1), b._changingLayout = !1), b._refresh(), b._buildState(), b._state.fail && b._$container.addClass(b.layout.containerClassFail), b._$show = a(), b._$hide = a(), window.requestAnimationFrame && requestAnimationFrame(d), b._mixing = !1, "function" == typeof b.callbacks._user && b.callbacks._user.call(b._domNode, b._state, b), "function" == typeof b.callbacks.onMixEnd && b.callbacks.onMixEnd.call(b._domNode, b._state, b), b._$container.trigger("mixEnd", [b._state, b]), b._state.fail && ("function" == typeof b.callbacks.onMixFail && b.callbacks.onMixFail.call(b._domNode, b._state, b), b._$container.trigger("mixFail", [b._state, b])), b._loading && ("function" == typeof b.callbacks.onMixLoad && b.callbacks.onMixLoad.call(b._domNode, b._state, b), b._$container.trigger("mixLoad", [b._state, b])), b._queue.length && (b._execAction("_queue", 0), b.multiMix(b._queue[0][0], b._queue[0][1], b._queue[0][2]), b._queue.splice(0, 1)), b._execAction("_cleanUp", 1), b._loading = !1 }, _getPrefixedCSS: function(a, b, c) { var d = this,
                e = {},
                f = "",
                g = -1; for (g = 0; 2 > g; g++) f = 0 === g ? d._prefix : "", c ? e[f + a] = f + b : e[f + a] = b; return d._execFilter("_getPrefixedCSS", e, arguments) }, _getDelay: function(a) { var b = this,
                c = "function" == typeof b.animation.staggerSequence ? b.animation.staggerSequence.call(b._domNode, a, b._state) : a,
                d = b.animation.stagger ? c * b.animation.staggerDuration : 0; return b._execFilter("_getDelay", d, arguments) }, _parseMultiMixArgs: function(a) { for (var b = this, c = { command: null, animate: b.animation.enable, callback: null }, d = 0; d < a.length; d++) { var e = a[d];
                null !== e && ("object" == typeof e || "string" == typeof e ? c.command = e : "boolean" == typeof e ? c.animate = e : "function" == typeof e && (c.callback = e)) } return b._execFilter("_parseMultiMixArgs", c, arguments) }, _parseInsertArgs: function(b) { for (var c = this, d = { index: 0, $object: a(), multiMix: { filter: c._state.activeFilter }, callback: null }, e = 0; e < b.length; e++) { var f = b[e]; "number" == typeof f ? d.index = f : "object" == typeof f && f instanceof a ? d.$object = f : "object" == typeof f && c._helpers._isElement(f) ? d.$object = a(f) : "object" == typeof f && null !== f ? d.multiMix = f : "boolean" != typeof f || f ? "function" == typeof f && (d.callback = f) : d.multiMix = !1 } return c._execFilter("_parseInsertArgs", d, arguments) }, _execAction: function(a, b, c) { var d = this,
                e = b ? "post" : "pre"; if (!d._actions.isEmptyObject && d._actions.hasOwnProperty(a))
                for (var f in d._actions[a][e]) d._actions[a][e][f].call(d, c) }, _execFilter: function(a, b, c) { var d = this; if (d._filters.isEmptyObject || !d._filters.hasOwnProperty(a)) return b; for (var e in d._filters[a]) return d._filters[a][e].call(d, c) }, _helpers: { _camelCase: function(a) { return a.replace(/-([a-z])/g, function(a) { return a[1].toUpperCase() }) }, _isElement: function(a) { return window.HTMLElement ? a instanceof HTMLElement : null !== a && 1 === a.nodeType && "string" === a.nodeName } }, isMixing: function() { var a = this; return a._execFilter("isMixing", a._mixing) }, filter: function() { var a = this,
                b = a._parseMultiMixArgs(arguments);
            a._clicking && (a._toggleString = ""), a.multiMix({ filter: b.command }, b.animate, b.callback) }, sort: function() { var a = this,
                b = a._parseMultiMixArgs(arguments);
            a.multiMix({ sort: b.command }, b.animate, b.callback) }, changeLayout: function() { var a = this,
                b = a._parseMultiMixArgs(arguments);
            a.multiMix({ changeLayout: b.command }, b.animate, b.callback) }, multiMix: function() { var a = this,
                c = a._parseMultiMixArgs(arguments); if (a._execAction("multiMix", 0, arguments), a._mixing) a.animation.queue && a._queue.length < a.animation.queueLimit ? (a._queue.push(arguments), a.controls.enable && !a._clicking && a._updateControls(c.command), a._execAction("multiMixQueue", 1, arguments)) : ("function" == typeof a.callbacks.onMixBusy && a.callbacks.onMixBusy.call(a._domNode, a._state, a), a._$container.trigger("mixBusy", [a._state, a]), a._execAction("multiMixBusy", 1, arguments));
            else { a.controls.enable && !a._clicking && (a.controls.toggleFilterButtons && a._buildToggleArray(), a._updateControls(c.command, a.controls.toggleFilterButtons)), a._queue.length < 2 && (a._clicking = !1), delete a.callbacks._user, c.callback && (a.callbacks._user = c.callback); var d = c.command.sort,
                    e = c.command.filter,
                    f = c.command.changeLayout;
                a._refresh(), d && (a._newSort = a._parseSort(d), a._newSortString = d, a._sorting = !0, a._sort()), e !== b && (e = "all" === e ? a.selectors.target : e, a._activeFilter = e), a._filter(), f && (a._newDisplay = "string" == typeof f ? f : f.display || a.layout.display, a._newClass = f.containerClass || "", (a._newDisplay !== a.layout.display || a._newClass !== a.layout.containerClass) && (a._changingLayout = !0, a._changingClass = a._newClass !== a.layout.containerClass, a._changingDisplay = a._newDisplay !== a.layout.display)), a._$targets.css(a._brake), a._goMix(c.animate ^ a.animation.enable ? c.animate : a.animation.enable), a._execAction("multiMix", 1, arguments) } }, insert: function() { var a = this,
                b = a._parseInsertArgs(arguments),
                c = "function" == typeof b.callback ? b.callback : null,
                d = document.createDocumentFragment(),
                e = function() { return a._refresh(), a._$targets.length ? b.index < a._$targets.length || !a._$targets.length ? a._$targets[b.index] : a._$targets[a._$targets.length - 1].nextElementSibling : a._$parent[0].children[0] }(); if (a._execAction("insert", 0, arguments), b.$object) { for (var f = 0; f < b.$object.length; f++) { var g = b.$object[f];
                    d.appendChild(g), d.appendChild(document.createTextNode(" ")) } a._$parent[0].insertBefore(d, e) } a._execAction("insert", 1, arguments), "object" == typeof b.multiMix && a.multiMix(b.multiMix, c) }, prepend: function() { var a = this,
                b = a._parseInsertArgs(arguments);
            a.insert(0, b.$object, b.multiMix, b.callback) }, append: function() { var a = this,
                b = a._parseInsertArgs(arguments);
            a.insert(a._state.totalTargets, b.$object, b.multiMix, b.callback) }, getOption: function(a) { var c = this,
                d = function(a, c) { for (var d = c.split("."), e = d.pop(), f = d.length, g = 1, h = d[0] || c;
                        (a = a[h]) && f > g;) h = d[g], g++; return a !== b ? a[e] !== b ? a[e] : a : void 0 }; return a ? c._execFilter("getOption", d(c, a), arguments) : c }, setOptions: function(b) { var c = this;
            c._execAction("setOptions", 0, arguments), "object" == typeof b && a.extend(!0, c, b), c._execAction("setOptions", 1, arguments) }, getState: function() { var a = this; return a._execFilter("getState", a._state, a) }, forceRefresh: function() { var a = this;
            a._refresh(!1, !0) }, destroy: function(b) { var c = this,
                d = a.MixItUp.prototype._bound._filter,
                e = a.MixItUp.prototype._bound._sort;
            c._execAction("destroy", 0, arguments), c._$body.add(a(c.selectors.sort)).add(a(c.selectors.filter)).off(".mixItUp"); for (var f = 0; f < c._$targets.length; f++) { var g = c._$targets[f];
                b && (g.style.display = ""), delete g.mixParent } c._execAction("destroy", 1, arguments), d[c.selectors.filter] && d[c.selectors.filter] > 1 ? d[c.selectors.filter]-- : 1 === d[c.selectors.filter] && delete d[c.selectors.filter], e[c.selectors.sort] && e[c.selectors.sort] > 1 ? e[c.selectors.sort]-- : 1 === e[c.selectors.sort] && delete e[c.selectors.sort], delete a.MixItUp.prototype._instances[c._id] } }, a.fn.mixItUp = function() { var c, d = arguments,
            e = [],
            f = function(b, c) { var d = new a.MixItUp,
                    e = function() { return ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6).toUpperCase() };
                d._execAction("_instantiate", 0, arguments), b.id = b.id ? b.id : "MixItUp" + e(), d._instances[b.id] || (d._instances[b.id] = d, d._init(b, c)), d._execAction("_instantiate", 1, arguments) }; return c = this.each(function() { if (d && "string" == typeof d[0]) { var c = a.MixItUp.prototype._instances[this.id]; if ("isLoaded" === d[0]) e.push(c ? !0 : !1);
                else { var g = c[d[0]](d[1], d[2], d[3]);
                    g !== b && e.push(g) } } else f(this, d[0]) }), e.length ? e.length > 1 ? e : e[0] : c }, a.fn.removeStyle = function(c, d) { return d = d ? d : "", this.each(function() { for (var e = this, f = c.split(" "), g = 0; g < f.length; g++)
                for (var h = 0; 4 > h; h++) { switch (h) {
                        case 0:
                            var i = f[g]; break;
                        case 1:
                            var i = a.MixItUp.prototype._helpers._camelCase(i); break;
                        case 2:
                            var i = d + f[g]; break;
                        case 3:
                            var i = a.MixItUp.prototype._helpers._camelCase(d + f[g]) } if (e.style[i] !== b && "unknown" != typeof e.style[i] && e.style[i].length > 0 && (e.style[i] = ""), !d && 1 === h) break } e.attributes && e.attributes.style && e.attributes.style !== b && "" === e.attributes.style.value && e.attributes.removeNamedItem("style") }) } }(jQuery);;
(function($) { var focused = true;
    $.flexslider = function(el, options) { var slider = $(el);
        slider.vars = $.extend({}, $.flexslider.defaults, options); var namespace = slider.vars.namespace,
            msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            touch = (("ontouchstart" in window) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
            eventType = "click touchend MSPointerUp keyup",
            watchedEvent = "",
            watchedEventClearTimer, vertical = slider.vars.direction === "vertical",
            reverse = slider.vars.reverse,
            carousel = (slider.vars.itemWidth > 0),
            fade = slider.vars.animation === "fade",
            asNav = slider.vars.asNavFor !== "",
            methods = {};
        $.data(el, "flexslider", slider);
        methods = { init: function() { slider.animating = false;
                slider.currentSlide = parseInt((slider.vars.startAt ? slider.vars.startAt : 0), 10); if (isNaN(slider.currentSlide)) { slider.currentSlide = 0; } slider.animatingTo = slider.currentSlide;
                slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
                slider.containerSelector = slider.vars.selector.substr(0, slider.vars.selector.search(' '));
                slider.slides = $(slider.vars.selector, slider);
                slider.container = $(slider.containerSelector, slider);
                slider.count = slider.slides.length;
                slider.syncExists = $(slider.vars.sync).length > 0; if (slider.vars.animation === "slide") { slider.vars.animation = "swing"; } slider.prop = (vertical) ? "top" : "marginLeft";
                slider.args = {};
                slider.manualPause = false;
                slider.stopped = false;
                slider.started = false;
                slider.startTimeout = null;
                slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() { var obj = document.createElement('div'),
                        props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective']; for (var i in props) { if (obj.style[props[i]] !== undefined) { slider.pfx = props[i].replace('Perspective', '').toLowerCase();
                            slider.prop = "-" + slider.pfx + "-transform"; return true; } } return false; }());
                slider.ensureAnimationEnd = ''; if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer); if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls); if (slider.vars.customDirectionNav !== "") slider.customDirectionNav = $(slider.vars.customDirectionNav).length === 2 && $(slider.vars.customDirectionNav); if (slider.vars.randomize) { slider.slides.sort(function() { return (Math.round(Math.random()) - 0.5); });
                    slider.container.empty().append(slider.slides); } slider.doMath();
                slider.setup("init"); if (slider.vars.controlNav) { methods.controlNav.setup(); } if (slider.vars.directionNav) { methods.directionNav.setup(); } if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) { $(document).bind('keyup', function(event) { var keycode = event.keyCode; if (!slider.animating && (keycode === 39 || keycode === 37)) { var target = (keycode === 39) ? slider.getTarget('next') : (keycode === 37) ? slider.getTarget('prev') : false;
                            slider.flexAnimate(target, slider.vars.pauseOnAction); } }); } if (slider.vars.mousewheel) { slider.bind('mousewheel', function(event, delta, deltaX, deltaY) { event.preventDefault(); var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
                        slider.flexAnimate(target, slider.vars.pauseOnAction); }); } if (slider.vars.pausePlay) { methods.pausePlay.setup(); } if (slider.vars.slideshow && slider.vars.pauseInvisible) { methods.pauseInvisible.init(); } if (slider.vars.slideshow) { if (slider.vars.pauseOnHover) { slider.hover(function() { if (!slider.manualPlay && !slider.manualPause) { slider.pause(); } }, function() { if (!slider.manualPause && !slider.manualPlay && !slider.stopped) { slider.play(); } }); } if (!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
                        (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay): slider.play(); } } if (asNav) { methods.asNav.setup(); } if (touch && slider.vars.touch) { methods.touch(); } if (!fade || (fade && slider.vars.smoothHeight)) { $(window).bind("resize orientationchange focus", methods.resize); } slider.find("img").attr("draggable", "false");
                setTimeout(function() { slider.vars.start(slider); }, 200); }, asNav: { setup: function() { slider.asNav = true;
                    slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
                    slider.currentItem = slider.currentSlide;
                    slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide"); if (!msGesture) { slider.slides.on(eventType, function(e) { e.preventDefault(); var $slide = $(this),
                                target = $slide.index(); var posFromLeft = $slide.offset().left - $(slider).scrollLeft(); if (posFromLeft <= 0 && $slide.hasClass(namespace + 'active-slide')) { slider.flexAnimate(slider.getTarget("prev"), true); } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) { slider.direction = (slider.currentItem < target) ? "next" : "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true); } }); } else { el._slider = slider;
                        slider.slides.each(function() { var that = this;
                            that._gesture = new MSGesture();
                            that._gesture.target = that;
                            that.addEventListener("MSPointerDown", function(e) { e.preventDefault(); if (e.currentTarget._gesture) { e.currentTarget._gesture.addPointer(e.pointerId); } }, false);
                            that.addEventListener("MSGestureTap", function(e) { e.preventDefault(); var $slide = $(this),
                                    target = $slide.index(); if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) { slider.direction = (slider.currentItem < target) ? "next" : "prev";
                                    slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true); } }); }); } } }, controlNav: { setup: function() { if (!slider.manualControls) { methods.controlNav.setupPaging(); } else { methods.controlNav.setupManual(); } }, setupPaging: function() { var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
                        j = 1,
                        item, slide;
                    slider.controlNavScaffold = $('<ol class="' + namespace + 'control-nav ' + namespace + type + '"></ol>'); if (slider.pagingCount > 1) { for (var i = 0; i < slider.pagingCount; i++) { slide = slider.slides.eq(i); if (undefined === slide.attr('data-thumb-alt')) { slide.attr('data-thumb-alt', ''); } var altText = ('' !== slide.attr('data-thumb-alt')) ? altText = ' alt="' + slide.attr('data-thumb-alt') + '"' : '';
                            item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr('data-thumb') + '"' + altText + '/>' : '<a href="#">' + j + '</a>'; if ('thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions) { var captn = slide.attr('data-thumbcaption'); if ('' !== captn && undefined !== captn) { item += '<span class="' + namespace + 'caption">' + captn + '</span>'; } } slider.controlNavScaffold.append('<li>' + item + '</li>');
                            j++; } }(slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold): slider.append(slider.controlNavScaffold);
                    methods.controlNav.set();
                    methods.controlNav.active();
                    slider.controlNavScaffold.delegate('a, img', eventType, function(event) { event.preventDefault(); if (watchedEvent === "" || watchedEvent === event.type) { var $this = $(this),
                                target = slider.controlNav.index($this); if (!$this.hasClass(namespace + 'active')) { slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction); } } if (watchedEvent === "") { watchedEvent = event.type; } methods.setToClearWatchedEvent(); }); }, setupManual: function() { slider.controlNav = slider.manualControls;
                    methods.controlNav.active();
                    slider.controlNav.bind(eventType, function(event) { event.preventDefault(); if (watchedEvent === "" || watchedEvent === event.type) { var $this = $(this),
                                target = slider.controlNav.index($this); if (!$this.hasClass(namespace + 'active')) {
                                (target > slider.currentSlide) ? slider.direction = "next": slider.direction = "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction); } } if (watchedEvent === "") { watchedEvent = event.type; } methods.setToClearWatchedEvent(); }); }, set: function() { var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
                    slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider); }, active: function() { slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active"); }, update: function(action, pos) { if (slider.pagingCount > 1 && action === "add") { slider.controlNavScaffold.append($('<li><a href="#">' + slider.count + '</a></li>')); } else if (slider.pagingCount === 1) { slider.controlNavScaffold.find('li').remove(); } else { slider.controlNav.eq(pos).closest('li').remove(); } methods.controlNav.set();
                    (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action): methods.controlNav.active(); } }, directionNav: { setup: function() { var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li class="' + namespace + 'nav-prev"><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li class="' + namespace + 'nav-next"><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>'); if (slider.customDirectionNav) { slider.directionNav = slider.customDirectionNav; } else if (slider.controlsContainer) { $(slider.controlsContainer).append(directionNavScaffold);
                        slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer); } else { slider.append(directionNavScaffold);
                        slider.directionNav = $('.' + namespace + 'direction-nav li a', slider); } methods.directionNav.update();
                    slider.directionNav.bind(eventType, function(event) { event.preventDefault(); var target; if (watchedEvent === "" || watchedEvent === event.type) { target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
                            slider.flexAnimate(target, slider.vars.pauseOnAction); } if (watchedEvent === "") { watchedEvent = event.type; } methods.setToClearWatchedEvent(); }); }, update: function() { var disabledClass = namespace + 'disabled'; if (slider.pagingCount === 1) { slider.directionNav.addClass(disabledClass).attr('tabindex', '-1'); } else if (!slider.vars.animationLoop) { if (slider.animatingTo === 0) { slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1'); } else if (slider.animatingTo === slider.last) { slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1'); } else { slider.directionNav.removeClass(disabledClass).removeAttr('tabindex'); } } else { slider.directionNav.removeClass(disabledClass).removeAttr('tabindex'); } } }, pausePlay: { setup: function() { var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a href="#"></a></div>'); if (slider.controlsContainer) { slider.controlsContainer.append(pausePlayScaffold);
                        slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer); } else { slider.append(pausePlayScaffold);
                        slider.pausePlay = $('.' + namespace + 'pauseplay a', slider); } methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');
                    slider.pausePlay.bind(eventType, function(event) { event.preventDefault(); if (watchedEvent === "" || watchedEvent === event.type) { if ($(this).hasClass(namespace + 'pause')) { slider.manualPause = true;
                                slider.manualPlay = false;
                                slider.pause(); } else { slider.manualPause = false;
                                slider.manualPlay = true;
                                slider.play(); } } if (watchedEvent === "") { watchedEvent = event.type; } methods.setToClearWatchedEvent(); }); }, update: function(state) {
                    (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText): slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText); } }, touch: function() { var startX, startY, offset, cwidth, dx, startT, onTouchStart, onTouchMove, onTouchEnd, scrolling = false,
                    localX = 0,
                    localY = 0,
                    accDx = 0; if (!msGesture) { onTouchStart = function(e) { if (slider.animating) { e.preventDefault(); } else if ((window.navigator.msPointerEnabled) || e.touches.length === 1) { slider.pause();
                            cwidth = (vertical) ? slider.h : slider.w;
                            startT = Number(new Date());
                            localX = e.touches[0].pageX;
                            localY = e.touches[0].pageY;
                            offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 : (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) : (carousel && slider.currentSlide === slider.last) ? slider.limit : (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide : (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                            startX = (vertical) ? localY : localX;
                            startY = (vertical) ? localX : localY;
                            el.addEventListener('touchmove', onTouchMove, false);
                            el.addEventListener('touchend', onTouchEnd, false); } };
                    onTouchMove = function(e) { localX = e.touches[0].pageX;
                        localY = e.touches[0].pageY;
                        dx = (vertical) ? startX - localY : startX - localX;
                        scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY)); var fxms = 500; if (!scrolling || Number(new Date()) - startT > fxms) { e.preventDefault(); if (!fade && slider.transitions) { if (!slider.vars.animationLoop) { dx = dx / ((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx) / cwidth + 2) : 1); } slider.setProps(offset + dx, "setTouch"); } } };
                    onTouchEnd = function(e) { el.removeEventListener('touchmove', onTouchMove, false); if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) { var updateDx = (reverse) ? -dx : dx,
                                target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev'); if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) { slider.flexAnimate(target, slider.vars.pauseOnAction); } else { if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); } } } el.removeEventListener('touchend', onTouchEnd, false);
                        startX = null;
                        startY = null;
                        dx = null;
                        offset = null; };
                    el.addEventListener('touchstart', onTouchStart, false); } else { el.style.msTouchAction = "none";
                    el._gesture = new MSGesture();
                    el._gesture.target = el;
                    el.addEventListener("MSPointerDown", onMSPointerDown, false);
                    el._slider = slider;
                    el.addEventListener("MSGestureChange", onMSGestureChange, false);
                    el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

                    function onMSPointerDown(e) { e.stopPropagation(); if (slider.animating) { e.preventDefault(); } else { slider.pause();
                            el._gesture.addPointer(e.pointerId);
                            accDx = 0;
                            cwidth = (vertical) ? slider.h : slider.w;
                            startT = Number(new Date());
                            offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 : (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) : (carousel && slider.currentSlide === slider.last) ? slider.limit : (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide : (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth; } }

                    function onMSGestureChange(e) { e.stopPropagation(); var slider = e.target._slider; if (!slider) { return; } var transX = -e.translationX,
                            transY = -e.translationY;
                        accDx = accDx + ((vertical) ? transY : transX);
                        dx = accDx;
                        scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY)); if (e.detail === e.MSGESTURE_FLAG_INERTIA) { setImmediate(function() { el._gesture.stop(); }); return; } if (!scrolling || Number(new Date()) - startT > 500) { e.preventDefault(); if (!fade && slider.transitions) { if (!slider.vars.animationLoop) { dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1); } slider.setProps(offset + dx, "setTouch"); } } }

                    function onMSGestureEnd(e) { e.stopPropagation(); var slider = e.target._slider; if (!slider) { return; } if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) { var updateDx = (reverse) ? -dx : dx,
                                target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev'); if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) { slider.flexAnimate(target, slider.vars.pauseOnAction); } else { if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); } } } startX = null;
                        startY = null;
                        dx = null;
                        offset = null;
                        accDx = 0; } } }, resize: function() { if (!slider.animating && slider.is(':visible')) { if (!carousel) { slider.doMath(); } if (fade) { methods.smoothHeight(); } else if (carousel) { slider.slides.width(slider.computedW);
                        slider.update(slider.pagingCount);
                        slider.setProps(); } else if (vertical) { slider.viewport.height(slider.h);
                        slider.setProps(slider.h, "setTotal"); } else { if (slider.vars.smoothHeight) { methods.smoothHeight(); } slider.newSlides.width(slider.computedW);
                        slider.setProps(slider.computedW, "setTotal"); } } }, smoothHeight: function(dur) { if (!vertical || fade) { var $obj = (fade) ? slider : slider.viewport;
                    (dur) ? $obj.animate({ "height": slider.slides.eq(slider.animatingTo).innerHeight() }, dur).css('overflow', 'visible'): $obj.innerHeight(slider.slides.eq(slider.animatingTo).innerHeight()); } }, sync: function(action) { var $obj = $(slider.vars.sync).data("flexslider"),
                    target = slider.animatingTo; switch (action) {
                    case "animate":
                        $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true); break;
                    case "play":
                        if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
                    case "pause":
                        $obj.pause(); break; } }, uniqueID: function($clone) { $clone.filter('[id]').add($clone.find('[id]')).each(function() { var $this = $(this);
                    $this.attr('id', $this.attr('id') + '_clone'); }); return $clone; }, pauseInvisible: { visProp: null, init: function() { var visProp = methods.pauseInvisible.getHiddenProp(); if (visProp) { var evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
                        document.addEventListener(evtname, function() { if (methods.pauseInvisible.isHidden()) { if (slider.startTimeout) { clearTimeout(slider.startTimeout); } else { slider.pause(); } } else { if (slider.started) { slider.play(); } else { if (slider.vars.initDelay > 0) { setTimeout(slider.play, slider.vars.initDelay); } else { slider.play(); } } } }); } }, isHidden: function() { var prop = methods.pauseInvisible.getHiddenProp(); if (!prop) { return false; } return document[prop]; }, getHiddenProp: function() { var prefixes = ['webkit', 'moz', 'ms', 'o']; if ('hidden' in document) { return 'hidden'; } for (var i = 0; i < prefixes.length; i++) { if ((prefixes[i] + 'Hidden') in document) { return prefixes[i] + 'Hidden'; } } return null; } }, setToClearWatchedEvent: function() { clearTimeout(watchedEventClearTimer);
                watchedEventClearTimer = setTimeout(function() { watchedEvent = ""; }, 3000); } };
        slider.flexAnimate = function(target, pause, override, withSync, fromNav) { if (!slider.vars.animationLoop && target !== slider.currentSlide) { slider.direction = (target > slider.currentSlide) ? "next" : "prev"; } if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev"; if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) { if (asNav && withSync) { var master = $(slider.vars.asNavFor).data('flexslider');
                    slider.atEnd = target === 0 || target === slider.count - 1;
                    master.flexAnimate(target, true, false, true, fromNav);
                    slider.direction = (slider.currentItem < target) ? "next" : "prev";
                    master.direction = slider.direction; if (Math.ceil((target + 1) / slider.visible) - 1 !== slider.currentSlide && target !== 0) { slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        target = Math.floor(target / slider.visible); } else { slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide"); return false; } } slider.animating = true;
                slider.animatingTo = target; if (pause) { slider.pause(); } slider.vars.before(slider); if (slider.syncExists && !fromNav) { methods.sync("animate"); } if (slider.vars.controlNav) { methods.controlNav.active(); } if (!carousel) { slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide'); } slider.atEnd = target === 0 || target === slider.last; if (slider.vars.directionNav) { methods.directionNav.update(); } if (target === slider.last) { slider.vars.end(slider); if (!slider.vars.animationLoop) { slider.pause(); } } if (!fade) { var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
                        margin, slideString, calcNext; if (carousel) { margin = slider.vars.itemMargin;
                        calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
                        slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext; } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") { slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0; } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") { slideString = (reverse) ? 0 : (slider.count + 1) * dimension; } else { slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension; } slider.setProps(slideString, "", slider.vars.animationSpeed); if (slider.transitions) { if (!slider.vars.animationLoop || !slider.atEnd) { slider.animating = false;
                            slider.currentSlide = slider.animatingTo; } slider.container.unbind("webkitTransitionEnd transitionend");
                        slider.container.bind("webkitTransitionEnd transitionend", function() { clearTimeout(slider.ensureAnimationEnd);
                            slider.wrapup(dimension); });
                        clearTimeout(slider.ensureAnimationEnd);
                        slider.ensureAnimationEnd = setTimeout(function() { slider.wrapup(dimension); }, slider.vars.animationSpeed + 100); } else { slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function() { slider.wrapup(dimension); }); } } else { if (!touch) { slider.slides.eq(slider.currentSlide).css({ "zIndex": 1, "display": "none" }).animate({ "opacity": 0 }, slider.vars.animationSpeed, slider.vars.easing);
                        slider.slides.eq(target).css({ "zIndex": 2, "display": "block" }).animate({ "opacity": 1 }, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup); } else { slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1, "display": "none" });
                        slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2, "display": "block" });
                        slider.wrapup(dimension); } } if (slider.vars.smoothHeight) { methods.smoothHeight(slider.vars.animationSpeed); } } };
        slider.wrapup = function(dimension) { if (!fade && !carousel) { if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) { slider.setProps(dimension, "jumpEnd"); } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) { slider.setProps(dimension, "jumpStart"); } } slider.animating = false;
            slider.currentSlide = slider.animatingTo;
            slider.vars.after(slider); };
        slider.animateSlides = function() { if (!slider.animating && focused) { slider.flexAnimate(slider.getTarget("next")); } };
        slider.pause = function() { clearInterval(slider.animatedSlides);
            slider.animatedSlides = null;
            slider.playing = false; if (slider.vars.pausePlay) { methods.pausePlay.update("play"); } if (slider.syncExists) { methods.sync("pause"); } };
        slider.play = function() { if (slider.playing) { clearInterval(slider.animatedSlides); } slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
            slider.started = slider.playing = true; if (slider.vars.pausePlay) { methods.pausePlay.update("pause"); } if (slider.syncExists) { methods.sync("play"); } };
        slider.stop = function() { slider.pause();
            slider.stopped = true; };
        slider.canAdvance = function(target, fromNav) { var last = (asNav) ? slider.pagingCount - 1 : slider.last; return (fromNav) ? true : (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true : (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false : (target === slider.currentSlide && !asNav) ? false : (slider.vars.animationLoop) ? true : (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false : (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false : true; };
        slider.getTarget = function(dir) { slider.direction = dir; if (dir === "next") { return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1; } else { return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1; } };
        slider.setProps = function(pos, special, dur) { var target = (function() { var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
                    posCalc = (function() { if (carousel) { return (special === "setTouch") ? pos : (reverse && slider.animatingTo === slider.last) ? 0 : (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) : (slider.animatingTo === slider.last) ? slider.limit : posCheck; } else { switch (special) {
                                case "setTotal":
                                    return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                                case "setTouch":
                                    return (reverse) ? pos : pos;
                                case "jumpEnd":
                                    return (reverse) ? pos : slider.count * pos;
                                case "jumpStart":
                                    return (reverse) ? slider.count * pos : pos;
                                default:
                                    return pos; } } }()); return (posCalc * -1) + "px"; }()); if (slider.transitions) { target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
                dur = (dur !== undefined) ? (dur / 1000) + "s" : "0s";
                slider.container.css("-" + slider.pfx + "-transition-duration", dur);
                slider.container.css("transition-duration", dur); } slider.args[slider.prop] = target; if (slider.transitions || dur === undefined) { slider.container.css(slider.args); } slider.container.css('transform', target); };
        slider.setup = function(type) { if (!fade) { var sliderOffset, arr; if (type === "init") { slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({ "overflow": "hidden", "position": "relative" }).appendTo(slider).append(slider.container);
                    slider.cloneCount = 0;
                    slider.cloneOffset = 0; if (reverse) { arr = $.makeArray(slider.slides).reverse();
                        slider.slides = $(arr);
                        slider.container.empty().append(slider.slides); } } if (slider.vars.animationLoop && !carousel) { slider.cloneCount = 2;
                    slider.cloneOffset = 1; if (type !== "init") { slider.container.find('.clone').remove(); } slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true')).prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true')); } slider.newSlides = $(slider.vars.selector, slider);
                sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset; if (vertical && !carousel) { slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function() { slider.newSlides.css({ "display": "block" });
                        slider.doMath();
                        slider.viewport.height(slider.h);
                        slider.setProps(sliderOffset * slider.h, "init"); }, (type === "init") ? 100 : 0); } else { slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
                    slider.setProps(sliderOffset * slider.computedW, "init");
                    setTimeout(function() { slider.doMath();
                        slider.newSlides.css({ "width": slider.computedW, "marginRight": slider.computedM, "float": "left", "display": "block" }); if (slider.vars.smoothHeight) { methods.smoothHeight(); } }, (type === "init") ? 100 : 0); } } else { slider.slides.css({ "width": "100%", "float": "left", "marginRight": "-100%", "position": "relative" }); if (type === "init") { if (!touch) { if (slider.vars.fadeFirstSlide == false) { slider.slides.css({ "opacity": 0, "display": "none", "zIndex": 1 }).eq(slider.currentSlide).css({ "zIndex": 2, "display": "block" }).css({ "opacity": 1 }); } else { slider.slides.css({ "opacity": 0, "display": "none", "zIndex": 1 }).eq(slider.currentSlide).css({ "zIndex": 2, "display": "block" }).animate({ "opacity": 1 }, slider.vars.animationSpeed, slider.vars.easing); } } else { slider.slides.css({ "opacity": 0, "display": "none", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2, "display": "block" }); } } if (slider.vars.smoothHeight) { methods.smoothHeight(); } } if (!carousel) { slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide"); } slider.vars.init(slider); };
        slider.doMath = function() { var slide = slider.slides.first(),
                slideMargin = slider.vars.itemMargin,
                minItems = slider.vars.minItems,
                maxItems = slider.vars.maxItems;
            slider.w = (slider.viewport === undefined) ? slider.width() : slider.viewport.width();
            slider.h = slide.height();
            slider.boxPadding = slide.outerWidth() - slide.width(); if (carousel) { slider.itemT = slider.vars.itemWidth + slideMargin;
                slider.itemM = slideMargin;
                slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
                slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
                slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1))) / minItems : (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1))) / maxItems : (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;
                slider.visible = Math.floor(slider.w / (slider.itemW));
                slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible) ? slider.vars.move : slider.visible;
                slider.pagingCount = Math.ceil(((slider.count - slider.visible) / slider.move) + 1);
                slider.last = slider.pagingCount - 1;
                slider.limit = (slider.pagingCount === 1) ? 0 : (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin; } else { slider.itemW = slider.w;
                slider.itemM = slideMargin;
                slider.pagingCount = slider.count;
                slider.last = slider.count - 1; } slider.computedW = slider.itemW - slider.boxPadding;
            slider.computedM = slider.itemM; };
        slider.update = function(pos, action) { slider.doMath(); if (!carousel) { if (pos < slider.currentSlide) { slider.currentSlide += 1; } else if (pos <= slider.currentSlide && pos !== 0) { slider.currentSlide -= 1; } slider.animatingTo = slider.currentSlide; } if (slider.vars.controlNav && !slider.manualControls) { if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) { methods.controlNav.update("add"); } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) { if (carousel && slider.currentSlide > slider.last) { slider.currentSlide -= 1;
                        slider.animatingTo -= 1; } methods.controlNav.update("remove", slider.last); } } if (slider.vars.directionNav) { methods.directionNav.update(); } };
        slider.addSlide = function(obj, pos) { var $obj = $(obj);
            slider.count += 1;
            slider.last = slider.count - 1; if (vertical && reverse) {
                (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj): slider.container.prepend($obj); } else {
                (pos !== undefined) ? slider.slides.eq(pos).before($obj): slider.container.append($obj); } slider.update(pos, "add");
            slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
            slider.setup();
            slider.vars.added(slider); };
        slider.removeSlide = function(obj) { var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;
            slider.count -= 1;
            slider.last = slider.count - 1; if (isNaN(obj)) { $(obj, slider.slides).remove(); } else {
                (vertical && reverse) ? slider.slides.eq(slider.last).remove(): slider.slides.eq(obj).remove(); } slider.doMath();
            slider.update(pos, "remove");
            slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
            slider.setup();
            slider.vars.removed(slider); };
        methods.init(); };
    $(window).blur(function(e) { focused = false; }).focus(function(e) { focused = true; });
    $.flexslider.defaults = { namespace: "flex-", selector: ".slides > li", animation: "fade", easing: "swing", direction: "horizontal", reverse: false, animationLoop: true, smoothHeight: false, startAt: 0, slideshow: true, slideshowSpeed: 7000, animationSpeed: 600, initDelay: 0, randomize: false, fadeFirstSlide: true, thumbCaptions: false, pauseOnAction: true, pauseOnHover: false, pauseInvisible: true, useCSS: true, touch: true, video: false, controlNav: true, directionNav: true, prevText: "", nextText: "", keyboard: true, multipleKeyboard: false, mousewheel: false, pausePlay: false, pauseText: "Pause", playText: "Play", controlsContainer: "", manualControls: "", customDirectionNav: "", sync: "", asNavFor: "", itemWidth: 0, itemMargin: 0, minItems: 1, maxItems: 0, move: 0, allowOneSlide: true, start: function() {}, before: function() {}, after: function() {}, end: function() {}, added: function() {}, removed: function() {}, init: function() {} };
    $.fn.flexslider = function(options) { if (options === undefined) { options = {}; } if (typeof options === "object") { return this.each(function() { var $this = $(this),
                    selector = (options.selector) ? options.selector : ".slides > li",
                    $slides = $this.find(selector); if (($slides.length === 1 && options.allowOneSlide === false) || $slides.length === 0) { $slides.fadeIn(400); if (options.start) { options.start($this); } } else if ($this.data('flexslider') === undefined) { new $.flexslider(this, options); } }); } else { var $slider = $(this).data('flexslider'); switch (options) {
                case "play":
                    $slider.play(); break;
                case "pause":
                    $slider.pause(); break;
                case "stop":
                    $slider.stop(); break;
                case "next":
                    $slider.flexAnimate($slider.getTarget("next"), true); break;
                case "prev":
                case "previous":
                    $slider.flexAnimate($slider.getTarget("prev"), true); break;
                default:
                    if (typeof options === "number") { $slider.flexAnimate(options, true); } } } }; })(jQuery);
jQuery(document).ready(function() { SyntaxHighlighter.all(); });
jQuery(window).load(function() { jQuery('#carousel').flexslider({ animation: "slide", controlNav: false, animationLoop: true, slideshow: false, itemWidth: 420, itemMargin: 2, asNavFor: '#slider' });
    jQuery('#slider').flexslider({ animation: "slide", controlNav: false, animationLoop: true, slideshow: false, sync: "#carousel", start: function(slider) { jQuery('body').removeClass('loading'); } });
    new WOW().init(); });
(function() { var a, b, c, d, e, f = function(a, b) { return function() { return a.apply(b, arguments) } },
        g = [].indexOf || function(a) { for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b; return -1 };
    b = function() {
        function a() {} return a.prototype.extend = function(a, b) { var c, d; for (c in b) d = b[c], null == a[c] && (a[c] = d); return a }, a.prototype.isMobile = function(a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }, a.prototype.createEvent = function(a, b, c, d) { var e; return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e }, a.prototype.emitEvent = function(a, b) { return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0 }, a.prototype.addEvent = function(a, b, c) { return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c }, a.prototype.removeEvent = function(a, b, c) { return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b] }, a.prototype.innerHeight = function() { return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }, a }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() { this.keys = [], this.values = [] } return a.prototype.get = function(a) { var b, c, d, e, f; for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b] }, a.prototype.set = function(a, b) { var c, d, e, f, g; for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b); return this.keys.push(a), this.values.push(b) }, a }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() { "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") } return a.notSupported = !0, a.prototype.observe = function() {}, a }()), d = this.getComputedStyle || function(a, b) { return this.getPropertyValue = function(b) { var c; return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) { return b.toUpperCase() }), (null != (c = a.currentStyle) ? c[b] : void 0) || null }, this }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) { null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass) } return e.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }, e.prototype.init = function() { var a; return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [] }, e.prototype.start = function() { var b, c, d, e; if (this.stopped = !1, this.boxes = function() { var a, c, d, e; for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.all = function() { var a, c, d, e; for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0); return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) { return function(b) { var c, d, e, f, g; for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() { var a, b, c, d; for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e)); return d }.call(a)); return g } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0 }, e.prototype.stop = function() { return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0 }, e.prototype.sync = function(b) { return a.notSupported ? this.doSync(this.element) : void 0 }, e.prototype.doSync = function(a) { var b, c, d, e, f; if (null == a && (a = this.element), 1 === a.nodeType) { for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0); return f } }, e.prototype.show = function(a) { return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a }, e.prototype.applyStyle = function(a, b) { var c, d, e; return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) { return function() { return f.customStyle(a, b, d, c, e) } }(this)) }, e.prototype.animate = function() { return "requestAnimationFrame" in window ? function(a) { return window.requestAnimationFrame(a) } : function(a) { return a() } }(), e.prototype.resetStyle = function() { var a, b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible"); return e }, e.prototype.resetAnimation = function(a) { var b; return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0 }, e.prototype.customStyle = function(a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) { var c, d, e, f;
            d = []; for (c in b) e = b[c], a["" + c] = e, d.push(function() { var b, d, g, h; for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e); return h }.call(this)); return d }, e.prototype.vendorCSS = function(a, b) { var c, e, f, g, h, i; for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b); return g }, e.prototype.animationName = function(a) { var b; try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = d(a).getPropertyValue("animation-name") } return "none" === b ? "" : b }, e.prototype.cacheAnimationName = function(a) { return this.animationNameCache.set(a, this.animationName(a)) }, e.prototype.cachedAnimationName = function(a) { return this.animationNameCache.get(a) }, e.prototype.scrollHandler = function() { return this.scrolled = !0 }, e.prototype.scrollCallback = function() { var a; return !this.scrolled || (this.scrolled = !1, this.boxes = function() { var b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a)); return e }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, e.prototype.offsetTop = function(a) { for (var b; void 0 === a.offsetTop;) a = a.parentNode; for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop; return b }, e.prototype.isVisible = function(a) { var b, c, d, e, f; return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f }, e.prototype.util = function() { return null != this._util ? this._util : this._util = new b }, e.prototype.disabled = function() { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, e }() }).call(this);
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery) }(function(a) {
    function b(b) { var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0; if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) { if (1 === g.deltaMode) { var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q } else if (2 === g.deltaMode) { var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r } if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) { var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top } return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h) } }

    function c() { f = null }

    function d(a, b) { return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0 } var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice; if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks; var k = a.event.special.mousewheel = { version: "3.1.12", setup: function() { if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this)) }, teardown: function() { if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height") }, getLineHeight: function(b) { var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"](); return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16 }, getPageHeight: function(b) { return a(b).height() }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } };
    a.fn.extend({ mousewheel: function(a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function(a) { return this.unbind("mousewheel", a) } }) });
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery) }(function(a) {
    function b(b) { var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0; if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) { if (1 === g.deltaMode) { var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q } else if (2 === g.deltaMode) { var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r } if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) { var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top } return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h) } }

    function c() { f = null }

    function d(a, b) { return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0 } var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice; if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks; var k = a.event.special.mousewheel = { version: "3.1.12", setup: function() { if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this)) }, teardown: function() { if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height") }, getLineHeight: function(b) { var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"](); return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16 }, getPageHeight: function(b) { return a(b).height() }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } };
    a.fn.extend({ mousewheel: function(a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function(a) { return this.unbind("mousewheel", a) } }) });
! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document) }(function(e) {! function(t) { var o = "function" == typeof define && define.amd,
            a = "undefined" != typeof module && module.exports,
            n = "https:" == document.location.protocol ? "https:" : "http:",
            i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
        o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t() }(function() { var t, o = "mCustomScrollbar",
            a = "mCS",
            n = ".mCustomScrollbar",
            i = { setTop: 0, setLeft: 0, axis: "y", scrollbarPosition: "inside", scrollInertia: 950, autoDraggerLength: !0, alwaysShowScrollbar: 0, snapOffset: 0, mouseWheel: { enable: !0, scrollAmount: "auto", axis: "y", deltaFactor: "auto", disableOver: ["select", "option", "keygen", "datalist", "textarea"] }, scrollButtons: { scrollType: "stepless", scrollAmount: "auto" }, keyboard: { enable: !0, scrollType: "stepless", scrollAmount: "auto" }, contentTouchScroll: 25, documentTouchScroll: !0, advanced: { autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']", updateOnContentResize: !0, updateOnImageLoad: "auto", autoUpdateTimeout: 60 }, theme: "light", callbacks: { onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, alwaysTriggerOffsets: !0 } },
            r = 0,
            l = {},
            s = window.attachEvent && !window.addEventListener ? 1 : 0,
            c = !1,
            d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
            u = { init: function(t) { var t = e.extend(!0, {}, i, t),
                        o = f.call(this); if (t.live) { var s = t.liveSelector || this.selector || n,
                            c = e(s); if ("off" === t.live) return void m(s);
                        l[s] = setTimeout(function() { c.mCustomScrollbar(t), "once" === t.live && c.length && m(s) }, 500) } else m(s); return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = { enable: !0, scrollAmount: "auto", axis: "y", preventDefault: !1, deltaFactor: "auto", normalizeDelta: !1, invert: !1 }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function() { var o = e(this); if (!o.data(a)) { o.data(a, { idx: ++r, opt: t, scrollRatio: { y: null, x: null }, overflowed: null, contentReset: { y: null, x: null }, bindEvents: !1, tweenRunning: !1, sequential: {}, langDir: o.css("direction"), cbOffsets: null, trigger: null, poll: { size: { o: 0, n: 0 }, img: { o: 0, n: 0 }, change: { o: 0, n: 0 } } }); var n = o.data(a),
                                i = n.opt,
                                l = o.data("mcs-axis"),
                                s = o.data("mcs-scrollbar-position"),
                                c = o.data("mcs-theme");
                            l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o) } }) }, update: function(t, o) { var n = t || f.call(this); return e(n).each(function() { var t = e(this); if (t.data(a)) { var n = t.data(a),
                                i = n.opt,
                                r = e("#mCSB_" + n.idx + "_container"),
                                l = e("#mCSB_" + n.idx),
                                s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")]; if (!r.length) return;
                            n.tweenRunning && Q(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this); var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)]; "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), { dir: "y", dur: 0, overwrite: "none" }), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), { dir: "x", dur: 0, overwrite: "none" }))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), { dir: "x", dur: 0, overwrite: "none" }), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), { dir: "y", dur: 0, overwrite: "none" }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), N.call(this) } }) }, scrollTo: function(t, o) { if ("undefined" != typeof t && null != t) { var n = f.call(this); return e(n).each(function() { var n = e(this); if (n.data(a)) { var i = n.data(a),
                                    r = i.opt,
                                    l = { trigger: "external", scrollInertia: r.scrollInertia, scrollEasing: "mcsEaseInOut", moveDragger: !1, timeout: 60, callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 },
                                    s = e.extend(!0, {}, l, o),
                                    c = Y.call(this, t),
                                    d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                                c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = ne() ? 0 : d, setTimeout(function() { null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", G(n, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", G(n, c[1].toString(), s)) }, s.timeout) } }) } }, stop: function() { var t = f.call(this); return e(t).each(function() { var t = e(this);
                        t.data(a) && Q(t) }) }, disable: function(t) { var o = f.call(this); return e(o).each(function() { var o = e(this); if (o.data(a)) { o.data(a);
                            N.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3]) } }) }, destroy: function() { var t = f.call(this); return e(t).each(function() { var n = e(this); if (n.data(a)) { var i = n.data(a),
                                r = i.opt,
                                l = e("#mCSB_" + i.idx),
                                s = e("#mCSB_" + i.idx + "_container"),
                                c = e(".mCSB_" + i.idx + "_scrollbar");
                            r.live && m(r.liveSelector || e(t).selector), N.call(this, "remove"), k.call(this), B.call(this), n.removeData(a), $(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4]) } }) } },
            f = function() { return "object" != typeof e(this) || e(this).length < 1 ? n : this },
            h = function(t) { var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    n = ["minimal", "minimal-dark"],
                    i = ["minimal", "minimal-dark"],
                    r = ["minimal", "minimal-dark"];
                t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition },
            m = function(e) { l[e] && (clearTimeout(l[e]), $(l, e)) },
            p = function(e) { return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y" },
            g = function(e) { return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless" },
            v = function() { var t = e(this),
                    n = t.data(a),
                    i = n.opt,
                    r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                    l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
                    c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
                    u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    f = i.autoHideScrollbar ? " " + d[6] : "",
                    h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
                i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>"); var m = e("#mCSB_" + n.idx),
                    p = e("#mCSB_" + n.idx + "_container"); "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this); var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width()) },
            x = function(t) { var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() { return e(this).outerWidth(!0) }).get())],
                    a = t.parent().width(); return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%" },
            _ = function() { var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e("#mCSB_" + o.idx + "_container"); if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) { i.css({ width: "auto", "min-width": 0, "overflow-x": "scroll" }); var r = Math.ceil(i[0].scrollWidth);
                    3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({ width: r, "min-width": "100%", "overflow-x": "inherit" }) : i.css({ "overflow-x": "inherit", position: "absolute" }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({ width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left), "min-width": "100%", position: "relative" }).unwrap() } },
            w = function() { var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e(".mCSB_" + o.idx + "_scrollbar:first"),
                    r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
                    l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"],
                    s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
                n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3]) },
            S = function() { var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
                    c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
                    d = s && c[1] < c[0] ? c[0] : c[1],
                    u = s && c[3] < c[2] ? c[2] : c[3];
                r[0].css({ height: d, "max-height": r[0].parent().height() - 10 }).find(".mCSB_dragger_bar").css({ "line-height": c[0] + "px" }), r[1].css({ width: u, "max-width": r[1].parent().width() - 10 }) },
            b = function() { var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
                    s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
                o.scrollRatio = { y: s[0], x: s[1] } },
            C = function(e, t, o) { var a = o ? d[0] + "_expanded" : "",
                    n = e.closest(".mCSB_scrollTools"); "active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1]))) },
            y = function() { var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = null == o.overflowed ? i.height() : i.outerHeight(!1),
                    l = null == o.overflowed ? i.width() : i.outerWidth(!1),
                    s = i[0].scrollHeight,
                    c = i[0].scrollWidth; return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()] },
            B = function() { var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e("#mCSB_" + o.idx),
                    r = e("#mCSB_" + o.idx + "_container"),
                    l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")]; if (Q(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), G(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) { var s = dx = 0; "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), G(t, "_resetX") } },
            T = function() {
                function t() { r = setTimeout(function() { e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t() }, 100) } var o = e(this),
                    n = o.data(a),
                    i = n.opt; if (!n.bindEvents) { if (I.call(this), i.contentTouchScroll && D.call(this), E.call(this), i.mouseWheel.enable) { var r;
                        t() } P.call(this), U.call(this), i.advanced.autoScrollOnFocus && H.call(this), i.scrollButtons.enable && F.call(this), i.keyboard.enable && q.call(this), n.bindEvents = !0 } },
            k = function() { var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = ".mCSB_" + o.idx + "_scrollbar",
                    l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
                    s = e("#mCSB_" + o.idx + "_container");
                n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each(function() { e(this).unbind("." + i) }), clearTimeout(t[0]._focusTimeout), $(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), $(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), $(s[0], "onCompleteTimeout"), o.bindEvents = !1) },
            M = function(t) { var o = e(this),
                    n = o.data(a),
                    i = n.opt,
                    r = e("#mCSB_" + n.idx + "_container_wrapper"),
                    l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
                    s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
                    c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")]; "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5]) },
            O = function(t) { var o = t.type,
                    a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
                    n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0]; switch (o) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                            r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length; return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
                    default:
                        return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1] } },
            I = function() {
                function t(e, t, a, n) { if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === f[1]) var i = "x",
                        s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;
                    else var i = "y",
                        s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
                    G(r, s.toString(), { dir: i, drag: !0 }) } var o, n, i, r = e(this),
                    l = r.data(a),
                    d = l.opt,
                    u = a + "_" + l.idx,
                    f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
                    h = e("#mCSB_" + l.idx + "_container"),
                    m = e("#" + f[0] + ",#" + f[1]),
                    p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m,
                    g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
                m.bind("contextmenu." + u, function(e) { e.preventDefault() }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(t) { if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) { c = !0, s && (document.onselectstart = function() { return !1 }), L.call(h, !1), Q(r), o = e(this); var a = o.offset(),
                            l = O(t)[0] - a.top,
                            u = O(t)[1] - a.left,
                            f = o.height() + a.top,
                            m = o.width() + a.left;
                        f > l && l > 0 && m > u && u > 0 && (n = l, i = u), C(o, "active", d.autoExpandScrollbar) } }).bind("touchmove." + u, function(e) { e.stopImmediatePropagation(), e.preventDefault(); var a = o.offset(),
                        r = O(e)[0] - a.top,
                        l = O(e)[1] - a.left;
                    t(n, i, r, l) }), e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(e) { if (o) { var a = o.offset(),
                            r = O(e)[0] - a.top,
                            l = O(e)[1] - a.left; if (n === r && i === l) return;
                        t(n, i, r, l) } }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function() { o && (C(o, "active", d.autoExpandScrollbar), o = null), c = !1, s && (document.onselectstart = null), L.call(h, !0) }) },
            D = function() {
                function o(e) { if (!te(e) || c || O(e)[2]) return void(t = 0);
                    t = 1, b = 0, C = 0, d = 1, y.removeClass("mCS_touch_action"); var o = I.offset();
                    u = O(e)[0] - o.top, f = O(e)[1] - o.left, z = [O(e)[0], O(e)[1]] }

                function n(e) { if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || b) && d)) { g = K(); var t = M.offset(),
                            o = O(e)[0] - t.top,
                            a = O(e)[1] - t.left,
                            n = "mcsLinearOut"; if (E.push(o), W.push(a), z[2] = Math.abs(O(e)[0] - z[0]), z[3] = Math.abs(O(e)[1] - z[1]), B.overflowed[0]) var i = D[0].parent().height() - D[0].height(),
                            r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis); if (B.overflowed[1]) var l = D[1].parent().width() - D[1].width(),
                            h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
                        r || h ? (U || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), U && e.preventDefault(), w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null], I[0].idleTimer = 250, B.overflowed[0] && s(w[0], R, n, "y", "all", !0), B.overflowed[1] && s(w[1], R, n, "x", L, !0) } }

                function i(e) { if (!te(e) || c || O(e)[2]) return void(t = 0);
                    t = 1, e.stopImmediatePropagation(), Q(y), p = K(); var o = M.offset();
                    h = O(e)[0] - o.top, m = O(e)[1] - o.left, E = [], W = [] }

                function r(e) { if (te(e) && !c && !O(e)[2]) { d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = K(); var t = M.offset(),
                            o = O(e)[0] - t.top,
                            a = O(e)[1] - t.left; if (!(v - g > 30)) { _ = 1e3 / (v - p); var n = "mcsEaseOut",
                                i = 2.5 > _,
                                r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
                            x = i ? [o - r[0], a - r[1]] : [o - h, a - m]; var u = [Math.abs(x[0]), Math.abs(x[1])];
                            _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _]; var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
                            w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia]; var y = parseInt(T.contentTouchScroll) || 0;
                            w[0] = u[0] > y ? w[0] : 0, w[1] = u[1] > y ? w[1] : 0, B.overflowed[0] && s(w[0], S[0], n, "y", L, !1), B.overflowed[1] && s(w[1], S[1], n, "x", L, !1) } } }

                function l(e, t) { var o = [1.5 * t, 2 * t, t / 1.5, t / 2]; return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3] }

                function s(e, t, o, a, n, i) { e && G(y, e.toString(), { dur: t, scrollEasing: o, dir: a, overwrite: n, drag: i }) } var d, u, f, h, m, p, g, v, x, _, w, S, b, C, y = e(this),
                    B = y.data(a),
                    T = B.opt,
                    k = a + "_" + B.idx,
                    M = e("#mCSB_" + B.idx),
                    I = e("#mCSB_" + B.idx + "_container"),
                    D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")],
                    E = [],
                    W = [],
                    R = 0,
                    L = "yx" === T.axis ? "none" : "all",
                    z = [],
                    P = I.find("iframe"),
                    H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k],
                    U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                I.bind(H[0], function(e) { o(e) }).bind(H[1], function(e) { n(e) }), M.bind(H[0], function(e) { i(e) }).bind(H[2], function(e) { r(e) }), P.length && P.each(function() { e(this).bind("load", function() { A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function(e) { o(e), i(e) }).bind(H[1], function(e) { n(e) }).bind(H[2], function(e) { r(e) }) }) }) },
            E = function() {
                function o() { return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0 }

                function n(e, t, o) { d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, j(r, e, t, "mcsLinearOut", o ? 60 : null) } var i, r = e(this),
                    l = r.data(a),
                    s = l.opt,
                    d = l.sequential,
                    u = a + "_" + l.idx,
                    f = e("#mCSB_" + l.idx + "_container"),
                    h = f.parent();
                f.bind("mousedown." + u, function() { t || i || (i = 1, c = !0) }).add(document).bind("mousemove." + u, function(e) { if (!t && i && o()) { var a = f.offset(),
                            r = O(e)[0] - a.top + f[0].offsetTop,
                            c = O(e)[1] - a.left + f[0].offsetLeft;
                        r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39))) } }).bind("mouseup." + u + " dragend." + u, function() { t || (i && (i = 0, n("off", null)), c = !1) }) },
            W = function() {
                function t(t, a) { if (Q(o), !z(o, t.target)) { var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
                            d = i.scrollInertia; if ("x" === i.axis || "x" === i.mouseWheel.axis) var u = "x",
                            f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
                            h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0],
                            m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
                            p = c[1][0].offsetLeft,
                            g = c[1].parent().width() - c[1].width(),
                            v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;
                        else var u = "y",
                            f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
                            h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0],
                            m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
                            p = c[0][0].offsetTop,
                            g = c[0].parent().height() - c[0].height(),
                            v = t.deltaY || a; "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor, d = 17), G(o, (m - v * h).toString(), { dir: u, dur: d })) } } if (e(this).data(a)) { var o = e(this),
                        n = o.data(a),
                        i = n.opt,
                        r = a + "_" + n.idx,
                        l = e("#mCSB_" + n.idx),
                        c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                        d = e("#mCSB_" + n.idx + "_container").find("iframe");
                    d.length && d.each(function() { e(this).bind("load", function() { A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function(e, o) { t(e, o) }) }) }), l.bind("mousewheel." + r, function(e, o) { t(e, o) }) } },
            R = new Object,
            A = function(t) { var o = !1,
                    a = !1,
                    n = null; if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), a !== !1 && void 0 !== R[a]) return R[a]; if (t) { try { var i = t.contentDocument || t.contentWindow.document;
                        n = i.body.innerHTML } catch (r) {} o = null !== n } else { try { var i = top.document;
                        n = i.body.innerHTML } catch (r) {} o = null !== n } return a !== !1 && (R[a] = o), o },
            L = function(e) { var t = this.find("iframe"); if (t.length) { var o = e ? "auto" : "none";
                    t.css("pointer-events", o) } },
            z = function(t, o) { var n = o.nodeName.toLowerCase(),
                    i = t.data(a).opt.mouseWheel.disableOver,
                    r = ["select", "textarea"]; return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus")) },
            P = function() { var t, o = e(this),
                    n = o.data(a),
                    i = a + "_" + n.idx,
                    r = e("#mCSB_" + n.idx + "_container"),
                    l = r.parent(),
                    s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
                s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function(o) { c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1) }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function() { c = !1 }).bind("click." + i, function(a) { if (t && (t = 0, e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) { Q(o); var i = e(this),
                            s = i.find(".mCSB_dragger"); if (i.parent(".mCSB_scrollTools_horizontal").length > 0) { if (!n.overflowed[1]) return; var c = "x",
                                u = a.pageX > s.offset().left ? -1 : 1,
                                f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width()) } else { if (!n.overflowed[0]) return; var c = "y",
                                u = a.pageY > s.offset().top ? -1 : 1,
                                f = Math.abs(r[0].offsetTop) - u * (.9 * l.height()) } G(o, f.toString(), { dir: c, scrollEasing: "mcsEaseInOut" }) } }) },
            H = function() { var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = e("#mCSB_" + o.idx + "_container"),
                    l = r.parent();
                r.bind("focusin." + i, function() { var o = e(document.activeElement),
                        a = r.find(".mCustomScrollBox").length,
                        i = 0;
                    o.is(n.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = a ? (i + 17) * a : 0, t[0]._focusTimeout = setTimeout(function() { var e = [ae(o)[0], ae(o)[1]],
                            a = [r[0].offsetTop, r[0].offsetLeft],
                            s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)],
                            c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none"; "x" === n.axis || s[0] || G(t, e[0].toString(), { dir: "y", scrollEasing: "mcsEaseInOut", overwrite: c, dur: i }), "y" === n.axis || s[1] || G(t, e[1].toString(), { dir: "x", scrollEasing: "mcsEaseInOut", overwrite: c, dur: i }) }, t[0]._focusTimer)) }) },
            U = function() { var t = e(this),
                    o = t.data(a),
                    n = a + "_" + o.idx,
                    i = e("#mCSB_" + o.idx + "_container").parent();
                i.bind("scroll." + n, function() { 0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden") }) },
            F = function() { var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = o.sequential,
                    r = a + "_" + o.idx,
                    l = ".mCSB_" + o.idx + "_scrollbar",
                    s = e(l + ">a");
                s.bind("contextmenu." + r, function(e) { e.preventDefault() }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(a) {
                    function r(e, o) { i.scrollAmount = n.scrollButtons.scrollAmount, j(t, e, o) } if (a.preventDefault(), ee(a)) { var l = e(this).attr("class"); switch (i.type = n.scrollButtons.scrollType, a.type) {
                            case "mousedown":
                            case "touchstart":
                            case "pointerdown":
                            case "MSPointerDown":
                                if ("stepped" === i.type) return;
                                c = !0, o.tweenRunning = !1, r("on", l); break;
                            case "mouseup":
                            case "touchend":
                            case "pointerup":
                            case "MSPointerUp":
                            case "mouseout":
                            case "pointerout":
                            case "MSPointerOut":
                                if ("stepped" === i.type) return;
                                c = !1, i.dir && r("off", l); break;
                            case "click":
                                if ("stepped" !== i.type || o.tweenRunning) return;
                                r("on", l) } } }) },
            q = function() {
                function t(t) {
                    function a(e, t) { r.type = i.keyboard.scrollType, r.scrollAmount = i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || j(o, e, t) } switch (t.type) {
                        case "blur":
                            n.tweenRunning && r.dir && a("off", null); break;
                        case "keydown":
                        case "keyup":
                            var l = t.keyCode ? t.keyCode : t.which,
                                s = "on"; if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) { if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return; "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l)) } else if (33 === l || 34 === l) { if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) { Q(o); var f = 34 === l ? -1 : 1; if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                        m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width());
                                    else var h = "y",
                                        m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());
                                    G(o, m.toString(), { dir: h, scrollEasing: "mcsEaseInOut" }) } } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) { if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                    m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                                else var h = "y",
                                    m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                                G(o, m.toString(), { dir: h, scrollEasing: "mcsEaseInOut" }) } } } var o = e(this),
                    n = o.data(a),
                    i = n.opt,
                    r = n.sequential,
                    l = a + "_" + n.idx,
                    s = e("#mCSB_" + n.idx),
                    c = e("#mCSB_" + n.idx + "_container"),
                    d = c.parent(),
                    u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    f = c.find("iframe"),
                    h = ["blur." + l + " keydown." + l + " keyup." + l];
                f.length && f.each(function() { e(this).bind("load", function() { A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function(e) { t(e) }) }) }), s.attr("tabindex", "0").bind(h[0], function(e) { t(e) }) },
            j = function(t, o, n, i, r) {
                function l(e) { u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount); var o = "stepped" !== f.type,
                        a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60,
                        n = e ? o ? 7.5 : 40 : 2.5,
                        s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
                        d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
                        m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n),
                        v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
                        x = "auto" !== f.scrollAmount ? v : m,
                        _ = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                        w = !!e; return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]), G(t, x.toString(), { dir: f.dir[0], scrollEasing: _, dur: a, onComplete: w }), e ? void(f.dir = !1) : (clearTimeout(f.step), void(f.step = setTimeout(function() { l() }, a))) }

                function s() { clearTimeout(f.step), $(f, "step"), Q(t) } var c = t.data(a),
                    u = c.opt,
                    f = c.sequential,
                    h = e("#mCSB_" + c.idx + "_container"),
                    m = "stepped" === f.type,
                    p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
                    g = u.scrollInertia < 1 ? 17 : u.scrollInertia; switch (o) {
                    case "on":
                        if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], Q(t), oe(n) && "stepped" === f.type) return;
                        l(m); break;
                    case "off":
                        s(), (m || c.tweenRunning && f.dir) && l(!0) } },
            Y = function(t) { var o = e(this).data(a).opt,
                    n = []; return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n },
            X = function(t, o) { if (null != t && "undefined" != typeof t) { var n = e(this),
                        i = n.data(a),
                        r = i.opt,
                        l = e("#mCSB_" + i.idx + "_container"),
                        s = l.parent(),
                        c = typeof t;
                    o || (o = "x" === r.axis ? "x" : "y"); var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(),
                        f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
                        h = "x" === o ? "left" : "top"; switch (c) {
                        case "function":
                            return t();
                        case "object":
                            var m = t.jquery ? t : e(t); if (!m.length) return; return "x" === o ? ae(m)[1] : ae(m)[0];
                        case "string":
                        case "number":
                            if (oe(t)) return Math.abs(t); if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100); if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1])); if (-1 !== t.indexOf("+=")) { var p = f + parseInt(t.split("+=")[1]); return p >= 0 ? 0 : Math.abs(p) } if (-1 !== t.indexOf("px") && oe(t.split("px")[0])) return Math.abs(t.split("px")[0]); if ("top" === t || "left" === t) return 0; if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1)); if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1)); if ("first" === t || "last" === t) { var m = l.find(":" + t); return "x" === o ? ae(m)[1] : ae(m)[0] } return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0])) } } },
            N = function(t) {
                function o() { return clearTimeout(f[0].autoUpdate), 0 === l.parents("html").length ? void(l = null) : void(f[0].autoUpdate = setTimeout(function() { return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, s.poll.img.n === s.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void f.find("img").each(function() { n(this) })) }, c.advanced.autoUpdateTimeout)) }

                function n(t) {
                    function o(e, t) { return function() { return t.apply(e, arguments) } }

                    function a() { this.onload = null, e(t).addClass(d[2]), r(2) } if (e(t).hasClass(d[2])) return void r(); var n = new Image;
                    n.onload = o(n, a), n.src = t.src }

                function i() { c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*"); var e = 0,
                        t = f.find(c.advanced.updateOnSelectorChange); return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() { e += this.offsetHeight + this.offsetWidth }), e }

                function r(e) { clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e) } var l = e(this),
                    s = l.data(a),
                    c = s.opt,
                    f = e("#mCSB_" + s.idx + "_container"); return t ? (clearTimeout(f[0].autoUpdate), void $(f[0], "autoUpdate")) : void o() },
            V = function(e, t, o) { return Math.round(e / t) * t - o },
            Q = function(t) { var o = t.data(a),
                    n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
                n.each(function() { Z.call(this) }) },
            G = function(t, o, n) {
                function i(e) { return s && c.callbacks[e] && "function" == typeof c.callbacks[e] }

                function r() { return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w] }

                function l() { var e = [h[0].offsetTop, h[0].offsetLeft],
                        o = [x[0].offsetTop, x[0].offsetLeft],
                        a = [h.outerHeight(!1), h.outerWidth(!1)],
                        i = [f.height(), f.width()];
                    t[0].mcs = { content: h, top: e[0], left: e[1], draggerTop: o[0], draggerLeft: o[1], topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])), leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])), direction: n.dir } } var s = t.data(a),
                    c = s.opt,
                    d = { trigger: "internal", dir: "y", scrollEasing: "mcsEaseOut", drag: !1, dur: c.scrollInertia, overwrite: "all", callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 },
                    n = e.extend(d, n),
                    u = [n.dur, n.drag ? 0 : n.dur],
                    f = e("#mCSB_" + s.idx),
                    h = e("#mCSB_" + s.idx + "_container"),
                    m = h.parent(),
                    p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                    g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0]; if (s.trigger = n.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) { if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount) { var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                        o = V(o, v, c.snapOffset) } switch (n.dir) {
                        case "x":
                            var x = e("#mCSB_" + s.idx + "_dragger_horizontal"),
                                _ = "left",
                                w = h[0].offsetLeft,
                                S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()],
                                b = [o, 0 === o ? 0 : o / s.scrollRatio.x],
                                y = p[1],
                                B = g[1],
                                T = y > 0 ? y / s.scrollRatio.x : 0,
                                k = B > 0 ? B / s.scrollRatio.x : 0; break;
                        case "y":
                            var x = e("#mCSB_" + s.idx + "_dragger_vertical"),
                                _ = "top",
                                w = h[0].offsetTop,
                                S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()],
                                b = [o, 0 === o ? 0 : o / s.scrollRatio.y],
                                y = p[0],
                                B = g[0],
                                T = y > 0 ? y / s.scrollRatio.y : 0,
                                k = B > 0 ? B / s.scrollRatio.y : 0 } b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing), !s.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, { onStart: function() { n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(x), s.cbOffsets = r()) }, onUpdate: function() { n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0])) }, onComplete: function() { if (n.callbacks && n.onComplete) { "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout); var e = h[0].idleTimer || 0;
                                h[0].onCompleteTimeout = setTimeout(function() { i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, C(x, "hide") }, e) } } }) } },
            J = function(e, t, o, a, n, i, r) {
                function l() { S.stop || (x || m.call(), x = K() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call()) }

                function s() { a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call() }

                function c() { f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) { return s(), setTimeout(e, .01) }, S.id = h(l) }

                function d() { null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null) }

                function u(e, t, o, a, n) { switch (n) {
                        case "linear":
                        case "mcsLinear":
                            return o * e / a + t;
                        case "mcsLinearOut":
                            return e /= a, e--, o * Math.sqrt(1 - e * e) + t;
                        case "easeInOutSmooth":
                            return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
                        case "easeInOutStrong":
                            return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                        case "easeInOut":
                        case "mcsEaseInOut":
                            return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
                        case "easeOutSmooth":
                            return e /= a, e--, -o * (e * e * e * e - 1) + t;
                        case "easeOutStrong":
                            return o * (-Math.pow(2, -10 * e / a) + 1) + t;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var i = (e /= a) * e,
                                r = i * e; return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e) } } e._mTween || (e._mTween = { top: {}, left: {} }); var f, h, r = r || {},
                    m = r.onStart || function() {},
                    p = r.onUpdate || function() {},
                    g = r.onComplete || function() {},
                    v = K(),
                    x = 0,
                    _ = e.offsetTop,
                    w = e.style,
                    S = e._mTween[t]; "left" === t && (_ = e.offsetLeft); var b = o - _;
                S.stop = 0, "none" !== i && d(), c() },
            K = function() { return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime() },
            Z = function() { var e = this;
                e._mTween || (e._mTween = { top: {}, left: {} }); for (var t = ["top", "left"], o = 0; o < t.length; o++) { var a = t[o];
                    e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1) } },
            $ = function(e, t) { try { delete e[t] } catch (o) { e[t] = null } },
            ee = function(e) { return !(e.which && 1 !== e.which) },
            te = function(e) { var t = e.originalEvent.pointerType; return !(t && "touch" !== t && 2 !== t) },
            oe = function(e) { return !isNaN(parseFloat(e)) && isFinite(e) },
            ae = function(e) { var t = e.parents(".mCSB_container"); return [e.offset().top - t.offset().top, e.offset().left - t.offset().left] },
            ne = function() {
                function e() { var e = ["webkit", "moz", "ms", "o"]; if ("hidden" in document) return "hidden"; for (var t = 0; t < e.length; t++)
                        if (e[t] + "Hidden" in document) return e[t] + "Hidden"; return null } var t = e(); return t ? document[t] : !1 };
        e.fn[o] = function(t) { return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments) }, e[o] = function(t) { return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments) }, e[o].defaults = i, window[o] = !0, e(window).bind("load", function() { e(n)[o](), e.extend(e.expr[":"], { mcsInView: e.expr[":"].mcsInView || function(t) { var o, a, n = e(t),
                        i = n.parents(".mCSB_container"); if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1) }, mcsInSight: e.expr[":"].mcsInSight || function(t, o, a) { var n, i, r, l, s = e(t),
                        c = s.parents(".mCSB_container"),
                        d = "exact" === a[3] ? [
                            [1, 0],
                            [1, 0]
                        ] : [
                            [.9, .1],
                            [.6, .4]
                        ]; if (c.length) return n = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]], r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0 }, mcsOverflow: e.expr[":"].mcsOverflow || function(t) { var o = e(t).data(a); if (o) return o.overflowed[0] || o.overflowed[1] } }) }) }) });