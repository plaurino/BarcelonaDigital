import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    alert('what?');
    Ember.$('body').addClass('collection-body');
  }
});
