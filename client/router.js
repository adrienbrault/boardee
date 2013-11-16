Meteor.Router.add({
    '/': {to: 'graphList', as: 'home'},
    '/graphs/:_id': {
        to: 'graphEdit',
        and: function(_id) {
            Session.set('currentGraphId', _id);
        }
    },
    '/dashboards': 'dashboardList'
});
