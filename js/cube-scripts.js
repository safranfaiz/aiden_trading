function loadGalleryFunction() {
	$("#js-grid-photogallery-nofilter").length && jQuery("#js-grid-photogallery-nofilter").cubeportfolio({
		filters: "",
		loadMore: "",
		loadMoreAction: "click",
		layoutMode: "grid",
		mediaQueries: [{
			width: 1500,
			cols: 5
		}, {
			width: 1100,
			cols: 4
		}, {
			width: 800,
			cols: 3
		}, {
			width: 480,
			cols: 2
		}, {
			width: 320,
			cols: 1
		}],
		defaultFilter: "*",
		animationType: "rotateSides",
		gapHorizontal: 10,
		gapVertical: 10,
		gridAdjustment: "responsive",
		caption: "zoom",
		displayType: "sequentially",
		displayTypeSpeed: 100,
		lightboxDelegate: ".cbp-lightbox",
		lightboxGallery: !0,
		lightboxTitleSrc: "data-title",
		lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'
	}), $("#js-grid-photogallery").length && jQuery("#js-grid-photogallery").cubeportfolio({
		filters: "#js-filters-photogallery",
		loadMore: "",
		loadMoreAction: "click",
		layoutMode: "grid",
		mediaQueries: [{
			width: 1500,
			cols: 5
		}, {
			width: 1100,
			cols: 4
		}, {
			width: 800,
			cols: 3
		}, {
			width: 480,
			cols: 2
		}, {
			width: 320,
			cols: 1
		}],
		defaultFilter: "*",
		animationType: "rotateSides",
		gapHorizontal: 10,
		gapVertical: 10,
		gridAdjustment: "responsive",
		caption: "zoom",
		displayType: "sequentially",
		displayTypeSpeed: 100,
		lightboxDelegate: ".cbp-lightbox",
		lightboxGallery: !0,
		lightboxTitleSrc: "data-title",
		lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'
	})
}
$("#js-grid-other-agencies").length && $("#js-grid-other-agencies").cubeportfolio({
	layoutMode: "slider",
	drag: !0,
	auto: !1,
	autoTimeout: 5e3,
	autoPauseOnHover: !0,
	showNavigation: !0,
	showPagination: !1,
	rewindNav: !1,
	scrollByPage: !1,
	gridAdjustment: "responsive",
	mediaQueries: [{
		width: 1500,
		cols: 6
	}, {
		width: 1100,
		cols: 6
	}, {
		width: 800,
		cols: 6
	}, {
		width: 480,
		cols: 3
	}, {
		width: 320,
		cols: 3
	}],
	gapHorizontal: 0,
	gapVertical: 25,
	caption: "zoom",
	displayType: "lazyLoading",
	displayTypeSpeed: 100,
	lightboxDelegate: ".cbp-lightbox",
	lightboxGallery: !0,
	lightboxTitleSrc: "data-title",
	lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'
}), $("#js-grid-otherproducts").length && $("#js-grid-otherproducts").cubeportfolio({
	filters: "",
	loadMoreAction: "click",
	layoutMode: "mosaic",
	defaultFilter: "*",
	animationType: "quicksand",
	gapHorizontal: 35,
	gapVertical: 30,
	gridAdjustment: "responsive",
	mediaQueries: [{
		width: 1500,
		cols: 4
	}, {
		width: 1100,
		cols: 3
	}, {
		width: 800,
		cols: 3
	}, {
		width: 480,
		cols: 3
	}, {
		width: 320,
		cols: 2
	}],
	caption: "zoom",
	displayType: "sequentially",
	displayTypeSpeed: 80,
	lightboxDelegate: ".cbp-lightbox",
	lightboxGallery: !0,
	lightboxTitleSrc: "data-title",
	lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'
}), $("#js-grid-slideshow").length && $("#js-grid-slideshow").cubeportfolio({
	layoutMode: "slider",
	drag: !0,
	auto: !0,
	autoTimeout: 3e3,
	autoPauseOnHover: !0,
	showNavigation: !1,
	showPagination: !0,
	rewindNav: !0,
	scrollByPage: !1,
	gridAdjustment: "responsive",
	mediaQueries: [{
		width: 1500,
		cols: 1
	}, {
		width: 1100,
		cols: 1
	}, {
		width: 800,
		cols: 1
	}, {
		width: 480,
		cols: 1
	}, {
		width: 320,
		cols: 1
	}],
	gapHorizontal: 0,
	gapVertical: 5,
	caption: "opacity",
	displayType: "lazyLoading",
	displayTypeSpeed: 100
}), $("#js-grid-slider").length && $("#js-grid-slider").cubeportfolio({
	layoutMode: "slider",
	drag: !0,
	auto: !0,
	autoTimeout: 3e3,
	autoPauseOnHover: !0,
	showNavigation: !1,
	showPagination: !0,
	rewindNav: !0,
	scrollByPage: !1,
	gridAdjustment: "responsive",
	mediaQueries: [{
		width: 1500,
		cols: 6
	}, {
		width: 1100,
		cols: 5
	}, {
		width: 800,
		cols: 4
	}, {
		width: 480,
		cols: 3
	}, {
		width: 320,
		cols: 2
	}],
	gapHorizontal: 0,
	gapVertical: 5,
	caption: "opacity",
	displayType: "lazyLoading",
	displayTypeSpeed: 100
}), jQuery(document).ready(function () {
	$("#btns").length && (jQuery("#btn-about").click(function () {
		var e = jQuery("#btn-gallery").attr("class"),
			t = jQuery("#btn-videos").attr("class"); - 1 != e.indexOf("active-btn") ? (jQuery("#div-gallery").hide(), jQuery("#btn-gallery").removeClass("active-btn"), jQuery("#btn-about").addClass("active-btn"), jQuery("#div-about").show()) : -1 != t.indexOf("active-btn") && (jQuery("#div-videos").hide(), jQuery("#btn-videos").removeClass("active-btn"), jQuery("#btn-about").addClass("active-btn"), jQuery("#div-about").show())
	}), jQuery("#btn-videos").click(function () {
		var e = jQuery("#btn-about").attr("class"),
			t = jQuery("#btn-gallery").attr("class"); - 1 != e.indexOf("active-btn") ? (jQuery("#div-about").hide(), jQuery("#btn-about").removeClass("active-btn"), jQuery("#btn-videos").addClass("active-btn"), jQuery("#div-videos").show()) : -1 != t.indexOf("active-btn") && (jQuery("#div-gallery").hide(), jQuery("#btn-gallery").removeClass("active-btn"), jQuery("#btn-videos").addClass("active-btn"), jQuery("#div-videos").show())
	}), jQuery("#btn-gallery").click(function () {
		var e = jQuery("#btn-gallery").attr("class"),
			t = jQuery("#btn-about").attr("class"),
			i = jQuery("#btn-videos").attr("class"); - 1 != t.indexOf("active-btn") ? (-1 != e.indexOf("notLoaded") && (jQuery("#btn-gallery").removeClass("notLoaded"), loadGalleryFunction()), jQuery("#div-about").hide(), jQuery("#btn-about").removeClass("active-btn"), jQuery("#div-gallery").show(), jQuery("#btn-gallery").addClass("active-btn")) : -1 != i.indexOf("active-btn") && (-1 != e.indexOf("notLoaded") && (jQuery("#btn-gallery").removeClass("notLoaded"), loadGalleryFunction()), jQuery("#div-videos").hide(), jQuery("#btn-videos").removeClass("active-btn"), jQuery("#div-gallery").show(), jQuery("#btn-gallery").addClass("active-btn"))
	})), $("#tabs-1").length && jQuery("#btn-images").click(function () {
		-1 != jQuery("#btn-images").attr("class").indexOf("notLoaded") ? jQuery("#btn-images").removeClass("notLoaded") : loadGalleryFunction()
	})
});