
Ext.define('GETA18.view.InboxAndSentMailTab.InboxAndSentMailTab',{
    extend: 'Ext.tab.Panel',

    requires: [
        'GETA18.view.InboxAndSentMailTab.InboxAndSentMailTabController',
        'GETA18.view.InboxAndSentMailTab.InboxAndSentMailTabModel'
    ],

    controller: 'inboxandsentmailtab-inboxandsentmailtab',
    viewModel: {
        type: 'inboxandsentmailtab-inboxandsentmailtab'
    },
    items : [{
          title : 'INBOX',
          //cls : 'inbox',
          scrollable : true,
          reference : 'inboxtab',
          listeners : {
            show : 'onShowInbox'
          },
          items : [{
            xtype: 'componentdataview',
            reference : 'inboxComponentDataItem', 
            height : '100%',
            emptyText : 'No Mails',
            itemConfig: {
               layout: 'hbox',
               padding: 10,
               style: 'border-bottom : solid 1px #DEDEDE',
               items: [{
                   xtype: 'image',
                   reference: 'image',
                   cls: 'inbox-image',
                   height : 70,
                   width : 70
               }, {
                   xtype : 'container',
                   flex : 2,
                   margin : '0 10',
                   layout : {
                     type : 'vbox'
                   },
                   items : [{
                     xtype : 'label',
                     reference : 'name',
                     style : 'font-weight : bold'
                   },{
                     xtype : 'label',
                     reference : 'subject',
                     cls : 'subject',
                   },{
                     xtype : 'label',
                     reference : 'body',
                     cls : 'body'
                   }]
               },{
                 xtype : 'container',
                 flex : 1,
                 docked : 'right',
                 layout : {
                   type : 'vbox'
                 },
                 items : [{
                   xtype : 'label',
                   docked : 'top',
                   cls : 'date-time',
                   reference : 'dateAndTime'
                 }]
               }]
           },

           itemDataMap: {
               image: {
                   src: 'senderProfilePic'
               },
               name: {
                   html: 'sender'
               } ,
               subject : {
                 html : 'subject'
               },
               body : {
                 html : 'body'
               },
               dateAndTime : {
                 html : 'date'
               }
           }
          }]
        }
      ,{
        title : 'Sent',
        //cls : 'inbox',
        scrollable : true,
        reference : 'sentMailTab',
        listeners : {
          show : 'onShowSentMail'
        },
        items : [{
          xtype: 'componentdataview',
          height : '100%',
          emptyText : 'No Mails',
          reference : 'sentComponentDataItem',
          itemConfig: {
             layout: 'hbox',
             padding: 10,
             style: 'border-bottom : solid 1px #DEDEDE',
             items: [{
                 xtype: 'image',
                 reference: 'receiverImage',
                 cls: 'inbox-image',
                 height : 70,
                 width : 70
             }, {
                 xtype : 'container',
                 flex : 2,
                 margin : '0 10',
                 layout : {
                   type : 'vbox'
                 },
                 items : [{
                   xtype : 'label',
                   reference : 'receiverName',
                   style : 'font-weight : bold'
                 },{
                   xtype : 'label',
                   reference : 'receiverSubject',
                   cls : 'subject',
                 },{
                   xtype : 'label',
                   reference : 'receiverBody',
                   cls : 'body'
                 }]
             },{
               xtype : 'container',
               flex : 1,
               docked : 'right',
               layout : {
                 type : 'vbox'
               },
               items : [{
                 xtype : 'label',
                 docked : 'top',
                 cls : 'date-time',
                 reference : 'receiverDateAndTime'
               }]
             }]
         },

         itemDataMap: {
             receiverImage: {
                 src: 'receiverPic'
             },
             receiverName: {
                 html: 'receivers'
             } ,
             receiverSubject : {
               html : 'subject'
             },
             receiverBody : {
               html : 'body'
             },
             receiverDateAndTime : {
               html : 'date'
             }
         }
        }]
      },{
        xtype: 'button',
        docked: 'bottom',
        itemId : 'closeButton',
        style : 'background-color : #2196f3;color:white;',
        text: 'Close',
        hidden : true,
        listeners : {
          tap : 'onCloseButtonTap'
        }
      }]
});
