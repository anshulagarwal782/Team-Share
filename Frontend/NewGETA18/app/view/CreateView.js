Ext.define('GETA18.view.CreateView',{
  singleton : true,
  alternateClassName : 'CreateView',

  mainView : function(){
    var mainApp = Ext.create('GETA18.view.Main.Main' , {
      cls : 'MainApp',
      margin : 0,
      width : '100%',
      height : '100%',
      showAnimation : {
        type : 'fade',
        duration : 400
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300
      }
    });
    return mainApp;
  },
  mainContainerView : function(){
    var mainApp = Ext.create('GETA18.view.MainAppContainer.MainAppContainer' , {
      cls : 'main-app-container',
      margin : 0,
      width : '100%',
      height : '100%',
      showAnimation : {
        type : 'fade',
        duration : 400
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300
      }
    });
    return mainApp;
  },

  signUpForm : function(){
    var signUpForm = Ext.create('GETA18.view.SignUpForm.SignUpForm' , {
      itemId : 'signUpForm',
      modal : true,
      closable : true,
      scrollable : true,
      hideOnMaskTap : true,
      plugins : 'responsive',
      responsiveConfig : {
        'width < 415' : {
          width : '100%',
          height : '100%',
          fullScreen : true,
          style : 'margin : auto;',
          scrollable : true,
        },
        'width >= 415' : {
          width : 400,
          height : 600,
        }
      },
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right'
      }
    });
    return signUpForm;
  },

  emailForm : function() {
    var emailForm = Ext.create('GETA18.view.EmailForm.EmailForm' , {
      itemId : 'emailForm',
      modal : true,
      closable : true,
      plugins : 'responsive',
      listeners : {
        destroy : function(){
          var searchpanels = Ext.ComponentQuery.query("#searchPanel");
          if(searchpanels && searchpanels.length > 0){
              searchpanels[0].destroy();
          }
        },
        hide : function(sender, eOpts){
          var searchpanels = Ext.ComponentQuery.query("#searchPanel");
          if(searchpanels && searchpanels.length > 0){
              searchpanels[0].destroy();
          }
        } 

      },
      responsiveConfig : {
        'width < 415' : {
          height : '100%',
          width : '100%'
        },
        'width >= 415' : {
          height : 500,
          width : 500
        },
      },
      hideOnMaskTap : true,
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right'
      }
    });
    return emailForm;
  },

  settingPanel : function(){
    var settingPanel = Ext.ComponentQuery.query("#settingPanel");
    var setting = null;
    if(!settingPanel || settingPanel.length == 0){
       setting = Ext.create('GETA18.view.SettingPanel.SettingPanel' , {
       itemId : 'settingPanel',
       cls : 'anime',
       width : 150,
       hidden : true,
       anchor : true,
       showAnimation : {
         type : 'fade',
         duration : 300,
         direction : 'left'
       },
       hideAnimation : {
         type : 'fadeOut',
         duration : 300,
         direction : 'right'
       }

     });
     }else{
        setting = settingPanel[0];
     }
   return setting;
 },

  loginForm : function() {
    var loginForm = Ext.create('GETA18.view.LoginForm.LoginForm' , {
      itemId : 'loginForm',
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right'
      }
    });
    return loginForm;
  },

  taskForm : function() {
    var taskForm = Ext.create('GETA18.view.TaskForm.TaskForm' , {
      itemId : 'taskForm',
      height : '50%',
      width : '20%',
      modal : true,
      closable : true,
      plugins : 'responsive',
      responsiveConfig : {
        'width < 800' : {
          height : '100%',
          width : '100%'
        },
        'width > 800' : {
          height : '50%',
          width : '20%'
        },
      },
      hideOnMaskTap : true,
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right'
      }
    });
    return taskForm;
  },

  taskDetail : function(){
    var taskDetail = Ext.create('GETA18.view.TaskDetailPanel.TaskDetailPanel',{
      height : '40%',
      width : '30%',
      style : 'margin:auto;',
      plugins : 'responsive',
      responsiveConfig : {
        'width < 415':{
          height : '100%',
          width : '100%',
          modal : false,
          hideOnMaskTap : false
        },
        'width >= 415':{
          height : '40%',
          width : '30%',
          modal : true,
          hideOnMaskTap : true
        },

      },
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right',
        listeners: {
          animationend: function(evt, obj) {
          },
          scope : this,
        }
      }
    });
    return taskDetail;
  },

  taskMenu : function(){
    var taskMenus = Ext.ComponentQuery.query("#taskMenu");
    var taskMenu = null;
    if(!taskMenus || taskMenus.length==0){
      taskMenu = Ext.create('GETA18.view.TaskMenu.TaskMenu',{
      itemId : 'taskMenu',
      width : 150,
      hidden : true,
      anchor : true,
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right',
      }
    });
  }
  else{
    taskMenu = taskMenus[0];
  }
    return taskMenu;
  },

  emailMenu : function(){
    var emailMenus = Ext.ComponentQuery.query("#emailMenu");
    var emailMenu = null;
    if(!emailMenus || emailMenus.length==0){
        emailMenu = Ext.create('GETA18.view.EmailMenu.EmailMenu',{
        itemId : 'emailMenu',
        width :200,
        hidden : true,
        anchor : true,
        showAnimation : {
          type : 'fade',
          duration : 300,
          direction : 'left'
        },
        hideAnimation : {
          type : 'fadeOut',
          duration : 300,
          direction : 'right',
        }
      });
    }
    else{
      emailMenu = emailMenus[0];
    }
    return emailMenu;
  },

  notificationPanel : function(){
    var notificationPanel = Ext.create('GETA18.view.NotificationPanel.NotificationPanel',{
      itemId : 'notificationPanel',
      height : 80,
      anchor : true,
      width :300,
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right',
      }
    });
    return notificationPanel;
  },

  inboxAndSentMailTab : function(){
    var tabs = Ext.ComponentQuery.query("#inboxAndSentMailTab");
    var inboxAndSentMailTab;
    if(tabs && tabs.length > 0){
      inboxAndSentMailTab = tabs[0];
    }else{
      inboxAndSentMailTab = Ext.create('GETA18.view.InboxAndSentMailTab.InboxAndSentMailTab',{
      itemId : 'inboxAndSentMailTab',
      modal : true,

      plugins : 'responsive',
      responsiveConfig : {
        'width < 800' : {
          height : '100%',
          width : '100%'
        },
        'width > 800' : {
          height : '70%',
          width : '40%'
        },
      },
      hideOnMaskTap : true,
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right'
      }
    });
    }
    return inboxAndSentMailTab;
  },

  taskGrid : function(){
    var taskGrid = null;
    var taskGridComponent = Ext.ComponentQuery.query('#taskGrid');
    if(taskGridComponent.length > 0){
      taskGrid = taskGridComponent[0];
    }
    else{
      taskGrid = Ext.create('GETA18.view.TasksGrid.TasksGrid' , {
      itemId : 'taskGrid',
      modal : true,
      closable : true,
      plugins : 'responsive',
      responsiveConfig : {
        'width < 800' : {
          height : '100%',
          width : '100%'
        },
        'width > 800' : {
          height : '70%',
          width : '40%'
        },
      },
      hideOnMaskTap : true,
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right'
      }
    });

  }
    return taskGrid;

  },

  chatPanel : function(){
    var chatPanel = Ext.create('GETA18.view.ChatPanel.ChatPanel',{
      plugins : 'responsive',
      responsiveConfig : {
        'width < 415' : {
          height : '100%',
          width: '100%',
          tools : []
        },
        'width >= 415' : {
          style : 'margin-right : 10px;',
          height: 380,
          width: 260
        }
      },
      listeners : {
        removed : 'onRemoved'
      }
    });
    return chatPanel;
  },

  chatGroup : function(){
    var chatContainer = Ext.create('GETA18.view.ChatContainer.ChatContainer',{
      itemId : 'chatGroup',
      plugins : 'responsive',
      responsiveConfig : {
        'width < 415' : {
          style : 'position : absolute',
          top : 0,
          right : 0,
          left : 0,
          bottom : 0,
          fullScreen : true
        },
        'width >= 415' : {
          style : 'z-index : 1000;background-color:inherit;box-shadow : none;margin-top : 5px;position : absolute;margin-bottom:10px',
          bottom : 0,
          right : 0,
          left : 0,
          height: 380,
          layout : {
          type : 'hbox',
          align : 'bottom',
          pack : 'end',
        },
        }
      }
    })
    return chatContainer;
  },

  profileView : function(){
    var profileView = Ext.create('GETA18.view.Profile.Profile',{
      
      plugins : 'responsive',
      modal : true,
      closable : true,
      responsiveConfig : {
        'width < 415' : {
          height : '100%',
          width : '100%',
        },
        'width >= 415' : {
          height : '70%',
          width : '40%',
        }
      }
    });
    return profileView;
  },

  searchPanel : function(){
    var searchPanel = null;
    var searchPanels = Ext.ComponentQuery.query('#searchPanel');
    if(searchPanels.length > 0){
      searchPanel = searchPanels[0];
    }
    else{
      searchPanel = Ext.create('Ext.panel.Panel' , {
      itemId : 'searchPanel',
      maxHeight : 300,
      style : 'z-index : 100;',
      width : 300,
      items : [{
        xtype : 'list',
        itemId : 'list',
        itemTpl : '<h4>{personalDetails.email}</h4>',
        maxHeight : 300
      }],
      showAnimation : {
        type : 'fade',
        duration : 300,
        direction : 'left'
      },
      hideAnimation : {
        type : 'fadeOut',
        duration : 300,
        direction : 'right'
      }
    });

  }
    return searchPanel;
  }
});
