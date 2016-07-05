import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
    namespace: "api",
    host: 'http://localhost:3000'
});
