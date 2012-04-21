Ext.define('ShopApp.view.MainTab',{
	extend: 'Ext.tab.Panel',
	xtype: 'maintab',

	config: {
		tabBarPosition: 'bottom',
		items: [
			{
				xtype: 'homepage',
				title: 'Home',
	            iconCls: 'home',
			},
			{
				xtype: 'mappage',
				title: 'Map',
				iconCls: 'map'
			},
			{
				xtype: 'favpage',
				title: 'Favorites',
				iconCls: 'fav'	
			},
			{
				xtype: 'promopage',
				title: 'Deals',
				iconCls: 'promo'	
			}
		],
		layout: {
			animation: false
		},

		// styling
		ui: 'maintab',
		tabBar: {
			ui: 'maintab',
			defaults: {
				ui: 'maintab'
			}
		}
	}
});