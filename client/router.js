/**
 * Created by rubyist on 29/03/15.
 */

FlowRouter.route('/home', {
    // subscriptions: function(params, queryParams) {
        
    // },
    // action: function() {

    // }
});

FlowRouter.route('/about', {
    subscriptions: function(params, queryParams) {
        this.handle = Meteor.subscribeWithPagination('items', 5)
        this.register('ItemsSub', this.handle);
    },
    action: function(params, queryParams) {

    }
});

FlowRouter.route('/item/:id', {
    subscriptions: function(params) {
        this.handle = Meteor.subscribe('item', params.id);
        this.register('ItemSub', this.handle);
    },
    action: function(params, queryParams) {

    }
});

FlowRouter.route('/load', {});

FlowRouter.route('/', {
    action: function() {
        FlowRouter.go('/home');
    }
});