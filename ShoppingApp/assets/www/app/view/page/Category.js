Ext.define('ShopApp.view.page.Category', {
	extend: 'ShopApp.view.Page',
	xtype: 'categorypage',
	config: {
		toolbar:null,
		content:null
	},
	loadDefaultToolbar: function(){
		var toolbar = this.getToolbar();
		if(toolbar){
			this.remove(toolbar);
		}
		toolbar = Ext.create('Ext.Toolbar',{
			xtype: 'toolbar',
			docked: 'top',
			title: 'Siam Square Times',
			items: [
				{
					xtype: 'button',
					docked: 'right',
					iconCls: 'search'
				}
			],
			// Styling
			ui: 'header'
		});
		this.setToolbar(toolbar);
		this.setItems(toolbar);
	},
	loadBackToolbar: function(){
		var toolbar = this.getToolbar();
		if(toolbar){
			this.remove(toolbar);
		}
		toolbar = Ext.create('Ext.Toolbar',{
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
		});
		this.setToolbar(toolbar);
		this.setItems(toolbar);
	},
	loadContent: function(){
		var toolbar = this.getToolbar(),
			content = this.getContent();
		if(content){
			this.remove(content);
		}
		content = Ext.create('Ext.Container',{cls:'category'});
		content.setHtml('<div class="cat-title">Where would you like to go today?</div>');
		content.add({
			xtype: 'fashionmenu'
		});
		content.add({
			xtype: 'foodmenu'
		});
		
		this.setContent(content);
		this.setItems(content);
	}
});

Ext.define('FashionMenu',{
	extend:'Ext.Container',
	xtype:'fashionmenu',
	config:{
		items:[
			{xtype:'label', html: 'Fashion & Accessories', cls: 'fashion-title'},
			{xtype:'catbutton',baseCls:'cat-menu-left cat-menu-top', text:'Women Clothes', action:'womenclothes'},
			{xtype:'catbutton',baseCls:'cat-menu-right cat-menu-top', text:'Men Clothes', action:'menclothes'},
			{xtype:'catbutton',baseCls:'cat-menu-left', text:'Female Shoes', action:'femaleshoes'},
			{xtype:'catbutton',baseCls:'cat-menu-right', text:'Men Shoes', action:'menshoes'},
			{xtype:'catbutton',baseCls:'cat-menu-left', text:'Female Accessories', action:'womenaccess'},
			{xtype:'catbutton',baseCls:'cat-menu-right', text:'Men Accessories', action:'menaccess'},
		]
	}
});
Ext.define('FoodMenu',{
	extend:'Ext.Container',
	xtype:'foodmenu',
	config:{
		items:[
			{xtype:'label', html: 'Eat & Drink', cls: 'food-title'},
			{xtype:'catbutton',baseCls:'cat-menu-left cat-menu-top', text:'Thai Food', action:'thaifood'},
			{xtype:'catbutton',baseCls:'cat-menu-right cat-menu-top', text:'Japanese & Asian', action:'japfood'},
			{xtype:'catbutton',baseCls:'cat-menu-left', text:'Western Food', action:'westernfood'},
			{xtype:'catbutton',baseCls:'cat-menu-right', text:'Fast Food', action:'fastfood'},
			{xtype:'catbutton',baseCls:'cat-menu-left', text:'Cafe & Dessert', action:'cafe'},
			{xtype:'catbutton',baseCls:'cat-menu-right', text:'Bar & Hang', action:'bar'},
		]
	}
});
Ext.define('CatButton',{
	extend:'Ext.Button',
	xtype:'catbutton',
	config:{
		iconCls:'arrow'
	}
})