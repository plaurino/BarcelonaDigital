import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import ENV from 'luke/config/environment';


var KioskoAuthenticator = Base.extend({
  tokenEndPoint: ENV.APP.TOKEN_URL,
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
    var authenticator = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: authenticator.tokenEndPoint,
        type: 'POST',
        contentType: 'application/json',
        headers: {
          'Authorization': 'Basic ' + window.btoa(credentials.identification + ':' + credentials.password)
        }
      }).then(function(response) {
        Ember.run(function() {
          //console.log(response.session);
          resolve({token: response.session.token});
        });
      }, function(xhr) {
        //console.log(xhr);
        Ember.run(function() {
          reject(xhr.responseText);
        });
      });
    });
  },

  invalidate: function() {
    var authenticator = this;
    //console.log(this.get('session'));
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.ajax({url: authenticator.tokenEndPoint, type: 'DELETE'})
        .always(function() {
          resolve();
        });
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
