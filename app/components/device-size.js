import Ember from 'ember';

export default Ember.Component.extend({
    
    didInsertElement: function(){
        Ember.run.scheduleOnce('afterRender', this, function(){
            let findSixteen = document.getElementsByClassName("16");
            this.$(findSixteen).parents('.md-default-theme').addClass('md-checked');
        });
    },
    actions: {
        changeSizeValue(sizeVal) {
            this.set('groupValue', sizeVal);
            this.send(sizeVal);
        }
    },
    changeSizeValue() {
        throw new Error ("You must select a size to continue");
    }
});
