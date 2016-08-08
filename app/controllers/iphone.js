import Ember from 'ember';

const {
    Controller,
    inject,
    observer,
    computed,
    get,
    set
} = Ember;

export default Controller.extend({

    selectedDevice: inject.service(),

    uniqueModel: computed('model', 'selectedDevice.device_attributes.device', function(){
        let val = get(this, 'selectedDevice.device_attributes.device'),
            model = get(this, 'model'),
            uniqueModels = [];
        if (val === null) {
            val = "iphone";
            set(this, 'selectedDevice.device_attributes.device', val);
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
            get(this, 'selectedDevice').addModel(modelVal);
            this.transitionToRoute('network');
        },
        selectNewDevice() {
            this.transitionToRoute('index');
        },
        selectDevice() {
            get(this, 'selectedDevice').empty();
            this.transitionToRoute('index');
        }
    }
});