import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['selectedPage:show:hide'],
  classNames: ['issue-page'],
  viewedPages: [],
  handleImageLoad: function() {
    var pageView = this;
    var image = pageView.$().children('img');

    image.one('load', function() {
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

    hammer.on('doubletap', function() {
      if(pageView.get('activatedZoom')){
        Ember.run(function() {
          pageView.sendAction('zoomOut', pageView.get('number'));
        });
      } else {
        Ember.run(function() {
          pageView.sendAction('zoomIn', pageView.get('number'));
        });
      }
      console.log("double tap");
    });

  }.on('didInsertElement'),
  selectedPage: function() {
    var pageView = this;
    pageView.set('viewedPages', pageView.get('selected'));
    if(pageView.get('activatedZoom')){
      return pageView.get('selected') === pageView.get('number');
    } else {
      var currentSelected = pageView.get('selected');
      return currentSelected.contains(pageView.get('number'));
    }
  }.property('selected'),
  actions: {
    next: function() {
      this.sendAction('next');
    }
  }
});
