Ext.define('GETA18.view.ChatService',{
  singleton : true,
  alternateClassName : 'ChatService',

  receiveChatMessage : function(){
    var me = this;
    var callback = function(message){

      if(message.chatId === Constants.userDetails.employeeID){
        me.showChatMessageInChatWindow(message);

      }
    };
    SocketService.getChatMessage(callback);
  },

  showChatMessageInChatWindow : function(message){

      //get chatContainer reference
        var panel = this.openChatPanel(message.messageSender, message.senderName, function(panel){
          panel.getController().showMessage(message);
        });
  },

  storeChatMessageInDB : function(chatMessage){
    SocketService.sendChatMessage(chatMessage);
    if(chatMessage.message.length > 0){
      Ext.Ajax.request({
        url: Constants.url + Constants.userId + '/chatMessage'+ '?token=' + Constants.accessToken + '&chatId=' + chatMessage.chatId,
        method: 'POST',
        jsonData: chatMessage
      }).then (function(response, opts) {
          if(response.responseText){
          }
          else{
            Ext.Msg.alert("Invalid Authorization");
          }
        },
        function(response, opts) {
          Ext.Msg.alert("Server is down");
          console.log('server-side failure with status code ' + response.status);
        });
    }
  },

  openChatPanel : function(id, name, callback){
    var chatContainer = Ext.ComponentQuery.query('#chatGroup');
    var panel = null;
      if(!chatContainer || chatContainer.length == 0){
        chatContainer = CreateView.chatGroup();
        _mainView.getView().add(chatContainer);
      }else{
        chatContainer = chatContainer[0];
      }
      panel = chatContainer.getController().chatPanelWithId(id, name, callback);
    return panel;
  }

});
