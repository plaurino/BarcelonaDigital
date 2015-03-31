import Ember from 'ember';

export default Ember.Controller.extend({
  getSubscriptionPayments: function() {
    var controller = this;
    controller.set('payment_method', false);
    this.store.find('payment_method', this.get('selectedSubscription'))
      .then(function(data) {
        controller.set('payment_method', data);
      });
  }.observes('selectedSubscription'),
  actions: {
    setSubscription1: function() {
      Ember.run(function() {
        this.set('selectedSubscription', '1');
      }.bind(this));
    },
    setSubscription3: function() {
      this.set('selectedSubscription', '3');
    },
    setSubscription6: function() {
      this.set('selectedSubscription', '6');
    }
  }
});
