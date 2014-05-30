var index = 0;
var gall = null;
var interval = 4000;
$.fn.gallery = function(duration,imageLayout) {
	if (duration > 0) {
		interval = duration;
	}
	gall = $(this);
	$(this).css("text-align", "center");
	$(this).css("white-space", "nowrap");
	$(this).css("overflow", "hidden");
	$(this).css("padding", "0px");

	$(this).children("img").each(function(i, el) {
		$(el).css("display", "inline-block");
		if (imageLayout == "width") {
			$(el).css("width", "100%");
			$(el).css("height", "auto");
		}else{
			$(el).css("height", "100%");
			$(el).css("width", "auto");
		}
		$(el).css("margin", "0px");
		$(el).css("overflow", "hidden");
		$(el).wrapAll('<div class="galleryItem"></div>');
	});

	$(this).children(".galleryItem").css("display", "inline-block");
	$(this).children(".galleryItem").css("margin", "0px  auto");
	$(this).children(".galleryItem").css("padding", "0px");
	
	$(this).children(".galleryItem").css("width", "100%");
	$(this).children(".galleryItem").css("height", "100%");

	setInterval(function() {
		var el = $(gall).children(".galleryItem").get(0);
		if (index < $(gall).children(".galleryItem").size() - 1) {
			$(el).animate({
				"marginLeft" : "-=" + ($(gall).width() + 4) + "px"
			}, "slow");

			index += 1;
		} else {
			index = 0;
			var allEli = $(gall).children(".galleryItem");
			$(allEli).animate({
				"marginLeft" : "" + 0 + "px"
			}, "slow");
		}
	}, interval)
};
