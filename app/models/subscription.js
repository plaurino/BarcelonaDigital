import DS from 'ember-data';

export default DS.Model.extend({
  active: DS.attr('boolean'),
  createdAt: DS.attr('date'),
  mp_payment_link: DS.attr('string')
});
