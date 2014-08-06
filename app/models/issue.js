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
      "cover" : "http://127.0.0.1:4200/311/tapa.png",
      "main" : "http://127.0.0.1/311/"
    },
    {
      "id" : "53b3792643875a10e359feef",
      "number" : "251",
      "title" : "Ortos rotos",
      "cover" : "http://127.0.0.1:4200/311/tapa.png",
      "main" : "http://127.0.0.1/311/"
    },
    {
      "id" : "53b3795543875a10e359fef0",
      "number" : "252",
      "title" : "Vaselinha",
      "cover" : "http://127.0.0.1:4200/311/tapa.png",
      "main" : "http://127.0.0.1/311/"
    }
  ]
});


export default Issue;
