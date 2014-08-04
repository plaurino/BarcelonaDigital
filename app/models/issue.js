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

Issue.reopenClass({
  FIXTURES: [
    {
      "id" : "53b3791643875a10e359feee",
      "number" : "250",
      "title" : "Peron Aniversario",
      "assets" : {
          "cover" : "http://link.to/250/cover.png",
          "main" : "http://link.to/250/magazine.pdf"
      }
    },
    {
      "id" : "53b3792643875a10e359feef",
      "number" : "251",
      "title" : "Ortos rotos",
      "assets" : {
          "cover" : "http://link.to/251/cover.png",
          "main" : "http://link.to/251/magazine.pdf"
      }
    },
    {
      "id" : "53b3795543875a10e359fef0",
      "number" : "252",
      "title" : "Vaselinha",
      "assets" : {
          "cover" : "http://link.to/252/cover.png",
          "main" : "http://link.to/252/magazine.pdf"
      }
    }
  ]
});


export default Issue;
