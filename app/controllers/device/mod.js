import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDevice: Ember.inject.service('selected-device'),

    userSelectedModel: false,
    
    uniqueModel: Ember.computed('model', 'selectedDevice', function(){
        let val = this.get('selectedDevice').device_attributes.get('firstObject');
        var model = this.get('model');
        var uniqueModels = [];
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
            this.set('userSelectedModel', true);
            this.transitionToRoute('device.mod.network');
        }
    }
});
