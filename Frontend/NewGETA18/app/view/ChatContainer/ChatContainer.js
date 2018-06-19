
Ext.define('GETA18.view.ChatContainer.ChatContainer',{
    extend: 'Ext.Container',

    requires: [
        'GETA18.view.ChatContainer.ChatContainerController',
        'GETA18.view.ChatContainer.ChatContainerModel'
    ],

    controller: 'chatcontainer-chatcontainer',
    viewModel: {
        type: 'chatcontainer-chatcontainer'
    },

});
