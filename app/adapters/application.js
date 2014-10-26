import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://local.revisbarcelona.com:3000'
});
