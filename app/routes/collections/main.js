import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    Ember.$('body').addClass('collection-body');
  },
  model: function() {
    return this.store.find('collection');
  },
  actions: {
    error: function() {
      window.Ladda.stopAll();
      this.controllerFor('users.login').set('login-error', true);
      this.transitionTo('users.login');
    }
  }
});
