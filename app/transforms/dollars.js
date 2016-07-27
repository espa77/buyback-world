import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize(serialized) {
    return serialized / 100;
  },

  serialize(deserialized) {
    return deserialized * 100;
  }
});
