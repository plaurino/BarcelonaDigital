import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    subscribe_mp: function() {
      var that = this;
      window.open(this.get('mp_payment_link'), '_blank');
      var socket = window.io('http://0.0.0.0:3001');

      socket.emit('waiting', {
        id: 2      
      });

      socket.on('payment-status', function(data) {
        if (data.status === 'approved') {
          that.set('active', true);
        }
      });
    }
  }
});
