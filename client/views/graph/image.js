Template.graphImage.helpers({
    url: function () {
        return graphUrl(this, {
            format: 'svg',

            minXStep: 0,

            // white background template
            bgcolor: 'white',
            fgcolor: 'black',
            majorGridLineColor: 'gray',
            minorGridLineColor: 'gray',

            // remove the yellow/gold colors that are not cool on white background
            colorList: [
                'blue',
                'green',
                'red',
                'purple',
                'brown',
                'aqua',
                'grey',
                'magenta',
                'pink',
                'rose'
            ].join(',')
        });
    }
});
