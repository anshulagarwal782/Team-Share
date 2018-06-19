Ext.define('GETA18.view.Main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-main',

    config : {
      mainView : null,
      rightPanelController : null ,
      leftPanelController : null,
      //notificationPanel : null,
      control: {
       '#profileSettingView' : {
         tap : 'showSetting'
       },
       '#emailButton' : {
         tap : 'showEmailMenu'
       },
       '#taskMenuButton' : {
         tap : 'showTaskMenu'
       }
     }
    },
    routes : {
      'home' : 'home'
    },
    home : function(){
      //window.location.href = "http://172.16.50.111:1841/#home";
    },

    init : function(){
      //this.initializeAppSettings();
      var me = this;
      _mainView = me;

      //Establish socket connections
      SocketService.establishConnection(function(){
          //receive Message
          me.receiveMailMessage();
          ChatService.receiveChatMessage();
      });

      var mainView = this.getView();
      var leftPanel = mainView.down("#leftPanel");
      this.setLeftPanelController(leftPanel.getController());
      leftPanel.getController().setParentViewController(this);

      var rightPanel = mainView.down("#rightPanel");
      this.setRightPanelController(rightPanel.getController());
      rightPanel.getController().setParentViewController(this);

      if(Constants.applicationName != null){
        mainView.down("#header").setTitle(Constants.applicationName);
      }
      mainView.down("#profileSettingView").setSrc(Constants.userDetails.personalDetails.image);
      this.redirectTo('home');
    },
    initializeAppSettings : function(){
      var settings = JSON.parse(localStorage.getItem('settings'));
      if(settings != null){
        Constants.contactImages = settings.configure.contactImageData;
        Constants.socialIcons = settings.configure.socialIconData;
        Constants.searching = settings.configure.searchToggleData;
        Constants.applicationName = settings.labels.applicationName;
        Constants.searchingField = settings.labels.fieldTypeName;
      }
    },
    collapseMenu : function(button , e , eOpts){
      var leftPanel = this.getView().down("#leftPanel");
      if(leftPanel.getWidth() == 0){
        leftPanel.setWidth(280);
      }
      else{
        leftPanel.setWidth(0);
      }
    },
    mobileViewMenuTap : function(button , e , eOpts){
      var leftPanel = this.getView().down("#leftPanel");
      if(leftPanel.getWidth() == 0){
        leftPanel.setWidth('100%');
      }
      else{
        leftPanel.setWidth(0);
      }
    },
    showSetting : function(image, e, eOpts) {
        var setting = CreateView.settingPanel();
         if(setting.getHidden()) {
           setting.showBy(image, "tr-br");
         }
         else{
           setting.setHidden(true);
         }
    },

    showTaskMenu : function(button, e, eOpts){
      var taskMenu = CreateView.taskMenu();
       if(taskMenu.getHidden()) {

         taskMenu.showBy(button, "tr-br");
       }
       else{
         taskMenu.hide();
       }
    },

    showEmailMenu : function(button, e, eOpts){
      var emailMenu = CreateView.emailMenu();
       if(emailMenu.getHidden()) {

         emailMenu.showBy(button, "tr-br");
       }
       else{
         emailMenu.hide();
       }
    },


    receiveMailMessage : function(){

      var callback = function(message){
      if(message.receivers === Constants.userDetails.personalDetails.email){
        var notificationPanel = CreateView.notificationPanel();
        notificationPanel.showBy(Ext.Viewport , 'tr-tr');
        notificationPanel.down('#notification').setHtml(message.sender);
        notificationPanel.down('#notificationImage').setSrc(message.image);
        setTimeout(function() {
          notificationPanel.destroy();
        },5000);
      }
    };
    SocketService.getMailMessage(callback);
  },





});
