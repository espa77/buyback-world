import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
    model() {
        return this.get('store').findAll('device');
    },
    // afterModel(model, transition){
    // 	if (model.get('device') === 2) {
    // 		this.transitionTo('other-device-selector', model.get('device'));
    // 	}
    // }
});
