Ext.define('ShopApp.store.Shops', {
    extend: 'Ext.data.Store',
    requires: ['ShopApp.model.Shop'],

    config :{
    	fields: ['id','profileImage','value'],
	    data: [
	        {id:'Cowper',profileImage: 'img/album-bb.jpg',value:{contactInfo:{shopLocation:'Siam Square Soi 2'},shopName: 'Cowper', shopDescription: 'Jeans with passion Jeans with passion Jeans with passion Jeans with passion Jeans with passion Jeans with passion Jeans with passion Jeans with passion Jeans with passion'}},
	        {id:'Everett', profileImage: 'img/album-hc.jpg',value:{ contactInfo:{shopLocation:'Siam Square Soi 2'},shopName: 'Everett',shopDescription: 'Jeans with passion'}},
	        {id:'University',profileImage: 'img/album-ok.jpg',value:{ contactInfo:{shopLocation:'Siam Square Soi 2'},shopName: 'University',shopDescription: 'Jeans with passion'}},
	        {id:'Forest',profileImage: 'img/album-p.jpg',value:{ contactInfo:{shopLocation:'Siam Square Soi 2'},shopName: 'Forest', shopDescription: 'Jeans with passion'}},
	        {id:'Cowper1',profileImage: 'img/album-bb.jpg',value:{ contactInfo:{shopLocation:'Siam Square Soi 2'},shopName: 'Cowper', shopDescription: 'Jeans with passion'}},
	        {id:'Everett1', profileImage: 'img/album-hc.jpg',value:{ contactInfo:{shopLocation:'Siam Square Soi 2'},shopName: 'Everett',shopDescription: 'Jeans with passion'}},
	        {id:'University1',profileImage: 'img/album-ok.jpg',value:{ contactInfo:{shopLocation:'Siam Square Soi 2'},shopName: 'University',shopDescription: 'Jeans with passion'}},
	        {id:'Forest1',profileImage: 'img/album-p.jpg',value:{ contactInfo:{shopLocation:'Siam Square Soi 2'},shopName: 'Forest', shopDescription: 'Jeans with passion'}},
	        {id:'Cowper2',profileImage: 'img/album-bb.jpg',value:{ contactInfo:{shopLocation:'Siam Square Soi 2'},shopName: 'Cowper', shopDescription: 'Jeans with passion'}},
	        {id:'Everett2', profileImage: 'img/album-hc.jpg',value:{ contactInfo:{shopLocation:'Siam Square Soi 2'},shopName: 'Everett',shopDescription: 'Jeans with passion'}},
	        {id:'University2',profileImage: 'img/album-ok.jpg',value:{ contactInfo:{shopLocation:'Siam Square Soi 2'},shopName: 'University',shopDescription: 'Jeans with passion'}},
	        {id:'Forest2',profileImage: 'img/album-p.jpg',value:{ contactInfo:{shopLocation:'Siam Square Soi 2'},shopName: 'Forest', shopDescription: 'Jeans with passion'}},
	        {id:'Cowper3',profileImage: 'img/album-bb.jpg',value:{ contactInfo:{shopLocation:'Siam Square Soi 2'},shopName: 'Cowper', shopDescription: 'Jeans with passion'}},
	        {id:'Everett3', profileImage: 'img/album-hc.jpg',value:{ contactInfo:{shopLocation:'Siam Square Soi 2'},shopName: 'Everett',shopDescription: 'Jeans with passion'}},
	        {id:'University3',profileImage: 'img/album-ok.jpg',value:{ contactInfo:{shopLocation:'Siam Square Soi 2'},shopName: 'University',shopDescription: 'Jeans with passion'}},
	        {id:'Forest3',profileImage: 'img/album-p.jpg',value:{ contactInfo:{shopLocation:'Siam Square Soi 2'},shopName: 'Forest', shopDescription: 'Jeans with passion'}}
	    ],
        // model: 'ShopApp.model.Shop',
        autoLoad: true
    },
    toUrl:function(){
        return 'shop/'+this.get('id');
    }
});