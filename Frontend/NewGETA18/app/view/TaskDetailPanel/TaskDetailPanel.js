
Ext.define('GETA18.view.TaskDetailPanel.TaskDetailPanel',{
    extend: 'Ext.Container',
    xtype : 'TaskDetails',
    requires: [
        'GETA18.view.TaskDetailPanel.TaskDetailPanelController',
        'GETA18.view.TaskDetailPanel.TaskDetailPanelModel'
    ],

    controller: 'taskdetailpanel-taskdetailpanel',
    viewModel: {
        type: 'taskdetailpanel-taskdetailpanel'
    },

    style : 'background : white;',
    layout : {
      type : 'fit'
    },
    items : [{
      xtype : 'toolbar',
      title : 'Details',
      cls : 'task-header',
      docked : 'top',
      items : [{
        xtype : 'button',
        iconCls : 'md-icon-mode-edit',
        style : 'position : absolute',
        right : 0,
        top : 0,
        itemId : 'edit',
        cls : 'edit',
        docked  : 'right'
      }]
    },{
      xtype : 'textfield',
      label : 'Task Name',
      style : 'font-weight : bold;',
      docked: 'top',
      editable : false,
      clearable : false,
      margin: '0 15 0',
      itemId : 'title'
    },{
      xtype : 'datefield',
      label : 'Deadline',
      docked: 'top',
      minDate : new Date(),
      clearable : false,
      margin: '0 15 0',
      itemId : 'taskDeadline',
      name: 'deadline'
    },{
      xtype : 'textareafield',
      label : 'Details',
      style : 'font-weight : bold;',
      editable : false,
      margin: '0 15 0',
      itemId : 'details',
      name: 'details'
    },{
      xtype : 'toolbar',
      docked : 'bottom',
      items : [{
        xtype : 'button',
        text : 'cancel',
        itemId : 'cancel',
        docked : 'right'
      },
      {
        xtype : 'button',
        text : 'save',
        itemId : 'save',
        docked : 'right',
        hidden : true
      }]
    }],
});
