import Ember from 'ember';
import ENV from 'luke/config/environment';

export default Ember.Controller.extend({
  actions:{
    redeemVouchers: function(){
      console.log('envio exitoso');

      var controller = this;
      controller.set('isSending', true);

      Ember.$(function() {
        $.ajax({
          type: "POST",
          url: ENV.APP.KIOSKO + "/vouchers/redeem/subscription_plan",
          dataType: "json",
          async: false,
          data: {
            "coupon_code": controller.get('code')
          },
          success: function (data) {
            console.log(data);
            controller.set('isSending', false);
            controller.set('redeem-error', null);
            controller.set('redeem-success', 'Congratulations\'re already subscribed.');
            controller.transitionToRoute('collections.main');
          },
          error: function (xhr, textStatus, errorThrown) {
            console.log(xhr);
            controller.set('isSending', false);
            controller.set('redeem-error', xhr.responseJSON.error);
            controller.set('redeem-success', null);
          }
        });
      });
    }
  }
});
