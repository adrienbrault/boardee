graphUrl = function (graph, options) {
    return Graphite(_.extend({
            targets: graph.targets
        }, options))
        .url()
    ;
};
