export default function() {

    this.transition(
        this.hasClass('selector'),
        this.use('explode', {
            pickOld: 'data-id',

            use: ['toUp', {duration: 5000}]
        }, {
            pickNew: 'data-id',

            use: ['toLeft']
        }, {
            use: ['fade']
        })
    );
}
