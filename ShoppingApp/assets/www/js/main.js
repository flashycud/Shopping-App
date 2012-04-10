$(document).bind("mobileinit", function(){
	$.mobile.autoInitializePage = false;
	$.mobile.defaultPageTransition = 'none';
	$.mobile.touchOverflowEnabled = false;
	$.mobile.defaultDialogTransition = 'none';
	$.mobile.loadingMessage = 'Loading...' ;
	
	
});

$(document).delegate("#news","pageinit",function(){
	$('.news-holder .img-holder',this).css({
		'background-image':'url("img/test.jpg")',
		'background-size':'100% auto',
		'background-repeat':'no-repeat',
		'background-position-y':'30%',
		'background-position-x':'50%'
	});
	setTimeout(function(){
		$('#news .news-holder .caption-holder').css({'bottom':0});
	},500);
	
	$('.news-holder .caption',this).html('Starbucks');

	$('.button',this).bind('vmousedown',function(){
		$(this).addClass('btn-down');
	}).bind('vmouseup',function(){
		$(this).removeClass('btn-down');
	}).bind('vmousemove',function(){
		$(this).removeClass('btn-down');
	});
});

$(document).delegate("#shop","pageinit",function(){
	$("[data-role=footer],[data-role=header]").fixedtoolbar({ tapToggle: false });
	$('#shop .img-holder').css({
		'background-image':'url("img/test.jpg")',
		'background-size':'100% auto',
		'background-repeat':'no-repeat',
		'background-position-y':'30%',
		'background-position-x':'50%'
	});
	$('#shop .about-btn').click(function(){
		$('#shop [data-role=content] .content').addClass('hidden');	
		$('#shop [data-role=content] .about').removeClass('hidden');	
	});
	
	$('#shop .product-btn').click(function(){
		$('#shop [data-role=content] .content').addClass('hidden');	
		$('#shop [data-role=content] .product').removeClass('hidden');
	});

	$('#shop .location-btn').click(function(){
		$('#shop [data-role=content] .content').addClass('hidden');	
		$('#shop [data-role=content] .location').removeClass('hidden');

		$('.map_canvas').gmap().bind('init', function(ev, map) {
			$('.map_canvas').gmap('addMarker', {'position': '13.745013,100.532144', 'bounds': true});
		});
	});
});


// var touching = null;
// $('selector').each(function() {
//     this.addEventListener("touchstart", function(e) {
//         e.preventDefault();
//         touching = window.setTimeout(longTouch, 500, true);
//     }, false);
//     this.addEventListener("touchend", function(e) {
//         e.preventDefault();
//         window.clearTimeout(touching);
//     }, false);
// });