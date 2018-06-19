
Ext.define('GETA18.view.LoginForm.LoginForm',{
    extend: 'Ext.form.Panel',

    requires: [
        'GETA18.view.LoginForm.LoginFormController',
        'GETA18.view.LoginForm.LoginFormModel'
    ],

    controller: 'loginform-loginform',
    viewModel: {
        type: 'loginform-loginform'
    },
    title: 'Login',
    bodyPadding: 20,
    width: 320,
    plugins : 'responsive',
    responsiveConfig : {
      'width < 415' : {
        height : 500,
      },
      'width >= 415' : {
        height : 400,
      },
    },
    items: [{
         xtype: 'textfield',
         allowBlank: false,
         required: true,
         itemId : 'userId',
         label: 'User ID',
         name: 'user',
         placeholder: 'user id'
     }, {
         xtype: 'passwordfield',
         allowBlank: false,
         required: true,
         label: 'Password',
         itemId : 'password',
         name: 'password',
         placeholder: 'password'
     }, {
         xtype: 'checkbox',
         boxLabel: 'Keep Me Logged In',
         name: 'remember',
         itemId : 'rememberMe'
     }],

     buttons: [{
         text: 'Login',
         itemId : 'login',
         listeners : {
           tap : 'onLogin'
         }
     },
   {
         text: 'Create Account',
         listeners : {
           tap : 'onRegister'
         }
   }]
});
