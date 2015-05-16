var View          = famous.core.View;
var Surface       = famous.core.Surface;
var Transform     = famous.core.Transform;
var EventHandler  = famous.core.EventHandler;
var StateModifier = famous.modifiers.StateModifier;
var InputSurface  = famous.surfaces.InputSurface;

/*
 * @name HeaderView
 * @constructor
 * @description
 */

HeaderView = function() {
    View.apply(this, arguments);

    var header = new Surface({
        size: [undefined, 60],
        content: "Header",
        properties: {
            lineHeight: "60px",
            textAlign: "center",
            backgroundColor: 'red'
        }
    })

    this.add(header);
}

HeaderView.prototype = Object.create(View.prototype);
HeaderView.prototype.constructor = HeaderView;

HeaderView.DEFAULT_OPTIONS = {
};