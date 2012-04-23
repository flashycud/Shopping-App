Ext.define('ShopApp.controller.HomeControl',{
	extend: 'Ext.app.Controller',

	config: {
		
		refs: {
			main: 'mainview',
			tab: 'maintab',

			home: 'homepage',
			leftNav: 'homepage button[action=left]',
			rightNav: 'homepage button[action=right]',
		},

		control: {
			leftNav: {
				tap: 'onLeftTap'
			},
			rightNav: {
				tap: 'onRightTap'
			}
		},

		routes : {
			'test':'test'
		}
	},
	
	onLeftTap: function(e){
		alert('left');
		this.redirectTo('test');
		document.addEventListener("backbutton", function(){alert(1)}, false);
		// document.addEventListener("backbutton", temp, false);
	},
	test:function(){
	},
	onRightTap: function(e){
		alert('right');
	}
});