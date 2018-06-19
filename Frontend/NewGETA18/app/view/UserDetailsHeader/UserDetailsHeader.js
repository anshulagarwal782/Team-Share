
Ext.define('GETA18.view.UserDetailsHeader.UserDetailsHeader',{
    extend: 'Ext.Container',
    xtype : 'userDetailsHeader',
    requires: [
        'GETA18.view.UserDetailsHeader.UserDetailsHeaderController',
        'GETA18.view.UserDetailsHeader.UserDetailsHeaderModel'
    ],

    controller: 'userdetailsheader-userdetailsheader',
    viewModel: {
        type: 'userdetailsheader-userdetailsheader'
    },
    items: [{
        xtype: 'image',
        plugins: 'responsive',
        cls: 'profile-image',
        itemId: 'profileImage',
        docked: 'left',
        responsiveConfig: {
            'width < 415': {
                hidden: true
            },
            'width >= 415': {
                hidden: false
            }

        },
      }, {
        xtype: 'container',
        flex: 1,
        margin: '0 20',
        plugins: 'responsive',
        layout: {
            type: 'vbox',
        },
         responsiveConfig: {
            'width < 415': {
                layout: {
                   type: 'vbox',
                   pack : 'center'
                },
            }

        },
        items: [{
            xtype: 'label',
            cls: 'nameStyle',
            itemId: 'profileName',
        }, {
            xtype: 'label',
            cls: 'designationStyle',
            itemId: 'profileDesignation',
        }],
       
    }, {
        xtype: 'container',
        docked: 'right',
        itemId : 'buttonContainer',
        plugins: 'responsive',
        flex: 1,
        responsiveConfig: {
            'width < 855 && width >= 800': {
                layout: {
                    type: 'vbox',
                    pack: 'center'
                }
            },
            'width >= 855': {
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'center'
                },
            },
            'width < 800': {
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    //pack: 'center'
                },
            },

        },

        items: [
          {
             xtype: 'button',
             iconCls: 'x-fa fa-comment',
             ui: 'round',
             floating: true,
             itemId : 'chat',
             height: 50,
             width: 50,
             cls: 'chat',
             tooltip: {
                 html: 'chat',
                 anchor: true
             },
             plugins : 'responsive',
             responsiveConfig : {
               'width < 415' : {
                 height : 40,
                 width : 40,
                 cls : 'socialMobileIcon'
               }
             }
           },{
              xtype: 'button',
              iconCls: 'md-icon-email',
              ui: 'round',
              floating: true,
              itemId : 'mail',
              height: 50,
              width: 50,
              cls: 'mails',
              tooltip: {
                  html: 'Compose Mail',
                  anchor: true
              },
              plugins : 'responsive',
              responsiveConfig : {
                'width < 415' : {
                  height : 40,
                  width : 40,
                  cls : 'socialMobileIcon'
                }
              }
            }
        ]
    }],

});
