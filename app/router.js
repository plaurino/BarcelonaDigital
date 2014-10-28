import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', function() {
    this.route('login');
    this.route('create');
    this.route('recover');
    //nico
    this.route('contact-us');
    this.route('profile');
    this.route('questions');
    this.route('suscription');
    //nico-fin
  });


  this.route('collections', function() {
    this.route('main');
  });

  this.resource('issue', function() {
    this.route('view', {
      path: 'view/:id'
    });
  });

  this.resource('subscriptions', function() {
    this.route('options');
    this.route('subscribe', {
      path: 'subscribe/:id'
    });
  });
});

export default Router;
