import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],
  didInsertElement: function() {
    var pageView = this;
    this.$().on('load', function() {
      pageView.set('loaded', true);
    });

    this.hideIssue();
  },
  hideIssue: function() {
    if (this.hided) {
      this.$().hide();
    } else {
      this.$().hide();
    }
  }.property('hide'),
  hided: true,
  loaded: false
});
