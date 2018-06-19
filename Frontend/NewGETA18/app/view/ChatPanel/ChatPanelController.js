Ext.define('GETA18.view.ChatPanel.ChatPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.chatpanel-chatpanel',
    config : {

      control : {
        '#sendChatMessage' : {
          tap : 'sendChatMessage'
        }
      }
    },

    // init : function(){
    //   var me=this;
    //   //Establish socket connections
    //   SocketService.establishConnection(function(){
    //       //receive Message
    //       me.receiveChatMessage();
    //   });
    // },
    receiveChatMessagesFromDB : function(){
      var view = this.getView();

      Ext.Ajax.request({
        url: Constants.url + Constants.userId + '/chatMessage'+ '?token=' + Constants.accessToken + '&user=' + view.getChatId(),
        method: 'GET',
      }).then (function(response, opts) {
          var messages = JSON.parse(response.responseText);
          if(messages != null){
            var chatContainer =view.lookup('chatContainer');
              chatContainer.setStore(messages);
              chatContainer.getScrollable().scrollTo(Infinity , Infinity);

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
    sendChatMessage : function(button , e , eOpts){
      var me = this;
      var view = this.getView();
      console.log(me);
      var message = view.down('#chatMessage').getValue();
      var chatId = me.getView().getChatId();
      console.log(chatId);
      if(message != null && message.length > 0){
        var messageSender = Constants.userDetails.employeeID;
        var date = Ext.Date.format(new Date(),'d-m-Y  h:i A');
        var chatMessage = {
          "message" : message,
          "date" : date,
          "messageSender" : messageSender
        }
        chatMessage.senderName = Constants.userDetails.personalDetails.name;
        chatMessage.receiverName =  me.getView().getTitle();
        chatMessage.chatId = chatId;
        view.down('#chatMessage').setValue("");
        var chatContainer = me.getView().lookup('chatContainer');
        chatContainer.getStore().add(chatMessage);
        chatContainer.getScrollable().scrollTo(Infinity , Infinity);
        ChatService.storeChatMessageInDB(chatMessage);
      }
    },
    

    showMessage : function (message){
      var chatContainer = this.lookup('chatContainer');
      chatContainer.getStore().add(message);
      chatContainer.getScrollable().scrollTo(Infinity , Infinity);
      if(this.getView().getHeight() === Constants.chatPanelMinHeight){
       this.setCls('incoming-message-color');
     }
    }


});
