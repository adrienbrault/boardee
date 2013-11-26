Meteor.methods({
    graphDelete: function (_id) {
        if (!isAdmin()) {
            throw new Meteor.Error(403, 'You need to be an admin to delete graphs.');
        }

        Graphs.remove({_id: _id});
        Dashboards.update({}, {
            $pull: {
                graphs: {
                    _id: _id
                }
            }
        }, {multi: true});
    }
});
