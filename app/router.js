import Ember from 'ember';

var Router = Ember.Router.extend({
  location: LukeENV.locationType
});

Router.map(function() {
  this.resource('users', function() {
    this.route('create');
    this.route('login');
    this.route('recover');
    this.resource('subscription', function() {
      this.route('add');
    });
  });

  this.resource('collections', function() {
    this.route('main');
  });

  this.route('issue', {
    path: 'issue/:id'
  });
});

export default Router;
