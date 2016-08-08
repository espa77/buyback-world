import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';

const {
    Route,
    get,
    set
} = Ember;

export default Route.extend(ResetScroll, {
    model() {
        return get(this, 'store').findAll('device');
    }
});
