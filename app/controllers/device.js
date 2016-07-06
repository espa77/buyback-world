import Ember from 'ember';

export default Ember.Controller.extend({
    type: Ember.computed.mapBy('device_type', 'id'),
    uniqueType: Ember.computed.uniq('device_type')

});

// NOT WORKING


