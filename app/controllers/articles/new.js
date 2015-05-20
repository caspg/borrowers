import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.description',
    function() {
      return !Ember.isEmpty(this.get('model.description'));
    }
  ),
  actions: {
    save: function() {
      if (this.get('isValid')) {
      } else {
        this.set('errorMessage', "Description can't be blank.");
      }

      return true
    }
  }
});
