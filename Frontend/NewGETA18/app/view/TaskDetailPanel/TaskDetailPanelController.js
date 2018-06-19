Ext.define('GETA18.view.TaskDetailPanel.TaskDetailPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskdetailpanel-taskdetailpanel',
    config : {
      taskId : null ,
      parentViewController : null,
      control : {
        '#edit' : {
          tap : 'onEdit'
        },
        '#cancel' : {
          tap : 'onCancel'
        },
        '#save' : {
          tap : 'onSave'
        }
      }
    },

    showEditButton : function(hide){
      var me = this;
      var view = me.getView();
      var edit = view.down('#edit').setHidden(hide);
    },

    populateView : function(data) {
      var me = this;
      var view = me.getView();
      this.setTaskId(data.taskNo);
      view.down('#title').setValue(data.taskName);
      view.down('#taskDeadline').setValue(new Date(data.deadline));
      view.down('#taskDeadline').setDisabled(true);
      view.down('#details').setValue(data.taskDetails);
    },

    onEdit : function(button , e , eOpts){
      var me = this;
      var view = me.getView();
      button.setHidden(true);
      view.down('#save').setHidden(false);
      view.down("#title").setEditable(true);
      view.down('#taskDeadline').setDisabled(false);
      view.down("#details").setEditable(true);
    },

    onCancel : function(button, e, eOpts){
      this.getView().hide();
    },

    onSave : function(button, e, eOpts){
      var me = this;
      var view = me.getView();
      var taskName = view.down('#title').getValue();
      var deadline = view.down('#taskDeadline').getValue();
      var details = view.down('#details').getValue();
      var task  = {
        'taskName' : taskName,
        'deadline' : deadline,
        'taskDetails' : details
      }
      Ext.Msg.confirm('Save Task Details','Are you want to save',function(e){
        if(e === "yes"){
          Ext.Ajax.request({
            url: Constants.url + Constants.userId +"/tasks/update" +'?token=' + Constants.accessToken + "&taskID=" + me.getTaskId(),
            method: 'POST',
            jsonData : task
          }).then (function(response, opts) {
              if(response.responseText != null){
                var tasks = JSON.parse(response.responseText);
                me.getParentViewController().setTaskData(tasks);
                view.destroy();
              }
              else{
                Ext.Msg.alert("Invalid Authorization");
              }
            },
            function(response, opts) {
              Ext.Msg.alert("Server is down");
              console.log('server-side failure with status code ' + response.status);
            });
        }
      });
    }

});
