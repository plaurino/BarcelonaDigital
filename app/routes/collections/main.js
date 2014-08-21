import Ember from 'ember';


export default Ember.Route.extend({
  model: function() {
    return this.store.find('collection');
  },
  actions: {
    error: function() {
      this.transitionTo('users.login');
    }
  }
});
