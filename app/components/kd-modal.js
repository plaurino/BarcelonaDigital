import Ember from 'ember';

export default Ember.Component.extend({
  show: function() {
    var view = this;

    this.$('.modal').modal();
    this.$('.modal').on('hidden.bs.modal', function() {
      view.get('origContext').set('collection_id', null);
      view.get('origContext').set('collection_status', null);
      view.get('origContext').set('preference_id', null);
      view.get('origContext').set('external_reference', null);
      view.get('origContext').set('payment_type', null);
    });
  }.on('didInsertElement'),
  actions: {
    cancel: function () {
      this.$('.modal').modal('hide');
    }
  }
});
