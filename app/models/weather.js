import DS from 'ember-data';

export default DS.Model.extend({
  temperture: DS.attr('string'),
  observationpoint: DS.attr('string'),
  date: DS.attr('string'),
  feelslike: DS.attr('string'),
  humidity: DS.attr('string'),
  imageUrl: DS.attr('string'),
  shortday: DS.attr('string'),
  skycode: DS.attr('string'),
  skytext: DS.attr('string'),
  winddisplay: DS.attr('string'),
  windspeed: DS.attr('string'),
});
