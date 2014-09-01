import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    this._super();
    window.Ladda.bind('.btn-enter');
  }
});
