Ext.define('ShopApp.controller.Category',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			catbutton: 'catbutton'
		},
		control:{
			catbutton:{
				tap:'onCatButtonTap'
			}
		}
	},
	onCatButtonTap:function(button, e){
		this.redirectTo('cat/'+button.action);
	}
})