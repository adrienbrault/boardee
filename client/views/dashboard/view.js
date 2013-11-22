var currentDashboard = function () {
    return Dashboards.findOne(Session.get('currentDashboardId'));
};


Template.dashboardView.helpers({
    dashboard: currentDashboard
});

Template.dashboardView.events({
    'submit form.dashboard-remove': function (event) {
        event.preventDefault();

        Dashboards.remove(currentDashboard()._id, function (error, result) {
            if (error) {
                console.log(error);
                return;
            }

            Router.go('dashboardList');
        });
    }
});
