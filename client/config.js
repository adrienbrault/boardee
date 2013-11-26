graphiteHostDependency = new Deps.Dependency();

Meteor.startup(function () {
    Deps.autorun(function () {
        var config = Configs.findOne();
        if (!config) {
            return;
        }

        graphiteHostDependency.changed();
        Graphite.config.host = config.graphite_host;
    });
});
