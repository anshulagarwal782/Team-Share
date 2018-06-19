
Ext.define('GETA18.view.UserDetailsPanel.UserDetailsPanel',{
    extend: 'Ext.panel.Panel',
    xtype : 'userDetailsPanel',
    requires: [
        'GETA18.view.UserDetailsPanel.UserDetailsPanelController',
        'GETA18.view.UserDetailsPanel.UserDetailsPanelModel'
    ],

    controller: 'userdetailspanel-userdetailspanel',
    viewModel: {
        type: 'userdetailspanel-userdetailspanel'
    },
    xtype: 'panel',
    title : 'Details',
    margin: '10 20',

    layout: {
        type: 'vbox',
    },

  cls : 'userDetailView',
  items: [{
      xtype: 'container',
      cls: 'border',
      flex: 1,
      layout: {
          type: 'hbox',
          align: 'middle'
      },
      items: [{
              xtype: 'button',
              iconCls: 'md-icon-email',
              tooltip: {
                  html: 'Email',
                  anchor : true
              },
              cls: 'icons'
          },

          {
              xtype: 'fieldset',
              itemId: 'emailId',
              cls: 'email-id size'
          }
      ]
  }, {
      xtype: 'container',
      cls: 'border',
      flex: 1,
      layout: {
          type: 'hbox',
          align: 'middle'
      },
      items: [{
          xtype: 'button',
          iconCls: 'x-fa fa-address-book',
          tooltip: {
              html: 'Address',
              anchor : true
          },
          cls: 'icons'
      }, {
          xtype: 'fieldset',
          itemId: 'address',
          cls: 'address size'
      }]
  }, {
      xtype: 'container',
      cls: 'border',
      flex: 1,
      layout: {
          type: 'hbox',
          align: 'middle'
      },
      items: [{
          xtype: 'button',
          iconCls: 'md-icon-perm-identity',
          tooltip: {
              html: 'Employee ID',
              anchor : true
          },
          cls: 'icons'
      }, {
          xtype: 'fieldset',
          itemId: 'empId',
          cls: 'employee-id size'
      }]
  }, {
      xtype: 'container',
      cls: 'border',
      flex: 1,
      layout: {
          type: 'hbox',
          align: 'middle'
      },
      items: [{
          xtype: 'button',
          iconCls: 'x-fa fa-info',
          tooltip: {
              html: 'Interest',
              anchor : true
          },
          cls: 'icons'
      }, {
          xtype: 'fieldset',
          itemId: 'interest',
          cls: 'interest size'
      }]
  }, {
      xtype: 'container',
      cls: 'border',
      flex: 1,
      layout: {
          type: 'hbox',
          align: 'middle'
      },
      items: [{
          xtype: 'button',
          iconCls: 'x-fa fa-edit',
          enableToggle: false,
          tooltip: {
              html: 'Remarks',
              anchor : true
          },
          cls: 'icons'
      }, {
          xtype: 'fieldset',
          itemId: 'remarks',
          cls: 'remarks size'
      }]
  }]
});
