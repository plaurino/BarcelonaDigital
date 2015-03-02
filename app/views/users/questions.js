import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    this._super();
    var view = this;
    view.$().find('.question').click(function(){
      if (view.$(this).next().css('display') === 'none') {
        view.$().find('.answer').hide();
        view.$(this).next().show();
      } else {
        view.$(this).next().hide();
      }
    });
  }
});
