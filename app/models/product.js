import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  cost: DS.attr("number"),
  reviews: DS.hasMany('review', {async: true})
});
