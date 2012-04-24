// MAIN COMPONENT
Ext.define('ShopApp.view.Main',{
	extend : 'Ext.Container',
	xtype : 'mainview',
	
	config : {
		fullscreen : true,
		layout: {
			type: 'card',
			animation: {
				duration: 300,
				easing: 'ease-out',
				type: 'slide',
				direction: 'left'
			}
		},
		items : [
			{
				xtype : 'maintab'
			}
		]
	},
	applyLayout: function(config) {
		config = config || {};

		// TODO: This should be a configuration
		if (Ext.os.is.Android) {
			config.animation = false;
		}

		return config;
	},
	push: function(view){
		this.add(view);
		this.setActiveItem(view);
	}
});