import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		deleteA(answer) {
			this.sendAction('destroyAnswer', answer);
		}
	}
});
