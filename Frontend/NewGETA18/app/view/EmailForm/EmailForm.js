
Ext.define('GETA18.view.EmailForm.EmailForm',{
    extend: 'Ext.form.Panel',

    requires: [
        'GETA18.view.EmailForm.EmailFormController',
        'GETA18.view.EmailForm.EmailFormModel'
    ],

    controller: 'emailform-emailform',
    viewModel: {
        type: 'emailform-emailform'
    },

    title: 'New Mail',
     closable : true,
     layout : {
       type : 'fit'
     },

     items : [{
       xtype : 'textfield',
       label: 'To',
       docked: 'top',
       allowBlank: false,
       required: true,
       margin: '0 15 0',
       itemId : 'to',
       name: 'to',
       listeners : {
        change : 'onValueChange'
       }
     },{
       xtype : 'textfield',
       label: 'Subject',
       docked: 'top',
       margin: '0 15 0',
       allowBlank: false,
       required: true,
       itemId : 'subject',
       name: 'subject'
     },{
       xtype : 'textareafield',
       label: 'Body',
       allowBlank: false,
       required: true,
       itemId : 'body',
       name: 'body'
     }],
     buttons: [{
         text: 'Send',
         itemId : 'sendMail'
     }]
});
