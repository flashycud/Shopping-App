// Ext.Loader.setPath({
//     'Ext': './js'
// });
function bind( scope, fn ) {
		return function() {
			fn.apply( scope, arguments );
		};
}
var token='329649080439475|9Tq9nVdowhg8kJjPiMN4gBP7TiU';
Ext.application({
	name	: 'ShopApp',

	controllers : ['MainControl','Category'],
	models: ['Shop'],
	stores: ['Shops'],
	views	: [
		'Main', 'MainTab' ,

		'Page',
		'page.Home', 'page.Map', 'page.Following', 'page.Shops', 'page.Shop', 'page.Promo',
		'page.Category',

		'dataview.Shops'
	],
	launch : function(){
		var main = Ext.create('ShopApp.view.Main');
	}
});