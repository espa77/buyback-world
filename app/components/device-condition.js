import Ember from 'ember';

export default Ember.Component.extend({

    conditionVal: 'normal',

    didInsertElement: function(){
        Ember.run.scheduleOnce('afterRender', this, function(){
            let findNormal = document.getElementById("normal");
            this.$(findNormal).addClass('md-checked');
        });
    },


    actions: {
        changeConditionValue(conditionVal) {
            this.set('groupValue', conditionVal);
            this.send(conditionVal);
        }
    }
});
