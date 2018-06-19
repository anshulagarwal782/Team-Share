Ext.define('GETA18.view.SettingPanel.SettingPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.settingpanel-settingpanel',
    config : {
      control : {
        '#logoutButton' : {
          tap : 'logout'
        },
        '#profileButton' : {
          tap : 'profileView'
        }
      }
    },

    logout : function(button , e , eOpts){
      this.getView().hide();
      this.fireEvent('afterLogout',this);
      Ext.Ajax.request({
        url: Constants.url + 'logout/'+Constants.userId+'?token='+Constants.accessToken ,
        method: 'GET',
        }).then (function(response, opts) {
          localStorage.removeItem('GETA18-Login');
          sessionStorage.clear();
          Constants.accessToken = null;
          Constants.userId = null;   
          Constants.userDetails.personalDetails.isOnline = false;
        },
        function(response, opts) {
          console.log('server-side failure with status code ' + response.status);
        });
        _mainView.getView().destroy();
        var mainContainerView = CreateView.mainContainerView();
        mainContainerView.showBy();
        this.redirectTo('login');
    },

    profileView : function(button , e , eOpts){
      this.getView().hide();
      var profileView = CreateView.profileView();
      if(UtilityFunction.isPhone()){
        profileView.showBy();
      }else{
        profileView.showBy(Ext.Viewport , 'c-c');
      }
    }

});
