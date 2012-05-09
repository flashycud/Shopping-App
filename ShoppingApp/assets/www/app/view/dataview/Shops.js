Ext.define('ShopApp.view.dataview.Shops',{
    extend: 'Ext.dataview.DataView',
    xtype: 'shopsdataview',
    config: {
        fullscreen: true,
    
        itemTpl: '<div class="thumbnail" style="background-image:url({profileImage})"></div> <div class="detail"><h1>{value.shopName}</h1><h4>{value.shopDescription}</h4></div><div class="arrow list-icon-right"></div>',
        // itemTpl: '<div class="thumbnail" style="background-image:url({href})"></div> <div class="detail"><h1>{name}</h1><h4>{story}</h4></div><div class="arrow list-icon-right"></div>',
        store: 'Shops',
        baseCls: 'shops-dataview'
    }
});