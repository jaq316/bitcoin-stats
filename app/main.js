require.config({
    paths: {
        text: 'durandal/amd/text',
        'durandal/app' : '//cdn.jsdelivr.net/durandal/2.0.1/js/app.js',
        'durandal/viewLocator' : '//cdn.jsdelivr.net/durandal/2.0.1/js/viewLocator.js',
        'durandal/system' : '//cdn.jsdelivr.net/durandal/2.0.1/js/system.js',
        'durandal/plugins/router' : '//cdn.jsdelivr.net/durandal/2.0.1/js/plugins/router.js'
    }
});

define(['durandal/app', 'durandal/viewLocator', 'durandal/system', 'durandal/plugins/router'],
    function (app, viewLocator, system, router) {

    }
);
