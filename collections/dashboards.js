Dashboards = new Meteor.Collection2('dashboards', {
    schema: {
        'name': {
            type: String,
            min: 1,
            max: 100
        }
    }
});
