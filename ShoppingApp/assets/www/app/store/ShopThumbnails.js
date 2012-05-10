Ext.define('ShopApp.store.ShopThumbnails', {
    extend: 'Ext.data.Store',
    requires: ['ShopApp.model.ShopThumbnail'],

    config :{
    	fields: ['id','profileImage','value'],
        model: 'ShopApp.model.ShopThumbnail',
        autoLoad: true
    },
    toUrl:function(){
        return 'shopThumbnail/'+this.get('id');
    }
});