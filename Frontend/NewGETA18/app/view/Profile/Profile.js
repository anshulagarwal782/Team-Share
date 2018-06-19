Ext.define('GETA18.view.Profile.Profile', {
    extend: 'Ext.form.Panel',

    requires: [
        'GETA18.view.Profile.ProfileController',
        'GETA18.view.Profile.ProfileModel'
    ],

    controller: 'profile-profile',
    viewModel: {
        type: 'profile-profile'
    },

    title: 'Profile',

    items: [{
        xtype: 'fieldset',
        title: 'User Information',
        margin: '20 0 0',
        items: [{
            xtype: 'container',
            layout: 'hbox',
            width: '100%',
            items: [{
                xtype: 'textfield',
                label: 'Employee Id',
                width: '100%',
                allowBlank: false,
                editable: false,
                clearable: false,
                required: true,
                itemId: 'empid',
                name: 'employeeID'
            }, {
                xtype: 'button',
                iconCls: 'md-icon-edit',
                style: 'position : absolute',
                right: 0,
                top: 20,
                listeners: {
                    tap: 'onEditButtonTap'
                }
            }]
        }]
    }, {
        xtype: 'fieldset',
        title: 'Personal Information',
        margin: '20 0 0',

        items: [{
            xtype: 'container',
            layout: 'hbox',
            width: '100%',
            items: [{
                xtype: 'textfield',
                label: 'Full Name',
                editable: false,
                clearable: false,
                allowBlank: false,
                required: true,
                itemId: 'fullName',
                name: 'name',
                width: '100%'
            }, {
                xtype: 'button',
                iconCls: 'md-icon-edit',
                style: 'position : absolute;',
                right: 0,
                top: 20,
                listeners: {
                    tap: 'onEditButtonTap'
                }
            }]
        }, {
            xtype: 'selectfield',
            label: 'Designation',
            allowBlank: false,
            required: true,
            editable: false,
            itemId: 'designation',
            name: 'designation',
            options: [{
                text: 'Manager',
                value: 'Manager'
            }, {
                text: 'Software Engineer',
                value: 'Software Engineer'
            }]
        }, {
            xtype: 'container',
            layout: 'hbox',
            width: '100%',
            items: [{
                xtype: 'textareafield',

                label: 'Address',
                allowBlank: false,
                editable: false,
                clearable: false,
                required: true,
                itemId: 'address',
                name: 'address',

                width: '100%'
            }, {
                xtype: 'button',
                iconCls: 'md-icon-edit',
                style: 'position : absolute;',
                right: 0,
                top: 20,
                listeners: {
                    tap: 'onEditButtonTap'
                }
            }]
        }, {
            xtype: 'container',
            layout: 'hbox',
            width: '100%',
            items: [{
                xtype: 'emailfield',
                label: 'Email',
                name: 'email',
                editable: false,
                clearable: false,
                allowBlank: false,
                required: true,
                itemId: 'email',
                validators: 'email',

                width: '100%'
            }, {
                xtype: 'button',
                iconCls: 'md-icon-edit',
                style: 'position : absolute;',
                right: 0,
                top: 20,
                listeners: {
                    tap: 'onEditButtonTap'
                }
            }]
        }, {
            xtype: 'container',
            layout: 'hbox',
            width: '100%',
            items: [{
                xtype: 'textfield',
                label: 'Interest',
                allowBlank: false,
                editable: false,
                clearable: false,
                required: true,
                itemId: 'interest',
                name: 'interest',

                width: '100%'
            }, {
                xtype: 'button',
                iconCls: 'md-icon-edit',
                style: 'position : absolute;',
                right: 0,
                top: 20,
                listeners: {
                    tap: 'onEditButtonTap'
                }
            }]
        }, {
            xtype: 'container',
            layout: 'hbox',
            width: '100%',
            items: [{
                xtype: 'textfield',
                label: 'Remarks',
                editable: false,
                clearable: false,
                allowBlank: false,
                required: true,
                itemId: 'remarks',
                name: 'remarks',

                width: '100%'
            }, {
                xtype: 'button',
                iconCls: 'md-icon-edit',
                style: 'position : absolute;',
                right: 0,
                top: 20,
                listeners: {
                    tap: 'onEditButtonTap'
                }
            }]
        }, {
            xtype: 'container',
            layout: 'hbox',
            width: '100%',
            items: [{
                xtype: 'textfield',
                label: 'Profile Pic URL',
                editable: false,
                clearable: false,
                itemId: 'profilePic',
                name: 'pic',

                width: '100%'
            }, {
                xtype: 'button',
                iconCls: 'md-icon-edit',
                style: 'position : absolute;',
                right: 0,
                top: 20,
                listeners: {
                    tap: 'onEditButtonTap'
                }
            }]

        }]
    }],
    buttons : [{
        text : 'save',
        disabled : true,
        itemId : 'saveButton',
        listeners : {
            tap : 'onSaveButtonTap'
        }
    }]
});
