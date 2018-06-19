Ext.define('GETA18.view.EmailForm.EmailFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.emailform-emailform',
    config : {
    leftPanelViewController : null,
    control : {
      '#sendMail' : {
        tap : 'sendMail'
      }
    }
  },
  populateField : function(contactList , emailId){
    var emailIds = [];
    if(contactList.getSelectable().getMode() === 'multi'){
      for(var i = 0 ; i < contactList.getSelections().length ; i++){
        emailIds.push(contactList.getSelections()[i].data.personalDetails.email);
      }
    }
    else{
      emailIds.push(emailId);
    }
    this.getView().down('#to').setValue(emailIds);
  },

  populateReceiverField : function(emailId){
      this.getView().down('#to').setValue(emailId);
  },
  
  onValueChange : function(search, newValue, oldValue, eOpts){
    if(!Array.isArray(newValue)){
      var searchPanel = CreateView.searchPanel();
      values = newValue.split(",");
      if(values[values.length - 1] == ""){
        searchPanel.destroy();
        return;
      }
      var store = _mainView.getLeftPanelController().getView().down("#contactList").getStore();
      var list = searchPanel.down("#list");
      list.setListeners({
        childTap : function(list, location, eOpts){
          list.getParent().destroy();
          var textField = Ext.ComponentQuery.query("#emailForm")[0].down("#to");
          var value = textField.getValue();
          var values = value.split(",");
          var newValue = "";
          for(i = 0 ; i < values.length - 1; i++){
            newValue += values[i] + ",";
          }
          newValue += location.record.data.personalDetails.email;
          textField.setValue(newValue);
        }
      })
      list.setStore(store.getData().items);
      var listStore = list.getStore();
      listStore.clearFilter();
      newValue = newValue.toLowerCase();
      listStore.filter(function(item){
          var flag = true;
          for(i in values){
            if(values[i].toLowerCase() === item.data.personalDetails.email.toLowerCase()){
              flag = false;
            }
          }
          return (item.data.personalDetails.email.toLowerCase().includes(values[values.length - 1]) && flag);
      });
      searchPanel.showBy(search , 'tl-bl');
    }
  },
  sendMail : function(){
      var me = this;
      var form = me.getView();
      var receivers = form.down('#to').getValue();
      var subject = form.down('#subject').getValue();
      var body = form.down('#body').getValue();
      for(i in receivers){
          var email  = {
            'receivers' : receivers[i],
            'subject' : subject,
            'body' : body
          }
          if(form.validate()){
            form.setMasked({
              xtype : 'loadmask',
              message : 'Sending Mail'
            });
            Ext.Ajax.request({
              url: Constants.url + Constants.userId + '/mail'+ '?token=' + Constants.accessToken,
              method: 'POST',
              jsonData: email
            }).then (function(response, opts) {
                if(response.responseText){
                  email.sender = Constants.userDetails.personalDetails.name;
                  email.image = Constants.userDetails.personalDetails.image;
                  SocketService.sendMailMessage(email);
                  form.unmask();
                  form.destroy();
                  Ext.Msg.alert("Email Sent");
                }
                else{
                  Ext.Msg.alert("Invalid Authorization");
                }
              },
              function(response, opts) {
                form.unmask();
                Ext.Msg.alert("Server is down");
                console.log('server-side failure with status code ' + response.status);
              });
          }
        }
      }

});
