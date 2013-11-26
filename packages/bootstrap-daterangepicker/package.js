// https://github.com/lonnen/graphite.js
Package.describe({
    summary: 'daterangepicker'
});

Package.on_use(function (api, where) {
    api.add_files('daterangepicker.js', 'client');
    api.add_files('daterangepicker-bs3.css', 'client');

    api.use('moment', ['client']);
});
