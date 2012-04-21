// Ext.Loader.setPath({
//     'Ext': './js'
// });
Ext.application({
	name	: 'ShopApp',

	// controllers : ['Main'],
	views	: [
		'Main', 'MainTab' ,

		'page.Home', 'page.Map', 'page.Fav', 'page.Promo'
	],

	launch : function(){
		var main = Ext.create('ShopApp.view.Main');
	}
});