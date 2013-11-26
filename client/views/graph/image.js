Template.graphImage.helpers({
    url: function () {
        return graphUrl(this, {
            format: 'svg',
            bgcolor: 'white',
            fgcolor: 'black',
            majorGridLineColor: 'gray',
            minorGridLineColor: 'gray'
        });
    }
});
