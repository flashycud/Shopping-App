Ext.define('ShopApp.view.page.Fav',{
	extend: 'Ext.Container',
	xtype: 'favpage',

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
            },
            {
                xtype: 'list',
        	    fullscreen: true,
            
                store: {
                    fields: ['name'],
                    data: [
                        {name: 'Cowper'},
                        {name: 'Everett'},
                        {name: 'University'},
                        {name: 'Forest'}
                    ]
                },
            
                itemTpl: '{name}',
            
                listeners: {
                    select: function(view, record) {
                        Ext.Msg.alert('Selected!', 'You selected ' + record.get('name'));
                    }
                }
            }
        ],
        layout:{type:'card'}
    }
});
