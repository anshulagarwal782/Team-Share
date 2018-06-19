Ext.define('GETA18.view.LoginForm.LoginFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginform-loginform',
    requires : [
      'Ext.MessageBox'
    ],

  onRegister : function(button, e, eOpts){
    var signUpForm = CreateView.signUpForm();
    if(!UtilityFunction.isPhone()){
      signUpForm.showBy(Ext.Viewport, "c-c");
    }
    else{
      signUpForm.showBy();
    }
  },


  onLogin : function(button, e, eOpts){
    var meController = this;
    var view = meController.getView();
    if(view.validate()){
      var userId = view.down('#userId').getValue();
      var password = view.down('#password').getValue();

      Ext.Ajax.request({
        url: Constants.url + 'login/'+userId + '?password='+password ,
        method: 'GET',
        }).then (function(response, opts) {
          if(response.responseText && response.responseText.length > 0){
            var employee = JSON.parse(response.responseText);
            var accessToken = employee.userDetails.accessToken;
            if(accessToken && accessToken.length > 0){
              var loginAccessDetails = [{
                "userDetails" : employee,
              }];
              Constants.userId = userId;
              Constants.accessToken = accessToken;
              Constants.userDetails = employee;
              sessionStorage.setItem("GETA18-Login" , JSON.stringify(loginAccessDetails));
              if(view.down('#rememberMe').isChecked()){
                localStorage.setItem("GETA18-Login" , JSON.stringify(loginAccessDetails));
              }

              var mainApp = CreateView.mainView();
              view.hide();
              mainApp.showBy();

            }
            else{
              Ext.Msg.alert("UserId or Password is Invalid");
            }
          }else{
               Ext.Msg.alert("User is not Registered yet");
            }
        },
        function(response, opts) {
          Ext.Msg.alert("Server is down");
          console.log('server-side failure with status code ' + response.status);
      });
    }
  },



});
