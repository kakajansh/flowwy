var View          = famous.core.View;
var Surface       = famous.core.Surface;
var EventHandler  = famous.core.EventHandler;
var StateModifier = famous.modifiers.StateModifier;

/*
 * @name ItemView
 * @constructor
 * @description
 */

ItemView = function() {
    View.apply(this, arguments);

    _createItem.call(this);
}

ItemView.prototype = Object.create(View.prototype);
ItemView.prototype.constructor = ItemView;

ItemView.DEFAULT_OPTIONS = {
};

// Blaze
function _createItem() {
    var surf = new famodev.ReactiveTemplate({
        size: [undefined, undefined],
        template: Template.item,
        classes: [],
        properties: {
            color: 'black',
            textAlign: 'center',
            backgroundColor: 'white'
        }
    });

    this.add(surf);
}

Template.item.helpers({
    item: function() {
        return Items.findOne(FlowRouter.getParam('id'));
    }
});

// Famous
// function _createItem() {
//     var surf = new Surface({
//         size: [undefined, undefined],
//         content: "loading",
//         classes: [],
//         properties: {
//             color: 'black',
//             textAlign: 'center',
//             backgroundColor: 'white'
//         }
//     });

//     // basic idea is something like that
//     Tracker.autorun(function () {
//         var item = Items.findOne(FlowRouter.getParam('id'));
//         if (item) surf.setContent(item.text);
//     });

//     this.add(surf);
// }

// Famodev
// function _createItem() {
//     var surf = new famodev.ReactiveSurface({
//         size: [undefined, undefined],
//         content: function() { 
//             var item = Items.findOne(FlowRouter.getParam('id'));
//             if (item) return item.text;
//         },
//         classes: [],
//         properties: {
//             color: 'black',
//             textAlign: 'center',
//             backgroundColor: 'white'
//         }
//     });

//     this.add(surf);
// }