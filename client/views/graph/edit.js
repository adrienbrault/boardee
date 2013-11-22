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
    },
    'parameters': function () {
        return this.parameters ? this.parameters : {};
    },

    'hideLegendAsString': function () {
        var value = this.hideLegend;
        if (false === value) {
            value = 'false';
        } else if (true === value) {
            value = 'true';
        } else if (null === value) {
            value = 'null';
        }

        return value;
    }
});

Template.graphEditForm.events({
    'click .target-add': function (event) {
        $('#graph_targets').append($('#target_control').html());
    },

    'click .target-remove': function (event) {
        $(event.target).closest('.target').remove();
    },

    'click .reset-field': function (event) {
        $(event.target).closest('.input-group').find('input').val('');
    },

    'submit form': function (event) {
        event.preventDefault();

        var $form = $(event.target);

        var hideLegend = $form.find('[name="hide_legend"]').val();
        if ('null' === hideLegend) {
            hideLegend = null;
        } else {
            hideLegend = 'true' === hideLegend;
        }

        var lineWidth = $form.find('[name="line_width"]').val();
        lineWidth = lineWidth.length > 0 ? lineWidth : null;

        var graph = {
            name: $form.find('[name=name]').val(),
            parameters: {
                targets: $form.find('[name="target[]"]').map(function () {
                    return $(this).val();
                }).toArray(),
                hideLegend: hideLegend,
                uniqueLegend: $form.find('[name="unique_legend"]:checked()').size() > 0,
                lineWidth: lineWidth
            }
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

