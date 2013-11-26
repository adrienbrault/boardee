var graphRefreshDependency = new Deps.Dependency();

Meteor.startup(function () {
    Session.set('graphAutoRefreshInterval', 60);
});

var refreshIntervalId = null;
Deps.autorun(function () {
    Meteor.clearInterval(refreshIntervalId);

    var interval = Session.get('graphAutoRefreshInterval');
    var enabled = Session.get('graphAutoRefreshEnabled');

    if (!enabled) {
        return;
    }

    refreshIntervalId = Meteor.setInterval(function () {
        graphRefreshDependency.changed();
    }, interval * 1000);
});

graphUrl = function (graph, options) {
    options = _.extend(graph.parameters, options);

    var dateRange = Session.get('graphDateRange');
    if (dateRange) {
        options.from = dateRange.from;

        if (dateRange.until) {
            options.until = dateRange.until;
        }
    }

    var timezone = 'UTC';
    var config = Configs.findOne();
    if (config && config.graphite_timezone) {
        timezone = config.graphite_timezone;
    }
    options.tz = timezone;

    graphRefreshDependency.depend();
    if (Session.get('graphAutoRefreshEnabled')) {
        options.cacheTimeout = Session.get('graphAutoRefreshInterval') * 0.8;
    }

    _.each(options, function (value, option) {
        if (value === null) {
            delete options[option];
        }
    });

    return Graphite(options).url();
};
