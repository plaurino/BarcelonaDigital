import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

var KioskoAuthorizer = Base.extend({
  authorize: function(jqXHR) {
    if (this.get('session.isAuthenticated')) {
      if (this.get('session.provider') === 'facebook-connect') {
        jqXHR.setRequestHeader('X-Auth', 'facebook');
        jqXHR.setRequestHeader('Access_Token', this.get('session.accessToken'));
      }
      if (!Ember.isEmpty(this.get('session.token'))) {
        jqXHR.setRequestHeader('Authorization', 'Basic ' + this.get('session.token'));
      }
    }
  }
});

export default {
  name: 'kiosko-authorizer',
   before: 'simple-auth',
  initialize: function(container) {
    container.register('authorizer:kiosko', KioskoAuthorizer);
  }
};

// {"authenticator":"simple-auth-authenticator:torii","authorizationCode":"AQDD5Hdsh8NFYGIhIc30VAsJIuXHU04iWW5mHsqZEfnlZ4d5egfiI4W-Z6hjR1V_UFis2a4JNnilOA3wU9HMb1eSwlOtYENNTDGPhFNE71y-pX7g31ooi20J4R7J1rH6FdAbv2AJmscCT_RMB1hJwFDXt1r5lR8F5zD0lK-hh5zzjf2ydJlagiGpkIPCOv9EN8OmSjIJclvKVOoszfb5Ama21wY_iqXLitm9YAxaBqLCn6DuefVtkfcZNoptmpXu3ZLDbx3LH2Un7GbBfkp-jFesROJJTanRA6XlG7pbegQgEjTi0tVHtm8_fpoFmd8zMP53vK4thv9SQmpYx-Wl8LTm","provider":"facebook-oauth2","redirectUri":"http://local.revisbarcelona.com:4200/users/login"}
