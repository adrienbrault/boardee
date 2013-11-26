var currentDashboardId = function () {
    return Session.get('currentDashboardId');
};

var currentDashboard = function () {
    return Dashboards.findOne(currentDashboardId());
};

var currentDashboardGraphdsIds = function () {
    return _.pluck(currentDashboard().graphs, '_id');
}

Template.dashboardViewFullScreen.helpers({
    dashboard: currentDashboard,

    graph: function () {
        return Graphs.findOne(this._id);
    },

    graphs: function () {
        return _.map(currentDashboardGraphdsIds(), function (_id) {
            return Graphs.findOne(_id);
        });
    }
});
