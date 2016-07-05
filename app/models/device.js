import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
    name: attr('string'),
    model: attr('string'),
    network: attr('string'),
    size: attr('number'),
    image: attr('string'),
    price_cents: attr('number')
});

