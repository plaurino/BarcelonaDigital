import Ember from 'ember';

export default Ember.Component.extend({
  label: "Submit",
  status: false,
  button_style: "zoom-out",
  css_class: "ladda-button btn btn-block btn-primary btn-enter",

  checkStatus: function(){
    if (this.get('status')) {
      this.laddaButton.ladda('start');
    } else {
      this.laddaButton.ladda('stop');
    }
  }.observes('status'),

  buttonLoad: function(){
    var view = this;
    view.laddaButton = this.$('.btn-enter').ladda();
  }.on('didInsertElement')
});
