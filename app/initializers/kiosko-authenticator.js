import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

var KioskoAuthenticator = Base.extend({
  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
        if (!Ember.isEmpty(data.token)) {
          resolve(data);
        } else {
          reject();
        }
    });
  },

  authenticate: function(credentials) {
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.run(function() {
        resolve({
          token: window.btoa(credentials.identification + ':' + credentials.password)
        });
      });
    });
  },

  invalidate: function() {
    return new Ember.RSVP.Promise(function(resolve) {
        resolve();
    });
  }
});

export default {
  name: 'auth',
  before: 'simple-auth',
  initialize: function(container) {
    container.register('authenticator:kiosko', KioskoAuthenticator);
  }
};
