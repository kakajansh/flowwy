/**
 * Created by rubyist on 29/03/15.
 */

var View               = famous.core.View;
var Surface            = famous.core.Surface;
var Transform          = famous.core.Transform;
var StateModifier      = famous.modifiers.StateModifier;
var EventHandler       = famous.core.EventHandler;
var RenderController   = famous.views.RenderController;
var HeaderFooterLayout = famous.views.HeaderFooterLayout;

/*
 * @name AppView
 * @constructor
 * @description
 */

AppView = function() {
    View.apply(this, arguments);

    this.eventOutput = new EventHandler();
    this.eventInput  = new EventHandler();
    EventHandler.setOutputHandler(this, this.eventOutput);
    EventHandler.setInputHandler(this, this.eventInput);

    this._pages = [];
    this._currentPage = undefined;

    this.layout = new HeaderFooterLayout({
        headerSize: 100,
        footerSize: 50
    });

    this.layout.header.add(new HeaderView());

    this.content = new RenderController();
    this.layout.content.add(this.content);

    this.add(this.layout);

    createPages.call(this);
    showPage.call(this);
}

AppView.prototype = Object.create(View.prototype);
AppView.prototype.constructor = AppView;

AppView.DEFAULT_OPTIONS = {
};

AppView.prototype.getPage = function() {
    return this._currentPage;
}

AppView.prototype.createPage = function(name, view) {
    this._pages[name] = view;
}

function createPages() {

    this.createPage('home', new HomeView({
        size: [undefined, undefined],
        run: false
    }));

    this.createPage('about', new AboutView({}));

}

function showPage() {
    this.eventInput.on('route changed', function(name) {

        var view = this._pages[name];

        if (view) {
            this.content.show(view);

            if (!view.options.run) {
                view.trigger('ready');
                view.options.run = true;
            }
        }

    }.bind(this));
}