import DS from 'ember-data';

var Page = DS.Model.extend({
  url: DS.attr('string'),
  number: DS.attr('number')
});

export default Page;
