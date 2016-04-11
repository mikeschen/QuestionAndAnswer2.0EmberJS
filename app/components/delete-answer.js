import Ember from 'ember';

export default Ember.Component.extend({
	deleteAnswer: false,
	actions: {
		deleteAnswer() {
			this.set('deleteAnswer', true);
		},
		delete(answer) {
			this.sendAction('destroyAnswer', answer)
		}
	}
});
