import Ember from 'ember';

export default Ember.Controller.extend({
    unique: Ember.computed('model', function() {
        var uniqueObjects = [];
        this.get('model').forEach(function(item) {
            if (!uniqueObjects.isAny('device_type', item.get('device_type'))) {
                uniqueObjects.addObject(item);
            }
        });
        return uniqueObjects;
    }),
    deviceModel: Ember.computed('model', function(){
        var availableModels = [];
        this.get('model').forEach(function(item) {
            if (!availableModels.isAny('device_model', item.get('device_model'))) {
                availableModels.addObject(item);
            }
        });
        return availableModels;
    }),
    actions: {
        groupValue(val) {
            console.log("device-controller");
        }
    }

});