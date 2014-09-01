import DS from 'ember-data';
var Issue = DS.Model.extend({
  number: DS.attr('number'),
  title: DS.attr('string'),
  cover: DS.attr('string'),
  main: DS.attr('string'),
  numberTitle: function() {
    return this.get('number') + " - " + this.get('title');
  }.property('number', 'title')
});


export default Issue;
