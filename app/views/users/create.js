import Ember from 'ember';
import ENV from 'luke/config/environment';

export default Ember.View.extend({
  didInsertElement: function() {
    this._super();

    this.$(function() {
      $.validator.addMethod("validateUsername", function (value, element) {
        var isSuccess = false;

        $.ajax({
          type: "POST",
          url: ENV.APP.KIOSKO + "/users/check",
          dataType: "json",
          async: false,
          data: {
            "username": value
          },
          success: function (data) {
            console.log(data);
            if (data.exist === false) {
              isSuccess = true;
            }
          },
          error: function (xhr, textStatus, errorThrown) {
            console.log(xhr);
            isSuccess = false;
          }
        });

        return isSuccess;

      }, 'El usuario que ha ingresado ya esta siendo utilizado.');
    });

    this.$('.register-form').validate({
      //onkeyup: false, //This disables the keyup event validation
      rules: {
        username: {
          required: true,
          email: true,
          validateUsername: true
        },
        password: {
          required: true,
          minlength: 8
        },
        confirm_password: {
          equalTo: "#password"
        }
      },
      errorPlacement: function(error, element) {
        error.insertBefore(element);
      },
      messages: {
        username: {
          required: "El nombre de usuario es requerido.",
          email: "Ingrese un email válido."
        },
        password: {
          required: "La contraseña es requerida.",
          minlength: "La contraseña debe contener al menos 8 caracteres."
        },
        confirm_password: {
          equalTo: "Las contraseñas no coinciden."
        }
      }
    });
  }
});
