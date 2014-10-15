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
});
