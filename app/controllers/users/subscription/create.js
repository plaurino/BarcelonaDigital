import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    pay: function(e) {
      var thisController;
      e.preventDefault();
      var $form = Ember.$(this);

      window.Checkout.createToken($form, function(status, response) {
        if (response.errror) {
          thisController.set('payment-error', true);
        } else {
          // create new subscription
        }
      });
    }
  }
});
