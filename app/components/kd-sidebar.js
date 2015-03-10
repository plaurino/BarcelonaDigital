import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    logout: function() {
      this.sendAction('logout');
    }
  },
  handleSidebarLoad: function(){
    var view = this;
    var store = view.get('targetObject.store');
    store.find('subscription').then(function (subscriptions) {
      if(subscriptions.get('content').length > 0) {
        var subscription = subscriptions.get('content')[0];
        if(subscription.get('active') && subscription.get('expired_at') >= Date.now()) {
          view.set('subscribed', true);
        }
      } else {
        view.set('subscribed', false);
      }
    });
  }.on('didInsertElement')
});
