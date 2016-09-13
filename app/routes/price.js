import Ember from 'ember';


export default Ember.Route.extend({
    
    model() {
        return this.get('store').peekAll('device');
    },
    actions: {
        willTransition: function() {
            if (this.controller.get('selectedDevice.device_attributes.device')) {
                let device = this.controller.get('selectedDevice.device_attributes.device'),
                    model = this.controller.get('selectedDevice.device_attributes.model');
                this.controller.get('selectedDevice').empty();
                this.controller.get('selectedDevice').addDevice(device);
                this.controller.get('selectedDevice').addModel(model);
                this.transitionTo('network');
            }
        }
    }
});