import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var zoom_level = 1;
    Ember.$('.issue')
      .children('.page').hide()
      .on('click', function() {
        var next_issue = Ember.$(this).hide().next().next().next();
        if(next_issue.length) {
          next_issue.show();
        } else {
          Ember.$('.page').first().show();
        }
      })
      .first().show();

      Ember.$('.zoom-out').on('click', function() {
        zoom_level = 0.5;

        Ember.$('.page').css({
          transform: 'scale(' + zoom_level + ', ' + zoom_level + ')'
        });
      });

      Ember.$('.zoom-in').on('click', function() {
        zoom_level = 1;

        Ember.$('.page').css({
          transform: 'scale(' + zoom_level + ', ' + zoom_level + ')'
        });
      });
  }
});
