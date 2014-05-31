var index = 1;
var gall = null;
var interval = 5000;
var speed = 500;
jQuery.fn.cleanWhitespace = function() {
	textNodes = this.contents().filter(function() {
		return (this.nodeType == 3 && !/\S/.test(this.nodeValue));
	}).remove();
	return this;
}

$.fn.gallery = function(args) {
	if (args.interval > 0) {
		interval = args.interval;
	}
	
	if (args.slideSpeed > 0) {
		speed = args.slideSpeed
	}
	
	gall = $(this);
	$(this).css("text-align", "center");
	$(this).css("white-space", "nowrap");
	$(this).css("overflow", "hidden");
	$(this).css("padding", "0px");

	$(this).children("img").each(function(i, el) {
		$(el).css("display", "inline-block");
		if (args.imageLayout == "width") {
			$(el).css("width", "100%");
			$(el).css("height", "auto");
		} else {
			$(el).css("height", "100%");
			$(el).css("width", "auto");
		}
		$(el).css("margin", "0px");
		$(el).css("overflow", "hidden");
		$(el).wrapAll('<div class="galleryItem"></div>');
	});

	//Very important - removes gap between slides
	$(this).cleanWhitespace();

	$(this).children(".galleryItem").css("display", "inline-block");
	$(this).children(".galleryItem").css("margin", "0px auto");
	$(this).children(".galleryItem").css("padding", "0px");
	$(this).children(".galleryItem").css("border", "0px");
	$(this).children(".galleryItem").css("width", "100%");
	$(this).children(".galleryItem").css("height", "100%");
	
	setInterval(function() {
		var el = $(gall).children(".galleryItem").get(0);
		if (index < $(gall).children(".galleryItem").size() - 1) {
			$(el).animate({
				"marginLeft" : "-=" + ($(gall).width()) + "px"
			}, speed);

			index += 1;
		} else {
			index = 1;
			var allEli = $(gall).children(".galleryItem");
			$(allEli).animate({
				"marginLeft" : "" + 0 + "px"
			}, speed);
		}
	}, interval)
	return this;
};