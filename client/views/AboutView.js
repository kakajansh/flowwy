var View          = famous.core.View;
var Surface       = famous.core.Surface;
var EventHandler  = famous.core.EventHandler;
var StateModifier = famous.modifiers.StateModifier;

var FlexScrollView = flex.FlexScrollView;
var CollectionLayout = flex.layouts.CollectionLayout;

/*
 * @name AboutView
 * @constructor
 * @description
 */

AboutView = function() {
    View.apply(this, arguments);

    // _createBack.call(this);
    _createScrollView.call(this);
}

AboutView.prototype = Object.create(View.prototype);
AboutView.prototype.constructor = AboutView;

AboutView.DEFAULT_OPTIONS = {
};

function _createBack() {
    var surface = new Surface({
        size: [500, 500],
        content: "Hello from About View",
        properties: {
            'background-color': 'yellow'
        }
    });

    surface.on('click', function() {
        FlowRouter.go('/home');
    });

    var modifier = new StateModifier({
        origin: [0.5, 0.5],
        align: [0.5, 0.5]
    });

    this.add(modifier).add(surface);
}

function _createScrollView() {
    var scrollView = new FlexScrollView({
      layout: CollectionLayout,
        useContainer: true,
        container: { // options passed to the ContainerSurface
            properties: {
                overflow: 'hidden'
            }
        },
        direction: 0,
      layoutOptions: {
        itemSize: [300, 300],    // item has width and height of 100 pixels
        margins: [10, 5, 10, 5], // outer margins
        spacing: [10, 10]        // spacing between items
      },
      dataSource: [
        new Surface({content: 'item 1', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 2', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
        new Surface({content: 'item 3', properties: {backgroundColor:'white'}}),
      ]
    });

    scrollView.state = new StateModifier({
        origin: [0.5, 0.5],
        align: [0.5, 0.5]
    });

    this.add(scrollView.state).add(scrollView);
}