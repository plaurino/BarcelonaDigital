import DS from 'ember-data';

export default DS.Model.extend({
    mp_payment_link: DS.attr(),
    pp_payment_link: DS.attr()
});
