Ext.define('GETA18.view.LeftPanel.LeftPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.leftpanel-leftpanel',

    config : {
      parentViewController : null,
      showProfileImage : null,
      isOnline : false,
      control : {
        '#searchField' : {
          change : 'filterList'
        },
        '#contactList' : {
          childTap : 'contactListItemTap',
        },
        '#email' : {
          tap : 'ComposeEmailForm'
        }
      },

    },
    routes : {
            'home/employee:id' : 'employee',
    },

    employee : function(id) {
      this.redirectTo('home/employee'+id);
    },

    init : function(){
      console.log("init function LeftPanelController");
      var me = this;
      var view = me.getView();

      if(!Constants.searching){
        view.down('#searchField').hide();
      }
      view.down('#searchField').setPlaceholder(Constants.searchingField);

      this.setShowProfileImage(Constants.contactImages);
      isShow = function(){
        return me.getShowProfileImage();
      };
      Ext.TaskManager.start({
        run: function() { 
          if(Constants.userDetails.personalDetails.isOnline){
           me.downloadEmployeeDetail();
          }
        },
        interval: 10000
      });
      

    },

    downloadEmployeeDetail : function(){
      var me = this;
      var view = me.getView();
      var list = view.down('#contactList');

      Ext.Ajax.request({
        url: Constants.url + 'getAllEmployee/' +  Constants.userId + '?token=' + Constants.accessToken ,
        method: 'POST',
        jsonData : Constants.userDetails,
        }).then (function(response, opts) {
          var employees = Ext.decode(response.responseText);
          list.setStore(employees);
          if(me.getIsOnline() == false){
            me.getParentViewController().getRightPanelController().populateView(employees[0]);
            me.setIsOnline(true);
          }
          var counter = view.down("#counter");
          counter.setHtml(list.getStore().getData().length + " contacts");
        },
        function(response, opts) {
          console.log('server-side failure with status code ' + response.status);
      });
    },
    mobileViewItemTap : function(list, location, eOpts){
      this.getParentViewController().getRightPanelController().populateView(location.record.data);
      this.getView().setWidth(0);
    },

    contactListItemTap : function(list, location, eOpts){
      var view = this.getView();
      var list = view.down('#contactList');
      this.getParentViewController().getRightPanelController().populateView(location.record.data);
      if(!UtilityFunction.isPhone()){
        if(location.event.target.localName === 'img'){
          location.event.touch.targets[1].classList.toggle("flipped");
          list.setSelectable('multi');
          view.down('#deleteAndEmail').setHidden(false);
        }
        else{
           list.setSelectable('single');
           list.deselectAll();
        }
        if(list.getSelectionCount() == 0){
          list.setSelectable('single');
          view.down('#deleteAndEmail').setHidden(true);
        }
        this.redirectTo('home/employee/'+location.record.data.employeeID);
        setTimeout(function() {
          var counter = view.down("#counter");
          if(list.getSelectable().getMode() === "multi"){
            counter.setHtml(list.getSelectionCount() + " selected");

          }else{
            counter.setHtml(list.getStore().getCount() + " contacts");
          }
        },300)
      }
    },

    ComposeEmailForm : function(button, e, eOpts){
      var list = this.getView().down('#contactList');
      var emailForm = CreateView.emailForm();

      this.openEmailForn(emailForm);
      //emailForm.getController().setLeftPanelViewController(this);
      emailForm.getController().populateField(list , null);
    },

    onRightSwipe : function(list, info) {
      var list = this.getView().down('#contactList');
      var emailForm = CreateView.emailForm();
      this.openEmailForn(emailForm);

      emailForm.getController().populateField(list , info.record.data.personalDetails.email);
    },
    openEmailForn : function(emailForm){
      if(!UtilityFunction.isPhone()){
          emailForm.showBy(Ext.Viewport, "c-c");
      }
      else{
          emailForm.showBy();
      }
    },
    filterList : function(search , newValue , oldValue , eOpts){
      var list = this.getView().down('#contactList');
      var store = list.getStore();
      store.clearFilter();
      newValue = newValue.toLowerCase();
      store.filter(function(item){
          return item.data.personalDetails.name.toLowerCase().includes(newValue);
      });
    },

});
