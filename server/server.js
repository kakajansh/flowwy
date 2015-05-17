/**
 * Created by rubyist on 29/03/15.
 */

Meteor.publish('items', function(limit) {
    Meteor._sleepForMs(2000);
    return Items.find({ }, { limit: limit });
})

Meteor.startup(function() {
    console.log(Items.find().count());
    if (Items.find().count() <= 10) {
        for (var i = 0; i < 20; i++){
            Items.insert({ text: 'Item '+ (i+1) });
        }
    }
})