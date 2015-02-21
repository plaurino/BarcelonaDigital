import Ember from 'ember';

export default Ember.ArrayController.extend({
  //the query params are set when we return from mercadopago payments
  //the query params are:
  //-collection_id
  //-collection_status
  //-preference_id
  //-external_reference
  //-payment_type
  queryParams: ['collection_id', 'collection_status', 'preference_id', 'external_reference', 'payment_type'],
  collection_id: null,
  collection_status: null,
  preference_id: null,
  external_reference: null,
  payment_type: null,

  isPending: function (){
    return this.get('collection_status') === 'pending';
  }.property('collection_status'),
  isCanceled: function() {
    return this.get('collection_status') === 'null';
  }.property('collection_status'),
  isApproved: function() {
    return this.get('collection_status') === 'approved';
  }.property('collection_status')
});
