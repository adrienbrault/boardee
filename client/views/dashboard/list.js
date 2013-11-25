Template.dashboardList.events({
    'submit .dashboard-add': function (event) {
        event.preventDefault();

        var dashboard = {
            name: $(event.target).closest('form').find('[name=name]').val()
        };

        Dashboards.insert(dashboard, function (error, result) {
            if (error) {
                return;
            }

            Router.go('dashboardView', {_id: result});
        });
    },

    'submit .dashboard-add-graph': function () {
        event.preventDefault();


    }
});

Template.dashboardList.helpers({
    dashboards: function () {
        return Dashboards.find();
    },

    graphCount: function () {
        return this.graphs.length;
    }
});
