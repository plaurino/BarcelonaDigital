import Ember from 'ember';


export default Ember.Controller.extend({

  queryParams: [
    'collection_id',
    'collection_status',
    'preference_id',
    'external_reference',
    'payment_type',
    'preapproval_id',
    'paymentId',
    'token',
    'PayerID'
  ],

  //mercadopago params
  collection_id: null,
  collection_status: null,
  preference_id: null,
  external_reference: null,
  payment_type: null,
  preapproval_id: null,

  //paypal params
  paymentId: null,
  token: null,
  PayerID: null,

  pending: function (){
    return this.get('collection_status') === 'pending';
  }.property('collection_status'),
  error: function() {
    return this.get('collection_status') === 'null';
  }.property('collection_status'),
  approved: function() {
    return this.get('collection_status') === 'approved' || this.get('paymentId') != null || this.get('preapproval_id') != null || (!this.get('paymentId') && !this.get('preapproval_id') && this.get('token') != null);
  }.property('collection_status'),

  init: function () {
    this.set('second', 5);
  },

  timer: function () {
    var controller = this;
    setTimeout(function(){
      if(controller.get('second') === 1) {
        controller.transitionToRoute('collections.main');
      } else if(controller.get('second') > 0) {
        controller.decrementProperty('second');
        controller.timer();
      }
    }, 1000);
  }

});
