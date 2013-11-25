Meteor.startup(function () {
    if (!Configs.findOne()) {
        Configs.insert({});
    }

    Configs.update({}, {$set: Config});
});
