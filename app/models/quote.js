import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	device: attr('string'),
	model: attr('string'),
	network: attr('string'),
	size: attr('number'),
	price: attr('dollars'),
	condition: attr('string'),
	name: attr('string'),
	phone: attr('string')
});
