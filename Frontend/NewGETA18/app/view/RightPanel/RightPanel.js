
Ext.define('GETA18.view.RightPanel.RightPanel',{
    extend: 'Ext.Container',
    xtype : 'rightPanel',
    requires: [
        'GETA18.view.RightPanel.RightPanelController',
        'GETA18.view.RightPanel.RightPanelModel'
    ],

    controller: 'rightpanel-rightpanel',
    viewModel: {
        type: 'rightpanel-rightpanel'
    },

    style: 'background-color:#fafafa;',

    layout: {
        type: 'vbox'
    },

    items: [
      {
        xtype: 'container',
        
        docked : 'top',
        layout: {
            type: 'vbox',
        },
        items : [{
        xtype: 'userDetailsHeader',
        data : null,
        height: 150,
        cls: 'user-details-header',
        itemId: 'userDetailsHeader',
        plugins : 'responsive',
        style: 'position : relative;',
        flex : 1,

        responsiveConfig : {
          'width < 415' : {
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'middle'
            },

          },
          'width >= 415' :{
            margin: '10 20',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
          }
        }
      }]
  }, {
        xtype: 'container',
        flex: 1,
        plugins : 'responsive',
        layout: {
            type: 'hbox',
        },
        responsiveConfig : {
          'width < 800' : {
            layout : {
              type : 'vbox'
            },
            scrollable : true,
          },
          'width >= 800' : {
            layout : {
              type : 'hbox'
            }
          },

        },
        items: [{
            xtype: 'userDetailsPanel',
            itemId: 'userDetailView',
            plugins : 'responsive',
            cls : 'user-details-panel',
            responsiveConfig : {
              'width < 415' : {
                height : 500,
                margin : 0
              },
              'width >= 415' : {
                flex : 1
              }
            }
        }, {
            xtype : 'tasks',
            itemId : 'taskView',
            margin : '10 20',
            plugins : 'responsive',
            emptyText : 'No Task',
            cls: 'grid',
            responsiveConfig : {
              'width < 415' : {
                height : 500,
                margin : '10 0'
              },
              'width >= 415' : {
                flex : 1
              }
            }
        }]
    }]


});
