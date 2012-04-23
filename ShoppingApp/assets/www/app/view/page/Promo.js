Ext.define('ShopApp.view.page.Promo', {
	extend: 'Ext.Container',
	xtype: 'promopage',

	config: {
		items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Siam Square Times',
                items: [
                    {
                        xtype: 'button',
                        docked: 'left',
                        iconCls: 'fav'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        iconCls: 'list'
                    }
                ],

                // Styling
                ui: 'header'
            }
        ],
        layout: {type: 'card'}
	}
});