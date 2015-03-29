// Rig some famo.us deps
famous.polyfills;
famous.core.famous;

// Make sure dom got a body...
Meteor.startup(function() {
       var mainContext = famous.core.Engine.createContext();

       var Yarisma = new AppView({});

       mainContext.setPerspective(1000);

       mainContext.add(Yarisma);

       FlowRouter.middleware(trackingMiddleware);

       function trackingMiddleware(path, next) {
              var name = path.split('/');
              console.log("tracking: " + name[1].capitalize() + "View.js");
              Yarisma.trigger('route changed', name[1]);
              next();
       }
});

UI.body.rendered = function () {
       FastClick.attach(document.body);
};

String.prototype.capitalize = function() {
       return this.charAt(0).toUpperCase() + this.slice(1);
}

