graphUrl = function (graph, options) {
    options = _.extend(graph.parameters, options);
    _.each(options, function (value, option) {
        if (value === null) {
            delete options[option];
        }
    });

    return Graphite(options).url();
};
