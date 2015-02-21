import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import config from '../../config/environment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  activate: function() {
    Ember.$('body').addClass('collection-body');
  },
  model: function(params) {
    //register payment
    if(params.collection_id !== null) {

      Ember.$.ajax(config.APP.KIOSKO + '/payments/mp-process', {
        "type": 'POST',
        "dataType": 'JSON',
        "data": {
          id: params.collection_id,
          preference: params.preference_id
        }
      });/*,
        "success": function (data) {
          //console.log(data);
        },
        "error": function (jqXHR) {
          //console.log(jqXHR);
        }
      });*/

    }

    return this.store.find('collection');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    console.log(this.store.find('subscription'));
    controller.set('subscription', this.store.find('subscription'));
  }
});
