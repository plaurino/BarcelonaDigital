import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate: function() {
      window.localStorage.setItem('user-token', this.get('username') + ":" + this.get('password'));
      this.transitionToRoute('collections.main');
    }
  }
});
