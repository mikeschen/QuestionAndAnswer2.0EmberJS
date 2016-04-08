import DS from 'ember-data';

export default DS.Model.extend({
  query: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', {async: true}),

  favoriteList: Ember.inject.service(),
  onList: Ember.computed('favoriteList.favorites.[]', function(){
  	return this.get('favoriteList').includes(this);
  })
});
