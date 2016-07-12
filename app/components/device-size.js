import Ember from 'ember';

export default Ember.Component.extend({
    
    actions: {
        changeSizeValue(sizeVal) {
            this.set('groupValue', sizeVal);
            this.send(sizeVal);
        }
    },
    didInsertElement: function(){
        Ember.run.scheduleOnce('afterRender', this, function(){
            let findSixteen = document.getElementsByClassName("16");
            this.$(findSixteen).parents('.md-default-theme').addClass('md-checked');
        });
    },
    changeSizeValue() {
        throw new Error ("You must select a size to continue");
    }
});
