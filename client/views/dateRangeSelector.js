Template.dateRangeSelector.rendered = function () {
    var startDate = new Date();
    startDate.setDate(startDate.getDate() - 1);
    $('#graphs_date_range').daterangepicker(
        {
            timePicker: true,
            timePickerIncrement: 1,
            format: 'MM/DD/YYYY h:mm A',
            maxDate: new Date(),
            timePicker12Hour: false,
            startDate: startDate,
            endDate: new Date(),
            showDropdowns: true
        },
        function (start, end) {
            var graphiteDateFormat = 'hh:mm_YYYYMMDD';

            Session.set('graphDateRange', {
                type: 'absolute',
                from: start.format(graphiteDateFormat),
                until: end.format(graphiteDateFormat)
            });
        }
    );
};

Template.dateRangeSelector.helpers({
    relativeFromValue: function () {
        var dateRange = Session.get('graphDateRange');
        if (!dateRange || 'relative' != dateRange.type || !dateRange.from) {
            return;
        }

        return dateRange.from.match(/(\d+)/)[1];
    },

    relativeFromMetric: function () {
        var dateRange = Session.get('graphDateRange');
        if (!dateRange || 'relative' != dateRange.type || !dateRange.from) {
            return;
        }

        return dateRange.from.match(/([a-z]+)/i)[1];
    },

    relativeUntilValue: function () {
        var dateRange = Session.get('graphDateRange');
        if (!dateRange || 'relative' != dateRange.type || !dateRange.until) {
            return;
        }

        return dateRange.until.match(/(\d+)/)[1];
    },

    relativeUntilMetric: function () {
        var dateRange = Session.get('graphDateRange');
        if (!dateRange || 'relative' != dateRange.type || !dateRange.until) {
            return;
        }

        return dateRange.until.match(/([a-z]+)/i)[1];
    }
});

Template.dateRangeSelector.events({
    'submit #date_range_relative': function (event) {
        event.preventDefault();

        var $form = $(event.target).closest('form');

        var fromValue = $form.find('[name=relative_from_value]').val();
        var fromMetric = $form.find('[name=relative_from_metric]').val();
        var untilValue = $form.find('[name=relative_until_value]').val();
        var untilMetric = $form.find('[name=relative_until_metric]').val();

        var dateRange = {
            type: 'relative'
        };

        if (fromValue) {
            dateRange.from = '-' + fromValue + fromMetric;
        }
        if (untilValue) {
            dateRange.until = '-' + untilValue + untilMetric;
        }

        Session.set('graphDateRange', dateRange);
    }
});
