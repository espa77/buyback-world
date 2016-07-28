import Ember from 'ember';

export default Ember.Route.extend({
    redirect() {
        console.error("No Route for given URL found. Will transition to Index Route instead.");
        this.transitionTo("index");
    }
});
