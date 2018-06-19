Ext.define('GETA18.view.UserDetailsPanel.UserDetailsPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userdetailspanel-userdetailspanel',
    config : {
    parentViewController : null,
  },


  setData : function(data){
    var view = this.getView();
    view.down("#emailId").setHtml(data.personalDetails.email);
    view.down("#address").setHtml(data.personalDetails.address);
    view.down("#empId").setHtml(data.employeeID);
    view.down("#interest").setHtml(data.personalDetails.interest);
    view.down("#remarks").setHtml(data.personalDetails.remarks);

  },

  onShow : function(sender, eOpts) {
    var me = this;
    Ext.Ajax.request({
      url: Constants.url + Constants.userId +"/inbox" +'?token=' + Constants.accessToken,
      method: 'GET'
    }).then (function(response, opts) {
        if(response.responseText != null){
          var mails = JSON.parse(response.responseText);
          for(var mail in mails){
            var timeline = new Date(mails[mail].date);
            mails[mail].date = Ext.Date.format(timeline, 'd-m-Y  h:i A');
          }
          //console.log(me.getView().lookup('inbox'));
        //  me.getView().lookup('inbox').badgeText = mails.length;
          me.getView().lookup('componentDataItem').setStore(mails);

        }
        else{
          Ext.Msg.alert("Invalid Authorization");
        }
      },
      function(response, opts) {
        Ext.Msg.alert("Server is down");
        console.log('server-side failure with status code ' + response.status);
      });
  },

  //hiding inbox tab for non-authorized user
  showInbox : function(hide){
    // this.getView().lookup('inboxtab').setHidden(!hide);
  }
});
