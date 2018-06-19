
Ext.define('GETA18.view.NotificationPanel.NotificationPanel',{
    extend: 'Ext.panel.Panel',

    requires: [
        'GETA18.view.NotificationPanel.NotificationPanelController',
        'GETA18.view.NotificationPanel.NotificationPanelModel'
    ],

    controller: 'notificationpanel-notificationpanel',
    viewModel: {
        type: 'notificationpanel-notificationpanel'
    },

    style : 'background-color : #fafafa; padding : 10px ;',
    layout : {
      type : 'hbox',
      align : 'middle',
    },
    items : [{
      xtype : 'image',
      itemId : 'notificationImage',
      width : 50,
      height : 50,
      style : 'border-radius :50% ',
      ui : 'round'
    },{
      xtype : 'container',
      padding : '5 0 5 20',
      layout : {
        type : 'vbox',
        pack : 'center'
      },
      items : [
        {
          xtype : 'container',
          html : 'New mail from',
          flex : 1,
          style : 'font-size : 15px'
        },{
          xtype : 'container',
          itemId : 'notification',
          flex : 1,
          style : 'font-size : 15px'
        }
      ]
    }],

    initialize : function (args){
      this.callParent(args);
      var me = this;
      this.element.on({
        tap : function(){
          me.hide();
          var inboxAndSentTab = UtilityFunction.showMailBox();
          inboxAndSentTab.showBy(Ext.Viewport, "c-c");
        }
      });
    }
});
