import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    this.refresh();
    return this.store.find('issue', params.id);
  }
});
