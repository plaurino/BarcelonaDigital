import DS from 'ember-data';

export default DS.Model.extend({
  coupon_code: DS.attr('string'),
  used_times: DS.attr('number'),
  limit_of_use: DS.attr('number'),
  days_of_validity: DS.attr('number'),
  created_at: DS.attr('date'),
  expired_at: DS.attr('date'),
  active: DS.attr('boolean')
});
