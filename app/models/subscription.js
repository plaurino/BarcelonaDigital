import DS from 'ember-data';

export default DS.Model.extend({
  active: DS.attr('boolean'),
  created_at: DS.attr('date'),
  modified_at: DS.attr('date'),
  expired_at: DS.attr('date'),
  duration: DS.attr('number'),
  status: DS.attr('string'),
  owner: DS.belongsTo('user')
});
