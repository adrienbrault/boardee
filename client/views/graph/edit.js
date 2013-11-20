var currentGraph = function () {
    return Graphs.findOne(Session.get('currentGraphId'));
};

Template.graphEdit.helpers({
    graph: currentGraph,
    url: function () {
        return graphUrl(currentGraph());
    }
});

Template.graphEditForm.rendered = function () {
    if ($('#graph_targets *').size() < 1) {
        $('#graph_targets').prepend($('#target_control').html());
    }
};

Template.graphEditForm.helpers({
    'targets': function () {
        return _.map(this.targets, function (target) {
            return {target: target};
        })
    }
});

Template.graphEditForm.events({
    'click .target-add': function (event) {
        $('#graph_targets').append($('#target_control').html());
    },

    'click .target-remove': function (event) {
        $(event.target).closest('.target').remove();
    },

    'submit form': function (event) {
        event.preventDefault();

        var $form = $(event.target);

        var graph = {
            name: $form.find('[name=name]').val(),
            targets: $form.find('[name="target[]"]').map(function () {
                return $(this).val();
            }).toArray()
        };

        if (this._id) {
            Graphs.update(this._id, {$set: graph});
        } else {
            Graphs.insert(graph, function (error, result) {
                if (error) {

                    return;
                }

                Router.go('graphEdit', {_id: result});
            });
        }
    }
});

