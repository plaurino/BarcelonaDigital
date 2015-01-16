import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    error: function() {
      //console.log(this.get('session'));
      //this.get('session').invalidate();
    }
  }
});
