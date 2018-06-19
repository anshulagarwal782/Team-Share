Ext.define('GETA18.view.TaskMenu.TaskMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskmenu-taskmenu',
    config : {
      control : {
        '#addTaskButton'  : {
          tap : 'showTaskForm'
        },
        '#showTaskButton' : {
          tap : 'showTaskGrid'
        }
      },
      listen : {
        controller : {
          '*' : {
            afterLogout : 'onAfterLogout' 
          }
        }
      }
    },
    onAfterLogout : function(){
      this.getView().hide();
    },
    showTaskForm : function(button , e , eOpts){
      this.getView().hide();
      var taskForm = CreateView.taskForm();
      if (UtilityFunction.isPhone()) {
        taskForm.showBy();
      }
      else{
        taskForm.showBy(Ext.Viewport , 'c-c');
      }
    },

    showTaskGrid : function(button , e , eOpts){
      this.getView().hide();
      var taskGrid = CreateView.taskGrid();
      taskGrid.setClosable(true);
      if (!UtilityFunction.isPhone()) {
        taskGrid.showBy(Ext.Viewport , 'c-c');
      }
      else{
        taskGrid.showBy();
      }
      taskGrid.getController().populateTaskViewForAdmin();
    }

});
