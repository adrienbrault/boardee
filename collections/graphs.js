Graphs = new Meteor.Collection2('graphs', {
    schema: {
        'name': {
            type: String,
            min: 1,
            max: 100
        },

        'parameters.targets': {
            type: [String],
            minCount: 1,
            min: 1
        },

        'parameters.hideLegend': {
            type: Boolean,
            optional: true
        },
        'parameters.uniqueLegend': {
            type: Boolean,
            optional: true
        },

        'parameters.lineWidth': {
            type: Number,
            optional: true,
            decimal: true
        },

        'parameters.lineMode': {
            type: String,
            allowedValues: ['slope', 'staircase', 'connected'],
            optional: true
        },
        'parameters.drawNullAsZero': {
            type: Boolean,
            optional: true
        },

        'parameters.graphOnly': {
            type: Boolean,
            optional: true
        },
        'parameters.hideAxes': {
            type: Boolean,
            optional: true
        },
        'parameters.hideYAxis': {
            type: Boolean,
            optional: true
        },
        'parameters.hideGrid': {
            type: Boolean,
            optional: true
        },

        'parameters.areaMode': {
            type: String,
            optional: true,
            allowedValues: ['none', 'first', 'all', 'stacked']
        },
        'parameters.areaAlpha': {
            type: Number,
            optional: true,
            min: 0,
            max: 1,
            decimal: true
        },

        'parameters.title': {
            type: String,
            optional: true
        },
        'parameters.vtitle': {
            type: String,
            optional: true
        },
        'parameters.vtitleRight': {
            type: String,
            optional: true
        },

        'parameters.yMin': {
            type: Number,
            optional: true,
            decimal: true
        },
        'parameters.yMax': {
            type: Number,
            optional: true,
            decimal: true
        },
        'parameters.yMinLeft': {
            type: Number,
            optional: true,
            decimal: true
        },
        'parameters.yMaxLeft': {
            type: Number,
            optional: true,
            decimal: true
        },
        'parameters.yMinRight': {
            type: Number,
            optional: true,
            decimal: true
        },
        'parameters.yMaxRight': {
            type: Number,
            optional: true,
            decimal: true
        },

        'parameters.logBase': {
            type: Number,
            optional: true,
            decimal: true
        },

        'parameters.yUnitSystem': {
            type: String,
            optional: true,
            allowedValues: ['si', 'binary', 'none']
        },

        'parameters.yAxisSide': {
            type: String,
            optional: true,
            allowedValues: ['left', 'right']
        },


    }
});
