import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000',
  headers: {
    Authorization: 'Basic ' + window.btoa(window.localStorage.getItem('user-token'))
  }
});
