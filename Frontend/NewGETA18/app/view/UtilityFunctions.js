Ext.define('GETA18.view.UtilityFunctions',{
  singleton : true,
  alternateClassName : 'UtilityFunction',

  showMailBox : function(){
    var inboxAndSentTab = CreateView.inboxAndSentMailTab();
    inboxAndSentTab.setActiveItem(0);
    return inboxAndSentTab;
  },

  isPhone : function(){
  	if(window.innerWidth < 415){
  		return true;
  	}
  	return false;
  },

});
