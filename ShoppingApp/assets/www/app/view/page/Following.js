Ext.define('ShopApp.view.page.Following',{
	extend: 'Ext.Container',
	xtype: 'followingpage',

	config: {
		items: [
			{
				xtype: 'list',
				fullscreen: true,
			
				store: {
					fields: ['name'],
					data: [
						{name: 'Cowper'},
						{name: 'Everett'},
						{name: 'University'},
						{name: 'Forest'}
					]
				},
			
				itemTpl: '{name}',
			
				listeners: {
					select: function(view, record) {
						Ext.Msg.alert('Selected!', 'You selected ' + record.get('name'));
					}
				}
			}
		],
		layout:{type:'card'}
	},
	setDefaultToolbar: function(){
		this.setItems({
			xtype: 'toolbar',
			docked: 'top',
			title: 'Siam Square Times',
			items: [
				{
					xtype: 'button',
					docked: 'left',
					iconCls: 'following'
				},
				{
					xtype: 'button',
					docked: 'right',
					iconCls: 'list'
				}
			],
			// Styling
			ui: 'header'
		});
	},
	setBackToolbar: function(){
		this.setItems({
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
					iconCls: 'list'
				}
			],
			// Styling
			ui: 'header'
		});
	}
});
