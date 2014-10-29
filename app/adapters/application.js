import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://revisbarcelona.com:8080'
});
