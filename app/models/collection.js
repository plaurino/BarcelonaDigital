import DS from 'ember-data';
var Collections = DS.Model.extend({
  name: DS.attr('string'),
  issues: DS.hasMany('issue', {async: true})
});

export default Collections;
