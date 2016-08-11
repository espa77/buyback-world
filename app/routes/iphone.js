import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';

const {
    Route,
    get
} = Ember;

export default Route.extend(ResetScroll, {
    model() {
        return get(this, 'store').findAll('device');
    }
});
