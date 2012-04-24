Ext.define('ShopApp.view.MainTab',{
	extend: 'Ext.tab.Panel',
	xtype: 'maintab',

	config: {
		tabBarPosition: 'bottom',
		items: [
			{
				xtype: 'container',
				id: 'tab1',
				title: 'Home',
	            iconCls: 'home',
			},
			{
				xtype: 'container',
				id: 'tab2',
				title: 'Map',
				iconCls: 'nav'
			},
			{
				xtype: 'container',
				id: 'tab3',
				title: 'Following',
				iconCls: 'fav'	
			},
			{
				xtype: 'container',
				id: 'tab4',
				title: 'Shops',
				iconCls: 'shop'	
			}
		],
		layout: {
			animation: false
		},
		defaults:{
			layout: {type: 'card'}
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