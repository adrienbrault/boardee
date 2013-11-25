Meteor.publish(null, function () {
    if (!this.userId) {
        return;
    }

    if (!isUser()) {
        return;
    }

    return [
        Graphs.find(),
        Dashboards.find(),
        Configs.find(),
        Meteor.users.find()
    ];
});
