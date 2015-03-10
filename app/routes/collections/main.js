import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import config from '../../config/environment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  activate: function() {
    Ember.$('body').addClass('collection-body');
  },
  model: function() {
    return this.store.find('collection');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
