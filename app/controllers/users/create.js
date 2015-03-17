import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function() {
      var controller = this;
      controller.set('isSending', true);

      var user = this.store.createRecord('user', {
        username: this.get('username'),
        password: this.get('password')
      });

      user.save()
        .then(function() {
          controller.set('signup-error', null);
          controller.get('session').authenticate('authenticator:kiosko', {identification: controller.get('username'), password: controller.get('password')})
            .then(function(){
              controller.transitionToRoute('collections.main');
              controller.set('isSending', false);
            });
        })
        .catch(function(response){
          if(response.responseJSON.error) {
            controller.set('isSending', false);
            controller.set('signup-error', response.responseJSON.error);
          }
        });
    }
  }
});
