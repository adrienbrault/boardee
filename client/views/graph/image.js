var isRetinaDevice = window.devicePixelRatio >= 2;

var scale = 1;
var height = 250 * scale;
var width = 330 * scale;

Template.graphImage.helpers({
    url: function () {
        return graphUrl(this, {
            format: 'svg',

            minXStep: 0,

            width: width,
            height: height,

            fontSize: 8,

            // white background template
            bgcolor: 'white',
            fgcolor: 'black',
            majorGridLineColor: 'gray',
            minorGridLineColor: 'gray',

            lineWidth: isRetinaDevice ? 0.75 : 1,

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
