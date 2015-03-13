import DS from 'ember-data';

export default DS.Model.extend({
  platform: DS.attr('string'), // mercadopago | paypal
  payment_id: DS.attr('string'),
  preference_id: DS.attr('string'),
  token: DS.attr('string'),
  status: DS.attr('string'),
  description: DS.attr('string'),
  created_at: DS.attr('date')
});
