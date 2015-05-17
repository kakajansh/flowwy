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

    tabBar.state = new StateModifier({
        transform: Transform.inFront
    });

    var tabBarItems = [
        'Home', 'About'
    ];
    tabBar.setItems(tabBarItems);
    tabBar.on('tabchange', function(event) {
        var item = tabBarItems[event.index];
        var url = item.charAt(0).toLowerCase() + item.slice(1);
        FlowRouter.go('/'+url);
    });
    this.add(tabBar.state).add(tabBar);
}

HeaderView.prototype = Object.create(View.prototype);
HeaderView.prototype.constructor = HeaderView;

HeaderView.DEFAULT_OPTIONS = {
};