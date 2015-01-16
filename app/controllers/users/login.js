import Ember from 'ember';
import LoginControlllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControlllerMixin, {
  authenticator: 'authenticator:kiosko',
  actions: {
    authenticate: function() {
      var LoginController = this;
      this.set('loading', true);
      this._super().then(null, function() {
        LoginController.set('login-error', true);
        //LoginController.set('loading', false);
      });
    },
    authenticateFacebook: function() {
      this.get('session').authenticate('authenticator:facebook', 'facebook-connect');
    },
    authenticateGoogle: function() {
      this.get('session').authenticate('authenticator:google', 'google-oauth2');
    }
  }
});
