Ext.define('ShopApp.controller.MainControl',{
	extend: 'Ext.app.Controller',

	config: {
		viewCache:[],
		cacheLimit: 5,
		activePage: null,

		// tried optimization 
		cacheTab1:null,
		cacheTab2:null,
		cacheTab3:null,
		cacheTab4:null,
		
		refs: {
			main: 'mainview',
			mainTab: 'maintab',

			tab1: '#tab1',
			tab2: '#tab2',
			tab3: '#tab3',
			tab4: '#tab4',

			home: 'homepage',
			following: 'followingpage',
			left: 'toolbar button[docked=left]',
			right: 'toolbar button[docked=right]',

			//shop
			productsBtn: 'shoppage button[action=products]',
			mapBtn: 'shoppage button[action=map]',
			promosBtn: 'shoppage button[action=promos]',
			contactBtn: 'shoppage button[action=contact]'
		},

		control: {
			mainTab: {
				activeitemchange: 'tabChange'
			},
			left: {
				tap: 'onLeftTap'
			},
			right: {
				tap: 'onRightTap'
			},

			shopsdataview: {
				itemtap: 'onShopTap'
			},

			productsBtn: {
				tap: 'onProductsBtnTap'
			},
			mapBtn: {
				tap: 'onMapBtnTap'
			},
			promosBtn: {
				tap: 'onPromosBtnTap'
			},
			contactBtn: {
				tap: 'onContactBtnTap'
			},
		},

		routes : {
			'': 'onInit',
			'home': 'onInit',
			'following': 'pushFollowing',

			'shop/:id': 'pushShop',
			'cat/:cat':'pushShopsByCat'
		}
	},
	launch: function(){
		var tab;

		tab = Ext.create('ShopApp.view.page.Category');
		tab.initDefault();
		this.setCacheTab1(tab);
		this.getTab1().add(tab);
		// tab = Ext.create('ShopApp.view.page.Map');
		// this.getTab2().add(tab);
		// tab = Ext.create('ShopApp.view.page.Following');
		// tab.initDefault();
		// this.getTab3().add(tab);
		// tab = Ext.create('ShopApp.view.page.Shops');
		// tab.initDefault();
		// this.getTab4().add(tab);
		global=this;
	},

	onInit: function(){
		var main = this.getMain(),
			mainTab = this.getMainTab();
		main.setActiveItem(mainTab);
	},
	tabChange: function(container, newTab, oldTab){
		var page;
		switch(newTab.getId()){
			case 'tab1':{
				// if(!this.getCacheTab1()){
					page = Ext.create('ShopApp.view.page.Home');
				// 	this.setCacheTab1(page);
				// }else{
				// 	page = this.getCacheTab1();
				// }
				break;
			}
			case 'tab2':{
				// if(!this.getCacheTab2()){
					page = Ext.create('ShopApp.view.page.Map');
				// 	this.setCacheTab2(page);
				// }else{
				// 	page = this.getCacheTab2();
				// }
				break;
			}
			case 'tab3':{
				// if(!this.getCacheTab3()){
					page = Ext.create('ShopApp.view.page.Following');
					page.initDefault();
				// 	this.setCacheTab3(page)
				// }else{
				// 	page = this.getCacheTab3();
				// }
				break;
			}
			case 'tab4':{
				// if(!this.getCacheTab4()){
					page = Ext.create('ShopApp.view.page.Category');
					page.initDefault();
				// 	this.setCacheTab4(page);
				// }else{
				// 	page = this.getCacheTab4();
				// }
				break;
			}
		}	
		oldTab.remove(oldTab.getActiveItem(),true);
		newTab.add(page);
			
	},
	
	onLeftTap: function(button,e){
		// console.log(button.getIconCls());
		switch(button.getIconCls()){
			case 'back': {
				var main = this.getMain();
				if(!Ext.os.is.Android){
					var layout = main.getLayout(),
						anim = layout.getAnimation();
					anim.setReverse(true);
					anim.on('animationend',function(){
						anim.setReverse(false);
					},this,{single: true});
				}
				this.back();
				main.remove(this.getActivePage(),false);
				
				break;
			}
			case 'following' : {
				this.redirectTo('following');break;
			}
		}
	},
	onRightTap: function(button,e){
		// alert('right');
		// this.redirectTo('shops');
	},
	onShopTap: function(view, i, item, record, e){
		this.redirectTo('shop/'+record.get('id'));
		// this.redirectTo(record);
	},
	onProductsBtnTap: function(button, e){
		console.log(button.action);		
	},
	onMapBtnTap: function(button, e){
		console.log(button.action);
	},
	onPromosBtnTap: function(button, e){
		console.log(button.action);
	},
	onContactBtnTap: function(button, e){
		console.log(button.action);
	},

	pushFollowing: function(){
		var view = this.createView('ShopApp.view.page.Following'),
			main = this.getMain();
		main.push(view);
		this.setActivePage(view);
	},
	pushShop: function(id){
		var view = this.createView('ShopApp.view.page.Shop'),
			main = this.getMain(),
			mainTab = this.getMainTab(),
			store = Ext.getStore('Shops'),
			records,record;

		records = Ext.Array.filter(store.data.all, function(record) {
            if (record.get('id') == id) {
                return record;
            }
        }, this);

        record=records[0];
		
		if(record){
			main.push(view);
			view.setRecord(record);
			this.setActivePage(view);
		}else{
			alert('Cannot load the shop', null, null);
			this.redirectTo('');
		}
	},
	pushShopsByCat:function(cat){
		var view = this.createView('ShopApp.view.page.Shops'),
			main = this.getMain();
		main.push(view);
		this.setActivePage(view);
	},

	// PRIVATE 
	createView: function(viewname){
		var cache = this.getViewCache(),
			ln = cache.length,
			limit = this.getCacheLimit(),
			view, i, oldView;

		Ext.each(cache, function(item) {
			if (item.viewName === viewname) {
				view = item;
				return;
			}
		}, this);

		if (view) {
			return view;
		}

		if (ln >= limit) {
			for (i = 0; i < ln; i++) {
				oldView = cache[i];
				if (!oldView.isPainted()) {
					oldView.destroy();
					cache.splice(i, 1);
					break;
				}
			}
		}

		view = Ext.create(viewname);
		view.init();
		view.viewName = viewname;
		cache.push(view);
		this.setViewCache(cache);

		return view;
	},
	back: function(count){
		count = count || 1;
		history.go(-count);
	}
});