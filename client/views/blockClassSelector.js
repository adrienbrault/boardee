Template.blockClassSelector.events({
    'click .dashboard-columns-count [data-block-class]': function (event) {
        var blockClass = $(event.target).attr('data-block-class');

        Session.set('graphBlockClass', blockClass);
    }
});
