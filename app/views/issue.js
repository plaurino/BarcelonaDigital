import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var that = this;
    this.$('#issue').on('load', function() {
      that.$('.loading').hide();
      that.$(this).show();
    });
  }
});
