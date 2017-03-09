import DS from 'ember-data';

export default DS.Model.extend({
  review: DS.attr(),
  reviewer: DS.attr(),
  product: DS.belongsTo('product', {async: true})
});
