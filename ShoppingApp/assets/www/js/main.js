$(document).bind("mobileinit", function(){
	var touching = null;
	$('selector').each(function() {
	    this.addEventListener("touchstart", function(e) {
	        e.preventDefault();
	        touching = window.setTimeout(longTouch, 500, true);
	    }, false);
	    this.addEventListener("touchend", function(e) {
	        e.preventDefault();
	        window.clearTimeout(touching);
	    }, false);
	});
});