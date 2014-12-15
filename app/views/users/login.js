import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    this._super();
    this.ladda = this.$('.btn-enter').ladda();
  },

  onLoading: function() {
    if (this.get('loading')) {
      this.ladda.start();
    } else {
      this.ladda.stop();
    }
  }.property('loading')

});
