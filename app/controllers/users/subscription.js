import Ember from 'ember';
import ENV from 'luke/config/environment';

export default Ember.Controller.extend({
  actions:{
    redeemVouchers: function(){
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
            controller.set('isSending', false);
            controller.set('redeem-error', null);
            controller.set('redeem-success', 'Congratulations\'re already subscribed.');
            controller.transitionToRoute('collections.main');
          },
          error: function (xhr, textStatus, errorThrown) {
            controller.set('isSending', false);
            controller.set('redeem-error', xhr.responseJSON.error);
            controller.set('redeem-success', null);
          }
        });
      });
    }
  }
});
