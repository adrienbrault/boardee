var currentDashboardId = function () {
    return Session.get('currentDashboardId');
};

var currentDashboard = function () {
    return Dashboards.findOne(currentDashboardId());
};

var currentDashboardGraphdsIds = function () {
    return _.pluck(currentDashboard().graphs, '_id');
}

Meteor.startup(function () {
    Session.set('graphBlockClass', 'col-md-3')
});

Template.dashboardView.helpers({
    dashboard: currentDashboard,

    graph: function () {
        return Graphs.findOne(this._id);
    },

    graphs: function () {
        return _.map(currentDashboardGraphdsIds(), function (_id) {
            return Graphs.findOne(_id);
        });
    },

    graphsToAdd: function () {
        return Graphs.find({
            _id: {$nin: currentDashboardGraphdsIds()}
        });
    },

    blockClass: function () {
        return Session.get('graphBlockClass');
    }
});

Template.dashboardView.rendered = function () {
    var $graphs = $(this.find('.graphs'));
    $graphs.sortable({
        handle: '.graph-move',
        tolerance: 'pointer',
        placeholder: 'dashboard-graph dashboard-graph-placeholder ' + Session.get('graphBlockClass')
    });
    $graphs.on('sortstop', function () { // for some reason using .event() doesn't work with this event
        var graphs = currentDashboard().graphs;
        var graphsIdsInView = $graphs.find('[data-graph-id]').map(function () {
            return $(this).attr('data-graph-id');
        }).toArray();

        var sortedGraphs = _.map(graphsIdsInView, function (graphId) {
            return _.find(graphs, function (graph) {
                return graph._id === graphId;
            });
        });

        Dashboards.update(currentDashboardId(), {
            $set: {
                'graphs': sortedGraphs
            }
        })
    });
};

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
    },

    'submit form.dashboard-add-graph': function (event) {
        event.preventDefault();

        var graphId = $(event.target).find('[name=graph]').val();

        Dashboards.update(currentDashboard()._id, {
            $push: {
                'graphs': {
                    _id: graphId
                }
            }
        })
    }
});

Template.dashboardGraph.events({
    'click .graph-remove': function (event) {
        event.preventDefault();

        var index = $(event.target).closest('.dashboard-graph').index();

        var dashboard = currentDashboard();
        var graphs = dashboard.graphs;
        graphs.splice(index, 1); // remove the element at index

        Dashboards.update(dashboard._id, {
            $set: {
                'graphs': graphs
            }
        });
    }
});
