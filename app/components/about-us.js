import Ember from 'ember';

export default Ember.Component.extend({
    emberChimpResponses: {
        success: 'Please click the link in the email we just sent you.',
        error: 'Oops, something went wrong.  Please try again.',
        invalidError: 'Please enter a valid email address.',
        attemptsError: 'Please try again in about 5 minutes.'
    }
});
