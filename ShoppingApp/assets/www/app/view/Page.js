Ext.define('ShopApp.view.Page',{
	extend: 'Ext.Container',
	config:{
		layout:{type: 'card'}
	},
	initDefault: function(){
		this.loadDefaultToolbar();
		this.loadContent();
	},
	init: function(){
		this.loadBackToolbar();
		this.loadContent();	
	},
	// Override these
	loadDefaultToolbar: function(){
		
	},
	loadBackToolbar: function(){

	},
	loadContent: function(){
		
	}
});