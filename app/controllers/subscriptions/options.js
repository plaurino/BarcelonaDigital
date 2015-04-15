import Ember from 'ember';
import ENV from 'luke/config/environment';

export default Ember.Controller.extend({

  redeemedVoucher: false,

  getSubscriptionPayments: function() {
    var controller = this;
    if(controller.get('redeemedVoucher')) {
      controller.set('payment_method', false);
      this.store.find('payment_method', this.get('selectedSubscription'))
        .then(function (data) {
          controller.set('payment_method', data);
        });
    }
  }.observes('redeemedVoucher'),

  changeSubscriptionPayments: function(){
    var controller = this;
    controller.set('payment_method', false);
    controller.set('redeemedVoucher', false);
    controller.checkValidationForm();
    controller.checkRedeemedVoucher();
  }.observes('selectedSubscription'),

  checkValidationForm: function() {
    var controller = this;
    setTimeout(function(){
      if(Ember.$('.form-deals').length > 0) {
        Ember.$(document).trigger('enableValidationForm');
      } else {
        controller.checkValidationForm();
      }
    }, 1000);
  },

  actions: {

    setSubscription1: function() {
      Ember.run(function() {
        this.set('selectedSubscription', '1');
      }.bind(this));
    },

    setSubscription3: function() {
      this.set('selectedSubscription', '3');
    },

    setSubscription6: function() {
      this.set('selectedSubscription', '6');
    },

    redeemVouchers: function(){
      var controller = this;
      controller.set('isSending', true);

      Ember.$(function() {
        $.ajax({
          type: "POST",
          url: ENV.APP.KIOSKO + "/vouchers/redeem/discount_coupon",
          dataType: "json",
          async: false,
          data: {
            "coupon_code": controller.get('code')
          },
          success: function (data) {
            controller.set('redeem-error', null);
            controller.set('redeem-success', 'Perfecto!! Has canjeado tu codigo de descuento.');
            controller.set('redeemedVoucher', true);
            controller.checkRedeemedVoucher();
          },
          error: function (xhr, textStatus, errorThrown) {
            controller.set('redeem-error', xhr.responseJSON.error);
            controller.set('redeem-success', null);
            controller.set('redeemedVoucher', false);
            controller.checkRedeemedVoucher();
          }
        });
      });
    },

    skipVouchers: function(){
      var controller = this;
      controller.set('redeemedVoucher', true);
    }
  },

  checkRedeemedVoucher: function(){
    var controller = this;
    controller.store.find('redemption_voucher').then(function(redemptionVouchers){
      if(redemptionVouchers.content.length > 0){
        var voucher = redemptionVouchers.content[0].get('voucher');
        controller.set('voucher', voucher.get('coupon_code'));
      }
      controller.set('isSending', false);
    });
  }
});
