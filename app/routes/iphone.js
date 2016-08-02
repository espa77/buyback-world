import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
    model() {
        return this.get('store').findAll('device');
    }
});
