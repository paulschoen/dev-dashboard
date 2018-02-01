import Ember from 'ember';

export default Ember.Component.extend({

  firstStream: true,
  secondStream: false,
  thirdStream: false,

  didInsertElement: function() {
    this.send('changeStream');
  },

  actions: {
    changeStream: function() {
      var self = this;
      var firstStream = this.get('firstStream');
      var secondStream = this.get('secondStream');
      var thirdStream = this.get('thirdStream');

      if (firstStream) {
        this.set('firstStream', false);
        this.set('secondStream', true);
      } else if (secondStream) {
        this.set('secondStream', false);
        this.set('thirdStream', true);
      } else if (thirdStream) {
        this.set('thirdStream', false);
        this.set('firstStream', true);
      }

      Ember.run.later(function() {
        self.send('changeStream');
      }, 5000)
    }
  }
});
