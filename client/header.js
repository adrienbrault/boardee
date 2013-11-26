Template.header.helpers({
    graphCount: function () {
        return Graphs.find().count();
    },

    dashboardCount: function () {
        return Dashboards.find().count();
    }
});
