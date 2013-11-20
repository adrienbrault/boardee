Router.configure({
    autoRender: false
});

Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'graphList'
    });

    this.route('graphAdd', {
        path: '/graphs/add'
    });

    this.route('graphEdit', {
        path: '/graphs/:_id',
        before: function () {
            Session.set('currentGraphId', this.params._id);
        }
    });

    this.route('dashboardList', {
        path: '/dashboards'
    });
});
