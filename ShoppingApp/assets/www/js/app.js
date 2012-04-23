// Ext.Loader.setPath({
//     'Ext': './js'
// });
var global = function(){
	alert('back');
}
document.addEventListener('deviceready',function(){
	document.addEventListener("backbutton", global, false);
});
function bind( scope, fn ) {
		return function() {
			fn.apply( scope, arguments );
		};
}

Ext.application({
	name	: 'ShopApp',

	controllers : ['HomeControl'],
	views	: [
		'Main', 'MainTab' ,

		'page.Home', 'page.Map', 'page.Fav', 'page.Shops', 'page.Promo'
	],
	
	phoneStartupScreen: 'img/Homescreen.jpg',

	launch : function(){
		var main = Ext.create('ShopApp.view.Main');
	}
});