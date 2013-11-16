var currentGraph = function () {
    return Graphs.findOne(Session.get('currentGraphId'));
};

Template.graphEdit.helpers({
    graph: currentGraph,
    url: function () {
        return graphUrl(currentGraph());
    }
});
