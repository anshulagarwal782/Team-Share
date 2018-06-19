Ext.define('GETA18.view.InboxAndSentMailTab.InboxAndSentMailTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inboxandsentmailtab-inboxandsentmailtab',

    init : function(){
      var closeButton = this.getView().down("#closeButton");
      if(UtilityFunction.isPhone()){
        closeButton.setHidden(false);
      }
    },
    onCloseButtonTap : function(button , e ,eOpts){
      this.getView().hide();
    },
    onShowInbox : function(sender, eOpts) {
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
            me.getView().lookup('inboxComponentDataItem').setStore(mails);

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

    onShowSentMail : function(sender, eOpts) {
      var me = this;
      Ext.Ajax.request({
        url: Constants.url + Constants.userId +"/sentMail" +'?token=' + Constants.accessToken,
        method: 'GET'
      }).then (function(response, opts) {
          if(response.responseText != null){
            var mails = JSON.parse(response.responseText);
            console.log(mails);
            for(var mail in mails){
              var timeline = new Date(mails[mail].date);
              mails[mail].date = Ext.Date.format(timeline, 'd-m-Y  h:i A');
            }
            //console.log(me.getView().lookup('inbox'));
          //  me.getView().lookup('inbox').badgeText = mails.length;
            me.getView().lookup('sentComponentDataItem').setStore(mails);

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

});
