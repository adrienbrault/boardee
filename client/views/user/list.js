Template.userList.helpers({
    users: function () {
        return Meteor.users.find();
    },

    email: function () {
        return _.first(this.emails).address;
    },

    isRole: function (role) {
        return this.role === role;
    }
});

Template.userList.events({
    'click .user-edit-role': function (event) {
        $target = $(event.target);
        var userId = $target.closest('[data-user-id]').attr('data-user-id');
        var role = $target.attr('data-user-role');

        Meteor.call('userEditRole', userId, role, function (error, result) {
            if (error) {
                console.log(error);

                return;
            }
        });
    }
});
