Ext.define('GETA18.view.EmailMenu.EmailMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.emailmenu-emailmenu',
    config : {
      control : {
        '#composeMail' : {
          tap : 'composeMail'
        },
        '#inboxView' : {
          tap : 'showInboxTab'
        },
        '#sentMailView' : {
          tap : 'showSentMailTab'
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
    composeMail : function(button , e , eOpts){
      this.getView().hide();
      var emailForm = CreateView.emailForm();
      if(!UtilityFunction.isPhone()){
        emailForm.showBy(Ext.Viewport, "c-c");
      }
      else{
        emailForm.showBy();
      }
    },

    showInboxTab : function(button , e , eOpts){
      this.getView().hide();
      var inboxAndSentTab = UtilityFunction.showMailBox();
      if(!UtilityFunction.isPhone()){
        inboxAndSentTab.showBy(Ext.Viewport, "c-c");
      }
      else{
        inboxAndSentTab.showBy();
      }
    },

    showSentMailTab : function(button , e , eOpts){
      this.getView().hide();
      var inboxAndSentTab = CreateView.inboxAndSentMailTab();
      inboxAndSentTab.setActiveItem(1);
      if(!UtilityFunction.isPhone()){
        inboxAndSentTab.showBy(Ext.Viewport, "c-c");
      }
      else{
        inboxAndSentTab.showBy();
      }
    }
});
