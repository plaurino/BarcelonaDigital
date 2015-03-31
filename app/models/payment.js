import DS from 'ember-data';

export default DS.Model.extend({
  platform: {
    mercadopago:{
      id: DS.attr('string'),
      preference_id: DS.attr('string'),
      preapproval_id: DS.attr('string'),
      status: DS.attr('string'),
      payer: {
        id: DS.attr('string'),
        email: DS.attr('string'),
        nickname: DS.attr('string')
      }
    },
    paypal: {
      id: DS.attr('string'),
      token: DS.attr('string'),
      status: DS.attr('string'),
      payer: {
        id: DS.attr('string'),
        email: DS.attr('string')
      }
    }
  },
  status: DS.attr('string'),
  description: DS.attr('string'),
  created_at: DS.attr('date'),
  amount: DS.attr('number'),
  discount_amount: DS.attr('number'),
  currency: DS.attr('string'),
  type: DS.attr('string')
});
