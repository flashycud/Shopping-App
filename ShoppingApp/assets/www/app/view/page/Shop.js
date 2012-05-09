Ext.define('ShopApp.view.page.Shop', {
	extend: 'ShopApp.view.Page',
	xtype:'shoppage',
	config:{
		record:null,
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
					text: 'FOLLOW'
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
					text: 'FOLLOW',
					cls:'text-button'
				}
			],
			// Styling
			ui: 'header'
		});
		this.setToolbar(toolbar);
		this.setItems(toolbar);
	},

	updateRecord: function(newRecord){
		var toolbar = this.getToolbar(),
			content = this.getContent(),
			profile,menu,story,fbnews,

			value=newRecord.get('value'),
			name=value.shopName,
			location=value.contactInfo.shopLocation,
			tels=value.contactInfo,
			profileImage=newRecord.get('profileImage');

		console.log(newRecord);
		this.setMasked({xtype:'loadmask'});
		if(content){
			this.remove(content);
		}
		if(toolbar){
			toolbar.setTitle(name);
		}
		content = Ext.create('Ext.Container',{cls:'shop-profile'});
		content.setScrollable({
            directionLock: true,
            direction: 'vertical'
        });
        content.setItems({
        	xtype:'container',
        	cls:'profile'
        });
        profile=content.child('container');
        console.log(profile);
        profile.setHtml([
		// content.setHtml([
				// '<div class="profile">',
					'<div class="profile-image" style="background-image:url('+profileImage+')"></div>',
					'<div class="profile-holder">',
						'<div class="shop-name">'+name+'</div>',
						'<div class="profile-detail">',
							'<div class="shop-location">'+location+'</div>',
							'<div class="shop-tel">02-658-4416</div>',
							'<div class="shop-time">Open : Daily 11am-9pm, Sat-Sun 11am-10pm</div>',
							'<div class="shop-website">http://www.issue.co.th</div>',
						'</div>',
					'</div>',
				// '</div>'
			].join("\n"));
		profile.add({
			xtype:'tabbar',
        	baseCls:'shop-menu-holder',
		});
		menu=profile.child('tabbar');
		menu.add([
			{xtype:'button',baseCls:'shop-menu',iconCls:'shop-mask', text:'products', action:'products',record:newRecord},
			{xtype:'button',baseCls:'shop-menu',iconCls:'marker-mask', text:'map', action:'map',record:newRecord},
			{xtype:'button',baseCls:'shop-menu',iconCls:'tags-mask', text:'promos', action:'promos',record:newRecord},
			{xtype:'button',baseCls:'shop-menu',iconCls:'phone-mask', text:'contact', action:'contact',record:newRecord}
		]);
		this.setContent(content);
		this.setItems(content);
		// var temp = content.child('.profile');
		// console.log(temp);
		profile.add({
			xtype: 'shopstory'
		});
		story=profile.child('shopstory');
		story.setHtml(newRecord.get('story'));

		profile.add({
			xtype: 'shopnews'
		})
		fbnews=profile.child('shopnews');
		fbnews.loadRecentContent();

		this.unmask();
	}
});
Ext.define('ShopStory',{
	extend: 'Ext.Container',
	xtype:'shopstory',
	config: {
		cls:'shop-story',
	}
});
Ext.define('ShopNews',{
	extend: 'Ext.Container',
	xtype:'shopnews',
	config: {
		cls:'shop-news',
		items:[
			{
				xtype:'title',
				title: 'What&apos;s New?',
				baseCls: 'shop-news-title'
			},
			{
				xtype:'shopfbnews'
			}
		]
	},
	loadRecentContent:function(num){
		this.child('shopfbnews').loadRecentContent();
	}
});
Ext.define('ShopFbNews',{
	extend: 'Ext.Container',
	xtype:'shopfbnews',
	config:{
		cls:'shop-fb-news'
	},
	loadRecentContent:function(num){
		var me = this;
		me.setMasked({xtype:'loadmask', message:'loading...',indicator:false});
		me.setHeight(100);
		Ext.util.JSONP.request({
		    url: 'https://graph.facebook.com/chocolateville/posts/',
		    callbackKey: 'callback',
		    params:{
		    	access_token:token
		    },

		    // Callback
		    callback: function (success,data) {
		    	var html = '', time
			    	created_time = new Date(data.data[0].created_time),
			    	current_time = new Date();
		    	time = current_time.getDate() - created_time.getDate();
		    	html+='<div class="shop-news-head">';
		    	html+=	'<div class="time">'+time+'d ago </div><div class="icon"></div>';
		    	html+='</div>';
		    	if(data.data[0].picture){
		    		html+='<div class="shop-news-image" style="background-image:url('+data.data[0].picture.replace('_s.','_n.')+')"></div>';
		    	}
		    	html+='<div class="shop-news-content">';
		    	html+=	data.data[0].message;
		    	html+='</div>';
		        me.setHtml(html);
			    me.unmask();
			    me.setHeight('auto');
		    }
		});
	}
});