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
                        text: 'Left'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        text: 'Right'
                    }
                ]  
            }
        ],
        layout: {type: 'card'}
	}
});