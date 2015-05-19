import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: function() {
      var _this = this

      friend.destroyRecord().then(function() {
        _this.transitionTo('friends.index');
      })
    }
  }
});
