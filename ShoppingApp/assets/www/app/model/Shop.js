Ext.define('ShopApp.model.Shop', {
	extend: 'Ext.data.Model',
	fields: [
		'id', 
		'key', 
		'value',
		{
			name: 'profileImage',
			convert: function(value, record){
				var data = record.get('value'),
					images = data.images;
				if(images){
					ln = images.length
					for(var i=0;i<ln;i++){
						if(images[i].isProfile = 'Y'){
							return images[i].dataUrl;
						}
					}
				}
				return "";
			}
		}
	],
	proxy: {
		type: 'rest',
		// url : 'https://oultstopsedlyingeryingun:a6BQcAgW134tYApskqYq5FaG@shopping.cloudant.com/shoppingapp/_design/shopping_app/_view/all',
		url : 'https://shopping.cloudant.com/shoppingapp/_design/shopping_app/_view/all',
		// url : 'http://shopping-app.iriscouch.com/shoppingapp/_design/shopping_app/_view/all',
		// limitParam: false,
		// extraParams:{limit:1},
		reader: {
			type: 'json',
			root: 'rows'
		},
		headers : {
        	'Authorization': 'Basic dGFoaXJpdW1ibGVudGFuaW5nc3RyYXN1OnUxUTFrRTFUZDJMcTdBaWtYMWNDUjR3ZQ=='
        }
	},

	toUrl: function(){
		return 'shop/'+this.get('id');
	}
});

