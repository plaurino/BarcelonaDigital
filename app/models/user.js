import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  facebook_id: DS.attr('string'),
  google_id: DS.attr('string'),
  created_at: DS.attr('date'),
  modified_at:DS.attr('date'),
  active: DS.attr('boolean')
});
