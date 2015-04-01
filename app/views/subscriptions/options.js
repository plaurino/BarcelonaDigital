import Ember from 'ember';
import ENV from 'luke/config/environment';

export default Ember.View.extend({
  didInsertElement: function() {
    var view = this;
    view._super();

    view.$(document).on('enableValidationForm', function(){
      view.$(function() {
        $.validator.addMethod("validateCouponCode", function (value, element) {
          var isSuccess = false;

          $.ajax({
            type: "POST",
            url: ENV.APP.KIOSKO + "/vouchers/check",
            dataType: "json",
            async: false,
            data: {
              "coupon_code": value
            },
            success: function (data) {
              if (data.valid === true) {
                isSuccess = true;
              }
            },
            error: function (xhr, textStatus, errorThrown) {
              isSuccess = false;
            }
          });

          return isSuccess;

        }, 'El codigo ingresado no es valido.');
      });

      view.$('.form-deals').validate({
        rules: {
          code: {
            required: true,
            validateCouponCode: true
          }
        },
        errorPlacement: function(error, element) {
          error.insertBefore(element);
        },
        messages: {
          code: {
            required: "El codigo es requerido."
          }
        }
      });
    });

    view.$(document).trigger('enableValidationForm');
  }
});

