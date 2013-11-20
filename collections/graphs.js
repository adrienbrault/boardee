Graphs = new Meteor.Collection2('graphs', {
    schema: {
        'name': {
            type: String,
            min: 1,
            max: 100
        },
        'targets': {
            type: [String],
            minCount: 1,
            min: 1
        }
    }
});
