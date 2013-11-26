var currentGraph = function () {
    return Graphs.findOne(Session.get('currentGraphId'));
};

Template.graphEdit.helpers({
    graph: currentGraph,
    url: function () {
        return graphUrl(currentGraph());
    }
});

Template.graphEdit.events({
    'click .graph-remove': function (event) {
        event.preventDefault();

        Meteor.call('graphDelete', currentGraph()._id, function (error, result) {
            if (error) {
                console.log(error);

                return;
            }

            Router.go('home');
        });
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
    },

    'areaAlpha': function () {
        return null === this.areaAlpha ? '' : this.areaAlpha;
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

        var filterEmptyString = function (string) {
            return string.length > 0 ? string : null;
        }

        var graph = {
            name: $form.find('[name=name]').val(),
            parameters: {
                targets: $form.find('[name="target[]"]').map(function () {
                    return $(this).val();
                }).toArray(),
                hideLegend: hideLegend,
                uniqueLegend: $form.find('[name="unique_legend"]:checked()').size() > 0,
                lineWidth: filterEmptyString($form.find('[name="line_width"]').val()),
                drawNullAsZero: $form.find('[name="draw_null_as_zero"]:checked()').size() > 0,
                lineMode: $form.find('[name="line_mode"]').val(),
                graphOnly: $form.find('[name="graph_only"]:checked()').size() > 0,
                hideAxes: $form.find('[name="hide_axes"]:checked()').size() > 0,
                hideYAxis: $form.find('[name="hide_y_axis"]:checked()').size() > 0,
                hideGrid: $form.find('[name="hide_grid"]:checked()').size() > 0,
                areaMode: $form.find('[name="area_mode"]').val(),
                areaAlpha: filterEmptyString($form.find('[name="area_alpha"]').val()),
                yMin: filterEmptyString($form.find('[name="y_min"]').val()),
                yMax: filterEmptyString($form.find('[name="y_max"]').val()),
                yMinLeft: filterEmptyString($form.find('[name="y_min_left"]').val()),
                yMaxLeft: filterEmptyString($form.find('[name="y_max_left"]').val()),
                yMinRight: filterEmptyString($form.find('[name="y_min_right"]').val()),
                yMaxRight: filterEmptyString($form.find('[name="y_max_right"]').val()),
                logBase: filterEmptyString($form.find('[name="log_base"]').val()),
                yUnitSystem: $form.find('[name="y_unit_system"]').val(),
                yAxisSide: $form.find('[name="y_axis_side"]').val()
            }
        };

        var newParameters = {};
        _.each(graph.parameters, function (value, key) {
            if (null !== value) {
                newParameters[key] = value;
            }
        });
        graph.parameters = newParameters;

        if (this._id) {
            Graphs.update(this._id, {$set: graph});
        } else {
            Graphs.insert(graph, function (error, result) {
                if (error) {
                    console.log(error.message);

                    return;
                }

                Router.go('graphEdit', {_id: result});
            });
        }
    }
});

