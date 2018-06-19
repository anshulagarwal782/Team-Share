
Ext.define('GETA18.view.TaskMenu.TaskMenu',{
    extend: 'Ext.panel.Panel',

    requires: [
        'GETA18.view.TaskMenu.TaskMenuController',
        'GETA18.view.TaskMenu.TaskMenuModel'
    ],

    controller: 'taskmenu-taskmenu',
    viewModel: {
        type: 'taskmenu-taskmenu'
    },
    layout : {
      type : 'fit'
    },
    items : [{
      xtype : 'button',
      width : '100%',
      iconCls : 'md-icon-add',
      text : 'Add Task',
      textAlign : 'left',
      docked : 'top',
      itemId : 'addTaskButton',
    },
    {
      xtype : 'button',
      width : '100%',
      text : 'Show Task',
      iconCls : 'md-icon-dvr',
      textAlign : 'left',
      itemId : 'showTaskButton',

    }]
});
