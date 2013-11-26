Template.autoRefresh.helpers({
    enabled: function () {
        return Session.get('graphAutoRefreshEnabled');
    },

    interval: function () {
        return Session.get('graphAutoRefreshInterval');
    }
});

Template.autoRefresh.events({
    'submit form': function (event) {
        event.preventDefault();
    },

    'click button': function (event) {
        event.preventDefault();

        Session.set('graphAutoRefreshEnabled', !Session.get('graphAutoRefreshEnabled'));
    },

    'change input': function (event) {
        Session.set('graphAutoRefreshInterval', $(event.target).val());
    }
});
