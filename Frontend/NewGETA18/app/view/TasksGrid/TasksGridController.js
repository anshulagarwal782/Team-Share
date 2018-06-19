Ext.define('GETA18.view.TasksGrid.TasksGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tasksgrid-tasksgrid',
    config : {
      parentViewController : null,
      authorization : null,
      currentEmployee : null,
    },

    init : function(){
    },

    populateTaskView : function(record){
      var me = this;
      var view = me.getView();
      //me.setTaskData(record.tasks);
      Ext.Ajax.request({
        url: Constants.url + Constants.userId +"/getTasks" +'?token=' + Constants.accessToken + "&user=" + record.employeeID,
        method: 'GET'
      }).then (function(response, opts) {
          if(response.responseText != null){
            var tasks = JSON.parse(response.responseText);
            me.setTaskData(tasks);
          }
          else{
            Ext.Msg.alert("Invalid Authorization");
          }
        },
        function(response, opts) {
          Ext.Msg.alert("Server is down");
          console.log('server-side failure with status code ' + response.status);
      });
      me.setCurrentEmployee(record.employeeID);
      me.setAuthorization(me.getCurrentEmployee() === Constants.userId);
      var buttons = view.down('#completeAndDeleteButtons');
      var pins = view.down('#pin');
      pins.setHidden(true);
      buttons.setHidden(true);
    },

    populateTaskViewForAdmin : function(){
      var me = this;
      var view = me.getView();
      //me.setTaskData(record.tasks);
      Ext.Ajax.request({
        url: Constants.url + Constants.userId +"/getTasks" +'?token=' + Constants.accessToken + "&user=" + Constants.userDetails.employeeID,
        method: 'GET'
      }).then (function(response, opts) {
          if(response.responseText != null){
            var tasks = JSON.parse(response.responseText);
            me.setTaskData(tasks);
          }
          else{
            Ext.Msg.alert("Invalid Authorization");
          }
        },
        function(response, opts) {
          Ext.Msg.alert("Server is down");
          console.log('server-side failure with status code ' + response.status);
      });
      me.setCurrentEmployee(Constants.userDetails.employeeID);
      var buttons = view.down('#completeAndDeleteButtons');
      var pins = view.down('#pin');
      pins.setHidden(false);
      buttons.setHidden(false);
    },
    setTaskData : function(tasks) {
        var me = this;
        me.setAuthorization(me.getCurrentEmployee() === Constants.userId);
        var today = new Date();
        for(var task in tasks){
          var timeline = new Date(tasks[task].deadline);
          tasks[task].deadline = Ext.Date.format(timeline, 'm-d-Y');
          me.checkDate(Ext.Date.format(today, 'm-d-Y') , tasks[task]);
        }
        this.getView().lookup('taskGrid').setStore(tasks);

    },

    checkDate : function(presentDate , task){
      var me = this;
      if(me.getAuthorization()){
        if(task.status !== 'COMPLETED'){
          if((new Date(presentDate)) > (new Date(task.deadline))){
            Ext.Msg.confirm('Alert' , 'Deadline missed for task : '+ task.taskName + ' , ' + 'Want to extend ?' , function(e){
              if(e === 'yes'){
                var taskDetail = me.createTaskDetail();
                var taskDetailController =   taskDetail.getController();
                taskDetail.showBy(Ext.Viewport , 'c-c');
                taskDetailController.populateView(tasks[task]);
                taskDetailController.setParentViewController(me);
              }
            });
          }
          else if(presentDate === task.deadline){
            Ext.Msg.alert('Alert' , 'Last Day for task : '+ task.taskName);
          }
        }
      }
    },

    renderPin : function(value , metaData , record , rowIndex , colIndex , store){
      var pinDom = rowIndex.ownerCmp.cells[0]._tools[0].element.dom.childNodes[0]; //.bodyElement.dom.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0];
      if(metaData.data.status === "ONGOING"){
        pinDom.classList.add('pinAfter');
      }
      else{
        pinDom.classList.remove('pinAfter');
      }
    },

    renderComplete : function(value , metaData , record , rowIndex , colIndex , store){
      var completeDom = rowIndex.ownerCmp.cells[4]._tools[0].element.dom.childNodes[0];
      if(metaData.data.status === "COMPLETED"){
        completeDom.classList.add('complete');
      }
      else{
        completeDom.classList.remove('complete');
      }
    },

    onPin : function(grid, info) {
      var me = this;
      var view = me.getView();
      Ext.Ajax.request({
        url: Constants.url + Constants.userId +"/tasks" +'?token=' + Constants.accessToken + "&taskID=" + info.record.data.taskNo,
        method: 'POST'
      }).then (function(response, opts) {
          if(response.responseText != null){
            var tasks = JSON.parse(response.responseText);
            me.setTaskData(tasks);
          }
          else{
            Ext.Msg.alert("Invalid Authorization");
          }
        },
        function(response, opts) {
          Ext.Msg.alert("Server is down");
          console.log('server-side failure with status code ' + response.status);
        });
    },

    onComplete : function(grid, info){
      var me = this;
      var view = me.getView();
      Ext.Ajax.request({
        url: Constants.url + Constants.userId +"/tasks/complete" +'?token=' + Constants.accessToken + "&taskID=" + info.record.data.taskNo,
        method: 'POST'
      }).then (function(response, opts) {
          if(response.responseText != null){
            var tasks = JSON.parse(response.responseText);
            me.setTaskData(tasks);
          }
          else{
            Ext.Msg.alert("Invalid Authorization");
          }
        },
        function(response, opts) {
          Ext.Msg.alert("Server is down");
          console.log('server-side failure with status code ' + response.status);
        });
    },

    showTaskDetail : function(grid , location, e , eOpts){
      var me = this;
      var taskDetail = CreateView.taskDetail();
      var taskDetailController =   taskDetail.getController();
      if(!UtilityFunction.isPhone()){
        taskDetail.showBy(Ext.Viewport , 'c-c');
      }
      else{
        taskDetail.showBy();
      }
      taskDetailController.populateView(location.record.data);
      taskDetailController.setParentViewController(me);
      taskDetailController.showEditButton(!me.getAuthorization() || (location.record.data.status === 'COMPLETED'));
    },

    onDelete : function(grid , info){
      var me = this;
      var view = me.getView();
      Ext.Msg.confirm('Delete Task','Are you want to delete',function(e){
        if(e === "yes"){
          Ext.Ajax.request({
            url: Constants.url + Constants.userId +"/tasks/remove" +'?token=' + Constants.accessToken + "&taskID=" + info.record.data.taskNo,
            method: 'POST'
          }).then (function(response, opts) {
              if(response.responseText != null){
                var tasks = JSON.parse(response.responseText);
                me.setTaskData(tasks);
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
    },



});
