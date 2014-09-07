import DS from 'ember-data';

var Page = DS.Model.extend({
  url: DS.attr('string'),
});

export default Page;
