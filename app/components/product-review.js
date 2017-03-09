import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
   saveReview() {
     var params = {
       review: this.get('review'),
       reviewer: this.get('reviewer'),
       product: this.get('product')
     };
     this.set('addNewReview', false);
     this.sendAction('saveReview', params);
   }
  }

});
