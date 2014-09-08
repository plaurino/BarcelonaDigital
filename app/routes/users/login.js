import Ember from 'ember';

export default Ember.Route.extend({
  activate: function(){
    if (window.localStorage.getItem('user-token')) {
      this.transitionTo('collections.main');
    }
  }
});
