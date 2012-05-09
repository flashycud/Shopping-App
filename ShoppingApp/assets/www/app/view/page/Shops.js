Ext.define('ShopApp.view.page.Shops',{
    extend: 'ShopApp.view.Page',
    xtype: 'shopspage',

    loadDefaultToolbar: function(){
        this.setItems({
            xtype: 'toolbar',
            docked: 'top',
            title: 'Siam Square Times',
            items: [
                {
                    xtype: 'button',
                    docked: 'left',
                    iconCls: 'following'
                },
                {
                    xtype: 'button',
                    docked: 'right',
                    iconCls: 'search'
                }
            ],
            // Styling
            ui: 'header'
        });
    },
    loadBackToolbar: function(){
        this.setItems([{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Siam Square Times',
            items: [
                {
                    xtype: 'button',
                    docked: 'left',
                    iconCls: 'back'
                },
                {
                    xtype: 'button',
                    docked: 'right',
                    iconCls: 'search'
                }
            ],
            // Styling
            ui: 'header'
        }]);
    },
    loadContent: function(){
        this.setItems([
            {
                xtype: 'shopsdataview'
            }
        ]);
    }
});
