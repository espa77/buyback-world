import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        sellDevice(){
            console.log("sell button clicked");
        }
    }
});


// {{#paper-select placeholder="Select Condition" value=conditionVal onChange=(action 'changeConditionValue')}}
// {{#each condition.value as |condition|}}
// {{#paper-option value=condition}}
// {{ condition }}
// {{/paper-option}}
// {{/each}}
// {{/paper-select}}



// willRender() {
//     this.set('condition', {
//         value: ['normal', 'broken', 'no power']
//     });
// },
