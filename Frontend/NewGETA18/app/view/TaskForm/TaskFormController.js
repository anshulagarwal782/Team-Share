Ext.define('GETA18.view.TaskForm.TaskFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskform-taskform',
    config : {
      parentViewController : null,
      control : {
        '#addTaskButton' : {
          tap : 'addTask'
        }
      }
    },

    addTask : function(){
      var me = this;
      var form = me.getView();
      var taskName = form.down('#taskName').getValue();
      var deadline = form.down('#deadline').getValue();
      var details = form.down('#taskDetail').getValue();
      var task  = {
        'taskName' : taskName,
        'deadline' : deadline,
        'taskDetails' : details
      }
      if(form.validate()){
        form.setMasked({
          xtype : 'loadmask',
          message : 'Registering'
        });
        Ext.Ajax.request({
          url: Constants.url + Constants.userId + '?token=' + Constants.accessToken,
          method: 'POST',
          jsonData: task
        }).then (function(response, opts) {
            if(response.responseText != null){
              var tasks = JSON.parse(response.responseText);
              //me.getParentViewController().getTaskViewController().setTaskData(tasks);
              form.unmask();
              form.destroy();
              Ext.Msg.alert("Task Added");
            }
            else{
              Ext.Msg.alert("Invalid Authorization");
            }
          },
          function(response, opts) {
            form.unmask();
            Ext.Msg.alert("Server is down");
            console.log('server-side failure with status code ' + response.status);
          });
    }
  }

});
