import config from '../config/environment';
import firebase from 'firebase';
import FirebaseAdapter from 'emberfire/adapters/firebase';

export default FirebaseAdapter.extend({
    firebase: new Firebase(config.firebase)
});
