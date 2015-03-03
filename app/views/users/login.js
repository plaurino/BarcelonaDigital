import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    this._super();
    this.set('controller.ladda', this.$('.btn-enter').ladda());
  }
});
