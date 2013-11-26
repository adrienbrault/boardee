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

    _.each(options, function (value, option) {
        if (value === null) {
            delete options[option];
        }
    });

    return Graphite(options).url();
};
