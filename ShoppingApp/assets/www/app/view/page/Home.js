Ext.define('Shop', {
	extend: 'Ext.data.Model',
	fields: ['id', 'key', 'value'],
	proxy: {
		type: 'rest',
		url : 'http://shopping-app.iriscouch.com/shoppingapp/_design/_shoppingapp/_view/all',
		reader: {
			type: 'json',
			root: 'rows'
		}
	}
});

var shopStore = Ext.create('Ext.data.Store', {
	model: 'Shop',
	autoLoad: true
});
Ext.define('ShopApp.view.page.Home', {
	extend: 'Ext.Container',
	xtype: 'homepage',

	config: {
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				title: 'Siam Square Times',
				items: [
					{
						xtype: 'button', 
						docked: 'left',
						action: 'left',
						iconCls: 'following'
					},
					{
						xtype: 'button',
						docked: 'right',
						action: 'right',
						iconCls: 'list'
					}
				],

				// Styling
				ui: 'header'
			},
			{
				xtype: 'dataview',
				store: shopStore,

			    itemTpl: [
			    	'<div style="padding:5px">',
			    	'id : {id}<br/>',
			    	'key : {key}<br/>',
			    	'value : {value}<br/>',
			    	'value.type : {value.type}<br/>',
			    	'value.name : {value.name}<br/>',
			    	'</div>'
			    ].join("")

			}
			// {
			// 	xtype: 'dataview',
			// 	style:'background:#000;color:#fff',
			// 	  store: {
			//         fields: ['name', 'age'],
			//         data: [
			//             {name: 'Jamie',  age: 100},
			//             {name: 'Rob',   age: 21},
			//             {name: 'Tommy', age: 24},
			//             {name: 'Jacky', age: 24},
			//             {name: 'Ed',   age: 26},
			//             {name: 'Jamie',  age: 100},
			//             {name: 'Rob',   age: 21},
			//             {name: 'Tommy', age: 24},
			//             {name: 'Jacky', age: 24},
			//             {name: 'Ed',   age: 26},
			//             {name: 'Jamie',  age: 100},
			//             {name: 'Rob',   age: 21},
			//             {name: 'Tommy', age: 24},
			//             {name: 'Jacky', age: 24},
			//             {name: 'Ed',   age: 26}
			//         ]
			//     },

			//     itemTpl: '<div>{name} is {age} years old</div>'
			// }
		],
		layout: {type: 'card'}
	}
});
