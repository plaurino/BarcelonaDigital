import Ember from 'ember';

export default Ember.Controller.extend({
  isUserLogged: false,

  actions: {
    logout: function() {
      window.localStorage.removeItem('user-token');
      this.transitionToRoute('users.login');
    }
  }
});
