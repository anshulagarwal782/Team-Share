Ext.define('GETA18.view.MainAppContainer.MainAppContainerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainappcontainer-mainappcontainer',
    routes : {
      'login' : 'onLogin'
    },

    onLogin : function(){
    },

    init : function(){
      //LocalIp.getIP();  
      var me = this;
      setTimeout(function(){
         var localToken = localStorage.getItem('GETA18-Login');
        var sessionToken = sessionStorage.getItem('GETA18-Login');
        var token = null;
        if(localToken != null){
          token = JSON.parse(localToken);
        }
        else if(sessionToken != null){
          token = JSON.parse(sessionToken);
        }
        if(token == null){
          var loginForm = CreateView.loginForm();
          loginForm.showBy(Ext.getBody(), "c-c");
        }
        else{
          Constants.userId = token[0].userDetails.employeeID;
          Constants.accessToken = token[0].userDetails.userDetails.accessToken;
          Constants.userDetails = token[0].userDetails;
          var mainApp = CreateView.mainView();
          mainApp.showBy();
          me.getView().hide();
        }
      },1000)
      
     
  },

});
