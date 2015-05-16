var View          = famous.core.View;
var Surface       = famous.core.Surface;
var Transform     = famous.core.Transform;
var EventHandler  = famous.core.EventHandler;
var StateModifier = famous.modifiers.StateModifier;
var InputSurface  = famous.surfaces.InputSurface;

flex.widgets.styles;
var TabBar = flex.widgets.TabBar;

/*
 * @name HeaderView
 * @constructor
 * @description
 */

HeaderView = function() {
    View.apply(this, arguments);

    var tabBar = new TabBar({
        createRenderables: {
            background: true,
            selectedItemOverlay: true
        }
    });
    tabBar.setItems([
        'one',
        'two',
        'three'
    ]);
    this.add(tabBar); // add to the render-tree
}

HeaderView.prototype = Object.create(View.prototype);
HeaderView.prototype.constructor = HeaderView;

HeaderView.DEFAULT_OPTIONS = {
};