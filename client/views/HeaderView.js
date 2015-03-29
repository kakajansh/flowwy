var View          = famous.core.View;
var Surface       = famous.core.Surface;
var Transform     = famous.core.Transform;
var EventHandler  = famous.core.EventHandler;
var StateModifier = famous.modifiers.StateModifier;
var InputSurface  = famous.surfaces.InputSurface;

var LayoutController   = flex.LayoutController;
var NavBarLayout       = flex.layouts.NavBarLayout;

/*
 * @name HeaderView
 * @constructor
 * @description
 */

HeaderView = function() {
    View.apply(this, arguments);

    var layout = new LayoutController({
        layout: NavBarLayout,
        layoutOptions: {
            margins: [5, 15, 35, 54],
            itemSpacer: 20,
        },
        dataSource: {
            background: new Surface({properties: {
                backgroundColor: '#3581FF',
            }}),
            title: new Surface({content: 'Yarisma',
                properties: {
                    textAlign: 'center',
                    fontSize: '2em',
                }
            }),
            leftItems:[
            ],
            rightItems: [
            ]
        }
    });

    this.add(layout);
}

HeaderView.prototype = Object.create(View.prototype);
HeaderView.prototype.constructor = HeaderView;

HeaderView.DEFAULT_OPTIONS = {
};