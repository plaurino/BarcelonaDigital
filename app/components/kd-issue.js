import Ember from 'ember';

export default Ember.Component.extend({
  selected: 0,
  actions: {
    next: function() {
      if (this.get('selected') === this.get('issues.pages').content.length-1) {
          this.set('selected', 0);
      } else {
        this.incrementProperty('selected');
      }
    },
    prev: function() {
      if (this.get('selected') === 0 ) {
        this.set('selected', this.get('issues.pages').content.length-1);
      } else {
        this.decrementProperty('selected');
      }
    }
  }
});
