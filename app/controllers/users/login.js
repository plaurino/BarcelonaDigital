import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate: function() {
      window.localStorage.setItem('user-token', window.btoa(this.get('username') + ":" + this.get('password')));
      Ember.$.ajaxPrefilter(function(options, originalOptions, xhr) {
          return xhr.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('user-token'));
      });

      this.transitionToRoute('collections.main');
    }
  }
});
