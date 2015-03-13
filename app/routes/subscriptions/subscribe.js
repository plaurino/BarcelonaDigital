import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import config from '../../config/environment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {

    var router = this;

    if(params.collection_id !== null) {

      //register mercadopago regular payment
      Ember.$.ajax(config.APP.KIOSKO + '/payments/mp-regular-process', {
        "type": 'POST',
        "dataType": 'JSON',
        "data": {
          id: params.collection_id,
          preference: params.preference_id
        }
      }).done(function (data) {
        if(data.status === 'OK') {
          router.get('controller').timer();
        }
      }).fail(function(data){
        Ember.$(document).find('.message').append(data.responseJSON.error);
        router.get('controller').timer();
      });

    } else if(params.paymentId != null) {

      //register paypal payment
      Ember.$.ajax(config.APP.KIOSKO + '/payments/pp-process', {
        "type": 'POST',
        "dataType": 'JSON',
        "data": {
          id: params.paymentId,
          payer: params.PayerID,
          token: params.token
        }
      }).done(function (data) {
        if(data.status === 'OK') {
          router.get('controller').timer();
        }
      }).fail(function(data){
        Ember.$(document).find('.message').append(data.responseJSON.error);
        router.get('controller').timer();
      });
    } else if(params.preapproval_id !== null) {

      //register mercadopago recurrent payment
      Ember.$.ajax(config.APP.KIOSKO + '/payments/mp-recurrent-process', {
        "type": 'POST',
        "dataType": 'JSON',
        "data": {
          id: params.preapproval_id
        }
      }).done(function (data) {
        if(data.status === 'OK') {
          router.get('controller').timer();
        }
      }).fail(function(data){
        Ember.$(document).find('.message').append(data.responseJSON.error);
        router.get('controller').timer();
      });

    }
    var subscriptions = this.store.find('subscription');

    subscriptions.then(function (subscriptions) {
      if(subscriptions.get('content').length > 0) {
        router.set('subscription', subscriptions.get('content')[0]);
      } else {
        router.set('subscription', null);
      }
    });

    return subscriptions;
  },

  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
