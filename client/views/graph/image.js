var isRetinaDevice = window.devicePixelRatio >= 2;

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

            lineWidth: isRetinaDevice ? 0.5 : 1,

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
