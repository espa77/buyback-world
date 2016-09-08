import Ember from 'ember';

export default Ember.Route.extend({
    
    model() {
        return this.get('store').peekAll('device');
    },
    actions: {
        willTransition: function() {
            this.controller.get('selectedDevice').empty();
            this.transitionTo("index");
        }
    }

});
