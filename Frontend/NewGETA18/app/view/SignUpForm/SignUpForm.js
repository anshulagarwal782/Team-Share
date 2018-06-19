Ext.define('GETA18.view.SignUpForm.SignUpForm',{
    extend: 'Ext.form.Panel',

    requires: [
        'GETA18.view.SignUpForm.SignUpFormController',
        'GETA18.view.SignUpForm.SignUpFormModel'
    ],

    controller: 'signupform-signupform',
    viewModel: {
        type: 'signupform-signupform'
    },

    title: 'New Account',
  
   items: [{
     xtype: 'fieldset',
     title: 'User Information',
     defaultType: 'textfield',
     margin: '20 0 0',
     items : [{
       label: 'Employee Id',
       allowBlank: false,
       required: true,
       itemId : 'empid',
       name: 'employeeID'
     },{
       xtype : 'passwordfield',
       label: 'Password',
       allowBlank: false,
       required: true,
       itemId : 'password',
       name: 'password'
     }]
   },{
       xtype: 'fieldset',
       title: 'Personal Information',
       defaultType: 'textfield',
       margin: '20 0 0',
       items: [{
           label: 'Full Name',
           allowBlank: false,
           required: true,
           itemId : 'fullName',
           name: 'name'
       },{
           xtype : 'selectfield',
           label: 'Designation',
           allowBlank: false,
           required: true,
           itemId : 'designation',
           name: 'designation',
           options : [{
             text : 'Manager',
             value : 'Manager'
           },{
             text : 'Software Engineer',
             value : 'Software Engineer'
           }]
       },{
           label: 'Address',
           allowBlank: false,
           required: true,
           itemId : 'address',
           name: 'address'
       },{
           xtype: 'emailfield',
           label: 'Email',
           name: 'email',
           allowBlank: false,
           required: true,
           itemId : 'email',
           validators: 'email'
       }, {
           label: 'Interest',
           allowBlank: false,
           required: true,
           itemId : 'interest',
           name: 'interest'
       },{
           label: 'Remarks',
           allowBlank: false,
           required: true,
           itemId : 'remarks',
           name: 'remarks'
       },{
           label: 'Profile Pic URL',
           itemId : 'profilePic',
           name: 'pic'
       }]
   }],
   buttons: [{
       text: 'SignUp',
       listeners : {
         tap : 'onRegister'
       }
   }]
});
