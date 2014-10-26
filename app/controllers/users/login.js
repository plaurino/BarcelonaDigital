import Ember from 'ember';
import LoginControlllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControlllerMixin, {
  authenticator: 'authenticator:kiosko',
  actions: {
    authenticate: function() {
      var LoginController = this;
      this._super().then(null, function(message) {
        LoginController.set('errorMessage', message);
      });
    },
    authenticateFacebook: function() {
      var _this = this;
      this.get('session').authenticate('simple-auth-authenticator:torii',
        'facebook-oauth2').then(function(data){
           console.log(data);
        });

    }
  }
});
