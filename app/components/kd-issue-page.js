import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['selectedPage:show:hide'],
  classNames: ['issue-page'],
  handleImageLoad: function() {
    var pageView = this;
    var image = pageView.$().children('img');

    image.one('load', function() {
      Ember.run(function() {
        pageView.set('loaded', true);

        //var height = (pageView.$(window).height() - 75);
        //image.attr('height', height);
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
    var currentSelected = this.get('selected');
    return currentSelected.contains(this.get('number'));
  }.property('selected'),
  actions: {
    next: function() {
      this.sendAction('next');
    }
  }
});
