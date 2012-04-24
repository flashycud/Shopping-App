// Ext.Loader.setPath({
//     'Ext': './js'
// });
var global2 = [];
function bind( scope, fn ) {
		return function() {
			fn.apply( scope, arguments );
		};
}

Ext.application({
	name	: 'ShopApp',

	controllers : ['MainControl'],
	views	: [
		'Main', 'MainTab' ,

		'page.Home', 'page.Map', 'page.Following', 'page.Shops', 'page.Promo'
	],
	
	phoneStartupScreen: 'img/Homescreen.jpg',

	launch : function(){
		var main = Ext.create('ShopApp.view.Main');
	}
});