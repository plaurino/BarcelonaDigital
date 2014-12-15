import DS from 'ember-data';
import ENV from 'luke/config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.APP.KIOSKO
});
