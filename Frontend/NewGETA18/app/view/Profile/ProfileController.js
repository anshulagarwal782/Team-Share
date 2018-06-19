Ext.define('GETA18.view.Profile.ProfileController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.profile-profile',

    init : function(){
    	var me = this;
    	var view = me.getView();

    	var user = Constants.userDetails;

    	var employeeId = view.down('#empid');
    	employeeId.setValue(user.employeeID);

    	var fullName = view.down('#fullName');
    	fullName.setValue(user.personalDetails.name);

    	var designation = view.down('#designation');
    	designation.setValue(user.personalDetails.designation);

    	var address = view.down('#address');
    	address.setValue(user.personalDetails.address);

    	var email = view.down('#email');
    	email.setValue(user.personalDetails.email);

    	var interest = view.down('#interest');
    	interest.setValue(user.personalDetails.interest);

    	var remarks = view.down('#remarks');
    	remarks.setValue(user.personalDetails.remarks);

    	var profilePic = view.down('#profilePic');
    	profilePic.setValue(user.personalDetails.image);
    },

    onEditButtonTap : function(button , e , eOpts){
    	button.hide();
    	button.parent.getInnerItems()[0].setEditable(true);
    	button.parent.getInnerItems()[0].setClearable(true);
    	this.getView().down('#saveButton').setDisabled(false);
    },

    onSaveButtonTap : function(button , e , eOpts){
    	var form = this.getView();
      	if(form.validate()){
        	form.setMasked({
          		xtype : 'loadmask',
          		message : 'Registering'
        });
        var employeeJSON = this.createJSON();
        Ext.Ajax.request({
          url: Constants.url + Constants.userId +'/profile?token=' + Constants.accessToken ,
          method: 'POST',
          jsonData: employeeJSON
        }).then (function(response, opts) {
        	if(response.responseText.length > 0){
        		var employee = Ext.decode(response.responseText);
        		Constants.userDetails = employee;
        		Constants.userId = employee.employeeID;
            	form.unmask();
            	form.destroy();
            	Ext.Msg.alert("Profile Updated Successfully");
            }
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
        var designation = form.down('#designation').getValue();
        var address = form.down('#address').getValue();
        var email = form.down('#email').getValue();
        var interest = form.down('#interest').getValue();
        var remarks = form.down('#remarks').getValue();
        var profilePic = form.down('#profilePic').getValue();
        var employeeId = form.down('#empid').getValue();
        var employeeJSON = {
          "employeeID": employeeId,
          "userDetails": {
            "password": null,
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
