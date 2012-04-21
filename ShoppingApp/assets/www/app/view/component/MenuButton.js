Ext.define('ShopApp.view.component.MenuButton',{
	extend : 'Ext.Button',
	xtype : 'menubutton',
	cachedConfig: {
			pressedCls: 'menu-button-pressing',
			badgeCls: 'menu-badge',
			hasBadgeCls: 'menu-hasbadge',
			labelCls: 'menu-button-label',
			iconMaskCls: 'menu-icon-mask'
	},
	template: [
			{
				tag: 'span',
				reference: 'badgeElement',
				hidden: true
			},
			{
				tag: 'span',
				className: 'menu-button-icon',
				reference: 'iconElement',
				hidden: true
			},
			{
				tag: 'span',
				reference: 'textElement',
				hidden: true
			}
	],
	config : {
		baseCls: 'menu-button',
		iconMask: true,
		height:'50%',
		width:'33.333333333333%',

		view : null
	},
	onTap: function(e) {
        if (this.getDisabled()) {
            return false;
        }
        this.fireAction('tap', [this, e], 'doTap');
    },
});
