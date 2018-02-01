import Ember from 'ember';
import moment from 'moment';


export default Ember.Component.extend({
  socketIOService: Ember.inject.service('socket-io'),

  namespace: '/',

  // didInsertElement() {
  //   this._super(...arguments);
  //
  //   /*
  //     2. The next step you need to do is to create your actual socketIO.
  //   */
  //   const socket = this.get('socketIOService').socketFor('http://localhost:8000/');
  //
  //   socket.on('issueMoved ', () => {
  //     console.log("ISSUED MOVED");
  //   });
  // },

  date: Ember.computed({
    get(){
      return moment().format('dddd, MMMM Do YYYY');
    }
  }),

  hour: Ember.computed('clock.hour', {
    get(){
      var hour = this.get('clock.hour');

      if (hour > 12) {
        return hour - 12;
      } else {
        if (hour === 0) {
          return 12;
        }
        return hour;
      }
    }
  }),
  minute: Ember.computed('clock.minute', {
    get() {
      var minute = this.get('clock.minute');

      if (minute < 10) {
        return '0' + minute
      } else {
        return minute
      }
    }
  }),
  second: Ember.computed('clock.second', {
    get() {
      var second = this.get('clock.second');

      if (second < 10) {
        return '0' + second
      } else {
        return second
      }
    }
  }),

});
