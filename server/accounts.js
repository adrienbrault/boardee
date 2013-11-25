Accounts.onCreateUser(function(options, user) {
    user.role = 'guest';

    if (!Meteor.users.findOne()) {
        user.role = 'admin';
    }

    return user;
});

Meteor.methods({
    userEditRole: function (userId, role) {
        if (!isAdmin()) {
            throw new Meteor.Error(403, 'You need to be an admin to edit roles.');
        }

        if (userId === Meteor.userId()) {
            throw new Meteor.Error(400, 'You cannot edit your own role.');
        }

        if (!_.contains(['guest', 'user', 'admin'], role)) {
            throw new Meteor.Error(400, 'Invalid role "' + role + '".');
        }

        Meteor.users.update({_id: userId}, {$set: {role: role}});
    }
});
