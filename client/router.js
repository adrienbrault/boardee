Router.configure({
    notFoundTemplate: '404',
    loadingTemplate: 'loading',
    layoutTemplate: 'layout',
    yieldTemplates: {
        'header': {to: 'header'}
    }
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

    this.route('dashboardViewFullScreen', {
        path: '/dashboards/:_id/fullscreen',
        before: function () {
            Session.set('currentDashboardId', this.params._id);
        },
        yieldTemplates: {
            '': {to: 'header'}
        }
    });

    this.route('dashboardView', {
        path: '/dashboards/:_id',
        before: function () {
            Session.set('currentDashboardId', this.params._id);
        }
    });

    this.route('userList', {
        path: '/users',
        before: function () {
            if (!isAdmin()) {
                this.render('users403');
                this.stop();
            }
        }
    });
});

Router.addHook('before', function () {
    Session.set('graphDateRange', {
        type: 'relative',
        from: '-1d',
        until: '-0d'
    });
    Session.set('graphAutoRefreshEnabled', false);

    if (!Meteor.user()) {
        this.render('401');
        return this.stop();
    }

    if (!isUser()) {
        this.render('403');
        return this.stop();
    }
});
