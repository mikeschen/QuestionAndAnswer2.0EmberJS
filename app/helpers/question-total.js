import Ember from 'ember';

export function questionTotal(params) {
	var question = params[0];
	
  return question.get('answers').get('length');
}

export default Ember.Helper.helper(questionTotal);
