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
						iconCls: 'fav'
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
				style:'background:#000;color:#fff',
				  store: {
			        fields: ['name', 'age'],
			        data: [
			            {name: 'Jamie',  age: 100},
			            {name: 'Rob',   age: 21},
			            {name: 'Tommy', age: 24},
			            {name: 'Jacky', age: 24},
			            {name: 'Jamie',  age: 100},
			            {name: 'Rob',   age: 21},
			            {name: 'Tommy', age: 24},
			            {name: 'Jacky', age: 24},
			            {name: 'Jamie',  age: 100},
			            {name: 'Rob',   age: 21},
			            {name: 'Tommy', age: 24},
			            {name: 'Jacky', age: 24},
			            {name: 'Jamie',  age: 100},
			            {name: 'Rob',   age: 21},
			            {name: 'Tommy', age: 24},
			            {name: 'Jacky', age: 24},
			            {name: 'Jamie',  age: 100},
			            {name: 'Rob',   age: 21},
			            {name: 'Tommy', age: 24},
			            {name: 'Jacky', age: 24},
			            {name: 'Jamie',  age: 100},
			            {name: 'Rob',   age: 21},
			            {name: 'Tommy', age: 24},
			            {name: 'Jacky', age: 24},
			            {name: 'Jamie',  age: 100},
			            {name: 'Rob',   age: 21},
			            {name: 'Tommy', age: 24},
			            {name: 'Jacky', age: 24},
			            {name: 'Jamie',  age: 100},
			            {name: 'Rob',   age: 21},
			            {name: 'Tommy', age: 24},
			            {name: 'Jacky', age: 24},
			            {name: 'Jamie',  age: 100},
			            {name: 'Rob',   age: 21},
			            {name: 'Tommy', age: 24},
			            {name: 'Jacky', age: 24},
			            {name: 'Jamie',  age: 100},
			            {name: 'Rob',   age: 21},
			            {name: 'Tommy', age: 24},
			            {name: 'Jacky', age: 24},
			            {name: 'Jamie',  age: 100},
			            {name: 'Rob',   age: 21},
			            {name: 'Tommy', age: 24},
			            {name: 'Jacky', age: 24},
			            {name: 'Jamie',  age: 100},
			            {name: 'Rob',   age: 21},
			            {name: 'Tommy', age: 24},
			            {name: 'Jacky', age: 24},
			            {name: 'Ed',   age: 26}
			        ]
			    },

			    itemTpl: '<div>{name} is {age} years old</div>'
			}
		],
		layout: {type: 'card'}
	}
});
