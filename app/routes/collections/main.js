import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  activate: function() {
    Ember.$('body').addClass('collection-body');
  },
  model: function() {
    return this.store.find('collection');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('subscription', this.store.find('subscription'));
  }
});
