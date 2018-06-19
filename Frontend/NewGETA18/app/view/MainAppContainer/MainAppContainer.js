
Ext.define('GETA18.view.MainAppContainer.MainAppContainer',{
    extend: 'Ext.Container',

    requires: [
        'GETA18.view.MainAppContainer.MainAppContainerController',
        'GETA18.view.MainAppContainer.MainAppContainerModel'
    ],

    controller: 'mainappcontainer-mainappcontainer',
    viewModel: {
        type: 'mainappcontainer-mainappcontainer'
    },

    cls : 'main-app-container'
});
