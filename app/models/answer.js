import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  detail: DS.attr(),
  question: DS.belongsTo('question', {async: true}),
  date: DS.attr('date', {defaultValue() { return new Date(), }})
});
