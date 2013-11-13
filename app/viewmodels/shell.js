define(['durandal/system', 'durandal/plugins/router', 'services/logger', 'durandal/app', 'Q'], 
function (system, router, logger, app, Q) {

        //#region Initialization functions
        var initializers = [];
        //#endregion
        
        //#region Internal Methods

        function activate() {
            return Q.all(initializers).then(initRoutes)
                .then(boot);

        };
        
        function initRoutes() {
            router.mapRoute('home', null, "Home", false);
            log(app.title + ' Loaded!', null, false);
            return true;
        }
        function boot() {
            return router.activate('home');
        };

        function log(msg, data, showToast) {
            logger.info(msg, data, system.getModuleId(shell));
        };
        
        //#endregion
        
        //#region Public Properties
        
        var shell = {
            activate: activate,
            router: router
        };

        return shell;

});
