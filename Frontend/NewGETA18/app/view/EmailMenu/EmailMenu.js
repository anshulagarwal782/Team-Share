
Ext.define('GETA18.view.EmailMenu.EmailMenu',{
    extend: 'Ext.panel.Panel',

    requires: [
        'GETA18.view.EmailMenu.EmailMenuController',
        'GETA18.view.EmailMenu.EmailMenuModel'
    ],

    controller: 'emailmenu-emailmenu',
    viewModel: {
        type: 'emailmenu-emailmenu'
    },
    layout : {
      type : 'fit'
    },
    items : [{
      xtype : 'button',
      width : '100%',
      iconCls : 'md-icon-add',
      text : 'Compose Mail',
      textAlign : 'left',
      docked : 'top',
      itemId : 'composeMail',
    },
    {
      xtype : 'button',
      width : '100%',
      text : 'Inbox',
      docked :'top',
      iconCls : 'x-fa fa-envelope-open',
      textAlign : 'left',
      itemId : 'inboxView',
    },{
      xtype : 'button',
      width : '100%',
      text : 'Sent Mail',
      iconCls : 'md-icon-send',
      textAlign : 'left',
      itemId : 'sentMailView',
    }]
});
