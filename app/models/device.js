import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
    device_type: attr('string'),
    device_model: attr('string'),
    network: attr('string'),
    network_image: attr('string'),
    size: attr('number'),
    image: attr('string'),
    price_cents: attr('dollars')
});