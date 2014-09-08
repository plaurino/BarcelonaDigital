import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    Ember.$('body').addClass('collection-body');
  },
  model: function() {
    return this.store.find('collection');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('subscription', this.store.find('subscription', 1));
  },
  actions: {
    error: function() {
      window.Ladda.stopAll();
      window.localStorage.removeItem('user-token');
      this.controllerFor('users.login').set('login-error', true);
      this.transitionTo('users.login');
    }
  }
});
