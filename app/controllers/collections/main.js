import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    logout: function() {
      window.localStorage.removeItem('user-token');
      this.transitionToRoute('index');
    }
  }
});
