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
				iconCls: 'nav'
			},
			{
				xtype: 'favpage',
				title: 'Favorites',
				iconCls: 'fav'	
			},
			{
				xtype: 'shopspage',
				title: 'Shops',
				iconCls: 'shop'	
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