
Ext.define('GETA18.view.Main.Main',{
    extend: 'Ext.Container',

    requires: [
        'GETA18.view.Main.MainController',
        'GETA18.view.Main.MainModel'
    ],

    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },
    layout : {
        type : 'vbox'
      },
    items : [{
        xtype : 'toolbar',
        title : 'GET ADVANCE 2018',
        itemId : 'header',
        layout :{
          type : 'fit'
        },
        cls : 'header',
        items : [{
          xtype : 'button',
          style : 'position : absolute ;',
          top : 5,
          left : 5,
          iconCls : 'md-icon-menu',
          plugins : 'responsive',
          cls : 'titlebarIcon',
          itemId : 'menuButton',
          docked : 'left',
          responsiveConfig : {
            'width >= 415':{
              listeners : {
                tap : 'collapseMenu'
              }
            },
            'width < 415' : {
              listeners : {
                tap : 'mobileViewMenuTap'
              }
            },
          }
        },{
          xtype : 'container',
          docked : 'right',
          style : 'position : absolute;',
          top : 5,
          right : 5,
          layout : {
            type : 'hbox',
            align : 'middle'
          },
          items : [{
             xtype: 'button',
             iconCls: 'md-icon-email',
             ui: 'round',
             floating: true,
             itemId : 'emailButton',
             cls: 'add-task',
           },
           {
              xtype: 'button',
              iconCls: 'md-icon-playlist-add',
              ui: 'round',
              floating: true,
              itemId : 'taskMenuButton',
              cls: 'add-task',
            }
            ,{
            xtype : 'image',
            cls : 'titlebar-image',
            itemId : 'profileSettingView',
            width : 35,
            height : 35
          }]

        }]
      },{
        xtype : 'container',
        itemId : 'mainBody',
        cls : 'main-body',
        flex : 1,
        layout : {
          type : 'hbox'
        },
        items : [{

            xtype : 'leftPanel',
            docked : 'left',
            plugins : 'responsive',
            responsiveConfig: {
               'width < 800 && width >= 415': {
                   width : 280,
                   height : '100%',
                   scrollable: true,
                   modal : false,
                   hideOnMaskTap : false,
                   fullScreen : true,
                   style : 'position : absolute;  z-index : 200; box-shadow: 5px 5px 5px #ccc;',

               },
               'width >= 800': {
                   width : 280,
                   modal : false,
                   hideOnMaskTap : false,
                   style : 'position : relative;box-shadow: none; z-index : 0;'
               },
               'width < 415': {
                   width : '100%',
                }

           },
            width : 280,
            itemId : 'leftPanel',
            cls : 'anime',

          }
          ,{
            xtype : 'rightPanel',
            flex : 1,
            itemId : 'rightPanel',
            cls : 'right-panel',
            style : 'position : relative;'

        }
      ]
    }]
});
