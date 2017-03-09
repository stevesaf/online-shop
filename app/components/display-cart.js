import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),


actions: {
  delete(item) {
  if (confirm('Are you sure you want to remove this item from your cart?')) {
    this.get('shoppingCart').remove(item);
  }
 }
}
});
