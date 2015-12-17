import DS from 'ember-data';

var Page = DS.Model.extend({
  number: DS.attr('number'),
  file_name: DS.attr('string'),
  thumb: DS.attr('string'),
  fullsize: DS.attr('string')
});

export default Page;
