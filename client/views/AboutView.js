var View          = famous.core.View;
var Surface       = famous.core.Surface;
var EventHandler  = famous.core.EventHandler;
var StateModifier = famous.modifiers.StateModifier;

/*
 * @name AboutView
 * @constructor
 * @description
 */

AboutView = function() {
    View.apply(this, arguments);

    var surface = new Surface({
        size: [500, 500],
        content: "Hello from About View",
        properties: {
            'background-color': 'yellow'
        }
    });

    var modifier = new StateModifier({
        origin: [0.5, 0.5],
        align: [0.5, 0.5]
    });

    surface.on('click', function() {
        FlowRouter.go('/home');
    });

    this.add(modifier).add(surface);
}

AboutView.prototype = Object.create(View.prototype);
AboutView.prototype.constructor = AboutView;

AboutView.DEFAULT_OPTIONS = {
};