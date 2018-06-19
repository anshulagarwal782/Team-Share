Ext.define('GETA18.view.RightPanel.RightPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.rightpanel-rightpanel',
    config : {
      parentViewController : null,
      taskViewController : null,
      userDetailViewController : null,
      userDetailsHeaderController : null,
      // control : {
      //   '#taskButton' : {
      //     tap : 'AssignTaskForm'
      //   }
      // },
    },

    init : function(){
      var me = this;
      var view = me.getView();

      var userDetailsHeader = view.down("#userDetailsHeader");
      me.setUserDetailsHeaderController(userDetailsHeader.getController());
      userDetailsHeader.getController().setParentViewController(me);

      var userDetailView = view.down("#userDetailView");
      me.setUserDetailViewController(userDetailView.getController());
      userDetailView.getController().setParentViewController(me);

      var taskView = view.down("#taskView");
      me.setTaskViewController(taskView.getController());
      taskView.getController().setParentViewController(me);


    },

    populateView : function(data){
      var me = this;
      var view = me.getView();
      me.getUserDetailsHeaderController().setData(data);
      me.getTaskViewController().populateTaskView(data);
      me.getUserDetailViewController().setData(data);

      me.getUserDetailViewController().showInbox(data.employeeID === Constants.userId);
      console.log("populateView function RightPanelController");
      //view.down('#taskButton').setHidden(data.employeeID !== Constants.userId);

    },

    // AssignTaskForm : function(){
    //   var taskform = CreateView.taskForm();
    //   taskform.getController().setParentViewController(this);
    //   taskform.showBy(Ext.Viewport , 'c-c');
    // },

});
