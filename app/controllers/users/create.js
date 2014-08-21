import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function() {
      this.set('isSending', true);
      var ThisCreateController = this;
      var user = this.store.createRecord('user', {
        username: this.get('username'),
        password: this.get('password')
      });

      user.set('typedPass', this.get('password'));

      user.save().then(function() {
        ThisCreateController.transitionToRoute('collections.main');
      });
    }
  }
});
