Ext.define('ShopApp.controller.MainControl',{
	extend: 'Ext.app.Controller',

	config: {
		viewCache:[],
		cacheLimit: 20,
		
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
			right: 'toolbar button[docked=right]'
		},

		control: {
			mainTab: {
				// activeitemchange: 'initTab'
			},
			left: {
				tap: 'onLeftTap'
			},
			right: {
				tap: 'onRightTap'
			}
		},

		routes : {
			'': 'onInit',
			'home': 'onInit',
			'following': 'pushFollowing'
		}
	},
	launch: function(){
		var tab;

		tab = Ext.create('ShopApp.view.page.Home');
		this.getTab1().add(tab);
		tab = Ext.create('ShopApp.view.page.Map');
		this.getTab2().add(tab);
		tab = Ext.create('ShopApp.view.page.Following');
		tab.setDefaultToolbar();
		this.getTab3().add(tab);
		tab = Ext.create('ShopApp.view.page.Shops');
		this.getTab4().add(tab);
		global=this;
	},

	onInit: function(){
		var main = this.getMain(),
			mainTab = this.getMainTab();
		if(Ext.os.is.Android){
			main.setActiveItem(mainTab);
			return;
		}
		var layout = main.getLayout(),
			anim = layout.getAnimation();
		anim.setReverse(true);
		main.setActiveItem(mainTab);
		anim.setReverse(false);
	},
	
	onLeftTap: function(button,e){
		console.log(button.getIconCls());
		switch(button.getIconCls()){
			case 'back': this.back();break;
			case 'following' : this.redirectTo('following');break;
		}
	},
	onRightTap: function(button,e){
		alert('right');
		// this.redirectTo('shops');
	},

	pushFollowing: function(){
		var view = this.createView('ShopApp.view.page.Following'),
			main = this.getMain();
		main.push(view);
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
		view.setBackToolbar();
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