import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    hideSidebar: function() {
      this.sendAction();
    }
  }
});
