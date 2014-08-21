import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://104.131.243.228:8080/',
  headers: {
    Authorization: 'Basic ' + window.btoa(window.localStorage.getItem('user-token'))
  }
});
