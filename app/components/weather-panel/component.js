import Ember from 'ember';

export default Ember.Component.extend({
  data: null,
  ajax: Ember.inject.service(),

  didInsertElement(){
    this.send('getRequest');
  },

  actions: {
    getRequest() {
      var self = this;
      return this.get('ajax').request('/weather', {method: 'GET'}).then(function(response) {
        self.set('data', response.weather);
        setTimeout(function() {
          self.send('getRequest');
        },60000);
      });
    }
  }
});
