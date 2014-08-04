import Ember from 'ember';


export default Ember.Controller.extend({
  actions: {
    authenticate: function() {
      this.transitionToRoute('collection.main');
    }
  }
});
