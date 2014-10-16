import Ember from 'ember';

export default Ember.Controller.extend({
  getSubscriptionPayments: function() {
    var controller = this;
    controller.set('payments', false);
    this.store.find('payment', this.get('selectedSubscription'))
      .then(function(data) {
        controller.set('payments', data);
      });
  }.observes('selectedSubscription'),
  actions: {
    setSubscription0: function() {
      Ember.run(function() {
        this.set('selectedSubscription', '0');
      }.bind(this));
    },
    setSubscription3: function() {
      this.set('selectedSubscription', '3');
    },
    setSubscription6: function() {
      this.set('selectedSubscription', '6');
    }
  },
});
