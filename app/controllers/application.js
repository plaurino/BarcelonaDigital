import Ember from 'ember';

export default Ember.Controller.extend({
  isUserLogged: false,
  needs: 'collections/main',
  showSidebar: Ember.computed.alias('controllers.collections/main.showSidebar'),
  actions: {
    toggleSidebar: function() {
      this.toggleProperty('showSidebar');
    },
    logout: function() {
      window.localStorage.removeItem('user-token');
      this.transitionToRoute('users.login');
    }
  }
});
