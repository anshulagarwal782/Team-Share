
Ext.define('GETA18.view.TasksGrid.TasksGrid',{
    extend: 'Ext.panel.Panel',
    xtype : 'tasks',
    requires: [
        'GETA18.view.TasksGrid.TasksGridController',
        'GETA18.view.TasksGrid.TasksGridModel'
    ],

    controller: 'tasksgrid-tasksgrid',
    viewModel: {
        type: 'tasksgrid-tasksgrid'
    },

    title : 'Tasks',
   
    items : [{
      xtype : 'grid',
      reference : 'taskGrid',
      emptyText : 'No Task',
      ui : 'basic',
      height : '100%',
      width : '100%',
      striped : true,
      columnLines: true,
      rowLines : true,
      columnResize : false,
      columns : [{
        menu : null,
        flex : 1,
        itemId : 'pin',
        renderer: 'renderPin',
        cell: {
           tools: {
               pin: 'onPin'
           }
         }
      },{
        text : 'Task Name',
        menu : null,
        dataIndex : 'taskName',
        flex : 6,

      },{
        text : 'Deadline',
        menu : null,
        dataIndex : 'deadline',
        flex : 4
      },{
        text : 'Status',
        menu : null,
        dataIndex : 'status',
        flex : 4
      },{
        flex : 2,
        menu : null,
        itemId : 'completeAndDeleteButtons',
        renderer: 'renderComplete',
         cell: {
             tools: {
                 approve: {
                     cls : 'complete',
                     iconCls: 'md-icon-check',
                     handler : 'onComplete',
                 },
                 decline: {
                     cls : 'delete',
                     iconCls: 'md-icon-delete',
                     handler: 'onDelete'
                 }
             }
         }
      },{
        flex : 1,
        menu : null,
        cell : {
          tools : {
            info: {
                cls : 'info',
                iconCls: 'md-icon-info-outline',
                handler: 'showTaskDetail'
            }
          }
        }
      }]
    }]

});
