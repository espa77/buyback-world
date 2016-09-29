import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    metrics: Ember.inject.service(),

    didTransition() {
        this._super(...arguments);
        this._trackPage();
    },

    _trackPage() {
        Ember.run.scheduleOnce('afterRender', this, () => {
            const page = document.location.pathname;
            const title = this.getWithDefault('currentRouteName', 'unknown');

            Ember.get(this, 'metrics').trackPage({ page, title });
        });
    }
});

Router.map(function() {
    this.route('about');
    this.route('iphone');
    this.route('other-device');
    this.route('ipad');
    this.route('samsung');
    this.route('network');
    this.route('price');
    this.route('thanks');
    this.route('page-not-found', { path: '/*wildcard' });
});


export default Router;