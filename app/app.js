import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'luke', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'luke');

if (localStorage.getItem('user-token')) {
  Ember.$.ajaxPrefilter(function(options, originalOptions, xhr) {
      return xhr.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('user-token'));
  });
}

export default App;
