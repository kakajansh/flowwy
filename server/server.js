/**
 * Created by rubyist on 29/03/15.
 */

// 
// ITEM = { text: "sometext" }
// 
Meteor.publish('items', function(limit) {
    Meteor._sleepForMs(200);
    return Items.find({ }, { limit: limit, fields: { subitems: 0 } });
});

// 
// ITEM = { text: "sometext", subitems: ["one", "two", "three"] }
// 
Meteor.publish('item', function(id) {
    return Items.find(id, { /* maybe some other field options */ });
})

Meteor.startup(function() {
    console.log(Items.find().count());
    if (Items.find().count() <= 10) {
        for (var i = 0; i < 20; i++){
            Items.insert({ 
                text: 'Item '+ (i+1),  
                subitems: [
                    'one', 'two', 'three'
                ]
            });
        }
    }
})