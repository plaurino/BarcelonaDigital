import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('collections.main');
    } else {
      this.transitionTo('users.login');
    }
  }
});
