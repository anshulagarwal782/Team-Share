Ext.define('GETA18.view.UserDetailsHeader.UserDetailsHeaderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userdetailsheader-userdetailsheader',

    config: {
        showSocialIcons: true,
        showContactImage: true,
        parentViewController: null,
        currentUser: null,
        control: {
            '#mail': {
                tap: 'mailForm'
            },
            '#chat': {
                tap: 'openChatPanel'
            }
        }
    },

    init: function () {
        this.setShowSocialIcons(Constants.socialIcons);
        this.setShowContactImage(Constants.contactImages);
    },

    setData: function (data) {
        var view = this.getView();
        view.down('#buttonContainer').setHidden(!this.getShowSocialIcons());
        view.down("#profileName").setHtml(data.personalDetails.name);
        view.down("#profileDesignation").setHtml(data.personalDetails.designation);
        var profileImage = 'https://goo.gl/2Ct8aB';
        if (this.getShowContactImage()) {
            profileImage = data.personalDetails.image;
        }
        view.down("#profileImage").setSrc(profileImage);
        this.setCurrentUser(data);
    },

    mailForm: function (button, e, eOpts) {
        var emailForm = CreateView.emailForm();
        if(!UtilityFunction.isPhone()){
          emailForm.showBy(Ext.Viewport, "c-c");
        }
        else{
          emailForm.showBy();
        }
        emailForm.getController().populateReceiverField(this.getCurrentUser().personalDetails.email);
    },

    openChatPanel : function(){
      //Get chat panel if already open else create one
      var user = this.getCurrentUser();
      ChatService.openChatPanel(user.employeeID, user.personalDetails.name);
    }

});
