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
      this.transitionTo('users.login');
    }
  }
});
