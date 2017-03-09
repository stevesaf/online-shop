import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  totalCost: 0,
  add(item) {
    var list = this.get('items');
    for (var i = 0; i < list.length; i++) {
      if (list[i] === item) {
        return false;
      }else {
        this.get('items').pushObject(item);
      }
    }
    this.get('items').pushObject(item);
    var totalCost = this.get('totalCost');
    this.set('totalCost', totalCost+item.get('cost'));
  },
  remove(item) {
    this.get('items').removeObject(item);
    debugger;
    var totalCost=this.get('totalCost');
    this.set('totalCost', totalCost-item.get('cost'));
  }

});



// function containsObject(obj, list) {
//     var i;
//     for (i = 0; i < list.length; i++) {
//         if (list[i] === obj) {
//             return true;
//         }
//     }
//
//     return false;
// }
