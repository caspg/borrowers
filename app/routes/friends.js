import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: function(friend) {
      var _this = this;

      friend.destroy().then(function() {
        _this.transitionTo('friends.index');
      });
    }
  }
});
