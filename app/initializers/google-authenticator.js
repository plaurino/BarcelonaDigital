import Ember from 'ember';
import Base from 'simple-auth-oauth2/authenticators/oauth2';
import ENV from 'luke/config/environment';


var GoogleAuthenticator = Base.extend({
  tokenEndPoint: ENV.APP.TOKEN_URL,
  torii: null,
  provider: "google-oauth2",
  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate: function() {
    var authenticator = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      authenticator.torii.open(authenticator.provider).then(function(googleData) {
        console.log(googleData);
        Ember.$.ajax({
          url: authenticator.tokenEndPoint,
          type: 'POST',
          contentType: 'application/json',
          headers: {
            'Authorization': 'Google ' + googleData.authorizationCode
          }
        }).then(function (response) {
          Ember.run(function () {
            console.log(response.session);
            resolve({token: response.session.token});
          });
        }, function (xhr) {
          console.log(xhr);
          Ember.run(function () {
            reject(xhr.responseText);
          });
        });
      });
    });
  },

  invalidate: function() {
    var authenticator = this;
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.ajax({url: authenticator.tokenEndPoint, type: 'DELETE'})
        .always(function() {
          resolve();
        });
    });
  }
});

export default {
  name: 'auth-google',
    before: 'simple-auth',
    after: 'torii',
    initialize: function(container) {
    var torii = container.lookup('torii:main');
    var authenticator = GoogleAuthenticator.create({
      torii: torii
    });
    container.register('authenticator:google', authenticator, { instantiate: false });
  }
};
