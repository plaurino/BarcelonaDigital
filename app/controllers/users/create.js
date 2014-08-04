import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function() {
      this.transitionToRoute('collection.main');
    }
  }
});
