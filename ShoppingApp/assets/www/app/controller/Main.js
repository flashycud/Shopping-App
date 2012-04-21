Ext.define('ShopApp.controller.Main',{
	extend : 'Ext.app.Controller',
	config : {
		viewCache : [],
		backCache : [''],

		refs : {
			main : 'mainview',
			menu : 'menubutton'
		},

		control : {
			main : {
				back : 'onBack'
			},
			menu : {
				tap : 'onMenuTap'
			}
		},

		routes : {
			'' : 'loadMainView',
			':view' : 'showView'
		}

	},
	onBack : function(){
		// var backCache = this.getBackCache();
		// if(backCache.length > 1){
		// 	backCache.pop();

		// 	this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
	 //            url: backCache[backCache.length-1]
	 //        }), true);
	 //    }
	 	
		this.getMain().setNavigationBar(false);
	 	window.history.back();
	},
	onMenuTap : function(button, e){
		if(button && button.getView()){
			this.redirectTo(button.getView());
		}
	},

	loadMainView : function(){
		var main = this.getMain(),
			ln = main.getInnerItems().length;
		main.setNavigationBar(false);
		if(ln > 1){
			main.pop(ln-1);
			this.setBackCache(['']);
		}
	},
	showView : function(view){
		var main = this.getMain(),
			view = this.createView(this.getViewName(view)),
			backCache = this.getBackCache();
		
		if(view){
			backCache.push(view);
			main.setNavigationBar({hidden:false});
			main.push(view);
		}

	},
	createView : function(viewname){
		// var cache = this.getViewCache(),
  //           ln = cache.length,
  //           limit = 20,
  //           view, i, oldView;

  //       Ext.each(cache, function(item) {
  //           if (item.viewName === viewname) {
  //               view = item;
  //               return;
  //           }
  //       }, this);

  //       if (view) {
  //           return view;
  //       }

  //       if (ln >= limit) {
  //           for (i = 0; i < ln; i++) {
  //               oldView = cache[i];
  //               if (!oldView.isPainted()) {
  //                   oldView.destroy();
  //                   cache.splice(i, 1);
  //                   break;
  //               }
  //           }
  //       }

        view = Ext.create(viewname);
        // console.log(view);
        // view.viewName = viewname;
        // cache.push(view);
        // this.setViewCache(cache);

        return view;
	},
	getViewName: function(item) {
        return 'ShopApp.view.'+item;
    }

});