Meteor.startup(function () {
    Deps.autorun(function () {
        var config = Configs.findOne();
        if (!config) {
            return;
        }

        Graphite.config.host = config.graphite_host;
    });
});
