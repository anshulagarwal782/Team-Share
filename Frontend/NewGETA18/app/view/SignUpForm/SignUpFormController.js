Ext.define('GETA18.view.SignUpForm.SignUpFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.signupform-signupform' ,
    requires : [
      'Ext.MessageBox'
    ],

    onRegister: function(button, location, eOpts) {
      var form = this.getView();
      if(form.validate()){
        form.setMasked({
          xtype : 'loadmask',
          message : 'Registering'
        });
        var employeeJSON = this.createJSON();
        Ext.Ajax.request({
          url: Constants.url + 'add' ,
          method: 'POST',
          jsonData: employeeJSON
        }).then (function(response, opts) {
            form.unmask();
            form.destroy();
            Ext.Msg.alert("Registered Successfully");
          },
          function(response, opts) {
            form.unmask();
            Ext.Msg.alert("Server is down");
            console.log('server-side failure with status code ' + response.status);
          });

        };
      },

      createJSON : function(){
        var form = this.getView();
        var name = form.down('#fullName').getValue();
        var password = form.down('#password').getValue();
        var designation = form.down('#designation').getValue();
        var address = form.down('#address').getValue();
        var email = form.down('#email').getValue();
        var interest = form.down('#interest').getValue();
        var remarks = form.down('#remarks').getValue();
        var profilePic = form.down('#profilePic').getValue();
        var employeeId = form.down('#empid').getValue();
        if(profilePic == null || profilePic.length < 1){
          profilePic = "https://goo.gl/2Ct8aB";
        }
        var employeeJSON = {
          "employeeID": employeeId,
          "userDetails": {
            "password": password,
            "accessToken" : null
          },
          "personalDetails": {
            "name": name,
            "image": profilePic,
            "designation": designation,
            "address": address,
            "email": email,
            "interest": interest,
            "remarks": remarks
          },
          "tasks": []
        }
        return employeeJSON;
      }

});
