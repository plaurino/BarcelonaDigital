import Ember from 'ember';

var Router = Ember.Router.extend({
  location: LukeENV.locationType
});

Router.map(function() {
  this.resource('users', function() {
    this.route('login');
    this.route('create');
    this.route('recover');
  });

  this.route('collections', function() {
    this.route('main');
  });

  this.resource('issue', function() {
    this.route('view', {
      path: 'view/:id'
    });
  });
});

export default Router;
