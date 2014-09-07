import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "http://0.0.0.0:3000"
});
