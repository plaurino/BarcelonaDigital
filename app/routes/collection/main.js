import Ember from 'ember';
import '../../../vendor/pdfjs/src/pdf';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('collection');
  }
});
