import Ember from 'ember';

export default Ember.Component.extend({
	favoriteList: Ember.inject.service(),

	actions: {
		addToFav(favorite) {
			this.get('favoriteList').add(favorite);
		},
	}
});
