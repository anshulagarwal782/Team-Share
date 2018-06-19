Ext.define('GETA18.view.SocketService',{
  singleton : true,
  alternateClassName : 'SocketService',
  socket : null,

  establishConnection : function(callback){
    var me = this;
    me.socket = io("http://"+Constants.ip+":3000");

    me.socket.on('connect', function(){
      if(callback){
        callback();
      }
    });

  },

  sendMailMessage : function(message){
    this.socket.emit('email', message);
  },

  getMailMessage : function(callback){
     //Add listener to receive data
      this.socket.on('email', function(msg){
         if(callback){
           callback(msg);
         }
      });
  },

  sendChatMessage : function(message){
    this.socket.emit('chat', message);
  },

  getChatMessage : function(callback){
     //Add listener to receive data
      this.socket.on('chat', function(msg){
         if(callback){
           callback(msg);
         }
      });
  },


});
