import DS from 'ember-data';
var Collections = DS.Model.extend({
  name: DS.attr('string'),
  issues: DS.hasMany('issue', {async: true})
});

Collections.reopenClass({
  FIXTURES: [
    {
        "id": "53b615385b1a700000e4c54b",
        "name": "Barcelona",
        "issues" : ["53b3791643875a10e359feee", "53b3791643875a10e359feee", "53b3791643875a10e359feee"]
    }
  ]
});

export default Collections;
