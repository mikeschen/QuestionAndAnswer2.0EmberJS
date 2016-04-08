import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
  answerFormShow() {
    this.set('addNewAnswer', true);
  },

  answerSave1() {
    var answerParams =  {
      name: this.get('name'),
      detail: this.get('detail'),
      question: this.get('question')
    };
    this.set('addNewAnswer', false);
    this.set('name', "");
    this.set('detail', "");
    this.sendAction('answerSave2', answerParams);
    }
  }
});