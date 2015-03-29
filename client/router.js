/**
 * Created by rubyist on 29/03/15.
 */

FlowRouter.route('/home', {
    subscriptions: function(params, queryParams) {

    },
    action: function() {

    }
});

FlowRouter.route('/about', {});

FlowRouter.route('/', {
    action: function() {
        FlowRouter.go('/home');
    }
});