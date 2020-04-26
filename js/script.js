"use strict";
! function () {
	var t = navigator.userAgent.toLowerCase(),
		a = new Date,
		e = ($(document), $(window)),
		r = $("html"),
		i = $("body"),
		l = r.hasClass("desktop"),
		o = -1 !== t.indexOf("msie") ? parseInt(t.split("msie")[1], 10) : -1 !== t.indexOf("trident") ? 11 : -1 !== t.indexOf("edge") && 12,
		n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		s = !1,
		d = {
			bootstrapTooltip: $("[data-toggle='tooltip']"),
			bootstrapModalDialog: $(".modal"),
			bootstrapTabs: $(".tabs-custom"),
			customToggle: $("[data-custom-toggle]"),
			counter: $(".counter"),
			circleProgress: $(".progress-bar-circle"),
			countDown: $("[data-circle-countdown]"),
			captcha: $(".recaptcha"),
			copyrightYear: $(".copyright-year"),
			checkbox: $("input[type='checkbox']"),
			isotope: $(".isotope-wrap"),
			lightGallery: $("[data-lightgallery='group']"),
			lightGalleryItem: $("[data-lightgallery='item']"),
			lightDynamicGalleryItem: $("[data-lightgallery='dynamic']"),
			materialParallax: $(".parallax-container"),
			popover: $('[data-toggle="popover"]'),
			progressLinear: $(".progress-linear"),
			preloader: $(".preloader"),
			rdNavbar: $(".rd-navbar"),
			rdInputLabel: $(".form-label"),
			regula: $("[data-constraints]"),
			radio: $("input[type='radio']"),
			swiper: document.querySelectorAll(".swiper-container"),
			statefulButton: $(".btn-stateful"),
			viewAnimate: $(".view-animate"),
			wow: $(".wow"),
			rdRange: $(".rd-range"),
			selectFilter: $("select"),
			slick: $(".slick-slider"),
			radioPanel: $(".radio-panel .radio-inline"),
			multitoggle: document.querySelectorAll("[data-multitoggle]")
		};
	e.on("load", function () {
		if (d.preloader.length && !s && pageTransition({
				target: document.querySelector(".page"),
				delay: 0,
				duration: 500,
				classIn: "fadeIn",
				classOut: "fadeOut",
				classActive: "animated",
				conditions: function (t, a) {
					return !/(\#|callto:|tel:|mailto:|:\/\/)/.test(a) && !t.currentTarget.hasAttribute("data-lightgallery")
				},
				onTransitionStart: function (t) {
					setTimeout(function () {
						d.preloader.removeClass("loaded")
					}, .75 * t.duration)
				},
				onReady: function () {
					d.preloader.addClass("loaded"), !0
				}
			}), d.materialParallax.length)
			if (s || o || n)
				for (var t = 0; t < d.materialParallax.length; t++) {
					var a = $(d.materialParallax[t]);
					a.addClass("parallax-disabled"), a.css({
						"background-image": "url(" + a.data("parallax-img") + ")"
					})
				} else d.materialParallax.parallax()
	}), $(function () {
		function t(t) {
			d.bootstrapTooltip.tooltip("dispose"), window.innerWidth < 576 ? d.bootstrapTooltip.tooltip({
				placement: "bottom"
			}) : d.bootstrapTooltip.tooltip({
				placement: t
			})
		}

		function n(t, a) {
			s || $(t).lightGallery({
				thumbnail: "false" !== $(t).attr("data-lg-thumbnail"),
				selector: "[data-lightgallery='item']",
				autoplay: "true" === $(t).attr("data-lg-autoplay"),
				pause: parseInt($(t).attr("data-lg-autoplay-delay")) || 5e3,
				addClass: a,
				mode: $(t).attr("data-lg-animation") || "lg-slide",
				loop: "false" !== $(t).attr("data-lg-loop")
			})
		}

		function c(t, a) {
			s || $(t).on("click", function () {
				$(t).lightGallery({
					thumbnail: "false" !== $(t).attr("data-lg-thumbnail"),
					selector: "[data-lightgallery='item']",
					autoplay: "true" === $(t).attr("data-lg-autoplay"),
					pause: parseInt($(t).attr("data-lg-autoplay-delay")) || 5e3,
					addClass: a,
					mode: $(t).attr("data-lg-animation") || "lg-slide",
					loop: "false" !== $(t).attr("data-lg-loop"),
					dynamic: !0,
					dynamicEl: JSON.parse($(t).attr("data-lg-dynamic-elements")) || []
				})
			})
		}

		function u(t) {
			var a = t.$wrapperEl[0].children[t.activeIndex];
			t.realPrevious = Array.prototype.indexOf.call(a.parentNode.children, a)
		}

		function p(t) {
			var a = t.getAttribute("data-autoplay") || 5e3,
				e = t.querySelectorAll(".swiper-slide"),
				r = {
					loop: "true" === t.getAttribute("data-loop") || !1,
					effect: t.getAttribute("data-effect") || "slide",
					direction: t.getAttribute("data-direction") || "horizontal",
					speed: t.getAttribute("data-speed") ? Number(t.getAttribute("data-speed")) : 600,
					simulateTouch: "true" === t.getAttribute("data-simulate-touch") && !s || !1,
					slidesPerView: t.getAttribute("data-slides") || 1,
					spaceBetween: Number(t.getAttribute("data-margin")) || 0
				};
			Number(a) && (r.autoplay = {
				delay: Number(a),
				stopOnLastSlide: !1,
				disableOnInteraction: !0,
				reverseDirection: !1
			}), "true" === t.getAttribute("data-keyboard") && (r.keyboard = {
				enabled: "true" === t.getAttribute("data-keyboard"),
				onlyInViewport: !0
			}), "true" === t.getAttribute("data-mousewheel") && (r.mousewheel = {
				sensitivity: 1
			}), t.querySelector(".swiper-button-next, .swiper-button-prev") && (r.navigation = {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}), t.querySelector(".swiper-pagination") && (r.pagination = {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: !0
			}), t.querySelector(".swiper-scrollbar") && (r.scrollbar = {
				el: ".swiper-scrollbar",
				hide: !1
			});
			for (var i = 0; i < e.length; i++) {
				var l = e[i],
					o = l.getAttribute("data-slide-bg");
				o && (l.style.backgroundImage = "url(" + o + ")")
			}
			return r.on = {
				init: function () {
					var t, a, e, r;
					u(this), a = function (t) {
						return function () {
							var a;
							(a = t.getAttribute("data-caption-duration")) && (t.style.animationDuration = a + "ms"), t.classList.remove("not-animated"), t.classList.add(t.getAttribute("data-caption-animate")), t.classList.add("animated")
						}
					}, e = function (t) {
						for (var a = 0; a < t.length; a++) {
							var e = t[a];
							e.classList.remove("animated"), e.classList.remove(e.getAttribute("data-caption-animate")), e.classList.add("not-animated")
						}
					}, r = function (t) {
						for (var e = 0; e < t.length; e++) {
							var r = t[e];
							r.getAttribute("data-caption-delay") ? setTimeout(a(r), Number(r.getAttribute("data-caption-delay"))) : a(r)()
						}
					}, (t = this).params.caption = {
						animationEvent: "slideChangeTransitionEnd"
					}, e(t.$wrapperEl[0].querySelectorAll("[data-caption-animate]")), r(t.$wrapperEl[0].children[t.activeIndex].querySelectorAll("[data-caption-animate]")), "slideChangeTransitionEnd" === t.params.caption.animationEvent ? t.on(t.params.caption.animationEvent, function () {
						e(t.$wrapperEl[0].children[t.previousIndex].querySelectorAll("[data-caption-animate]")), r(t.$wrapperEl[0].children[t.activeIndex].querySelectorAll("[data-caption-animate]"))
					}) : (t.on("slideChangeTransitionEnd", function () {
						e(t.$wrapperEl[0].children[t.previousIndex].querySelectorAll("[data-caption-animate]"))
					}), t.on(t.params.caption.animationEvent, function () {
						r(t.$wrapperEl[0].children[t.activeIndex].querySelectorAll("[data-caption-animate]"))
					})), this.on("slideChangeTransitionEnd", function () {
						u(this)
					})
				}
			}, new Swiper(t, r)
		}
		if (s = window.xMode, navigator.platform.match(/(Mac)/i) && r.addClass("mac-os"), o && (12 === o && r.addClass("ie-edge"), 11 === o && r.addClass("ie-11"), o < 10 && r.addClass("lt-ie-10"), o < 11 && r.addClass("ie-10")), d.bootstrapTooltip.length) {
			var g = d.bootstrapTooltip.attr("data-placement");
			t(g), e.on("resize orientationchange", function () {
				t(g)
			})
		}
		if (d.bootstrapModalDialog.length)
			for (var m = 0; m < d.bootstrapModalDialog.length; m++) {
				var h = $(d.bootstrapModalDialog[m]);
				h.on("hidden.bs.modal", $.proxy(function () {
					var t = $(this),
						a = t.find("video"),
						e = t.find("iframe");
					if (a.length && a[0].pause(), e.length) {
						var r = e.attr("src");
						e.attr("src", "").attr("src", r)
					}
				}, h))
			}
		if (d.popover.length && (window.innerWidth < 767 ? (d.popover.attr("data-placement", "bottom"), d.popover.popover()) : d.popover.popover()), d.statefulButton.length && $(d.statefulButton).on("click", function () {
				var t = $(this).button("loading");
				setTimeout(function () {
					t.button("reset")
				}, 2e3)
			}), d.bootstrapTabs.length)
			for (m = 0; m < d.bootstrapTabs.length; m++) {
				var b = $(d.bootstrapTabs[m]);
				b.find(".slick-slider").length && b.find(".tabs-custom-list > li > a").on("click", $.proxy(function () {
					var t = $(this);
					setTimeout(function () {
						t.find(".tab-content .tab-pane.active .slick-slider").slick("setPosition")
					}, s ? 1500 : 300)
				}, b))
			}
		if (d.copyrightYear.length && d.copyrightYear.text(a.getFullYear()), d.checkbox.length)
			for (m = 0; m < d.checkbox.length; m++) $(d.checkbox[m]).addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>");
		if (l && !s && $().UItoTop({
				easingType: "easeOutQuad",
				containerClass: "ui-to-top fa fa-angle-double-up"
			}), d.rdNavbar.length) {
			var v, f, y, w, k;
			for (v = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"], k = {}, m = f = 0, y = (w = [0, 576, 768, 992, 1200, 1600]).length; f < y; m = ++f) w[m], k[w[m]] || (k[w[m]] = {}), d.rdNavbar.attr("data" + v[m] + "layout") && (k[w[m]].layout = d.rdNavbar.attr("data" + v[m] + "layout")), d.rdNavbar.attr("data" + v[m] + "device-layout") && (k[w[m]].deviceLayout = d.rdNavbar.attr("data" + v[m] + "device-layout")), d.rdNavbar.attr("data" + v[m] + "hover-on") && (k[w[m]].focusOnHover = "true" === d.rdNavbar.attr("data" + v[m] + "hover-on")), d.rdNavbar.attr("data" + v[m] + "auto-height") && (k[w[m]].autoHeight = "true" === d.rdNavbar.attr("data" + v[m] + "auto-height")), s ? k[w[m]].stickUp = !1 : d.rdNavbar.attr("data" + v[m] + "stick-up") && (k[w[m]].stickUp = "true" === d.rdNavbar.attr("data" + v[m] + "stick-up")), d.rdNavbar.attr("data" + v[m] + "stick-up-offset") && (k[w[m]].stickUpOffset = d.rdNavbar.attr("data" + v[m] + "stick-up-offset"));
			d.rdNavbar.RDNavbar({
				anchorNav: !s,
				stickUpClone: !(!d.rdNavbar.attr("data-stick-up-clone") || s) && "true" === d.rdNavbar.attr("data-stick-up-clone"),
				responsive: k,
				callbacks: {
					onStuck: function () {
						var t = this.$element.find(".rd-search input");
						t && t.val("").trigger("propertychange")
					},
					onDropdownOver: function () {
						return !s
					},
					onUnstuck: function () {
						if (null !== this.$clone) {
							var t = this.$clone.find(".rd-search input");
							t && (t.val("").trigger("propertychange"), t.trigger("blur"))
						}
					}
				}
			}), d.rdNavbar.attr("data-body-class") && (document.body.className += " " + d.rdNavbar.attr("data-body-class"))
		}
		if (d.swiper) {
			for (m = 0; m < d.swiper.length; m++) d.swiper[m].swiper = p(d.swiper[m]);
			var x = $(".swiper-slider-custom");
			x.length && e.on("resize orientationchange", function () {
				for (var t = 0; t < x.length; t++) window.innerWidth < 576 && "vertical" === x[t].swiper.params.direction ? (x[t].setAttribute("data-direction", "horizontal"), x[t].swiper.destroy(), p(x[t])) : window.innerWidth >= 576 && "horizontal" === x[t].swiper.params.direction && (x[t].setAttribute("data-direction", "vertical"), x[t].swiper.destroy(), p(x[t]))
			})
		}
		if (r.hasClass("wow-animation") && d.wow.length && !s && l && (new WOW).init(), d.lightGallery.length)
			for (m = 0; m < d.lightGallery.length; m++) n(d.lightGallery[m]);
		if (d.lightGalleryItem.length) {
			for (var A = [], I = 0; I < d.lightGalleryItem.length; I++) $(d.lightGalleryItem[I]).parents(".swiper-slider").length || $(d.lightGalleryItem[I]).parents(".slick-slider").length || A.push(d.lightGalleryItem[I]);
			d.lightGalleryItem = A;
			for (m = 0; m < d.lightGalleryItem.length; m++) T = d.lightGalleryItem[m], C = void 0, s || $(T).lightGallery({
				selector: "this",
				addClass: C,
				counter: !1,
				youtubePlayerParams: {
					modestbranding: 1,
					showinfo: 0,
					rel: 0,
					controls: 0
				},
				vimeoPlayerParams: {
					byline: 0,
					portrait: 0
				}
			})
		}
		var T, C;
		if (d.lightDynamicGalleryItem.length)
			for (var m = 0; m < d.lightDynamicGalleryItem.length; m++) c(d.lightDynamicGalleryItem[m]);
		if (d.customToggle.length)
			for (m = 0; m < d.customToggle.length; m++) {
				var N = $(d.customToggle[m]);
				N.on("click", $.proxy(function (t) {
					t.preventDefault();
					var a = $(this);
					$(a.attr("data-custom-toggle")).add(this).toggleClass("active")
				}, N)), "true" === N.attr("data-custom-toggle-hide-on-blur") && i.on("click", N, function (t) {
					t.target !== t.data[0] && $(t.data.attr("data-custom-toggle")).find($(t.target)).length && 0 === t.data.find($(t.target)).length && $(t.data.attr("data-custom-toggle")).add(t.data[0]).removeClass("active")
				}), "true" === N.attr("data-custom-toggle-disable-on-blur") && i.on("click", N, function (t) {
					t.target !== t.data[0] && 0 === $(t.data.attr("data-custom-toggle")).find($(t.target)).length && 0 === t.data.find($(t.target)).length && $(t.data.attr("data-custom-toggle")).add(t.data[0]).removeClass("active")
				})
			}
		if (d.selectFilter.length)
			for (m = 0; m < d.selectFilter.length; m++) {
				var S = $(d.selectFilter[m]),
					G = "html-" + S.attr("data-style") + "-select";
				r.addClass(G), S.select2({
					placeholder: !!S.attr("data-placeholder") && S.attr("data-placeholder"),
					minimumResultsForSearch: S.attr("data-minimum-results-search") ? S.attr("data-minimum-results-search") : -1,
					maximumSelectionSize: 3,
					dropdownCssClass: !!S.attr("data-dropdown-class") && S.attr("data-dropdown-class")
				})
			}
		if (d.slick.length)
			for (m = 0; m < d.slick.length; m++) {
				var E = $(d.slick[m]);
				E.on("init", function (t) {
					n($('[data-lightgallery="group-slick"]'), "lightGallery-in-carousel"), n($('[data-lightgallery="item-slick"]'), "lightGallery-in-carousel")
				}), E.slick({
					slidesToScroll: parseInt(E.attr("data-slide-to-scroll"), 10) || 1,
					asNavFor: E.attr("data-for") || !1,
					dots: "true" === E.attr("data-dots"),
					infinite: !s && "true" === E.attr("data-loop"),
					focusOnSelect: E.attr("data-focus-select") || !0,
					arrows: "true" === E.attr("data-arrows"),
					swipe: "true" === E.attr("data-swipe"),
					autoplay: "true" === E.attr("data-autoplay"),
					centerMode: "true" === E.attr("data-center-mode"),
					fade: "true" === E.attr("data-slide-effect"),
					centerPadding: E.attr("data-center-padding") ? E.attr("data-center-padding") : "0.50",
					mobileFirst: !0,
					appendArrows: E.attr("data-arrows-class") || E,
					nextArrow: '<button type="button" class="slick-next"></button>',
					prevArrow: '<button type="button" class="slick-prev"></button>',
					responsive: [{
						breakpoint: 0,
						settings: {
							slidesToShow: parseInt(E.attr("data-items"), 10) || 1,
							vertical: "true" === E.attr("data-vertical") || !1
						}
					}, {
						breakpoint: 575,
						settings: {
							slidesToShow: parseInt(E.attr("data-sm-items"), 10) || 1,
							vertical: "true" === E.attr("data-sm-vertical") || !1
						}
					}, {
						breakpoint: 767,
						settings: {
							slidesToShow: parseInt(E.attr("data-md-items"), 10) || 1,
							vertical: "true" === E.attr("data-md-vertical") || !1
						}
					}, {
						breakpoint: 991,
						settings: {
							slidesToShow: parseInt(E.attr("data-lg-items"), 10) || 1,
							vertical: "true" === E.attr("data-lg-vertical") || !1
						}
					}, {
						breakpoint: 1199,
						settings: {
							slidesToShow: parseInt(E.attr("data-xl-items"), 10) || 1,
							vertical: "true" === E.attr("data-xl-vertical") || !1
						}
					}, {
						breakpoint: 1599,
						settings: {
							slidesToShow: parseInt(E.attr("data-xxl-items"), 10) || 1,
							vertical: "true" === E.attr("data-xxl-vertical") || !1
						}
					}]
				}).on("afterChange", function (t, a, e, r) {
					var i = $(this).attr("data-child");
					i && ($(i + " .slick-slide").removeClass("slick-current"), $(i + " .slick-slide").eq(e).addClass("slick-current"))
				})
			}
		d.multitoggle.length && multitoggles()
	})
}();