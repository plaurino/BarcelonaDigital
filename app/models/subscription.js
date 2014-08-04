import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  publication: DS.belongsTo('publication'),
  number_of_issues: DS.attr(),
  number_of_issues_claimed: DS.attr()
});
