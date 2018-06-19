
Ext.define('GETA18.view.TaskForm.TaskForm',{
    extend: 'Ext.form.Panel',

    requires: [
        'GETA18.view.TaskForm.TaskFormController',
        'GETA18.view.TaskForm.TaskFormModel'
    ],

    controller: 'taskform-taskform',
    viewModel: {
        type: 'taskform-taskform'
    },

    title: 'New Task',
   closable : true,
   layout : {
     type : 'fit'
   },

   items : [{
     xtype : 'textfield',
     label: 'Task Title',
     docked: 'top',
     allowBlank: false,
     required: true,
     margin: '0 15 0',
     itemId : 'taskName',
     name: 'taskName'
   },{
     xtype : 'datefield',
     label: 'Deadline',
     docked: 'top',
     margin: '0 15 0',
     minDate : new Date(),
     allowBlank: false,
     required: true,
     itemId : 'deadline',
     name: 'deadline'
   },{
     xtype : 'textareafield',
     label: 'Task Details',
     allowBlank: false,
     required: true,
     itemId : 'taskDetail',
     name: 'taskDetail'
   }],
   buttons: [{
       text: 'Add',
       itemId : 'addTaskButton',
   }]
});
