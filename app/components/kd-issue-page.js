import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['selectedPage::hide'],
  classNames: ['issue-page'],
  handleImageLoad: function() {
    var pageView = this;
    this.$().children('img').one('load', function() {
      Ember.run(function() {
        pageView.set('loaded', true);
      });
    });
  }.on('didInsertElement'),
  activateSwipeEvents: function() {
    var pageView = this;
    var hammer = new window.Hammer(this.$()[0], {});

    hammer.on('swipeleft', function() {
      Ember.run(function() {
        pageView.sendAction('next');
      });
    });

    hammer.on('swiperight', function() {
      Ember.run(function() {
        pageView.sendAction('prev');
      });
    });
  }.on('didInsertElement'),
  selectedPage: function() {
    return this.get('selected') === this.get('number');
  }.property('selected'),
  actions: {
    next: function() {
      this.sendAction('next');
    }
  }
});
