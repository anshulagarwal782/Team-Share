
Ext.define('GETA18.view.LeftPanel.LeftPanel',{
    extend: 'Ext.panel.Panel',
    xtype :'leftPanel',
    requires: [
        'GETA18.view.LeftPanel.LeftPanelController',
        'GETA18.view.LeftPanel.LeftPanelModel',
        'Ext.dataview.listswiper.ListSwiper'
    ],

    controller: 'leftpanel-leftpanel',
    viewModel: {
        type: 'leftpanel-leftpanel'
    },

    layout : {
      type : 'fit'
    },
    items : [{
      xtype: 'searchfield',
      itemId : 'searchField',
      placeholder: 'Search',
      cls : 'searchField',
      docked : 'top'
    },{
      xtype : 'list',
      itemId : 'contactList',
      emptyText : 'No Contacts',
      cls : 'contact-list',
      overflowY : 'auto',
      plugins : 'responsive',
      minWidth : 280,
      responsiveConfig : {
         'width < 800' : {
           plugins: {
             pullrefresh: {
                 itemId : 'pullRefresh',
                 mergeData : true
             },
             listswiper: {
              defaults : {
                ui : 'action'
              },
               right: [{
                   iconCls: 'md-icon-email',
                   text: 'Mail',
                   ui: 'action',
                   commit: 'onRightSwipe'
               }]
           }
         },
         listeners : {
           childtap : 'mobileViewItemTap'
         }

         },
         'width >= 800' : {
           plugins : {
             }
          },

       },

      itemTpl : new Ext.XTemplate(
        '<div style="display:flex;">',
        '<div class="container">',
          '<div id="card">',
            '<tpl if="isShow()">',
              '<img class="front" src="{personalDetails.image}" style = "border-radius : 50%; width : 35px;">',
            '<tpl else>',
              '<img class="front" src="https://goo.gl/2Ct8aB" style = "border-radius : 50%; width : 35px;">',
            '</tpl>',
            '<tpl if="personalDetails.isOnline">',
              '<span class="dot"></span>',
            '</tpl>',
            '<img class="back" src="https://goo.gl/JLRKYy" style = "border-radius : 50%; width : 37px;">',
            '</div>',
          '</div>',
          '<div style="padding : 0 10px;flex:1">',
              '<div style="font-size : 14px ">',
                '{personalDetails.name}',
              '</div>',
              '<div style="font-size : 12px ; color : #a1a1a1">',
                '{personalDetails.designation}',
              '</div>',
          '</div>',
        '<div>'
      ),
      itemSelector : "card"
    },{
      xtype : 'toolbar',
      itemId : 'footer',
      cls : 'footer',
      docked : 'bottom',
      items : [{
        xtype : 'container',
        width : '100%',
        layout :  {
          type : 'hbox',
          align : 'middle'
        },
        itemId : 'toolbarLeft',
        cls : 'toolbar-left',
        items : [{
          xtype : 'label',
          itemId : 'counter',
          cls : 'counter'
        },{
          xtype : 'container',
          hidden : true,
          itemId : 'deleteAndEmail',
          docked : 'right',

          items : [
          //   {
          //   xtype : 'button',
          //   iconCls : 'md-icon-delete',
          //   itemId : 'deleteContact',
          //   cls : 'toolbar-left-button'
          // },
          {
            xtype : 'button',
            iconCls : 'md-icon-email',
            itemId : 'email',
            cls : 'toolbar-left-button'
          }]
        }]
      }]
    }]
});
