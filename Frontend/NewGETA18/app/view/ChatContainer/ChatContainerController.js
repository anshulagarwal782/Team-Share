Ext.define('GETA18.view.ChatContainer.ChatContainerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.chatcontainer-chatcontainer',

    chatPanelWithId: function (id, title, callback) {
        var view = this.getView();
        var panels = view.getInnerItems();
        var panel = null;
        //var flag = 0;
        if (panels.length > 0) {
            for (var p in panels) {
                if (id === panels[p].getChatId()) {
                  panel = panels[p];
                  if(callback){
                    callback(panel);
                  }
                  break;
                }
            }
        }
        if(!panel) {
            panel = this.createChatPanel(id, callback);
            panel.setTitle(title);
            if(!UtilityFunction.isPhone()){
              view.add(panel);
            }
            else{
              if(panels.length == 0){
                view.add(panel);
              }
            }
        }

        return panel;
      },

    onRemoved : function(sender, container, index, eOpts){
      var view = this.getView();
      var panels = view.getInnerItems();
      if(panels.length == 0){
        view.destroy();
      }
    },
    createChatPanel : function(chatingId, callback){
      var panel = CreateView.chatPanel();
      panel.setChatId(chatingId);
      panel.getController().receiveChatMessagesFromDB();
      return panel;
    }
});
