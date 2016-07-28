import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    uniqueModel: Ember.computed('model', function(){
        let val = this.get('selectedDevice.device_attributes.device'),
            model = this.get('model'),
            uniqueModels = [];
        if (val === null) {
            val = "iPad";
            this.set('selectedDevice.device_attributes.device', val);
        }
        var filteredModels = model.filterBy('device_type', val );
        filteredModels.forEach(function(element){
            if (!uniqueModels.isAny('device_model', element.get('device_model'))) {
                uniqueModels.pushObject(element);
            }
        });
        return uniqueModels;
    }),
    actions: {
        modelValue(modelVal) {
            this.get('selectedDevice').addModel(modelVal);
            this.transitionToRoute('network');
        },
        refreshModel(modelVal) {
            this.get('selectedDevice').removeModel(modelVal);
        },
        selectNewDevice() {
            this.get('selectedDevice').removeDevice();
            this.transitionToRoute('index');
        },
        selectDevice() {
            this.transitionToRoute('index');
        }
    }
});
