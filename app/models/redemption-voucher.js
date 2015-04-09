import DS from 'ember-data';

export default DS.Model.extend({
  voucher: DS.belongsTo('voucher'),
  user: DS.belongsTo('user'),
  created_at: DS.attr('date'),
  status: DS.attr('string')
});
